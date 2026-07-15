param(
  [string]$ArchivePath = ""
)

$ErrorActionPreference = "Stop"
$ProjectRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$Dist = Join-Path $ProjectRoot "dist"
$WorkerEntry = Join-Path $Dist "sebo_website_vue3\index.js"
$ClientEntry = Join-Path $Dist "client\index.html"
$HostingSource = Join-Path $ProjectRoot ".openai\hosting.json"
$HostingTargetDirectory = Join-Path $Dist ".openai"

if (-not (Test-Path -LiteralPath $WorkerEntry)) {
  throw "Missing dist/sebo_website_vue3/index.js"
}

if (-not (Test-Path -LiteralPath $ClientEntry)) {
  throw "Missing dist/client/index.html"
}

if (-not (Test-Path -LiteralPath $HostingSource)) {
  throw "Missing .openai/hosting.json"
}

if ([string]::IsNullOrWhiteSpace($ArchivePath)) {
  $ArchivePath = Join-Path $ProjectRoot ".openai\sebo-sites-deployment.tar"
}

$ArchivePath = [System.IO.Path]::GetFullPath($ArchivePath)
New-Item -ItemType Directory -Path $HostingTargetDirectory -Force | Out-Null
New-Item -ItemType Directory -Path ([System.IO.Path]::GetDirectoryName($ArchivePath)) -Force | Out-Null
Copy-Item -LiteralPath $HostingSource -Destination (Join-Path $HostingTargetDirectory "hosting.json") -Force

$DrizzleSource = Join-Path $ProjectRoot "drizzle"
if (Test-Path -LiteralPath $DrizzleSource) {
  $DrizzleTarget = Join-Path $HostingTargetDirectory "drizzle"
  New-Item -ItemType Directory -Path $DrizzleTarget -Force | Out-Null
  Copy-Item -Path (Join-Path $DrizzleSource "*") -Destination $DrizzleTarget -Recurse -Force
}

& tar.exe -C $ProjectRoot -czf $ArchivePath dist
if ($LASTEXITCODE -ne 0) {
  throw "Unable to create Sites archive"
}

$Entries = & tar.exe -tzf $ArchivePath
if ($LASTEXITCODE -ne 0) {
  throw "Unable to inspect Sites archive"
}

if ($Entries -notcontains "dist/sebo_website_vue3/index.js") {
  throw "Sites archive is missing the Vue 3 Worker entry"
}

if ($Entries -notcontains "dist/client/index.html") {
  throw "Sites archive is missing the Vue 3 client entry"
}

if ($Entries -notcontains "dist/.openai/hosting.json") {
  throw "Sites archive is missing dist/.openai/hosting.json"
}

[PSCustomObject]@{
  ArchivePath = $ArchivePath
  SizeMB = [math]::Round(((Get-Item -LiteralPath $ArchivePath).Length / 1MB), 2)
  FileCount = ($Entries | Where-Object { -not $_.EndsWith("/") }).Count
}

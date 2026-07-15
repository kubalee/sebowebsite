@echo off
setlocal
for /d %%D in ("%~dp001_*") do (
  start "" "%%~fD\index.html"
  exit /b 0
)
echo Offline website folder was not found.
pause

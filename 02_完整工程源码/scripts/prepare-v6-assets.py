from pathlib import Path
from PIL import Image, ImageOps

SOURCE = Path(r"C:\Users\esse-\Desktop\SEBO大样本临时草稿文件\配图原件")
TARGET = Path(__file__).resolve().parents[1] / "public" / "assets" / "v6"

ASSETS = {
    "team-office.webp": SOURCE / "2A8A5715.jpg",
    "team-outdoor.webp": SOURCE / "SKYS6689.JPG",
    "team-factory.webp": SOURCE / "P113-114.png",
    "co-design.webp": SOURCE / "P合作场景.png",
    "mine-energy.webp": SOURCE / "P07-08.png",
    "polar-autonomy.webp": SOURCE / "P09-10.png",
    "city-energy-hub.webp": SOURCE / "P11-12.png",
    "city-charging-night.webp": SOURCE / "P11-P12.png",
    "platform-architecture.webp": SOURCE / "P15-16.png",
    "mobile-service.webp": SOURCE / "P29-30.png",
    "logistics-mobile.webp": SOURCE / "P33-34.png",
    "mobile-compute.webp": SOURCE / "P43-44.png",
    "data-center.webp": SOURCE / "P47-48.png",
    "mine-truck.webp": SOURCE / "P51-52.png",
    "polar-base.webp": SOURCE / "P57-58.png",
    "extreme-robotics.webp": SOURCE / "P61-62.png",
    "smart-factory.webp": SOURCE / "P75-76.png",
    "battery-lab.webp": SOURCE / "P95-P96.png",
}

TARGET.mkdir(parents=True, exist_ok=True)
for output_name, source_path in ASSETS.items():
    if not source_path.exists():
        raise FileNotFoundError(source_path)
    with Image.open(source_path) as image:
        image = ImageOps.exif_transpose(image).convert("RGB")
        image.thumbnail((2200, 1600), Image.Resampling.LANCZOS)
        image.save(TARGET / output_name, "WEBP", quality=84, method=6)
        print(f"{output_name}\t{image.width}x{image.height}")

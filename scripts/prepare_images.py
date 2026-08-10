"""Prepare images for the Titan Foundations website.

Reads source photos from assets/img/extracted/ (extracted from the company
profile PDF/HTML) and writes optimized web images into assets/img/.
Also copies the transparent logo.
"""

from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets" / "img" / "profile-source"
OUT = ROOT / "assets" / "img"
OUT.mkdir(parents=True, exist_ok=True)


PLAN = {
    "hero.jpg": ("img_01.jpg", 1600),  # cover photo, site hero background
    "about.jpg": ("img_05.jpg", 1200),  # equipment on site, about section
    "fleet-rotary.jpg": ("img_07.jpg", 800),
    "fleet-jet.jpg": ("img_08.jpg", 800),
    "fleet-triple.jpg": ("img_09.jpg", 800),
    "fleet-double.jpg": ("img_10.jpg", 800),
    "fleet-press.jpg": ("img_11.jpg", 800),
    "fleet-drill.jpg": ("img_12.jpg", 800),
    "project-vi.jpg": ("img_14.jpg", 1200),
    "project-lafarge.jpg": ("img_15.jpg", 900),
    "project-university.jpg": ("img_16.jpg", 900),
    "project-convention.jpg": ("img_17.jpg", 900),
    "project-excavation.jpg": ("img_18.jpg", 900),
    "project-sheetpile.jpg": ("img_19.jpg", 900),
    "qa-kentledge.jpg": ("img_21.jpg", 900),
    "qa-ocell.jpg": ("img_22.jpg", 900),
    "site.jpg": ("img_25.jpg", 900),
}


def resize_to(src: Path, dst: Path, max_width: int, quality: int = 74) -> None:
    img = Image.open(src).convert("RGB")
    w, h = img.size
    if w > max_width:
        img = img.resize((max_width, int(h * max_width / w)), Image.LANCZOS)
    img.save(dst, "JPEG", quality=quality, optimize=True, progressive=True)
    print(f"{dst.name:28s} {Image.open(dst).size[0]}x{Image.open(dst).size[1]}  {dst.stat().st_size // 1024} KB")


def main() -> None:
    for out_name, (src_name, width) in PLAN.items():
        src = SRC / src_name
        if not src.exists():
            print(f"!! missing {src_name}")
            continue
        resize_to(src, OUT / out_name, width)

    logo = Image.open(SRC / "img_02.png")
    logo.save(OUT / "logo.png", "PNG", optimize=True)
    print(f"logo.png            {logo.size[0]}x{logo.size[1]}  {(OUT / 'logo.png').stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()

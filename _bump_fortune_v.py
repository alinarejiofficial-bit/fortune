import re
from pathlib import Path

p = Path("js/products.js")
t = p.read_text(encoding="utf-8")
t2 = re.sub(r"(images/fortune/[^\"']+\.png)\?v=\d+", r"\1?v=2", t)
p.write_text(t2, encoding="utf-8")
print("updated", t2.count("images/fortune/"))

from PIL import Image
for name in ["goldnut.png", "sunflower.png", "pehli-dhaar.png", "soya.png"]:
    im = Image.open(f"images/fortune/{name}")
    # count opaque vs transparent
    rgba = im.convert("RGBA")
    a = list(rgba.getdata())
    transparent = sum(1 for p in a if p[3] < 10)
    opaque = len(a) - transparent
    print(name, im.size, "opaque", opaque, "transparent", transparent)

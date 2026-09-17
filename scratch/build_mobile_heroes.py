import os
import math
import random
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance, ImageOps

os.makedirs('images/hero', exist_ok=True)
W, H = 768, 1152

def add_water_bubbles(draw, count=40, color=(255, 255, 255, 120)):
    random.seed(42)
    for _ in range(count):
        x = random.randint(20, W - 20)
        y = random.randint(20, H - 20)
        r = random.randint(4, 28)
        # draw bubble outer ring
        draw.ellipse([x - r, y - r, x + r, y + r], outline=(255, 255, 255, 160), width=2)
        # highlight spot
        hl_r = max(2, r // 3)
        draw.ellipse([x - r//2, y - r//2, x - r//2 + hl_r, y - r//2 + hl_r], fill=(255, 255, 255, 200))

# ------------------------------------------------------------------------------
# 1. BISLERI MOBILE HERO (Aqua blue, water splashes & tilted Bisleri bottle)
# ------------------------------------------------------------------------------
print("Creating Enhanced Bisleri Mobile Hero...")
# Start with cropped bg if exists, else soft aqua water gradient
if os.path.exists('images/hero/hero-bisleri-bg.jpg'):
    bisleri_base = Image.open('images/hero/hero-bisleri-bg.jpg').convert('RGBA')
    src_w, src_h = bisleri_base.size
    ratio = max(W / src_w, H / src_h)
    new_w, new_h = int(src_w * ratio), int(src_h * ratio)
    resized = bisleri_base.resize((new_w, new_h), Image.Resampling.LANCZOS)
    left = (new_w - W) // 2
    top = (new_h - H) // 2
    bisleri_canvas = resized.crop((left, top, left + W, top + H))
else:
    bisleri_canvas = Image.new('RGBA', (W, H), (180, 225, 240, 255))

# If we have water-1l.png or another bottle image, composite it
if os.path.exists('images/bisleri/water-1l.png'):
    bottle = Image.open('images/bisleri/water-1l.png').convert('RGBA')
    # Rotate slightly for dynamic angle like in user screenshot (-25 deg)
    rotated_bottle = bottle.rotate(-25, resample=Image.Resampling.BICUBIC, expand=True)
    # Scale bottle to fit mobile hero nicely
    bw, bh = rotated_bottle.size
    target_h = int(H * 0.7)
    scale = target_h / bh
    target_w = int(bw * scale)
    rotated_bottle = rotated_bottle.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # Position in center-slightly tilted
    pos_x = (W - target_w) // 2
    pos_y = (H - target_h) // 2 + 60
    bisleri_canvas.alpha_composite(rotated_bottle, (pos_x, pos_y))

# Add soft overlay effect
bisleri_final = bisleri_canvas.convert('RGB')
bisleri_final.save('images/hero/hero-bisleri-mobile.jpg', quality=95)


# ------------------------------------------------------------------------------
# 2. BAILLEY MOBILE HERO (Deep purple/violet & water bottle)
# ------------------------------------------------------------------------------
print("Creating Enhanced Bailley Mobile Hero...")
if os.path.exists('images/hero/hero-bailley-bg.jpg'):
    bailley_base = Image.open('images/hero/hero-bailley-bg.jpg').convert('RGBA')
    src_w, src_h = bailley_base.size
    ratio = max(W / src_w, H / src_h)
    new_w, new_h = int(src_w * ratio), int(src_h * ratio)
    resized = bailley_base.resize((new_w, new_h), Image.Resampling.LANCZOS)
    left = (new_w - W) // 2
    top = (new_h - H) // 2
    bailley_canvas = resized.crop((left, top, left + W, top + H))
else:
    bailley_canvas = Image.new('RGBA', (W, H), (65, 20, 95, 255))

if os.path.exists('images/bailley/bailley-one-1l.png'):
    bottle_b = Image.open('images/bailley/bailley-one-1l.png').convert('RGBA')
    bw, bh = bottle_b.size
    target_h = int(H * 0.65)
    scale = target_h / bh
    target_w = int(bw * scale)
    bottle_b = bottle_b.resize((target_w, target_h), Image.Resampling.LANCZOS)
    pos_x = (W - target_w) // 2
    pos_y = (H - target_h) // 2 + 50
    bailley_canvas.alpha_composite(bottle_b, (pos_x, pos_y))

bailley_final = bailley_canvas.convert('RGB')
bailley_final.save('images/hero/hero-bailley-mobile.jpg', quality=95)


# ------------------------------------------------------------------------------
# 3. FORTUNE MOBILE HERO (Warm golden amber & oils / staples range)
# ------------------------------------------------------------------------------
print("Creating Enhanced Fortune Mobile Hero...")
if os.path.exists('images/hero/hero-fortune-bg.jpg'):
    fortune_base = Image.open('images/hero/hero-fortune-bg.jpg').convert('RGBA')
    src_w, src_h = fortune_base.size
    ratio = max(W / src_w, H / src_h)
    new_w, new_h = int(src_w * ratio), int(src_h * ratio)
    resized = fortune_base.resize((new_w, new_h), Image.Resampling.LANCZOS)
    left = (new_w - W) // 2
    top = (new_h - H) // 2
    fortune_canvas = resized.crop((left, top, left + W, top + H))
else:
    fortune_canvas = Image.new('RGBA', (W, H), (245, 185, 60, 255))

if os.path.exists('images/oil-sunflower-exact.png'):
    oil_img = Image.open('images/oil-sunflower-exact.png').convert('RGBA')
    bw, bh = oil_img.size
    target_h = int(H * 0.55)
    scale = target_h / bh
    target_w = int(bw * scale)
    oil_img = oil_img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    pos_x = (W - target_w) // 2
    pos_y = (H - target_h) // 2 + 70
    fortune_canvas.alpha_composite(oil_img, (pos_x, pos_y))

fortune_final = fortune_canvas.convert('RGB')
fortune_final.save('images/hero/hero-fortune-mobile.jpg', quality=95)

print("Done creating enhanced mobile hero images!")

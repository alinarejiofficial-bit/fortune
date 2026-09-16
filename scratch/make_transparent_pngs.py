import os
from PIL import Image

partner_dir = r'c:\Users\alina\OneDrive\Documents\projects\kairon\images\partners'

def process_white_bg(img_path, out_path, min_light=235):
    img = Image.open(img_path).convert('RGBA')
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        r, g, b, a = item
        # If the pixel is light/white background
        if r >= min_light and g >= min_light and b >= min_light:
            new_data.append((255, 255, 255, 0))
        elif r >= 220 and g >= 220 and b >= 220 and abs(r-g) < 15 and abs(g-b) < 15:
            # Soft fade for edge anti-aliasing on off-white
            avg = (r + g + b) // 3
            alpha = max(0, min(255, int(255 * (1 - (avg - 220) / 35.0))))
            new_data.append((r, g, b, alpha))
        else:
            new_data.append((r, g, b, 255))
            
    img.putdata(new_data)
    
    # Auto-crop to bounding box of contents
    bbox = img.getbbox()
    if bbox:
        w, h = img.size
        x0 = max(0, bbox[0] - 15)
        y0 = max(0, bbox[1] - 15)
        x1 = min(w, bbox[2] + 15)
        y1 = min(h, bbox[3] + 15)
        img = img.crop((x0, y0, x1, y1))
        
    img.save(out_path, 'PNG')
    print(f'Done: {os.path.basename(out_path)} ({img.size})')

def process_hotel_kochi(img_path, out_path):
    img = Image.open(img_path).convert('RGBA')
    datas = img.getdata()
    new_data = []
    for item in datas:
        r, g, b, a = item
        # Remove yellow/orange card background
        if r > 170 and g > 110 and b < 100:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append((r, g, b, 255))
    img.putdata(new_data)
    bbox = img.getbbox()
    if bbox:
        w, h = img.size
        img = img.crop((max(0, bbox[0]-10), max(0, bbox[1]-10), min(w, bbox[2]+10), min(h, bbox[3]+10)))
    img.save(out_path, 'PNG')
    print(f'Done: {os.path.basename(out_path)} ({img.size})')

def process_thekkini(img_path, out_path):
    img = Image.open(img_path).convert('RGBA')
    datas = img.getdata()
    new_data = []
    for item in datas:
        r, g, b, a = item
        # Remove off-white outer background around dark green emblem
        if r > 220 and g > 220 and b > 200:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append((r, g, b, 255))
    img.putdata(new_data)
    bbox = img.getbbox()
    if bbox:
        w, h = img.size
        img = img.crop((max(0, bbox[0]-10), max(0, bbox[1]-10), min(w, bbox[2]+10), min(h, bbox[3]+10)))
    img.save(out_path, 'PNG')
    print(f'Done: {os.path.basename(out_path)} ({img.size})')

white_bg_logos = ['chiyang', 'baywatch', 'monsoon', 'legacy', 'classik-fort', 'alsaj', 'broad-bean', 'lakeshore', 'rossitta', 'presidency', 'abad']

for name in white_bg_logos:
    src = os.path.join(partner_dir, name + '.jpg')
    if not os.path.exists(src):
        src = os.path.join(partner_dir, name + '.png')
    out = os.path.join(partner_dir, name + '.png')
    process_white_bg(src, out)

process_hotel_kochi(os.path.join(partner_dir, 'hotel-kochi.png') if os.path.exists(os.path.join(partner_dir, 'hotel-kochi.png')) else os.path.join(partner_dir, 'hotel-kochi.jpg'), os.path.join(partner_dir, 'hotel-kochi.png'))
process_thekkini(os.path.join(partner_dir, 'thekkini.png') if os.path.exists(os.path.join(partner_dir, 'thekkini.png')) else os.path.join(partner_dir, 'thekkini.jpg'), os.path.join(partner_dir, 'thekkini.png'))

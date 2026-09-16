import os
from PIL import Image, ImageFilter

partner_dir = r'c:\Users\alina\OneDrive\Documents\projects\kairon\images\partners'

def remove_background(img_path, out_path, bg_type='white_flood', sensitivity=25):
    img = Image.open(img_path).convert('RGBA')
    w, h = img.size
    px = img.load()
    
    # Create mask image (L mode: 255 = keep, 0 = remove)
    mask = Image.new('L', (w, h), 255)
    mask_px = mask.load()
    
    if bg_type == 'white_flood':
        # Floodfill from edges for white/near-white pixels
        # Sample edge pixels to get background color reference
        edge_samples = []
        for x in range(w):
            edge_samples.append(px[x, 0][:3])
            edge_samples.append(px[x, h-1][:3])
        for y in range(h):
            edge_samples.append(px[0, y][:3])
            edge_samples.append(px[w-1, y][:3])
            
        bg_r = sum(s[0] for s in edge_samples) / len(edge_samples)
        bg_g = sum(s[1] for s in edge_samples) / len(edge_samples)
        bg_b = sum(s[2] for s in edge_samples) / len(edge_samples)
        
        # Use BFS flood fill from all 4 borders
        visited = set()
        queue = []
        
        # Add border pixels to queue if close to background color
        for x in range(w):
            for y in (0, h-1):
                c = px[x, y]
                dist = ((c[0]-bg_r)**2 + (c[1]-bg_g)**2 + (c[2]-bg_b)**2)**0.5
                if dist < sensitivity or (c[0] > 230 and c[1] > 230 and c[2] > 230):
                    queue.append((x, y))
                    visited.add((x, y))
                    
        for y in range(h):
            for x in (0, w-1):
                if (x, y) not in visited:
                    c = px[x, y]
                    dist = ((c[0]-bg_r)**2 + (c[1]-bg_g)**2 + (c[2]-bg_b)**2)**0.5
                    if dist < sensitivity or (c[0] > 230 and c[1] > 230 and c[2] > 230):
                        queue.append((x, y))
                        visited.add((x, y))
                        
        while queue:
            cx, cy = queue.pop(0)
            mask_px[cx, cy] = 0
            
            for dx, dy in ((-1,0),(1,0),(0,-1),(0,1)):
                nx, ny = cx + dx, cy + dy
                if 0 <= nx < w and 0 <= ny < h and (nx, ny) not in visited:
                    visited.add((nx, ny))
                    c = px[nx, ny]
                    # Check if pixel is light background
                    if (c[0] > 225 and c[1] > 225 and c[2] > 225) or (((c[0]-bg_r)**2 + (c[1]-bg_g)**2 + (c[2]-bg_b)**2)**0.5 < sensitivity):
                        queue.append((nx, ny))

        # Also check interior holes (like inside letter shapes O, A, B, D) if pixel is very bright white
        for x in range(w):
            for y in range(h):
                c = px[x, y]
                if c[0] > 248 and c[1] > 248 and c[2] > 248 and mask_px[x, y] == 255:
                    # check surrounding 5x5 window - if mostly background or isolated white
                    mask_px[x, y] = 0

    elif bg_type == 'yellow_bg': # for hotel-kochi
        # Remove yellow/orange background
        for x in range(w):
            for y in range(h):
                r, g, b, a = px[x, y]
                # Yellow/orange background has high R, high G, low B (R>200, G>140, B<80)
                if r > 180 and g > 120 and b < 100:
                    mask_px[x, y] = 0
                elif r > 210 and g > 150 and b < 120:
                    mask_px[x, y] = 0

    elif bg_type == 'green_card': # for thekkini if removing outer offwhite
        # Floodfill outer off-white background to transparent, keep dark green logo badge clean
        for x in range(w):
            for y in range(h):
                r, g, b, a = px[x, y]
                # Off-white background around green card: r>220, g>220, b>210
                if r > 220 and g > 220 and b > 200:
                    mask_px[x, y] = 0

    # Smooth the mask edges slightly to anti-alias
    # Apply alpha transparency to image based on mask
    new_img = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    new_px = new_img.load()
    
    for x in range(w):
        for y in range(h):
            r, g, b, a = px[x, y]
            m = mask_px[x, y]
            if m == 0:
                new_px[x, y] = (0, 0, 0, 0)
            else:
                # Calculate subtle alpha blending for smooth anti-aliasing on light edges
                if bg_type == 'white_flood':
                    # If pixel is near-white but kept, soften alpha according to brightness
                    brightness = (r + g + b) / 3.0
                    if brightness > 230:
                        alpha = int(255 * ((255 - brightness) / 25.0))
                        alpha = max(0, min(255, alpha))
                        new_px[x, y] = (r, g, b, alpha)
                    else:
                        new_px[x, y] = (r, g, b, 255)
                elif bg_type == 'yellow_bg':
                    new_px[x, y] = (r, g, b, 255)
                else:
                    new_px[x, y] = (r, g, b, 255)

    # Crop to bounding box of non-transparent pixels with padding
    bbox = new_img.getbbox()
    if bbox:
        # Add a tiny padding
        pad = 20
        x0 = max(0, bbox[0] - pad)
        y0 = max(0, bbox[1] - pad)
        x1 = min(w, bbox[2] + pad)
        y1 = min(h, bbox[3] + pad)
        new_img = new_img.crop((x0, y0, x1, y1))

    new_img.save(out_path, 'PNG')
    print(f'Saved transparent PNG: {out_path} (size: {new_img.size})')

# Run processing
logos_config = {
    'chiyang': 'white_flood',
    'thekkini': 'green_card',
    'baywatch': 'white_flood',
    'monsoon': 'white_flood',
    'hotel-kochi': 'yellow_bg',
    'legacy': 'white_flood',
    'classik-fort': 'white_flood',
    'alsaj': 'white_flood',
    'broad-bean': 'white_flood',
    'lakeshore': 'white_flood',
    'rossitta': 'white_flood',
    'presidency': 'white_flood',
    'abad': 'white_flood'
}

for name, bg_type in logos_config.items():
    src_path = os.path.join(partner_dir, name + '.jpg')
    if not os.path.exists(src_path):
        src_path = os.path.join(partner_dir, name + '.png')
    out_path = os.path.join(partner_dir, name + '.png')
    remove_background(src_path, out_path, bg_type)

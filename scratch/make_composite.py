import os
from PIL import Image

def create_composite():
    base_dir = r"c:\crown\CrownPlastic\public\images\fittings\fabrications and accessories"
    images_to_use = [
        "GRP BUCKET.png",
        "DRY MANHOLES.png",
        "UPVC END CAP.png",
        "UPVC GULLY TRAP.png",
        "UPVC HOPPER.png",
        "UPVC PRESSURE BREAKING MANHOLE.png"
    ]
    
    # 16:9 target size
    target_width = 1920
    target_height = 1080
    
    # We want a 3x2 grid. So each cell width = 1920/3 = 640. Each cell height = 1080/2 = 540.
    cell_width = 640
    cell_height = 540
    
    # Create white background canvas
    canvas = Image.new('RGB', (target_width, target_height), (255, 255, 255))
    
    for idx, img_name in enumerate(images_to_use):
        img_path = os.path.join(base_dir, img_name)
        img = Image.open(img_path).convert("RGBA")
        
        # Create a white background for transparent images
        bg = Image.new('RGBA', img.size, (255, 255, 255, 255))
        img_with_bg = Image.alpha_composite(bg, img).convert("RGB")
        
        # We need to resize img to fit within cell_width x cell_height without distortion
        # Or better yet, just center it in a white cell
        # Let's resize while maintaining aspect ratio to fit the cell
        img_with_bg.thumbnail((cell_width - 40, cell_height - 40), Image.Resampling.LANCZOS)
        
        # Create a cell canvas
        cell = Image.new('RGB', (cell_width, cell_height), (255, 255, 255))
        
        # Paste centered
        paste_x = (cell_width - img_with_bg.width) // 2
        paste_y = (cell_height - img_with_bg.height) // 2
        cell.paste(img_with_bg, (paste_x, paste_y))
        
        # Calculate grid position
        col = idx % 3
        row = idx // 3
        
        canvas.paste(cell, (col * cell_width, row * cell_height))
        
    out_dir = r"c:\crown\CrownPlastic\public\images\fabrications"
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, "fabrications-cover-composite.jpg")
    
    canvas.save(out_path, "JPEG", quality=90)
    print(f"Saved {out_path}")

if __name__ == "__main__":
    create_composite()

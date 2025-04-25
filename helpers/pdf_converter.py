import fitz
import os
from django.conf import settings


def pdf_to_svg(pdf_path):
    svg_folder = os.path.join(settings.MEDIA_ROOT, "translated_map")
    os.makedirs(svg_folder, exist_ok=True)
    svg_filename = os.path.basename(pdf_path).replace(".pdf", ".svg")
    svg_path = os.path.join(svg_folder, svg_filename)

    # Write svg
    doc = fitz.open(pdf_path)
    page = doc[0]

    svg_data = page.get_svg_image()
    with open(svg_path, "w") as f:
        f.write(svg_data)
    doc.close()

    # The URL that the svg was saved
    svg_url = os.path.join(settings.MEDIA_URL, "translated_map", svg_filename)

    return svg_data, svg_url

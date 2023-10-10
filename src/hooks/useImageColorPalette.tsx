import { useState, useEffect } from "react";
import { ColorPalette } from "../types";



const useImageColorPalette = (imageUrl: string, numColors: number): [ColorPalette | null, boolean] => {
  const [colorPalette, setColorPalette] = useState<ColorPalette | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;

    img.addEventListener("load", () => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      if (!context) {
        setIsLoading(false);
        return;
      }

      canvas.width = img.width;
      canvas.height = img.height;

      context.drawImage(img, 0, 0);

      const imageData = context.getImageData(0, 0, img.width, img.height).data;

      const colorCounts: { [key: string]: number } = {};

      for (let i = 0; i < imageData.length; i += 4) {
        const color = `rgb(${imageData[i]}, ${imageData[i + 1]}, ${imageData[i + 2]})`;

        if (colorCounts[color]) {
          colorCounts[color] += 1;
        } else {
          colorCounts[color] = 1;
        }
      }

      const colors = Object.keys(colorCounts);

      const sortedColors = colors.sort((a, b) => {
        return colorCounts[b] - colorCounts[a];
      });

      setColorPalette(sortedColors.slice(0, numColors));
      setIsLoading(false);
    });

    img.addEventListener("error", () => {
      setIsLoading(false);
    });

    return () => {
      img.removeEventListener("load", () => {});
      img.removeEventListener("error", () => {});
    };
  }, [imageUrl, numColors]);

  return [colorPalette, isLoading];
};

export default useImageColorPalette;
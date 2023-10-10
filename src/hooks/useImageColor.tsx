import { useState, useEffect } from 'react';

interface Color {
  red: number;
  green: number;
  blue: number;
}

function useImageColor(imageUrl: string){
  const [imageColor, setImageColor] = useState<Color>();

  useEffect(() => {
    const getImageColor = (url: string): Promise<Color> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error('Could not create canvas context'));
            return;
          }

          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);

          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

          let red = 0;
          let green = 0;
          let blue = 0;

          for (let i = 0; i < imageData.length; i += 4) {
            red += imageData[i];
            green += imageData[i + 1];
            blue += imageData[i + 2];
          }

          const pixelCount = imageData.length / 4;
          const color = {
            red: Math.round(red / pixelCount),
            green: Math.round(green / pixelCount),
            blue: Math.round(blue / pixelCount),
          };

          resolve(color);
        };

        img.onerror = () => {
          reject(new Error('Could not load image'));
        };

        img.src = url;
      });
    };

    getImageColor(imageUrl)
      .then((color) => {
        setImageColor(color);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [imageUrl]);

  return imageColor;
};

export default useImageColor;
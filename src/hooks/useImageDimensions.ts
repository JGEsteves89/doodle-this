import { useRef, useState } from 'react';

export function useImageDimensions() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [marginTop, setMarginTop] = useState('4vh');

  const handleImageLoad = () => {
    if (imgRef.current) {
      const height = imgRef.current.clientHeight;
      const newMargin = `${height * 0.15}px`;
      setMarginTop(newMargin);
    }
  };

  return {
    imgRef,
    marginTop,
    handleImageLoad,
  };
}

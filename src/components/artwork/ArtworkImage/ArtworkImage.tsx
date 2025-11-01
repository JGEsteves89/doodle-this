import { useImageDimensions } from '../../../hooks/useImageDimensions';
import type { ArtworkImageProps } from '../../../types/artwork';

export function ArtworkImage({ currentArtwork, allDoodles, index, setIndex }: ArtworkImageProps) {
  const { imgRef, marginTop, handleImageLoad } = useImageDimensions();

  const handleImageError = () => {
    let newIndex = index;
    let attempts = 0;
    while (
      (!allDoodles[newIndex]?.url || allDoodles[newIndex].url.trim() === '') &&
      attempts < 10
    ) {
      newIndex = Math.floor(Math.random() * allDoodles.length);
      attempts++;
    }
    if (newIndex !== index) {
      setIndex(newIndex);
    }
  };

  return (
    <img
      src={currentArtwork.url}
      alt={`Creative doodle artwork by ${currentArtwork.artist} - ${currentArtwork.licenseName} licensed`}
      title={`Artwork by ${currentArtwork.artist}`}
      style={{ width: '100vw', marginBlockStart: marginTop }}
      loading='eager'
      itemProp='image'
      ref={imgRef}
      onLoad={handleImageLoad}
      onError={handleImageError}
    />
  );
}

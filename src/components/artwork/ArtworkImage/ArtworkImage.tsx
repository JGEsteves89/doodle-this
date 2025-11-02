import { useImageDimensions } from '../../../hooks/useImageDimensions';
import type { ArtworkImageProps } from '../../../types/artwork';
import { getRandomArtworkIndex } from '../../../utils/artworkUtils';


export function ArtworkImage({ currentArtwork, allDoodles, setIndex }: ArtworkImageProps) {
  const { imgRef, handleImageLoad } = useImageDimensions();

  return (
    <img className='w-full h-full' style={{ minHeight: 0 }}
      src={currentArtwork.url}
      alt={`Creative doodle artwork by ${currentArtwork.artist} - ${currentArtwork.licenseName} licensed`}
      title={`Artwork by ${currentArtwork.artist}`}
      loading='eager'
      itemProp='image'
      ref={imgRef}
      onLoad={handleImageLoad}
      onError={() => setIndex(getRandomArtworkIndex(allDoodles.length))}
    />
  );
}

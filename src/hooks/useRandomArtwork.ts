import { useMemo, useState } from 'react';

import type { Artist } from '../types/artwork';
import { findValidArtworkIndex, getRandomArtworkIndex, processArtworkData } from '../utils/artworkUtils';

export function useRandomArtwork(artists: Artist[]) {
  const allDoodles = useMemo(() => processArtworkData(artists), [artists]);

  const [index, setIndex] = useState(() => getRandomArtworkIndex(allDoodles.length));

  const currentArtwork = allDoodles[index];

  const handleImageError = () => {
    const newIndex = findValidArtworkIndex(allDoodles, index);
    if (newIndex !== index) {
      setIndex(newIndex);
    }
  };

  return {
    allDoodles,
    index,
    setIndex,
    currentArtwork,
    handleImageError,
  };
}

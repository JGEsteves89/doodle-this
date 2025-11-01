import type { Artist, ProcessedArtwork, StructuredData } from '../types/artwork';

export function processArtworkData(artists: Artist[]): ProcessedArtwork[] {
  return artists.flatMap((artist) =>
    artist.doodles.flatMap((repo) =>
      repo.names.map((name) => ({
        url: repo.location + name,
        link: artist.link,
        artist: artist.name,
        licenseLink: artist.licenseLink,
        licenseName: artist.licenseName,
      })),
    ),
  );
}

export function getRandomArtworkIndex(artworksLength: number): number {
  return Math.floor(Math.random() * artworksLength);
}

export function findValidArtworkIndex(
  allDoodles: ProcessedArtwork[],
  startIndex: number,
  maxAttempts: number = 10,
): number {
  let newIndex = startIndex;
  let attempts = 0;

  while (attempts < maxAttempts) {
    newIndex = Math.floor(Math.random() * allDoodles.length);
    const artwork = allDoodles[newIndex];

    if (artwork?.url && artwork.url.trim() !== '') {
      return newIndex;
    }
    attempts++;
  }

  return newIndex; // Return last attempt if no valid one found
}

export function generateStructuredData(artwork: ProcessedArtwork): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    'name': `Doodle by ${artwork.artist}`,
    'creator': {
      '@type': 'Person',
      'name': artwork.artist,
      'url': artwork.link,
    },
    'license': artwork.licenseLink,
    'url': artwork.url,
    'thumbnailUrl': artwork.url,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://JGEsteves89.github.io/doodle-this/',
    },
  };
}

export interface Artist {
  name: string;
  link: string;
  licenseLink: string;
  licenseName: string;
  doodles: DoodleRepo[];
}

export interface DoodleRepo {
  location: string;
  names: string[];
}

export interface ProcessedArtwork {
  url: string;
  link: string;
  artist: string;
  licenseLink: string;
  licenseName: string;
}

export interface StructuredData {
  '@context': string;
  '@type': string;
  name: string;
  creator: {
    '@type': string;
    name: string;
    url: string;
  };
  license: string;
  url: string;
  thumbnailUrl: string;
  mainEntityOfPage: {
    '@type': string;
    '@id': string;
  };
}

export interface ArtworkImageProps {
  currentArtwork: ProcessedArtwork;
  allDoodles: ProcessedArtwork[];
  index: number;
  setIndex: (index: number) => void;
}

export interface ArtworkAttributionProps {
  artwork: ProcessedArtwork;
}

export interface ArtworkViewerProps {
  artwork: ProcessedArtwork;
  allDoodles: ProcessedArtwork[];
  index: number;
  setIndex: (index: number) => void;
}

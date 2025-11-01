import type { ArtworkAttributionProps } from '../../../types/artwork';

export function ArtworkAttribution({ artwork }: ArtworkAttributionProps) {
  return (
    <div className='attribution-info' itemScope itemType='https://schema.org/Person'>
      <span>Image credit: </span>
      <a
        href={artwork.link}
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-600 hover:text-blue-500'
        itemProp='url'
        aria-label={`Visit ${artwork.artist}'s profile`}
      >
        <span itemProp='name'>{artwork.artist}</span>
      </a>
      <span> | License: </span>
      <a
        href={artwork.licenseLink}
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-600 hover:text-blue-500'
        aria-label={`View ${artwork.licenseName} license details`}
      >
        {artwork.licenseName}
      </a>
    </div>
  );
}

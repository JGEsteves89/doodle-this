import type { ArtworkAttributionProps } from '../../../types/artwork';

export function ArtworkAttribution({ artwork }: ArtworkAttributionProps) {
  return (
    <div className='attribution-info flex flex-col rounded-2xl px-2 py-2 flex-shrink-0 items-center' itemScope itemType='https://schema.org/Person'>
      <h4>Artist:</h4>
      <a
        href={artwork.link}
        target='_blank'
        rel='noopener noreferrer'
        className='text-sm font-semibold text-blue-600 hover:text-blue-500'
        itemProp='url'
        aria-label={`Visit ${artwork.artist}'s profile`}
      >
        <h3 itemProp='name'>{artwork.artist}</h3>
      </a>
      <a
        href={artwork.licenseLink}
        target='_blank'
        rel='noopener noreferrer'
        className='text-xs text-gray-600 hover:text-gray-500'
        aria-label={`View ${artwork.licenseName} license details`}
      >
        {artwork.licenseName}
      </a>
    </div>
  );
}

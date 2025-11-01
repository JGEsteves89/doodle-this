import { useRef } from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

import type { ArtworkViewerProps } from '../../../types/artwork';
import { generateStructuredData } from '../../../utils/artworkUtils';
import { ArtworkImage } from '../ArtworkImage';

export function ArtworkViewer({ artwork, allDoodles, index, setIndex }: ArtworkViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const artworkStructuredData = generateStructuredData(artwork);

  return (
    <main
      ref={containerRef}
      id='main-content'
      className='flex-1 h-screen'
      role='main'
      aria-label='Art gallery viewer'
    >
      <article className='w-full h-full' itemScope itemType='https://schema.org/CreativeWork'>
        <h2 className='sr-only'>Current Artwork</h2>

        {/* Structured Data Script */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(artworkStructuredData) }}
        />

        <TransformWrapper limitToBounds={false}>
          <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }}>
            <ArtworkImage
              currentArtwork={artwork}
              allDoodles={allDoodles}
              index={index}
              setIndex={setIndex}
            />
          </TransformComponent>
        </TransformWrapper>
      </article>
    </main>
  );
}

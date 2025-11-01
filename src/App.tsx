import './index.css';

import { ArtworkViewer } from './components/artwork/ArtworkViewer';
import { Footer } from './components/common/Footer';
import { Header } from './components/common/Header';
import doodles from './doodles.json';
import { useRandomArtwork } from './hooks/useRandomArtwork';
import type { Artist } from './types/artwork';

const artists = doodles as Artist[];

export default function App() {
  const { allDoodles, index, setIndex, currentArtwork } = useRandomArtwork(artists);

  return (
    <div className='flex flex-col h-screen'>
      {/* Skip Navigation Link */}
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50'
      >
        Skip to main content
      </a>

      <Header />
      <ArtworkViewer
        artwork={currentArtwork}
        allDoodles={allDoodles}
        index={index}
        setIndex={setIndex}
      />
      <Footer currentArtwork={currentArtwork} />
    </div>
  );
}

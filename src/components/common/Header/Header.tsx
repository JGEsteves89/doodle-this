import './Header.css';

import logo from '../../../assets/logo.svg';

export function Header() {
  return (
    <header className='header-container drawing-frame' role='banner'>
      <div className='header-content'>
        {/* Left section - Logo and title */}
        <div className='brand-section'>
          <img
            src={logo}
            alt='Doodle This Logo'
            className='logo'
          />
          <div className='brand-text'>
            <h1 className='app-title'>DOODLE THIS</h1>
            <p className='tagline'>Doodle ideas for creative drawing time</p>
          </div>
        </div>

        {/* Center section - Description (hidden on mobile) */}
        <div className='description-section'>
          <p className='description'>
            Perfect for drawing sessions with kids - use these fun doodles as reference or inspiration
          </p>
        </div>
      </div>
    </header>
  );
}

import { FaGithub } from 'react-icons/fa';

import logo from '../../../assets/logo.svg';

export function Header() {
  return (
    <header className='flex items-center justify-between px-6 py-4 text-black custom-header' role='banner'>
      <div className='flex items-center'>
        <img src={logo} alt='Doodle This - Random Art Gallery Logo' className='h-10' />
        <h1 className='sr-only'>Doodle This - Random Art Gallery</h1>
      </div>
      <nav role='navigation' aria-label='Main navigation'>
        <div className='flex space-x-4'>
          <a
            href='https://github.com/JGEsteves89/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Visit JGEsteves GitHub profile'
          >
            <FaGithub size={24} color='black' />
          </a>
        </div>
      </nav>
    </header>
  );
}

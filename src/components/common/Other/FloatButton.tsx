import React from 'react';

interface FloatButtonProps {
  img: string;
  newIndex: number;
  setIndex: (index: number) => void;
  onClick: () => void;
}

export const FloatButton: React.FC<FloatButtonProps> = ({ img, onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className='
        fixed bottom-8 right-0
        bg-transparent hover:scale-110
        text-white p-10 rounded-full
        transition-all duration-200 z-40
        cursor-pointer
      '
      aria-label='Next'
    >
      <img
        src={img}
        alt='Logo'
        className='w-16 h-16 object-contain'
      />
    </button>
  );
};

import React from 'react';

interface MyButtonProps {
  img: string;
  onClick: () => void;
  className?: string;
  imgSize?: number;
}

export const MyButton: React.FC<MyButtonProps> = ({ img, onClick, className = '', imgSize = 12 }) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-transparent hover:scale-110
        text-white p-0 m-0 rounded-full
        transition-all duration-200
        cursor-pointer
        w-full h-full
        flex items-center justify-center
        ${className}
      `}
      aria-label='Button'
    >
      <img
        src={img}
        alt='Button logo'
        className={`w-${imgSize} h-${imgSize} object-contain`}
      />
    </button>
  );
};

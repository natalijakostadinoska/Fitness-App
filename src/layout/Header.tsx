import { ReactNode } from 'react';

type HeaderProps = {
  className?: string;
  textClassName?: string;
  title: string;
  back?: ReactNode;
  logout?: ReactNode;
};

export const Header = ({
  title,
  back,
  logout,
  className,
  textClassName,
}: HeaderProps) => {
  return (
    <>
      <header
        className={`flex flex-row w-full items-center justify-between px-4 py-2 ${className}`}
      >
        <div className={`flex items-center text-lg font-bold ${textClassName}`}>
          <div>{back}</div>
          <span>{title}</span>
        </div>
        <div>{logout}</div>
      </header>
    </>
  );
};

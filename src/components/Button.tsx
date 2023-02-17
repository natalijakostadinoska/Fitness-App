import { FunctionComponent, PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RouteNames } from '../Routes';

export enum ButtonType {
  Link = 'link',
  Button = 'button',
}

type ButtonProps = {
  className?: string;
  onClick?: () => unknown;
  link?: RouteNames;
  type?: ButtonType;
  disabled?: boolean;
  special?: boolean;
};

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  onClick,
  link,
  type,
  disabled,
  special,
}) => {
  const buttonClassNames =
    'bg-black text-white px-8 py-1 font-bold flex justify-center items-center text-sm border border-black rounded-3xl w-full drop-shadow-md';
  const linkClassNames =
    'bg-transparent text-blue-400 underline w-fit flex justify-center items-center w-full font-bold';

  const chooseClassByType = (type: ButtonType | undefined) => {
    switch (type) {
      case ButtonType.Button:
        return buttonClassNames;
      case ButtonType.Link:
        return linkClassNames;
      default:
        return buttonClassNames;
    }
  };

  const classnames = chooseClassByType(type);
  const { pathname } = useLocation();

  if (link) {
    const specialLinkCleanUp = (link: RouteNames) => {
      if (!special) {
        return link.toString();
      }

      if (!link.startsWith('/')) {
        return `${pathname.slice(0, pathname.lastIndexOf('/'))}/${link}`;
      }

      return link.toString();
    };

    return (
      <Link
        style={{ pointerEvents: disabled ? 'none' : 'auto' }}
        to={specialLinkCleanUp(link)}
        className={`${classnames} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${className} ${classnames}`}>
      {children}
    </button>
  );
};

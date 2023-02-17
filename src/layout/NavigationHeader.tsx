import { useLocation } from 'react-router-dom';
import { Button, ButtonType } from '../components/Button';
import { RouteNames } from '../Routes';

type NavigationHeaderProps = {
  headers: {
    text: string;
    link: RouteNames;
  }[];
};

export const NavigationHeader = ({ headers }: NavigationHeaderProps) => {
    const {pathname} = useLocation();

    return (
    <>
      <div className='flex gap-16 px-7'>
        {headers.map(({ link, text }) => (
          <Button className={`text-lg ${pathname.endsWith(link) ? 'text-black border-b-2 border-gray-300' :  'text-gray-400 border-b-2 border-transparent'}  no-underline inline w-10`} type={ButtonType.Link} link={link}>
            {text}
          </Button>
        ))}
      </div>
    </>
  );
};

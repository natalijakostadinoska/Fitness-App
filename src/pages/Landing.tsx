import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { useAuth } from '../context/authContext';
import { START_PAGE } from '../Routes';

export const Landing: FunctionComponent = () => {
  const {
    state: { present },
  } = useAuth();

  const navigate = useNavigate();

  if (present) {
    navigate(START_PAGE);
  }

  return (
    <>
      <main  className="h-full md:justify-center md:items-center flex flex-col justify-end bg-blue-girl bg-cover">
        <div className="p-4 flex flex-col gap-2">
          <div className="text-5xl text-black md:text-8xl md:font-bold md:text-white">
            Stay Strong
          </div>
          <div className="text-xl text-white md:text-gray-300 md:font-bold w-72">
            Everything you need to reach your fitness goals.
          </div>
          <div>
            <Button className="w-fit md:text-lg" link="/register">
              Join us
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

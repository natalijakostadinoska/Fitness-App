import { FunctionComponent, useState } from 'react';
import { Button, ButtonType } from '../components/Button';
import { Input } from '../components/Input';
import { useAuth } from '../context/authContext';

export const Login: FunctionComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();

  const handleLoginClick = () => {
    login({
      password: password,
      username: username,
    });
  };

  return (
    <>
      <main className="h-full w-full flex flex-row items-center justify-center bg-white bg-cover">
        <div className="p-4 flex flex-col gap-2 max-w-lg">
          <div className="text-5xl flex justify-center items-center px-4 pb-16">
            <span className="w-fit">Log in to your account</span>
          </div>
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-6">
              <Input
                value={username}
                onChange={setUsername}
                placeholder="email"
                icon="envelope"
              />
              <Input
                value={password}
                onChange={setPassword}
                placeholder="password"
                icon="key"
              />
            </div>
            <div className="flex flex-col items-center gap-6">
              <Button
                onClick={handleLoginClick}
                className="py-3 drop-shadow-lg"
              >
                Log in
              </Button>
              <Button link="/register" type={ButtonType.Link}>
                Back to sign up?
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

import { createContext, PropsWithChildren, useContext, useState } from 'react';

type BackButtonState = {
  show: boolean;
  toggle: (value?: boolean) => unknown;
};

const BackButtonContext = createContext<BackButtonState>({
  show: false,
  toggle: () => Error('Toggle method not implemented'),
});

export const BackButtonProvider = ({ children }: PropsWithChildren<{}>) => {
  const [show, setShow] = useState(false);

  const toggle = (value?: boolean) => {
    setShow(value ?? !show);
  };

  return (
    <BackButtonContext.Provider value={{ show, toggle }}>
      {children}
    </BackButtonContext.Provider>
  );
};

export const useBack = () => {
  const context = useContext(BackButtonContext);

  if (!context) {
    throw new Error('useBack cannot be used outsize an AuthProvide');
  }

  return context;
};

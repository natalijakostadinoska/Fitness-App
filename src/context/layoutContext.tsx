import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type LayoutState = {
  color: string;
  changeColor: Dispatch<SetStateAction<string>>;
};

export const InitialLayoutState = {
  color: 'bg-white',
  changeColor: () => Error('not implemented'),
} as const;

const LayoutStateContext = createContext<LayoutState>(InitialLayoutState);

export const LayoutStateProvider = ({ children }: PropsWithChildren<{}>) => {
  const [color, changeColor] = useState<string>(InitialLayoutState.color);

  return (
    <LayoutStateContext.Provider value={{ color, changeColor }}>
      {children}
    </LayoutStateContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutStateContext);

  if (!context) {
    throw new Error('useLayout cannot be used outsize an AuthProvide');
  }

  return context;
};

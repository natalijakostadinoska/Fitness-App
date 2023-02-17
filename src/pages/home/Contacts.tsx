import { useEffect } from 'react';
import { useBack } from '../../context/backButtonContext';
import { InitialLayoutState, useLayout } from '../../context/layoutContext';
import { Header } from '../../layout/Header';

export const Contacts = () => {
  const { changeColor, color } = useLayout();
  const { toggle } = useBack();
  useEffect(() => {
    changeColor('bg-neutral-200');
    toggle(true);
    return () => {
      changeColor(InitialLayoutState.color);
      toggle(false);
    };
  }, []);

  return (
    <>
      <div className="h-full flex flex-col">
        <Header title="Contacts" />
        <div className="h-full flex flex-col justify-center items-center">
          <div className="uppercase text-lg">No contacts found</div>
          <div className="text-xs font-bold text-gray-500">
            We couldn't match your contacts
          </div>
        </div>
      </div>
    </>
  );
};

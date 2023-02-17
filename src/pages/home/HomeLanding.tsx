import { Button } from '../../components/Button';

export const HomeLanding = () => {
  return (
    <>
      <div className="h-full relative flex flex-col justify-center items-center">
        <div className="absolute flex w-full flex-col justify-between h-full">
          <img src="/images/network-top.png" alt="network top" />
          <img src="/images/network-bottom.png" alt="network top" />
        </div>
        <div className="px-10 flex flex-col gap-4">
          <span className="uppercase text-6xl flex justify-center items-center ">
            Connect with your friends
          </span>
          <div className="w-full">
            <Button link="contacts" special={true} className="w-fit">
              Add
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

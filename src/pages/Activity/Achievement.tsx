export const Achievement = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col overflow-hidden">
        <div className="font-extrabold px-4 py-2">Latest Achievements</div>
        <div className="h-2/5 md:h-2/6 border-b-2 border-gray-300 shadow-md flex flex-row items-center">
          <div className="max-h-full py-6 pt-2 h-full items-start box-border select-none overflow-auto flex flex-row gap-11 px-6">
            {achievements.map(({ image, text }) => (
              <div className="h-full shrink-0 w-40 items-center gap-8">
                <div className="h-full w-full flex justify-center items-center  bg-cyan-300 p-2 border border-cyan-300 rounded-xl shadow-lg drop-shadow-md">
                  <div>
                    <img src={image} alt={text} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-3/5 md:h-4/6 flex-grow">
          <div className="font-extrabold px-4 py-2">Trophies</div>
          <div className="max-h-full py-4 pb-16 justify-center md:justify-start items-start flex-wrap box-border select-none overflow-auto flex flex-row gap-8">
            {trophies.map(({ image, text, unlocked }) => (
              <div className="py-4 p-2 border-0 rounded-2xl">
                <img
                  className={!unlocked ? 'opacity-60' : ''}
                  src={image}
                  alt={text}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const achievements = [
  {
    image: '/images/medal.png',
    text: 'some medal',
  },
  {
    image: '/images/medal.png',
    text: 'some medal',
  },
  {
    image: '/images/medal.png',
    text: 'some medal',
  },
  {
    image: '/images/medal.png',
    text: 'some medal',
  },
  {
    image: '/images/medal.png',
    text: 'some medal',
  },
];

const trophies = [
  {
    image: '/images/trophy.png',
    text: 'A trophy',
    unlocked: true,
  },
  {
    image: '/images/trophy.png',
    text: 'A trophy',
    unlocked: false,
  },
  {
    image: '/images/trophy.png',
    text: 'A trophy',
    unlocked: false,
  },
  {
    image: '/images/trophy.png',
    text: 'A trophy',
    unlocked: false,
  },
  {
    image: '/images/trophy.png',
    text: 'A trophy',
    unlocked: false,
  },
  {
    image: '/images/trophy.png',
    text: 'A trophy',
    unlocked: false,
  },
  {
    image: '/images/trophy.png',
    text: 'A trophy',
    unlocked: false,
  },
  {
    image: '/images/trophy.png',
    text: 'A trophy',
    unlocked: false,
  },
  {
    image: '/images/trophy.png',
    text: 'A trophy',
    unlocked: false,
  },
  {
    image: '/images/trophy.png',
    text: 'A trophy',
    unlocked: false,
  },
  {
    image: '/images/trophy.png',
    text: 'A trophy',
    unlocked: false,
  },
  {
    image: '/images/trophy.png',
    text: 'A trophy',
    unlocked: false,
  },
  {
    image: '/images/trophy.png',
    text: 'A trophy',
    unlocked: false,
  },
];

export const History = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col md:flex-row overflow-hidden">
        <div className="h-1/2 md:h-full md:w-1/2 md:max-w-md border-b-2 border-gray-300 shadow-md flex flex-col justify-center items-center">
          <div className="text-8xl font-semibold">{activities.length}</div>
          <div className="text-xl font-semibold">Total Activities</div>
        </div>
        <div className="h-1/2 md:h-full flex-grow md:w-1/2">
          <div className="font-extrabold px-4 py-4 pb-4">June 2020</div>
          <div className="max-h-full pb-16 items-start md:flex-wrap box-border select-none overflow-auto flex flex-col md:flex-row gap-8">
            {activities.map((activity) => (
              <div className="flex md:w-64 items-center gap-8 px-8">
                <div className="bg-cyan-300 md:flex-shrink-0 p-2 border border-cyan-300 rounded-xl shadow-lg drop-shadow-md">
                  <img src={activity.image} alt={activity.text} />
                </div>
                <div className="flex items-center text-lg font-bold ">
                  {activity.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const activities = [
  {
    image: '/images/running.png',
    text: 'Monday Run',
  },
  {
    image: '/images/weight-lifting.png',
    text: 'Tuesday Gym',
  },
  {
    image: '/images/swimming-costume.png',
    text: 'Wednesday Swim',
  },
  {
    image: '/images/running.png',
    text: 'Monday Run',
  },
  {
    image: '/images/weight-lifting.png',
    text: 'Tuesday Gym',
  },
  {
    image: '/images/swimming-costume.png',
    text: 'Wednesday Swim',
  },
  {
    image: '/images/running.png',
    text: 'Monday Run',
  },
];

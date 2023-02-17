import { Header } from '../layout/Header';


export const Workouts = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col">
        <Header title="New Workouts" />
        <div className="hidden md:flex justify-center items-center gap-10 flex-wrap px-4 py-2 ">
          {[...workoutsTop, ...workoutsBottom].map((workout) => (
              <a
                href={workout.link}
                className="border overflow-hidden shadow-md drop-shadow-md rounded-2xl max-w-md flex-shrink-0"
              >
                <img src={workout.image} className="h-full w-full" />
              </a>
          ))}
        </div>

        <div className="flex h-1/2 w-full md:hidden overflow-auto py-4">
          {workoutsTop.map((workout) => (
            <a
              href={workout.link}
              className="border overflow-hidden shadow-md drop-shadow-md rounded-2xl mx-2 max-w-sm flex-shrink-0"
            >
              <img src={workout.image} className="h-full w-full" />
            </a>
          ))}
        </div>
        <div className="flex h-1/2 w-full md:hidden overflow-auto py-4">
          {workoutsBottom.map((workout) => (
            <a
              href={workout.link}
              className="border overflow-hidden shadow-md drop-shadow-md rounded-2xl mx-2 max-w-sm flex-shrink-0"
            >
              <img src={workout.image} className="h-full w-full" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};


const workoutsTop = [
  {
    link: 'https://www.youtube.com/watch?v=9rQ5wxssQss&ab_channel=ChloeTing',
    image: '/images/workout1.webp',
  },
  {
    link: 'https://www.youtube.com/watch?v=7L-Td_p0bXE&ab_channel=ChloeTing',
    image: '/images/workout2.webp',
  },
];

const workoutsBottom = [
  {
    link: 'https://www.youtube.com/watch?v=2pLT-olgUJs&ab_channel=ChloeTing',
    image: '/images/workout3.webp',
  },
  {
    link: 'https://www.youtube.com/watch?v=EIKHnykTI5Y&ab_channel=ChloeTing',
    image: '/images/workout4.jpg',
  },
  {
    link: 'https://www.youtube.com/watch?v=2pLT-olgUJs&ab_channel=ChloeTing',
    image: '/images/workout3.webp',
  },
  {
    link: 'https://www.youtube.com/watch?v=EIKHnykTI5Y&ab_channel=ChloeTing',
    image: '/images/workout4.jpg',
  },
  {
    link: 'https://www.youtube.com/watch?v=2pLT-olgUJs&ab_channel=ChloeTing',
    image: '/images/workout3.webp',
  },
  {
    link: 'https://www.youtube.com/watch?v=EIKHnykTI5Y&ab_channel=ChloeTing',
    image: '/images/workout4.jpg',
  },
  {
    link: 'https://www.youtube.com/watch?v=2pLT-olgUJs&ab_channel=ChloeTing',
    image: '/images/workout3.webp',
  },
  {
    link: 'https://www.youtube.com/watch?v=EIKHnykTI5Y&ab_channel=ChloeTing',
    image: '/images/workout4.jpg',
  },
  {
    link: 'https://www.youtube.com/watch?v=2pLT-olgUJs&ab_channel=ChloeTing',
    image: '/images/workout3.webp',
  },
  {
    link: 'https://www.youtube.com/watch?v=EIKHnykTI5Y&ab_channel=ChloeTing',
    image: '/images/workout4.jpg',
  },
  {
    link: 'https://www.youtube.com/watch?v=2pLT-olgUJs&ab_channel=ChloeTing',
    image: '/images/workout3.webp',
  },
  {
    link: 'https://www.youtube.com/watch?v=EIKHnykTI5Y&ab_channel=ChloeTing',
    image: '/images/workout4.jpg',
  },
    {
      link: 'https://www.youtube.com/watch?v=2pLT-olgUJs&ab_channel=ChloeTing',
      image: '/images/workout3.webp',
    },
    {
      link: 'https://www.youtube.com/watch?v=EIKHnykTI5Y&ab_channel=ChloeTing',
      image: '/images/workout4.jpg',
    },
];

export const Programmes = () => {
  return (
    <>
      <div className="flex flex-col h-full w-full">
        <div className="max-h-full min-h-full md:min-h-0 flex md:flex-wrap md:flex-row md:justify-center md:items-center flex-col gap-8 px-6 py-4 overflow-auto">
          {programmes.map(({ image, info, text, link }) => (
            <a
              href={link}
              className="border-0 rounded-xl shadow-lg box-border p-4"
            >
              <div>
                <img
                  className="w-full h-full rounded-t-lg"
                  src={image}
                  alt={text}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="text-xl font-bold">{text}</div>
                <div className="text-sm font-bold text-gray-400">{info}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

const programmes = [
  {
    text: '2022 Summer Challange',
    info: '4 weeks, bodyweight only',
    image: '/images/programme1.png',
    link: 'https://chloeting.com/program/2021/2-weeks-shred-challenge',
  },
  {
    text: '2022 Abs Challange',
    info: '3 weeks, dumbbells ',
    image: '/images/programme2.png',
    link: 'https://chloeting.com/program/2019/two-weeks-shred-challenge',
  },
];

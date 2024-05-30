'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const content = [
  {
    name: 'Sandeep',
    info: 'Very easy to book,maintain history. Hassle free from older versions of booking appointment via telephone.. Thanks Practo for making it simple.',
  },
  {
    name: 'Sandeep',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim quidem ipsum quos corrupti totam ullam nam, amet, quam dolores saepe assumenda adipisci tenetur, sunt minima et porro unde excepturi?',
  },
  {
    name: 'Sandeep',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim quidem ipsum quos corrupti totam ullam nam, amet, quam dolores saepe assumenda adipisci tenetur, sunt minima et porro unde excepturi?',
  },
];

const Usersays = ({title=true,usename=true}) => {
  return (
    <section className="flex justify-center py-12 mt-5">
      <div className="lg:mx-auto max-w-5xl mx-[1.5rem] w-full">
      {title && <h1 className="text-center text-3xl font-bold mb-8">  What our users have to say</h1>}
        <div className="relative flex justify-center">
          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={30}
            navigation
            className="w-full"
          >
            {content.map((p, index) => {
              return (
                <SwiperSlide className="flex justify-center" key={index}>
                  <div className="bg-white shadow-sm rounded-lg p-9 max-w-sm w-full mt-3">
                  {usename && <h1 className="font-bold text-[1.6rem] mb-4"> <AccountCircleIcon/>{p.name}</h1>}  
                    <p>{p.info}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Usersays;

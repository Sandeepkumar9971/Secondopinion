'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
// import { Navigation } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode, Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

const ClinicConsultation = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const content = [
    {
      id: 1,
      profession: "dentist",
      img: '/sp-dentist@2x.jpg',
      des: "Teeting troubles? Schedule a dental checkup"
    },
    {
      id: 2,
      profession: "dentist",
      img: '/sp-gynecologist@2x.jpg',
      des: "Teeting troubles? Schedule a dental checkup"
    },
    {
      id: 3,
      profession: "dentist",
      img: '/sp-dietitian@2x.jpg',
      des: "Teeting troubles? Schedule a dental checkup"
    },
    {
      id: 4,
      profession: "dentist",
      img: '/sp-physiotherapist@2x.jpg',
      des: "Teeting troubles? Schedule a dental checkup"
    },
    {
      id: 5,
      profession: "dentist",
      img: '/sp-general-surgeon@2x.jpg',
      des: "Teeting troubles? Schedule a dental checkup"
    },
    {
      id: 6,
      profession: "dentist",
      img: '/sp-orthopedist@2x.jpg',
      des: "Teeting troubles? Schedule a dental checkup"
    },
    {
      id: 7,
      profession: "dentist",
      img: '/sp-general-doctor@2x.jpg',
      des: "Teeting troubles? Schedule a dental checkup"
    },
    {
      id: 8,
      profession: "dentist",
      img: '/sp-pediatrician@2x.jpg',
      des: "Teeting troubles? Schedule a dental checkup"
    },
    {
      id: 9,
      profession: "dentist",
      img: '/sp-gastroenterologist@2x.jpg',
      des: "Teeting troubles? Schedule a dental checkup"
    },
  ];
  const router = useRouter();

  return (
    <div className='p-5 h-auto'>
      <div className="">
        <div className="flex items-center justify-between">
          <div>
            <h2 className='text-3xl '>Book an appointment for an in-clinic consultation</h2>
            <h2>Find experienced doctors across all specialties</h2>
          </div>
        </div>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={30}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="w-full"
          spaceBetween={10}
          slidesPerView={4}
        >
          {content?.map((item, index) => (
            <SwiperSlide key={index} onClick={() => { router.push(`/`) }}>
              <div className="min-h-screen bg-gray-100">
                <div className="bg-white mx-auto shadow-lg rounded-lg hover:shadow-xl transition duration-200 max-w-sm">
                  <img className="rounded-t-lg" src={item.img} alt="" />
                  <div className="py-4 px-1">
                    <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-xl tracking-tight text-blue-300 text-left">{item.profession}</h1>
                    <p className="hover:cursor-pointer text-gray-600 leading-4 text-left">{item.des} </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div ref={prevRef} className="swiper-button-prev-custom">
          <svg className="w-8 h-8" fill="white" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" fill="black"/>
            <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div ref={nextRef} className="swiper-button-next-custom">
          <svg className="w-8 h-8" fill="white" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" fill="black"/>
            <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ClinicConsultation;

// Add CSS for custom navigation buttons
<style jsx>{`
  .swiper-button-prev-custom,
  .swiper-button-next-custom {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    border-radius: 50%;
    z-index: 10;
    cursor: pointer;
  }
  .swiper-button-prev-custom {
    left: -60px; /* Adjust as needed */
  }
  .swiper-button-next-custom {
    right: -60px; /* Adjust as needed */
  }
`}</style>

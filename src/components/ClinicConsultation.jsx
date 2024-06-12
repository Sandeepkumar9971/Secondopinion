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
import { Button } from '@material-tailwind/react';
import { Pagination } from 'swiper/modules';

const ClinicConsultation = ({sellbtn=false}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const content = [
    {
      id: 1,
      profession: "dentist",
      img: '/sp-dentist@2x.jpg',
      des: "Teeting troubles? Schedule a dental checkup",
      link:'/Delhi/Dentist'
    },
    {
      id: 2,
      profession: "Gynecologist/Obstetrician",
      img: '/sp-gynecologist@2x.jpg',
      des: "Explore for women’s health, pregnancy and infertility treatments",
      link:'/Delhi/Gynecologist-Obstetrician'
    },
    {
      id: 3,
      profession: "Dietitian/Nutrition",
      img: '/sp-dietitian@2x.jpg',
      des: "Get guidance on eating right, weight management and sports nutrition",
      link:'/Delhi/Dietitian-Nutrition'
    },
    {
      id: 4,
      profession: "Physiotherapist",
      img: '/sp-physiotherapist@2x.jpg',
      des: "Pulled a muscle? Get it treated by a trained physiotherapist",
      link:'/Delhi/Physiotherapist'
    },
    {
      id: 5,
      profession: "General surgeon",
      img: '/sp-general-surgeon@2x.jpg',
      des: "Need to get operated? Find the right surgeon",
      link:'/Delhi/Generalsurgeon'
    },
    {
      id: 6,
      profession: "Orthopedist",
      img: '/sp-orthopedist@2x.jpg',
      des: "For Bone and Joints issues, spinal injuries and more",
      link:'/Delhi/Orthopedist'
    },
    {
      id: 7,
      profession: "General physician",
      img: '/sp-general-doctor@2x.jpg',
      des: "Find the right family doctor in your neighborhood",
      link:'/Delhi/Generalphysician'
    },
    {
      id: 8,
      profession: "Pediatrician",
      img: '/sp-pediatrician@2x.jpg',
      des: "Child Specialists and Doctors for Infant",
      link:'/Delhi/Pediatrician'
    },
    {
      id: 9,
      profession: "Gastroenterologist",
      img: '/sp-gastroenterologist@2x.jpg',
      des: "Explore for issues related to digestive system, liver and pancreas",
      link:'/Delhi/Gastroenterologist'
    },
  ];
  const router = useRouter();

  return (
    <div className='p-5 h-auto'>
      <div className="">
        <div className="flex items-center justify-between">
          <div className='flex-2/3'>
            <h2 className='text-3xl '>Book an appointment for an in-clinic consultation</h2>
            <h2>Find experienced doctors across all specialties</h2>
          </div>
          {
            sellbtn &&  <div className='flex-1/3'>
            <Button className='border border-black bg-transparent text-black hover-none'onClick={() => {router.push('/consulte/newconsult')}}>
              See All Symptoms
            </Button>
          </div>
          }
         
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
          slidesPerView={4}
        >
          {content?.map((item, index) => (
            <SwiperSlide key={index} onClick={() => { router.push(`/consulte/newconsult/${item.id}`) }}>
            {/* <SwiperSlide key={index} onClick={() => { router.push(`/searchdoctor/${item.link}`) }}> */}
              <div className="min-h-screen bg-gray-100 cursor-pointer">
                <div className="bg-white mx-auto shadow-sm rounded-lg hover:shadow-sm transition duration-200 max-w-sm">
                  <img className="rounded-t-lg" src={item.img} alt="" />
                  <div className="py-4 px-1">
                    <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-ml tracking-tight text-blue-300 text-left">{item.profession}</h1>
                    <p className=" text-sm hover:cursor-pointer text-gray-600 leading-4 text-left">{item.des} </p>
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

      <style jsx>{`
        .swiper-button-prev-custom,
        .swiper-button-next-custom {
          position: absolute;
          top:33%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color:black;
          border-radius: 50%;
          z-index: 10;
          cursor: pointer;
        }
        .swiper-button-prev-custom {
          left: -20px; /* Adjust as needed */
        }
        .swiper-button-next-custom {
          right: -20px; /* Adjust as needed */
        }
      `}</style>
    </div>
  );
};

export default ClinicConsultation;

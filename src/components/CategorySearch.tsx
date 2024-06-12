"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect,useState,useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css'
import { Pagination } from 'swiper/modules';
import Searchbar from '@/components/Searchbar'
import { useRouter } from 'next/navigation';



const categoryList = [
  {
    id:1,
    Name: "Periods doubts or Pregency",
    url: "/irregular-painful+period.webp",
    link: '#'
  },
  {
    id:2,
    Name: "Acne pimple or skin issues",
    url: "/Acne.webp",
  },
  {
    id:3,
    Name: "Cold cought or fever",
    url: "/coughing.webp",
  },
  {
    id:4,
    Name: "Depression or anxiety",
    url: "/12-mental-wellness.webp",
  },
  {
    id:5,
    Name: "Child not feeling well",
    url: "/baby-boy.png",
  },
  {
    id:6,
    Name: "Performance issues in bed",
    url: "/gender.png",
  },
]
function CategorySearch() {

  const router = useRouter()
  return (
    <div className='mb-10 items-center px-5 flex flex-col gap-3'>
     <h2 className='text-3xl text-left'>Search Best <span className='text-blue-800 text-bold'>SPECIALITY DOCTOR</span></h2>
      <Searchbar />
      <div className='w-full mt-5 display-flex justiy-center '>
        <div className='flex flex-1 justify-between'>
          <div className='flex-2/3'>
            <h2 className='text-3xl '>Consult top doctors online for any health concern</h2>
            <h2>Private online consultations with verified doctors in all specialists</h2>
          </div>
          <div className='flex-1/3'>
            <Button className='border border-black bg-transparent text-black hover-none' onClick={() => {router.push('/video_consult')}}>
              View All Category 
            </Button>
          </div>
        </div>

        <Swiper
          slidesPerView={8}
          spaceBetween={6}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 3,
            },

            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {categoryList.map((item, index) => index < 10 && (
            <SwiperSlide key={index}>
              {/* <Link href={'/search/' + item.Name} className='flex flex-col text-center items-center'> */}
              <Link href={`/consulte/newconsult/${item.id}`} className='flex flex-col text-center items-center'>
                <div className='flex justify-center items-center'>
                  <Image src={item.url} alt='icon' width={70} height={70} className='object-contain m-2 cursor-pointer' />
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <label className='text-sm max-w-xs text-center break-words'>{item.Name}</label>
                  <label className='mt-2 text-sm max-w-sm text-blue-700 text-center cursor-pointer' onClick={() => { alert('click') }}>{'Consult Now'}</label>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>


      </div>
    </div>
  )
}

export default CategorySearch
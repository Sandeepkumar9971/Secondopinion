"use client"
import React from 'react';
import Head from 'next/head';
import Searchbar from '@/components/Searchbar';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import DvrIcon from '@mui/icons-material/Dvr';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StyleIcon from '@mui/icons-material/Style';
import CheckIcon from '@mui/icons-material/Check';
import FolderIcon from '@mui/icons-material/Folder';
import { Button } from '@/components/ui/button';
import Usersays from '@/components/Usersays';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Chip } from "@material-tailwind/react"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const data = [
  {
    id: 1,
    img: '/security_2.webp',
    text: '256-bit encryption',
  },
  {
    id: 2,
    img: '/security_3.webp',
    text: 'ISO 27001 certified',
  },
  {
    id: 3,
    img: '/security_4.webp',
    text: 'HIPAA compliant data centers',
  },
  {
    id: 4,
    img: '/security_5.webp',
    text: 'DSCI member',
  },
]
const content = [
  {
    img: "/120124d439d42764bad2d37d5bc7e9a800033017.jpg",
    heading: "How does sleep affect weight loss?",
    text: "wieosfldjcbx eskfdhcxb",
    docname: "Ms.Geetanjali, Dietitian/Nutritionist",
    like: 3,
    info: "Wondering what sleeping has to do with weight loss? You might follow the best diet and have a great fitness ...",
  },
  {
    img: "/49babec8e21c7ea4b59e1c2f51109308268b3960.jpg",
    heading: "The Magic of Invisible Braces",
    text: "wieosfldjcbx eskfdhcxb",
    docname: "Dr.Pamela Bhattacharjee, Dentist",
    like: 35,
    info: "We have been seeing braces on many people since time immemorial and most of us shudder by the thought of ...",
  },
  {
    img: "/11d605bf888ffe75c61b667e9c3a49186e409535.jpg",
    heading: "Can Male Sexual Problems Be Cured Like Any Other Disease ?",
    text: "wieosfldjcbx eskfdhcxb",
    docname: "Dr.Mahesh Shah, Ayurveda",
    like: 31,
    info: "Yes, sexual problem in men is just a common health issue for which there is nothing wrong to be concerned ... ",
  },
  {
    img: "/11d605bf888ffe75c61b667e9c3a49186e409535.jpg",
    heading: "Can Male Sexual Problems Be Cured Like Any Other Disease ?",
    text: "wieosfldjcbx eskfdhcxb",
    docname: "Dr.Mahesh Shah, Ayurveda",
    like: 31,
    info: "Yes, sexual problem in men is just a common health issue for which there is nothing wrong to be concerned ... ",
  },
  {
    img: "/11d605bf888ffe75c61b667e9c3a49186e409535.jpg",
    heading: "Can Male Sexual Problems Be Cured Like Any Other Disease ?",
    text: "wieosfldjcbx eskfdhcxb",
    docname: "Dr.Mahesh Shah, Ayurveda",
    like: 31,
    info: "Yes, sexual problem in men is just a common health issue for which there is nothing wrong to be concerned ... ",
  },
  {
    img: "/11d605bf888ffe75c61b667e9c3a49186e409535.jpg",
    heading: "Can Male Sexual Problems Be Cured Like Any Other Disease ?",
    text: "wieosfldjcbx eskfdhcxb",
    docname: "Dr.Mahesh Shah, Ayurveda",
    like: 31,
    info: "Yes, sexual problem in men is just a common health issue for which there is nothing wrong to be concerned ... ",
  },
  {
    img: "/11d605bf888ffe75c61b667e9c3a49186e409535.jpg",
    heading: "Can Male Sexual Problems Be Cured Like Any Other Disease ?",
    text: "wieosfldjcbx eskfdhcxb",
    docname: "Dr.Mahesh Shah, Ayurveda",
    like: 31,
    info: "Yes, sexual problem in men is just a common health issue for which there is nothing wrong to be concerned ... ",
  },
];
const FindDoctor = () => {
  return (
    <>
      <section class="relative w-full h-screen bg-blue-900">
        <img class="absolute h-full w-full object-cover" src="/bgfinddoc.png" alt="background1 image" />
        <div class="absolute inset-0 h-full w-full bg-black/50"></div>
        <div class="relative pt-28 text-center">
          <div class="p-5">
            <h1 class="text-5xl font-bold m-4 text-white">Your home for health</h1>
            <h2 class="text-4xl mb-5 text-white">Find and Book</h2>
            <Searchbar />
          </div>
          <div class="flex justify-center gap-4 text-s text-white antialiased mb-9 cursor-pointer">
            <span>Popular searches:</span>
            <span>Dermatologist</span>
            <span>Pediatrician</span>
            <span>Gynecologist/Obstetrician</span>
            <span>Others</span>
          </div>
        </div>
        <div class="absolute bottom-0 left-0 right-0 text-white flex justify-between items-center shadow-lg bg-blue-800 p-5 rounded-t-lg shadow-lg max-w-5xl mx-auto">
          <div class="flex flex-col items-center cursor-pointer">
            <QuestionAnswerIcon class="h-6 mb-2" />
            <span>Consult with a doctor</span>
          </div>
          <div class="flex flex-col items-center cursor-pointer">
            <MenuBookIcon class="h-6 mb-2" />
            <span>Read Artical</span>
          </div>
          <div class="flex flex-col items-center cursor-pointer">
            <DvrIcon class="h-6 mb-2" />
            <span>View medical records</span>
          </div>
          <div class="flex flex-col items-center cursor-pointer">
            <StyleIcon class="h-6 mb-2" />
            <span>For healthcare provider</span>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 px-4">
        <div className="max-w-7xl mx-auto flex flex-row lg:flex-row items-center justify-between">
          <div className="flex-1 lg:w-1/2 px-4 lg:px-0">
            <h1 className="text-4xl font-bold mb-4">
              Safety of your data is our <span className="text-blue-600">top priority.</span>
            </h1>
            <ul className="mb-8 space-y-2">
              <li className="flex items-center text-lg">
                <CheckIcon className="h-6 w-6 text-blue-600 mr-2" />
                Multi-level security checks
              </li>
              <li className="flex items-center text-lg">
                <CheckIcon className="h-6 w-6 text-blue-600 mr-2" />
                Multiple data backups
              </li>
              <li className="flex items-center text-lg">
                <CheckIcon className="h-6 w-6 text-blue-600 mr-2" />
                Stringent data privacy policies
              </li>
            </ul>
            <Button className="bg-blue-600 text-blue-400 px-6 py-2 rounded-full">Read more</Button>
          </div>
          <div className="flex-1 lg:w-1/2 px-4 lg:px-0">
            <img src="/security_1.webp" alt="Security Illustration" className="w-60 h-auto" />
          </div>
        </div>
        <div className="mb-3 grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {
            data?.map((rep) => {
              return (
                <div className="flex flex-col items-center" >
                  <img src={rep.img} alt="secutiy" className="w-12 h-auto" />
                  <span className="text-lg font-medium">{rep.text}</span>
                </div>
              )
            })
          }
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="max-w-7xl mx-auto flex flex-row lg:flex-row items-center justify-between">
          <div className="flex-2/3 lg:w-1/2 px-4 lg:px-0">
            <h1 className="text-4xl font-bold mb-4">
              Instant appointment with doctors.<span className="text-blue-600"> Guaranteed.</span>
            </h1>
            <ul className="mb-8 space-y-2">
              <li className="flex items-center text-lg">
                <CheckIcon className="h-6 w-6 text-blue-600 mr-2" />
                100,000 Verified doctors
              </li>
              <li className="flex items-center text-lg">
                <CheckIcon className="h-6 w-6 text-blue-600 mr-2" />
                3M+ Patient recommendations
              </li>
              <li className="flex items-center text-lg">
                <CheckIcon className="h-6 w-6 text-blue-600 mr-2" />
                25M Patients/year
              </li>
            </ul>
            <div>
              <Button className="bg-blue-600 text-blue-400 px-6 py-2 rounded-full">Read more</Button>
            </div>
          </div>
          <div className="flex-1/3 lg:w-1/2 px-4 lg:px-0">
            <video class="rh5v-DefaultPlayer_video" poster="//www.practostatic.com/web-assets/home/assets/images/book.875ca26a3c4283c777660377e421e99b.png" width="250" height="480" loading="false" autoplay="true" loop="true"><source src="//www.practostatic.com/web-assets/home/assets/videos/appointment.700ce682eaec91bf93b6574cb8f09cd0.webm" type="video/webm" /></video>
          </div>
        </div>
        <div className="grid-col-6">
        </div>
      </section>


      <section className="bg-gray-100 px-4">
        <div className="max-w-7xl mx-auto flex flex-row lg:flex-row items-center justify-between">
          <div className="flex-1/3 lg:w-1/2 px-4 lg:px-0 bg-gray-100">
            <video class="rh5v-DefaultPlayer_video" poster="//www.practostatic.com/web-assets/home/assets/images/consult.15f1b416f3f4c9383b780757d7293d00.png" width="250" height="480" loading="false" autoplay="true" loop="true"><source src="//www.practostatic.com/web-assets/home/assets/videos/consult.099446892618434cc8a038d7844c4380.webm" type="video/webm" /></video>
          </div>
          <div className="flex-1/3 lg:w-1/2 px-4 lg:px-0">
            <h1 className="text-4xl font-bold mb-4">
              Skip the waiting room.
              Consult with a <span className="text-blue-600"> doctor.</span>
            </h1>
            <ul className="mb-8 space-y-2">
              <li className="flex items-center text-lg">
                <CheckIcon className="h-6 w-6 text-blue-600 mr-2" />
                Fees starting at ₹99
              </li>
              <li className="flex items-center text-lg">
                <CheckIcon className="h-6 w-6 text-blue-600 mr-2" />
                Verified doctors respond in 5 minutes
              </li>
              <li className="flex items-center text-lg">
                <CheckIcon className="h-6 w-6 text-blue-600 mr-2" />
                100% Private and confidential
              </li>
            </ul>
            <div>
              <Button className="bg-blue-600 text-blue-400 px-6 py-2 rounded-full hover:none">Read more </Button><span><FiberManualRecordIcon style={{ color: 'green', height: '20' }} /> Online Doctors</span>
            </div>
          </div>
        </div>
      </section>
      <div className='mt-5'>
        <div className='flex flex-col items-center '>
          <h1 className="text-4xl font-bold mb-4">
            Read top articles from health experts
          </h1>
        </div>
        <div>
          <Swiper
            slidesPerView={3}
            spaceBetween={4}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {content?.map((art, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-4 shadow-lg rounded-lg transition transform hover:-translate-y-2">
                  <img
                    src={art.img}
                    alt={art.heading}
                    className="inline-block shrink-0 rounded-[.35rem] shadow aspect-[6/6] cursor-pointer"
                  />
                  <h3 className="text-lg font-semibold mb-2 text-left">{art.docname}</h3>
                  <p className="text-sm text-gray-600 mb-2">{art.heading}</p>
                  <p className="text-sm mb-4">{art.info}</p>
                  <div className="flex items-center mb-4">
                    <FavoriteIcon style={{ color: 'red' }} />
                    <span className="text-sm text-gray-600">{art.like}</span>
                  </div>
                  <Button
                    className="border border-black bg-transparent text-black hover-none"
                    onClick={() => alert("Read more about ")}
                  >
                    Read more
                  </Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='flex flex-col items-center'>
          <Button>More Articals</Button>
        </div>
      </div>


      <section className="bg-white px-4 mt-5">
        <div className="max-w-7xl mx-auto flex flex-row lg:flex-row items-center justify-between">

          <div className="flex-3/4 lg:w-1/2 px-4 lg:px-0">
            <img src='/finddoc_report.png' alt='repor' />
          </div>
          <div className="flex-2/4 lg:w-1/2 px-4 lg:px-0">
            <h1 className="text-4xl font-bold mb-4">
              All your medical records
              In one secure app.
            </h1>
            <ul className="mb-8 space-y-2">
              <li className="flex items-center text-lg">
                <CheckIcon className="h-6 w-6 text-blue-600 mr-2" />
                256-bit end to end encryption
              </li>
              <li className="flex items-center text-lg">
                <CheckIcon className="h-6 w-6 text-blue-600 mr-2" />
                Records are accessible only by you
              </li>
              <li className="flex items-center text-lg">
                <CheckIcon className="h-6 w-6 text-blue-600 mr-2" />
                Access your records across 8000+ centers
              </li>
            </ul>
            <div>
              <Button className="bg-blue-600 text-blue-400 px-6 py-2 rounded-full">Read more</Button>
            </div>
          </div>
        </div>

      </section>

    </>
  );

}

export default FindDoctor;

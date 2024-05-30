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
const data = [
  {
    id:1,
    img:'/security_2.webp',
    text:'256-bit encryption',
  },
  {
    id:2,
    img:'/security_3.webp',
    text:'ISO 27001 certified',
  },
  {
    id:3,
    img:'/security_4.webp',
    text:'HIPAA compliant data centers',
  },
  {
    id:4,
    img:'/security_5.webp',
    text:'DSCI member',
  },
]
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
            data?.map((rep)=>{
              return(
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
            <Button className="bg-blue-600 text-blue-400 px-6 py-2 rounded-full">Read more</Button>
          </div>
          <div className="flex-1/3 lg:w-1/2 px-4 lg:px-0">
          <video class="rh5v-DefaultPlayer_video" poster="//www.practostatic.com/web-assets/home/assets/images/book.875ca26a3c4283c777660377e421e99b.png" width="250" height="480" loading="false" autoplay="" loop=""><source src="//www.practostatic.com/web-assets/home/assets/videos/appointment.700ce682eaec91bf93b6574cb8f09cd0.webm" type="video/webm"/></video>
          </div>
        </div>
        <div className="grid-col-6">
         <Usersays title={false} usename={false}/>
        </div>
        </section>
    </>
  );

}

export default FindDoctor;

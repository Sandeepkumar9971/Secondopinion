"use client"
import Image from "next/image";
import Hero from "@/components/Hero";
import CategorySearch from "@/components/CategorySearch";
import DoctorList from "@/components/DoctorList";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClinicConsultation from "@/components/ClinicConsultation";
import Articals from "@/components/Articals";
import Usersays from "@/components/Usersays";
import {useStateProvider} from '@/context/dashboard/statereducer'
import {useEffect} from 'react'


export default function Home() {
//   const [
//     {
//      name
//     },
//     dispatch,
//   ] = useStateProvider();

//   console.log(name);
// useEffect(()=>{
//   dispatch({
//     type:'Test',
//     name:'Rohit'
//   })
// },[])

  return (
    <div>
      <div 
       className="md:px-20"
      >
        {/* Header */}
        <Header></Header>
        {/* Hero Section */}
        <Hero></Hero>
        <CategorySearch/>
        {/* Search Bar + Category */}
        {/* Popular Doctor List  */}
        
        {/* <DoctorList doctorList={doctorList}/> */}
        <ClinicConsultation/>
        <hr className="mt-10"/>
        <Articals/>
        <hr className="mt-10"/>
        <Usersays/>
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  );
}
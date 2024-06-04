"use client"
import Image from 'next/image';
import doctor1 from '../../public/doc.jpg'; // example image paths
import doctor2 from '../../public/doc.jpg';
import doctor3 from '../../public/doc.jpg';
import { Button } from '@material-tailwind/react';
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import '@/components/style.css'   //'./style.css'
import { Pagination } from 'swiper/modules';
import Searchbar from '@/components/Searchbar'
import ClinicConsultation from '@/components/ClinicConsultation';
import { Collapse } from 'react-collapse';


const categoryList = [
  {
    Name: "Periods doubts or Pregency",
    url: "/irregular-painful+period.webp",
    link: '#'
  },
  {
    Name: "Acne pimple or skin issues",
    url: "/Acne.webp",
  },
  {
    Name: "Cold cought or fever",
    url: "/coughing.webp",
  },
  {
    Name: "Depression or anxiety",
    url: "/12-mental-wellness.webp",
  },
  {
    Name: "Child not feeling well",
    url: "/baby-boy.png",
  },
  {
    Name: "Performance issues in bed",
    url: "/gender.png",
  },
  {
    Name: "Performance issues in bed",
    url: "/gender.png",
  },
  {
    Name: "Performance issues in bed",
    url: "/gender.png",
  },
  {
    Name: "Performance issues in bed",
    url: "/gender.png",
  },
]

const doctors = [
  {
    name: 'Dr. Sanjivani',
    specialty: 'Gynecologist, Obstetrician',
    experience: '1 year experience',
    consults: '4411 consults done',
    image: '/doc.jpg',
  },
  {
    name: 'Dr. Sanjivani',
    specialty: 'Gynecologist, Obstetrician',
    experience: '1 year experience',
    consults: '4411 consults done',
    image: '/doc.jpg',
  },
  {
    name: 'Dr. Arpita',
    specialty: 'Dermatologist',
    experience: '9 years experience',
    consults: '25538 consults done',
    image: '/doc.jpg',
  },
  {
    name: 'Dr. Junaid Nabi',
    specialty: 'Sexologist, Psychiatrist',
    experience: '14 years experience',
    consults: '61629 consults done',
    image: '/doc.jpg',
  },
  {
    name: 'Dr. Om Prakash L',
    specialty: 'Sexologist',
    experience: '7 years experience',
    consults: '32806 consults done',
    image: '/doc.jpg',
  },
];

const testimonials = [
  {
    name: 'Anamika Bajpai',
    status: 'Anonymous',
    message: 'Excellent experience consulting on Practo. I could solve my health issue without going to a clinic! Highly recommended!',
    image: '/testimonial-default-women-v1.png',
  },
  {
    name: 'Maitreyi Purohit',
    status: 'Anonymous',
    message: 'I got answers to all my medical queries. I’ll definitely recommend online consultations on Practo to others.',
    image: '/testimonial-default-women-v1.png',
  },
  {
    name: 'Mr. Bismoy Murasing',
    status: 'Anonymous',
    message: 'The consultation on Practo was great and I’m very happy with the experience. Would certainly ask other people to consult online.',
    image: '/testimonial-default-women-v1.png',
  },
  {
    name: 'Mr. Murasing',
    status: 'Anonymous',
    message: 'The consultation on Practo was great and I’m very happy with the experience. Would certainly ask other people to consult online.',
    image: '/testimonial-default-women-v1.png',
  },
];

const FAQdata = [
  {
    id: 1,
    ques: 'What is online doctor consultation?',
    sol: 'Online doctor consultation or online medical consultation is a method to connect patients and doctors virtually. It is a convenient and easy way to get online doctor advice using doctor apps or telemedicine apps or platforms, and the internet.'
  },
  {
    id: 2,
    ques: 'How do I start online consultation with doctors on Practo?',
    sol: `Starting an online doctor consultation is very simple on Practo. Follow these 4 simple steps:
1. Choose your health concern
2. Connect with a doctor within 2 minutes
3. Ask your queries to the doctor via audio or video call
4. Get a valid online doctor prescription and a 3-day free online doctor consultation`
  },
  {
    id: 3,
    ques: 'Are your online doctors qualified?',
    sol: 'We follow a strict verification process for every doctor providing online medical services on Practo. Our team manually verifies necessary documents, registrations, and certifications for every doctor.'
  },
  {
    id: 4,
    ques: 'Is online doctor consultation safe and secured on Practo?',
    sol: 'The privacy of our patients is critical to us, and thus, we are compliant with industry standards like ISO 27001. Rest assured that your online consultation with a doctor is completely safe and secured with 256-bit encryption'
  },
  {
    id: 5,
    ques: 'What happens if I don’t get a response from a doctor?',
    sol: 'In the unlikely event that an online doctor does not respond, you will be entitled to a 100% refund.'
  },
  {
    id: 6,
    ques: 'Can I do a free online doctor consultation on Practo?',
    sol: 'Avail a free online consultation with top doctors in India during the India Health Hour. We have the free questions service available on our health app only. Ask a question and get free online medical advice within 24 to 48 hours.'
  },
]


const Videoconsult = () => {

  const [openIndexes, setOpenIndexes] = useState([false, false, false, false, false, false]);

  const toggleCollapse = (index) => {
    setOpenIndexes(
      openIndexes.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };
  return (
    <div>

      <div id="main" className="p-5 flex flex-row lg:flex-row items-center justify-between max-w-7xl mx-auto bg-pink-100">
        <div className="flex-1 mb-8 lg:mb-0 lg:pr-10 p-5">
          <h1 className="text-4xl font-bold mb-4">
            Skip the travel! <br />
            Take Online Doctor Consultation
          </h1>
          <p className="text-lg mb-6">
            Private consultation + Audio call - Starts at just ₹199
          </p>
          <div className="flex items-center mb-6">
            <div className="flex -space-x-2">
              <Image src={doctor1} alt="Doctor 1" className="w-10 h-10 rounded-full border-2 border-white" />
              <Image src={doctor2} alt="Doctor 2" className="w-10 h-10 rounded-full border-2 border-white" />
              <Image src={doctor3} alt="Doctor 3" className="w-10 h-10 rounded-full border-2 border-white" />
            </div>
            <span className="ml-4 text-lg text-gray-700">+141 Doctors are online</span>
            <span className="ml-2 text-green-500">●</span>
          </div>
          <Button id="button-cons" className="text-white px-6 mt-3">
            Consult Now
          </Button>
        </div>
        <div className="flex-1/2 p-5 lg:pl-10 ">
          <img
            src="/videoconsult_1.png"
            alt="Consultation Illustration"
            className="w-full max-w-sm lg:max-w-md h-auto"
          />
        </div>
        <style jsx>
          {
            `
            #main{
              background:#F8E9E6;
             
            }
            `
          }
        </style>
      </div>

      {/***********************  Specialites ********************* */}
      <div className='mb-10 items-center px-5 flex flex-col gap-3'>
        <div>
          <h2 className='text-3xl mt-3'>Search Specialities Doctor</h2>
        </div>
        <Searchbar />
        <div className='w-full mt-5 display-flex justiy-center '>
          <div className='flex flex-1 justify-between'>
            <div className='flex-2/3'>
              <h2 className='text-3xl '>25+ Specialities</h2>
            </div>
            <div className='flex-1/3'>
              <Button className='border border-black bg-transparent text-black hover-none' onClick={() => alert('hello')}>
                See all Specialities
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
                <Link href={'/search/' + item.Name} className='flex flex-col text-center items-center'>
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

      {/***********************  consultation ********************* */}
      <div>

        <ClinicConsultation
          title="Common Health Concerns"
          subtitle="Consult a doctor online for any health issue"
          sellbtn={true}
        />
      </div>

      {/***********************  offer ********************* */}
      <div>
        <div className="offers-container">
          <h2 className="title">Offers</h2>
          <div className="offers">
            <div className="offer-card green">
              <div className="offer-content">
                <span className="offer-label">OFFER</span>
                <h3>Download the App & get ₹200 HealthCash</h3>
                <a href="#" className="offer-link">Download App</a>
              </div>
              <div className="offer-image">
                <img src="/offer-app-v1.png" alt="App" />
              </div>
            </div>
            <div className="offer-card orange">
              <div className="offer-content">
                <span className="offer-label">OFFER</span>
                <h3>Consult with specialists at just ₹199</h3>
                <a href="#" className="offer-link">Consult Now</a>
              </div>
              <div className="offer-image">
                <img src="/offer-specialist-v1.png" alt="Doctor" />
              </div>
            </div>
          </div>
          <style jsx>{`
        .offers-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        .title {
          font-size: 2rem;
          margin-bottom: 20px;
        }
        .offers {
          display: flex;
          gap: 20px;
        }
        .offer-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-radius: 8px;
          flex: 1;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .offer-card.green {
          background-color: #a9d8c0;
        }
        .offer-card.orange {
          background-color: #fcd5b5;
        }
        .offer-content {
          max-width: 60%;
        }
        .offer-label {
          display: inline-block;
          padding: 2px 8px;
          margin-bottom: 10px;
          background-color: white;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: bold;
        }
        .offer-link {
          display: inline-block;
          margin-top: 10px;
          color: black;
          text-decoration: none;
          font-weight: bold;
        }
        .offer-image img {
          width: 100px;
          height: auto;
          border-radius: 50%;
        }
      `}</style>
        </div>
      </div>


      {/***********************  Doctors ********************* */}
      <div>
        <div className="doctors-container">
          <h2 className="title">Our Doctors</h2>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >

            {doctors.map((doctor, index) => (
              <SwiperSlide key={index}>
                <div className="doctor-card">
                  <img src={doctor.image} alt={doctor.name} className="doctor-image" />
                  <div className="doctor-info">
                    <h3 className="doctor-name">{doctor.name}</h3>
                    <p className="doctor-specialty">{doctor.specialty}</p>
                    <p className="doctor-experience">{doctor.experience}</p>
                    <p className="doctor-consults">{doctor.consults}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <style jsx>{`
        .doctors-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .title {
          font-size: 1.8em;
          margin-bottom: 20px;
          margin-left:20px
        }
        .doctor-card {
          display: flex;
          flex-direction:row;
          align-items: center;
          padding:30px;
          border-radius: 8px;
          background-color: #fff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .doctor-image {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          margin-bottom: 10px;
        }
        .doctor-info {
          text-align: left;
          margin-left:4px
        }
        .doctor-name {
          font-size:0.7rem;
          font-weight: bold;
          margin-bottom: 2px;
        }
        .doctor-specialty,
        .doctor-experience,
        .doctor-consults {
          font-size: 0.7rem;
          color: #555;
        }
      `}</style>
        </div>
      </div>
      {/***********************  How to work ********************* */}
      <div>
        <div className="how-it-works">
          <h2 className='how-it'>How it works</h2>
          <div className="steps">
            <div className="step">
              <div className="icon">⭐</div>
              <p>Select a speciality or symptom</p>
            </div>
            <div className="step">
              <div className="icon">💬</div>
              <p>Audio/ video call with a verified doctor</p>
            </div>
            <div className="step">
              <div className="icon">💊</div>
              <p>Get a digital prescription & a free follow-up</p>
            </div>
          </div>
          <style jsx>{`
    .how-it-works {
      text-align: center;
      padding: 20px;
    }
    .how-it{
      font-size: 24px;
      margin-bottom: 20px;
    }
    .steps {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      position: relative;
    }
    .step {
      flex: 1;
      max-width: 250px;
      min-width: 150px;
      padding: 10px;
      margin: 10px;
      text-align: center;
      position: relative;
    }
    .step:not(:last-child)::after {
      content: '';
      position: absolute;
      right: -50%;
      top: 50%;
      transform: translateY(-50%);
      width: 2px;
      height: 60px;
      background-color: #ccc;
    }
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      background-color: #f0f0f0;
      border-radius: 50%;
      margin: 0 auto 10px;
      font-size: 24px;
    }
    p {
      font-size: 14px;
    }
    @media (max-width: 768px) {
      .steps {
        flex-direction: column;
      }
      .step {
        max-width: none;
      }
      .step:not(:last-child)::after {
        width: 60px;
        height: 2px;
        right: 50%;
        top: auto;
        bottom: -20px;
        transform: translateX(50%);
      }
    }
    @media (min-width: 769px) and (max-width: 1024px) {
      .steps {
        flex-direction: row;
        flex-wrap: wrap;
      }
      .step {
        max-width: 45%;
      }
    }
  `}</style>
        </div>
      </div>
      {/***********************  Happy Users ********************* */}
      <div className="bg-gray-900 text-white py-10">
        <div className="container mx-auto">
          <div className="flex flex-row gap-4 justify-between p-5 ">
            <div className="flex flex-col items-center">
              <h2 className="text-lg font-medium">2,00,000+</h2>
              <p className="text-sl">Happy Users</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-lg font-medium">20,000+</h2>
              <p className="text-sl">Verified Doctors</p>

            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-lg font-medium">25+</h2>
              <p className="text-sl">Specialities</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-lg font-medium">4.5 / 5</h2>
              <p className="text-sl">App Rating</p>
            </div>

          </div>
        </div>
      </div>



      {/***********************  Benefits********************* */}
      <div>
        <div className="benefits">
          <h2>Benefits of Online Consultation</h2>
          <div className="benefits-grid">
            <div className="benefit">
              <h3>✔ Consult Top Doctors 24x7</h3>
              <p>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
            </div>
            <div className="benefit">
              <h3>✔ Convenient and Easy</h3>
              <p>Start an instant consultation within 2 minutes or do video consultation at the scheduled time.</p>
            </div>
            <div className="benefit">
              <h3>✔ 100% Safe Consultations</h3>
              <p>Be assured that your online consultation will be fully private and secured.</p>
            </div>
            <div className="benefit">
              <h3>✔ Similar Clinic Experience</h3>
              <p>Experience clinic-like consultation through a video call with the doctor.</p>
            </div>
            <div className="benefit">
              <h3>✔ Free Follow-up</h3>
              <p>Get a valid digital prescription and a 7-day, free follow-up for further clarifications.</p>
            </div>
          </div>
          <style jsx>{`
        .benefits {
          padding: 20px;
          max-width: 1200px;
          margin: auto;
          text-align: center;
        }
        .benefits h2 {
          font-size: 2rem;
          margin-bottom: 20px;
        }
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }
        .benefit {
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .benefit h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }
        .benefit p {
          font-size: 1rem;
          color: #555;
        }
        @media (max-width: 768px) {
          .benefits {
            padding: 10px;
          }
          .benefit {
            padding: 15px;
          }
        }
        @media (max-width: 480px) {
          .benefits h2 {
            font-size: 1.5rem;
          }
          .benefit h3 {
            font-size: 1.2rem;
          }
          .benefit p {
            font-size: 0.9rem;
          }
        }
      `}</style>
        </div>

      </div>
      {/***********************  Test monial********************* */}
      <div className="testimonials">
        <h2 className='text-3xl'>What our users say about their online consultation experience</h2><br/>
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper "
          >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <div className='test_name'>
                  <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
                  <h3 className='text-sm text-bold mt-3 mx-2'>{testimonial.name}</h3>
                </div>
                <p className=' text-sm text-left'>{testimonial.message}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx>{`
        .testimonials {          
          text-align: center;
          padding: 40px;
          background: #f8f9fa;
        }
        .testimonial {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .test_name{
          display:flex;
          flex-direction: row;
       
        }
        .testimonial-img {
          border-radius: 50%;
          width:50px;
          height:50px;
          object-fit: cover;
          margin-bottom: 20px;
        }
       
        @media (min-width: 768px) {
          .swiper-container {
            width: 80%;
          }
        }
      `}</style>
      </div>

      {/***********************   FAQs ********************* */}
      <div>
        <h2 className='text-3xl'>FAQs</h2>
        <div className="grid-container">
          {FAQdata?.map((fq, index) => (
            <div key={index} className="grid-item">
              <button onClick={() => toggleCollapse(index)}>
                {fq.ques}
              </button>
              <Collapse isOpened={openIndexes[index]}>
                <div className="collapse-content">
                  {fq.sol}
                </div>
              </Collapse>
            </div>
          ))}
          <style jsx>{`
        .grid-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          padding: 20px;
        }
        .grid-item {
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 10px;
          text-align: center;
        }
        .collapse-content {
          margin-top: 10px;
          padding: 10px;
          border-top: 1px solid #eee;
        }
        @media (max-width: 768px) {
          .grid-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
      </div>

      {/***********************   health concerns ********************* */}
      <div className="bg-gray-900 text-white py-10">
        <div className="container mx-auto">
          <div className="flex flex-row gap-4 justify-between p-5 ">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-large">Still delaying your health concerns ?</h2>
              <p className="text-sl">Connect with India's top doctors online</p>
            </div>
            <div className="flex flex-col mt-5">
              <Button style={{ background: '#58B0F6' }}>Consult Now</Button>
            </div>


          </div>
        </div>
      </div>

<div className='flex-1 p-5'>
  <p className='text-sm'>Looking for a trusted & secured online dr consultation in India?</p><br/>
  <p className='text-sm leading-relaxed'>
 
Consult a doctor online on Practo for any health concern. Our pool of over 20,000 trusted doctors across 25+ specialties will ensure all your health queries are answered. You can get online dr advice from a Psychiatrist, Dermatologist, Gynecologist, Sexologist, Pediatrician, Cardiologist, Neurologist, Gastroenterologist, Urologist, Endocrinologist, Dentist, Psychologist, and many more. Video consultation with a doctor is available only on Practo's online doctor app.
Practo serves customers in the following cities: Bangalore, Mumbai, Delhi, Kolkata, Hyderabad, Chennai, Pune, Ahmedabad, Gurgaon and Ghaziabad.

Recently Answered Questions: Melatonin tolerance | Period after ipill | Skin lightening | Stapler Circummsion | Chayote squash daily intake | Delayed eruption | Diastasis Recti 7 finger gap | Eco report

Topics: Looking for weight gain tips? | Worried about chest pain? | Want to get rid of dark circles? | How to use prega news kit? | Need some weight loss advice? | Work, family or relationship stress? | Looking to improve digestion? | Painful kidney stones? | Need some sexual advice? | Want to learn how to last longer? | Seek help for lower back pain | Need some advice for irregular periods? | Ask how you can relieve throat pain | Need help with frequent urination? | Have trouble breathing? | Need some dental advice? | Want to get rid of acne scars? | Stomach pain bothering you? | Doubts about periods?

Specialities: Ask A Psychiatrist | Ask A Dermatologist | Ask A Sexologist | Ask A Gynecologist | Ask A General Physician Doctor | Ask A Pediatrician Doctor | Ask An Ear Nose Throat Doctor | Ask A Kidney Urine Doctor | Ask An Orthopedic Doctor | Ask A Neurologist Doctor
  </p>
</div>


    </div>
  );
}

export default Videoconsult;
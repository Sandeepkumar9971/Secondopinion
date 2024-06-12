"use client"
import React, { useState, useEffect } from 'react'
import Consultnavbar from '../components/Consultnavbar'
import Image from 'next/image'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { useRouter } from 'next/navigation';


const Newconsultr = ({ screen }) => {
  const router = useRouter()
  const images = [
    { src: '/ic-chats-v1.webp', alt: 'Image 1', text: 'Free Follow-up' },
    { src: '/ic-security-v1.webp', alt: 'Image 2', text: '24/7 Support' },
    { src: '/qualified_doctors.webp', alt: 'Image 3', text: 'Expert Doctors' }
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div >
      <div className='narheader'>
        <Consultnavbar />
      </div>
      <div className="container">
        <div className="left-side ">
          <p className='cursor-pointer bold' onClick={() => router.back()}>Back</p>
          <h2 className='text-2xl bold'>Consult with a Doctor</h2>

          {
            screen == 'consultexist' && (
              <>
                <div className="speciality">
                  <p>Speciality</p>
                  <div className="input-group border p-3">
                    <label htmlFor="gynaecology"><CheckCircleRoundedIcon style={{ color: '#199FD9' }} />Gynaecology ₹499</label>
                  </div>
                </div>
                <div className="input-group">
                  <label>Patient name</label>
                  <div className="mobile-input">
                    <input className='border p-2' type="text" placeholder="Enter patient name" defaultValue="sandeep" />
                  </div>
                </div>
              </>
            )
          }

{
            screen == 'newconsult' && (
              <>
        
                <div className="input-group mt-5">
                  <label>Tell us your symptom or health problem</label>
                  <div className="mobile-input">
                    <textarea className='border p-2 w-full mr-2'  placeholder="Eg:fever,headache" /> 
                  </div>
                </div>
              </>
            )
          }

          <div className="input-group">
            <label>Mobile number</label>
            <div className="mobile-input">
              <input className='border p-2' type="text" placeholder="Enter mobile number" />
            </div>
            <p className='text-sm mt-3'>A verification code will be sent to this number.</p>
          </div>
          <button className="continue-button" disabled>Continue</button>

        </div>

        <div className="right-side ">
          <div style={{ display: 'flex', flexDirection: 'column', margin: '28% 0 0 40%', gap: '10px' }}>
            <Image src={images[currentImage].src} alt={images[currentImage].alt} height={80} width={80} />
            <p className='text-xl bold ml--4'>{images[currentImage].text}</p>
          </div>
        </div>

      </div>
      <style jsx>{`
        .container {
          display: flex;
          padding: 20px;
          width:80%;
          margin-top:2%;
          background-color: #f8f9fa;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding:3%
        }
        .bold{
          font-weight:bold;
        }
        .left-side {
          flex: 2;
          border-right:1px solid #E0E0E5

        }
        .right-side {
          flex: 2;
        
        }
        .speciality {
          display: flex;
          width:60%;
          flex-direction:column;
        }
        .speciality input {
          margin-right: 10px;
        }
        .input-group {
          margin-bottom: 20px;
          display:flex;
          flex-direction:column;
        }
        .mobile-input {
          display: flex;
          align-items: center;
        }
        .flag-icon {
          margin-right: 10px;
        }
        .continue-button {
          background-color: #ccc;
          border: none;
          padding: 10px 20px;
          cursor: not-allowed;
        }
        // .right-side img {
        //   width: 100%;
        //   max-width: 200px;
        //   margin-bottom: 10px;
        // }
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
          }
          .left-side, .right-side {
            flex: none;
            width: 100%;
          }
        }
        @media (min-width: 768px) and (max-width: 1200px) {
          .right-side img {
            max-width: 150px;
          }
        }
        @media (min-width: 1200px) {
          .right-side img {
            max-width: 250px;
          }
        }
      `}</style>
    </div>
  )
}

export default Newconsultr
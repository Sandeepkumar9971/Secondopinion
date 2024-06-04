"use client"
import React, { useState } from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Profiledoctor = () => {
    const [showSlots, setShowSlots] = useState(false);
    const [currentDateIndex, setCurrentDateIndex] = useState(0);
    const dates = ["Today", "Tomorrow", "Wed, 5 Jun"];
    const slots = {
        morning: ["09:00 AM", "10:00 AM", "11:00 AM"],
        afternoon: ["12:00 PM", "01:00 PM", "02:00 PM"],
        evening: ["05:30 PM", "05:50 PM"],
        night: ["08:00 PM", "09:00 PM"]
    };

    const handleBookClick = () => {
        setShowSlots(!showSlots);
    };

    const handlePreviousDate = () => {
        setCurrentDateIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNextDate = () => {
        setCurrentDateIndex((prevIndex) => Math.min(prevIndex + 1, dates.length - 1));
    };

    return (
        <div >
            <div className="container">
                <div className="profile-card">
                    <div className="left-section">
                        <img src="/offer-specialist-v1.png" alt="Doctor" className="doctor-image" />
                    </div>
                    <div className="middle-section">
                        <h2 className='text-2xl'>Dr. Sumanth Shetty <span>Profile is claimed</span></h2>
                        <p className='text-sm'>BDS, MDS - Paedodontics And Preventive Dentistry</p>
                        <p className='text-sm'>Dentist, Implantologist, Pediatric Dentist, Cosmetic/Aesthetic Dentist, Preventive Dentistry, Dental Surgeon</p>
                        <p className='text-sm'>25 Years Experience Overall (24 years as specialist)</p>
                        <div className="badge">
                            <p><span style={{ color: '#289EDB', fontWeight: 'bold' }}>SecondOpinion</span>-DENTAL</p>
                            <p style={{ color: '#289EDB', fontWeight: 'bold' }}>Trusted Care. Lasting Smiles.</p>
                        </div>
                        <div className="verification">
                            <CheckCircleIcon style={{ color: 'green' }} />
                            <span>Medical Registration Verified</span>
                        </div>
                        <div className="rating">
                            <ThumbUpAltIcon style={{ color: 'green' }} />
                            <span>97% (4459 patients)</span>
                        </div>
                        <p className='text-sm'>Dr. Sumanth M. Shetty completed his post graduation in masters of dental surgery [MDS] in the field of Pedodontics and preventive dentistry, from the esteemed more..</p>
                        <a href="#">Share your story</a>
                    </div>

                </div>
                <div className="right-section slot-picker">
                    <h3>Pick a time slot</h3>
                    <div className="clinic-info">
                        <p>Clinic Appointment</p>
                        <p>₹ 300 fee</p>
                        <p>Chisel Dental</p>
                        <p>5 ★ ₹300 Max 15 mins wait</p>
                        <p>Koramangala</p>
                    </div>
                    <div className="date-navigation">
                        <ArrowBackIosIcon onClick={handlePreviousDate} style={{ cursor: 'pointer' }} />
                        <span>{dates[currentDateIndex]}</span>
                        <ArrowForwardIosIcon onClick={handleNextDate} style={{ cursor: 'pointer' }} />
                    </div>
                    {showSlots && (
                        <div className="slots">
                            <div className="slot-section">
                                <div className="slot-category">
                                    <p>Morning</p>
                                    <div className="slot-times">
                                        {slots.morning.map((time, index) => (
                                            <span key={index}>{time}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="slot-category">
                                    <p>Afternoon</p>
                                    <div className="slot-times">
                                        {slots.afternoon.map((time, index) => (
                                            <span key={index}>{time}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="slot-category">
                                    <p>Evening</p>
                                    <div className="slot-times">
                                        {slots.evening.map((time, index) => (
                                            <span key={index}>{time}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="slot-category">
                                    <p>Night</p>
                                    <div className="slot-times">
                                        {slots.night.map((time, index) => (
                                            <span key={index}>{time}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <button onClick={handleBookClick}>Book FREE Clinic Visit</button>
                </div>




            </div>
            <div className="clinic-info-container">
                <Tabs>
                    <TabList>
                        <Tab>Info</Tab>
                        <Tab>Stories (2730)</Tab>
                        <Tab>Consult Q&A</Tab>
                        <Tab>Healthfeed</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="info-tab">
                            <h2>Koramangala, Bangalore</h2>
                            <div className='flex gap-3'>
                                <div className='flex-2'>
                                    <h3>Chisel Dental</h3>
                                    <div className="rating">
                                        <span>5.0</span>
                                        <span className="stars">★★★★★</span>
                                    </div>
                                    <p  className='address'>
                                        18, 1st Main, Koramangala 1st Block, Jakkasandra Extension,
                                        Landmark: Near Wipro Park & Opposite to Sahana Child Care,
                                        Bangalore
                                    </p>
                                    <a href="#">Get Directions</a>
                                    <div className="images">
                                        <img src="/36x36.jpg" alt="Clinic" />
                                        <img src="/36x36.jpg" alt="Clinic" />
                                        <img src="/36x36.jpg" alt="Clinic" />
                                        <img src="/36x36.jpg" alt="Clinic" />
                                        <span style={{ background: 'gray', padding: '1%', cursor: 'pointer' }}>+1</span>
                                    </div>
                                    {/* <p className='address'>
                                        Practo forays into Dental care, launches Practo Care Dental. If
                                        you are a doctor and interested to know more.{' '}
                                        <a href="#">Click here</a>
                                    </p> */}
                                </div>
                                <div className='flex-1'>
                                    <div className="booking-info">
                                        <span className='text-sl textstyle'>Mon, Wed - Sun</span>
                                        <span  className='textstyle'>09:00 AM - 06:00 PM</span>
                                       

                                    </div>
                                </div>
                                <div className='flex-1'>
                                <span className='textstyle'>₹300</span>
                                    {/* <p>Prime</p>
                                    <p>Max. 15 mins wait + Verified details</p> */}
                                </div>
                            </div>
                            <button className="book-appointment">Book Appointment</button>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="stories-tab">
                            <p>Stories content goes here...</p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="consult-tab">
                            <p>Consult Q&A content goes here...</p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="healthfeed-tab">
                            <p>Healthfeed content goes here...</p>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>

            <style jsx>{`
      
        .container {
            display:flex;
            width: 100%;
            max-width: 1200px;
            margin-top: 50px;
            gap:5px;
        }
        .textstyle{
            font-weight:bold;
        }
        .profile-card {
          display: flex;
          flex: 3;
          width: 70%;
          border: 1px solid #ccc;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
        }
        .left-section {
          flex: 1;
        }
        .right-section {
          flex: 1;
        }
        .doctor-image {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
        }
        .address {
            width: 40ch; 
            word-break: break-word;
          }
        .middle-section {
          flex: 3;
          padding: 0 20px;
        }
        .middle-section h2 {
          display: flex;
          align-items: center;
        }
        .middle-section h2 span {
          font-size: 14px;
          color: #888;
          margin-left: 10px;
        }
        .badge {
          background-color: #f8f8f8;
          padding: 10px;
          border-radius: 5px;
          display: flex;
          flex-direction:row;
          justify-content: space-around;
          align-items: flex-start;
          margin: 10px 0;
        }
        .verification {
          display: flex;
          align-items: center;
          margin: 10px 0;
        }
        .rating {
          display: flex;
          align-items: center;
          margin: 10px 0;
        }
        .rating span {
          margin-left: 5px;
        }
        .slot-picker {
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .clinic-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 20px;
        }
        .date-navigation {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .date-navigation span {
          margin: 0 10px;
        }
        .slots {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .slot-section {
          display: flex;
          flex-direction:column;
          width:30%;
        }
        .slot-category {
          margin-bottom: 10px;
        }
        .slot-category p {
          margin-bottom: 5px;
        }
        .slot-times {
          display: flex;
          flex-wrap: wrap;
        }
        .slot-times span {
          margin: 5px;
          padding: 5px 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          cursor: pointer;
        }
        .clinic-info-container {
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            background-color: #fff;
          }
          .info-tab h2 {
            font-size: 1.5em;
            margin-bottom: 10px;
          }
          .info-tab h3 {
            font-size: 1.25em;
            margin-bottom: 10px;
          }
          .rating {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
          }
          .stars {
            color: #ffb400;
            margin-left: 5px;
          }
          .images {
            display: flex;
            gap: 5px;
            margin-bottom: 10px;
          }
          .images img {
            width: 50px;
            height: 50px;
            object-fit: cover;
            border-radius: 4px;
          }
          .booking-info {
            display: flex;
            flex-direction: column;
            gap: 5px;
            margin-top: 10px;
          }
          .book-appointment {
            margin-top: 10px;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          @media (max-width: 768px) {
            .clinic-info-container {
              padding: 10px;
            }
          }
        @media (max-width: 768px) {
          .profile-card, .slot-picker {
            flex-direction: column;
          }
          .doctor-image {
            width: 100px;
            height: 100px;
          }
        }
        @media (max-width: 480px) {
          .container {
            padding: 10px;
          }
          .doctor-image {
            width: 80px;
            height: 80px;
          }
        }
      `}</style>
        </div>
    );
}

export default Profiledoctor;
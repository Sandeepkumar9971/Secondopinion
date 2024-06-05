"use client"
import React, { useState } from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Button } from '@/components/ui/button';
import Searchbar from '@/components/Searchbar';

const Profiledoctor = () => {
  const [showSlots, setShowSlots] = useState(false);
  const [currentDateIndex, setCurrentDateIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [tab, settab] = useState(1)

  const dates = ["Today", "Tomorrow", "Wed, 5 Jun"];
  const slots = {
    morning: ["09:00 AM", "10:00 AM", "11:00 AM"],
    afternoon: ["12:00 PM", "01:00 PM", "02:00 PM"],
    evening: ["05:30 PM", "05:50 PM"],
    night: ["08:00 PM", "09:00 PM"]
  };
  const stories = [
    {
      id: 1,
      name: 'Verified Patient',
      heading: "Visited For Bleeding Gums Treatment",
      text: "I had a very small composite removed from my tooth which needed to be filled again. It cost me a lot.",
      date: "5 months ago",
      author: "V",
      recommended: false,
    },
    {
      id: 2,
      name: 'Verified Patient',
      heading: "Visited For Bleeding Gums Treatment",
      text: "Dr. Venkatesh is very professional and explains everything in detail. The treatment was effective and cost was reasonable.",
      date: "3 months ago",
      author: "A",
      recommended: true,
    },
    {
      id: 3,
      name: 'Verified Patient',
      heading: "Visited For Bleeding Gums Treatment",
      text: "The clinic is clean and staff is friendly. Had a great experience with my root canal treatment.",
      date: "1 month ago",
      author: "R",
      recommended: true,
    },

  ];

  const questionans = [
    {
      id: 1,
      ques: 'Where does Dr. Venkatesh M J practice?',
      ans: 'Dr. Venkatesh M J practices at All Care Dental Centre - since 1969 - Indiranagar.'
    },
    {
      id: 2,
      ques: "How can I take Dr. Venkatesh M J's appointment ?",
      ans: "You can take Dr. Venkatesh M J's appointment online through Practo for in-clinic visit with the doctor."
    },
    {
      id: 3,
      ques: "Why do patients visit Dr. Venkatesh M J?",
      ans: "Patients frequently visit Dr. Venkatesh M J for Cosmetic/ Aesthetic Dentistry, Crowns and Bridges Fixing, Dental Fillings. To see more reasons visit the doctor's profile on Practo."
    },
    {
      id: 5,
      ques: "What do patients say about Dr. Venkatesh M J?",
      ans: "Dr. Venkatesh M J has been recommended by 35 patients and has recieved stories from 7 patients. You can read detailed patient stories of the doctor on Practo."
    },
  ]

  const Services = [
    {
      id: 1,
      service: 'Cosmetic/ Aesthetic Dentistry'
    },
    {
      id: 2,
      service: 'Crowns and Bridges Fixing'
    },
    {
      id: 3,
      service: 'Dental Fillings'
    },
    {
      id: 4,
      service: 'Teeth Whitening'
    },
    {
      id: 5,
      service: 'Scaling / Polishing'
    },
  ]

  const Specializations = [
    {
      id: 1,
      Special: 'Orthodontist'
    },
    {
      id: 2,
      Special: 'Cosmetic/Aesthetic Dentist'
    },
    {
      id: 3,
      Special: 'Dentofacial Orthopedist'
    },
    {
      id: 4,
      Special: 'Implantologist'
    },
    {
      id: 5,
      Special: 'Scaling / Polishing'
    },
  ]
  const Awards = [
    {
      id: 1,
      award: 'recognised by Dental Council of India as an inspector to inspect dental colleges - 2010'
    },
  ]

  const edu = [
    {
      id: 1,
      name: 'BDS - M.R. Ambedkar Dental College and Hospital, 1995'
    },
    {
      id: 2,
      name: 'MDS - Orthodontics - Bangalore University, 1998'
    },
  ]
  const Member = [
    {
      id: 1,
      name: 'Indian Dental Association'
    },
    {
      id: 2,
      name: 'Indian Orthodontic Society'
    },
  ]
  const experience = [
    {
      id: 1,
      name: 'Head at All Care Dental Centre'
    },
  ]
  const Registrations = [
    {
      id: 1,
      name: '3448A Karnataka State Dental Council, 1995'
    },
  ]
  const handleBookClick = () => {
    setShowSlots(!showSlots);
  };

  const handlePreviousDate = () => {
    setCurrentDateIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextDate = () => {
    setCurrentDateIndex((prevIndex) => Math.min(prevIndex + 1, dates.length - 1));
  };

  const toggleExpand = () => setExpanded(!expanded);
  const toggleLike = () => {
    setLiked(!liked);
    if (disliked) setDisliked(false);
  };
  const toggleDislike = () => {
    setDisliked(!disliked);
    if (liked) setLiked(false);
  };

  return (
    <div >
       <Searchbar/>
      <div className="container">

        {/* LEFT Selection */}
        <div className='left'>

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
          <div className="clinic-info-container">
            <Tabs>
              <TabList>
                <Tab onClick={() => { settab('1') }}> Info</Tab>
                <Tab onClick={() => { settab('2') }}> Stories (2730)</Tab>
                <Tab onClick={() => { settab('3') }}> Consult Q&A</Tab>
                <Tab onClick={() => { settab('4') }}> Healthfeed</Tab>
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
                      <p className='address'>
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
                        <span className='textstyle'>09:00 AM - 06:00 PM</span>
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
                  {/* <div className="story-card"> */}
                  {
                    stories?.map((data) => {
                      return (
                        <>
                          <div className="w-1/5 p-2 border-b">
                            <div className="header">
                              <div className="avatar">{data.author}</div>
                              <div className="details">
                                <span className="verified">{data.name}</span>
                                <span className="time">{data.date}</span>
                              </div>
                            </div>
                            <div className="footer">
                              <h2 className='text-xl textstyle ml-5'>{data.heading}</h2>
                              <h2 className="recommendation ml-5">
                                {data.recommended ? '  👍 I recommend the doctor' : ' 👎 I do not recommend the doctor'}
                              </h2>
                            </div>
                            <div className="content ml-5">
                              <h3>{data.text}</h3>
                            </div>

                          </div>
                        </>
                      )
                    })
                  }
                  <div style={{display:'flex',flex:1,justifyContent:'center',padding:3,marginTop:'4px'}}>
                  <Button onClick={() => { alert('more') }}>
                    More
                  </Button>
                    </div>
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

          <div className="story-card">
            {
              tab == 1 && stories?.map((data) => {
                return (
                  <>
                    <div className="w-1/5 p-2 border-b">
                      <div className="header">
                        <div className="avatar">{data.author}</div>
                        <div className="details">
                          <span className="verified">{data.name}</span>
                          <span className="time">{data.date}</span>
                        </div>
                      </div>
                      <div className="footer">
                        <h2 className='text-xl textstyle ml-5'>{data.heading}</h2>
                        <h2 className="recommendation ml-5">
                          {data.recommended ? '  👍 I recommend the doctor' : ' 👎 I do not recommend the doctor'}
                        </h2>
                      </div>
                      <div className="content ml-5">
                        <h3>{data.text}</h3>
                      </div>

                    </div>
                  </>
                )
              })
            }
            <div style={{display:'flex',flex:1,justifyContent:'center',padding:3,marginTop:'4px'}}>
           {
            tab ==1 && (
            <Button onClick={()=>{alert('seee more')}}>
              See More
            </Button>
            )
           } 
            </div>
          </div>
          {
            tab == 1 && (
              <div className="story-card">
                <div className="w-1/5 p-2 border-b">
                  <p className='text-xl'>Common questions & answers</p>
                </div>
                {
                  questionans?.map((data) => {
                    return (
                      <>
                        <div className="w-1/5 p-2 border-b p-4">
                          <p className='text-sl textstyle'>Q: {data.ques}</p>
                          <p className='text-sl'>A: {data.ans}</p>
                        </div>
                      </>
                    )
                  })
                }

              </div>
            )
          }

          {
            tab == 1 && (
              <div className="story-card">
                <div className="w-1/5 p-2 border-b">
                  <span className='text-xl textstyle'>Services</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', padding: '3px' }}>
                    {Services?.map((data, index) => (
                      <div key={data.id} style={{ width: 'calc(100% / 3)', display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '5px' }}>•</span>
                        <span>{data.service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-1/5 p-2 border-b">
                  <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between', padding: '3px' }}>
                    <div>
                      <span className='text-xl textstyle'>Specializations</span>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {
                          Specializations?.map((data) => {
                            return (
                              <>
                                <span>• {data.Special}</span>
                              </>
                            )
                          })
                        }
                      </div>
                    </div>
                    <div>
                      <span className='text-xl textstyle mr-5'>Awards and Recognitions</span>
                      <div style={{ display: 'flex', flexDirection: 'column', width: '40ch', wordBreak: 'break-word' }}>
                        {
                          Awards?.map((data) => {
                            return (
                              <>
                                <span>•{data.award}</span>
                              </>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>


                <div className="w-1/5 p-2 border-b">
                  <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between', padding: '3px' }}>
                    <div>
                      <span className='text-xl textstyle'>Education</span>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {
                          edu?.map((data) => {
                            return (
                              <>
                                <span>• {data.name}</span>
                              </>
                            )
                          })
                        }
                      </div>
                    </div>
                    <div>
                      <span className='text-xl textstyle mr-5'>Memberships</span>
                      <div style={{ display: 'flex', flexDirection: 'column', width: '40ch', wordBreak: 'break-word' }}>
                        {
                          Member?.map((data) => {
                            return (
                              <>
                                <span>•{data.name}</span>
                              </>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>


                <div className="w-1/5 p-2 border-b">
                  <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between', padding: '3px' }}>
                    <div>
                      <span className='text-xl textstyle'>Experience</span>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {
                          experience?.map((data) => {
                            return (
                              <>
                                <span>• {data.name}</span>
                              </>
                            )
                          })
                        }
                      </div>
                    </div>
                    <div>
                      <span className='text-xl textstyle mr-5'>Registrations</span>
                      <div style={{ display: 'flex', flexDirection: 'column', width: '40ch', wordBreak: 'break-word' }}>
                        {
                          Registrations?.map((data) => {
                            return (
                              <>
                                <span>•{data.name}</span>
                              </>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )
          }

        </div>













        {/* RIght Selection */}
        <div className="right">
          <div id="container">
            <div id="header">
              <div id="header-left">
                <span className="icon">🏥</span>
                <span>Clinic Appointment</span>
              </div>
              <div className="header-right">₹300 <span className="free">FREE</span></div>
            </div>
            <div className="clinic-details">
              <div id="clinic-info">
                <div className="clinic-name">
                  All Care Dental Centre - since 1969
                </div>
                <div className="clinic-location">Indiranagar</div>
              </div>
              <div className="change-clinic cursor-pointer" onClick={() => { alert('change click') }}>Change Clinic</div>
            </div>
            <div className="tabs">
              <div className="tab active">Today <span>5 Slots Available</span></div>
              <div className="tab">Tomorrow <span>21 Slots Available</span></div>
              <div className="tab">Thu, 6 Jun <span>21 Slots Available</span></div>
            </div>
            <div className="slots border-b p-2">
              <div className="slot-time">Morning (5 slots)</div>
              <div className="slot-buttons">
                <button>05:30PM</button>
                <button>06:00PM</button>
                <button>06:30PM</button>
                <button>07:00PM</button>
                <button>07:30PM</button>
              </div>
            </div>
            <div className="slots border-b p-2">
              <div className="slot-time">Afternoon (5 slots)</div>
              <div className="slot-buttons">
                <button>05:30PM</button>
                <button>06:00PM</button>
                <button>06:30PM</button>
                <button>07:00PM</button>
                <button>07:30PM</button>
              </div>
            </div>
            <div className="slots border-b p-2">
              <div className="slot-time">Evening (5 slots)</div>
              <div className="slot-buttons">
                <button>05:30PM</button>
                <button>06:00PM</button>
                <button>06:30PM</button>
                <button>07:00PM</button>
                <button>07:30PM</button>
              </div>
            </div>
          </div>

        </div>




      </div>

      <style jsx>{`
      
      #container {
        width: 100%;
        max-width: 500px;
        margin: auto;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        padding: 16px;
        box-sizing: border-box;
      }
      #header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #E6F7FF;
        border-radius: 10px 10px 0 0;
        padding: 8px 16px;
      }
      #header-left {
        display: flex;
        align-items: center;
      }
      .icon {
        margin-right: 8px;
      }
      .header-right {
        color: #FF4D4F;
      }
      .free {
        color: green;
        font-weight: bold;
        margin-left: 4px;
      }
      .clinic-details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 16px 0;
      }
      #clinic-info {
        flex: 1;
      }
      .clinic-name {
        font-weight: bold;
      }
      .clinic-location {
        color: #888;
      }
      .change-clinic {
        color: #1890FF;
        cursor: pointer;
      }
      .tabs {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #E8E8E8;
        font-size:14px
      }
      .tab {
        flex: 1;
        text-align: center;
        padding: 8px 0;
        cursor: pointer;
       
      }
      .tab.active {
        border-bottom: 2px solid #1890FF;
        font-weight: bold;
      }
      .slots {
        margin-top: 16px;
      }
      .slot-time {
        margin-bottom: 8px;
       
      }
      .slot-buttons {
        display: flex;
        justify-content: space-between;
        flex-wrap:wrap;
        
      }
      .slot-buttons button {
        background: #fff;
        border: 1px solid #1890FF;
        color: #1890FF;
        border-radius: 4px;
        // padding: 8px 16px;
        cursor: pointer;
        margin: 4px;
        flex: 1;
        max-width: 30%;
      }
      .slot-buttons button:hover {
        background: #1890FF;
        color: #fff;
      }






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
        .left{
          flex:3.5;
        }
        .profile-card {
          display: flex;
          flex: 3;
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
        }
        .left-section {
          flex: 1;
        }
        .right {
          flex:1.5;
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
        .story-card {
          border: 1px solid #e0e0e0;
          padding: 16px;
          border-radius: 8px;
          margin-top: 16px;
          margin-bottom:16px
      }
      .header {
          display: flex;
          padding:10;
          align-items: center;
      }
      .avatar {
          width: 40px;
          height: 40px;
          background-color: #f0f0f0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          margin-right: 16px;
      }
      .details {
          display:flex;
          flex:1;
          flex-direction:row;
          justify-content:space-between;
      }
      .verified {
          font-weight: bold;
      }
      .time {
          color: #888;
      }
      .content {
          margin-top: 16px;
      }
      .full {
          white-space: normal;
      }
      .truncated {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
      }
      .button {
          background: none;
          border: none;
          color: #007bff;
          cursor: pointer;
      }
      .footer {
          display: flex;
          justify-content: flex-start;
          flex-direction:column;
          margin-top: 16px;
      }
      .footer button {
          margin-right: 8px;
      }
      .footer .active {
          color: #007bff;
      }
      @media (max-width: 600px) {
          .story-card {
              padding: 12px;
          }
          .avatar {
              width: 30px;
              height: 30px;
              font-size: 14px;
          }
          .content h3 {
              font-size: 16px;
          }
          .footer button {
              font-size: 14px;
          }
      }
      `}</style>
    </div>
  );
}

export default Profiledoctor;
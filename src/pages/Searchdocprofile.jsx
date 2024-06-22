
"use client"
import Searchbar from '@/components/Searchbar';
import React, { useEffect, useRef, useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from '@material-tailwind/react';
import Link from 'next/link';
import { makeRequest } from '@/Utils/FatchData'
import { search_URL } from '@/Utils/Api_URL'
import { decryptData } from '@/Utils/Sceret'

const Searchdocprofile = ({ searchvalue }) => {
  // console.log(searchvalue)
  const [searchdata, setsearchdata] = useState([])
  const [filtervalue,setfiltervalue] = useState(searchvalue)
  useEffect(() => {
    // setfiltervalue(searchvalue)
    try {
      makeRequest('get', `${search_URL}?data=${JSON.stringify(searchvalue)}`).then((resp) => {
        console.log("data==>", resp.data)
        // if(resp.command ==1){
          const respdata = JSON.parse(decryptData(resp.data))
          console.log(respdata)
          setsearchdata(respdata)
        // }
      })
    }
    catch (e) {
      console.log(e)
    }
  }, [searchvalue])
  
  // ///////////////////////////  State  ///////////////////////////
  const navRef = useRef(null);
  const mapRef = useRef(null);
  const [showSlots, setShowSlots] = useState(false);
  const [currentDateIndex, setCurrentDateIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [indexopen, setindexopen] = useState()
  const [showfilter, setshowfilter] = useState(false)



  /////////////////////////// Data ///////////////////////////
  const dates = ["Today", "Tomorrow", "June 5", "June 6"];
  const slots = {
    morning: ["08:00 AM", "09:00 AM", "10:00 AM"],
    afternoon: ["12:00 PM", "01:00 PM", "02:00 PM"],
    evening: ["04:00 PM", "05:00 PM", "06:00 PM"],
    night: ["08:00 PM", "09:00 PM", "10:00 PM"]
  };

  const locationdata = [
    {
      id: '1',
      name: 'Hsr Layout'
    },
    {
      id: '2',
      name: 'Whitefield'
    },
    {
      id: '3',
      name: 'Indiranagar'
    },
    {
      id: '4',
      name: 'Sarjapur Road'
    },
    {
      id: '5',
      name: 'Marathahalli'
    },
  ]


  // const data = [
  //   {
  //     id: 1,
  //     docname: 'Dr. Venkatesh M J',
  //     prof: 'Dentist',
  //     exp: '29 years experience overall',
  //     city: 'Indiranagar',
  //     state: 'Bangalore',
  //     carecenter: 'All Care Dental Centre since 1969 +1 more',
  //     free: true,
  //     fee: 1300,
  //     consult: 'Consultation fee at clinic',
  //     ratting: '70%',
  //     stories: '3 Patient Stories',
  //     Avaiable: 'Available Today',
  //   },
  //   {
  //     id: 2,
  //     docname: 'Dr. Venkatesh M J',
  //     prof: 'Dentist',
  //     exp: '29 years experience overall',
  //     city: 'Indiranagar',
  //     state: 'Bangalore',
  //     carecenter: 'All Care Dental Centre since 1969 +1 more',
  //     free: false,
  //     fee: 430,
  //     consult: 'Consultation fee at clinic',
  //     ratting: '89%',
  //     stories: '7 Patient Stories',
  //     Avaiable: 'Available Today',
  //   },
  //   {
  //     id: 3,
  //     docname: 'Dr. Venkatesh M J',
  //     prof: 'Dentist',
  //     exp: '29 years experience overall',
  //     city: 'Indiranagar',
  //     state: 'Bangalore',
  //     carecenter: 'All Care Dental Centre since 1969 +1 more',
  //     free: true,
  //     fee: 200,
  //     consult: 'Consultation fee at clinic',
  //     ratting: '89%',
  //     stories: '7 Patient Stories',
  //     Avaiable: 'Available Today',
  //   },
  //   {
  //     id: 4,
  //     docname: 'Dr. Venkatesh M J',
  //     prof: 'Phycial',
  //     exp: '2 years experience overall',
  //     city: 'Indiranagar',
  //     state: 'Delhi',
  //     carecenter: 'All Care Dental Centre since 1969 +1 more',
  //     free: true,
  //     fee: 400,
  //     consult: 'Consultation fee at clinic',
  //     ratting: '80%',
  //     stories: '3 Patient Stories',
  //     Avaiable: 'Available 6 June',
  //   },
  //   {
  //     id: 5,
  //     docname: 'Dr. Venkatesh M J',
  //     prof: 'Dentist',
  //     exp: '29 years experience overall',
  //     city: 'Indiranagar',
  //     state: 'Bangalore',
  //     carecenter: 'All Care Dental Centre since 1969 +1 more',
  //     free: true,
  //     fee: 500,
  //     consult: 'Consultation fee at clinic',
  //     ratting: '89%',
  //     stories: '7 Patient Stories',
  //     Avaiable: 'Available Today',
  //   },

  // ]

  // ////////////////////// Funcation  //////////////////////
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleBookClick = (key) => {
    setindexopen(key)
    setShowSlots(!showSlots);
  };

  const handleNextDate = () => {
    setCurrentDateIndex((prevIndex) => Math.min(prevIndex + 1, dates.length - 1));
  };

  const handlePreviousDate = () => {
    setCurrentDateIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > navRef.current.offsetTop) {
          navRef.current.classList.add('sticky');
        } else {
          navRef.current.classList.remove('sticky');
        }
      }

      if (mapRef.current) {
        if (window.scrollY > mapRef.current.offsetTop) {
          // mapRef.current.classList.add('sticky');
        } else {
          // mapRef.current.classList.remove('sticky');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // ///////////////////////  Login Algo  ////////////////////////
  const dataPerPage = 10;
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = searchdata?.slice(indexOfFirstData, indexOfLastData);

  const handlefilter = (e) => {
    console.log('funcation call')
    const { name, value } = e.target;
    setfiltervalue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(filtervalue);
  };

  const slotavailable = (data)=>{
    console.log(data)
  }

  return (
    <>
      <div>
        <div>
          <Searchbar searchvalue={searchvalue} />
        </div>

        <div className="container">
          <div ref={navRef} className="navbar">
            <div className='flex-1 flex-wrap'>
              <div className="filters">
                <select name='gender' onchange={handlefilter} className="filter-dropdown">
                  <option value="">Gender</option>
                  <option value="male">Male Doctor</option>
                  <option value="female">Female Doctor</option>
                </select>
                <select className="filter-dropdown" onchange={handlefilter}>
                  <option value="">Patient Stories</option>
                  <option value="10">10+ Stories</option>
                  <option value="20">20+ Stories</option>
                </select>
                <select className="filter-dropdown" onchange={handlefilter}>
                  <option value="">Experience</option>
                  <option value="1-5">1-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="5-10">10-20 years</option>
                  <option value="5-10">20-above years</option>
                </select>
                <div className="filter-dropdown" onClick={() => { setshowfilter((e) => !e) }}>
                  All filter
                </div>
           
                <select className="filter-dropdown" onchange={handlefilter}>
                  <option value="relevance">Sort By</option>
                  <option value="story_high_to_low">Number of patient stories - High to low</option>
                  <option value="Experience_high_to_low">Experience - High to Low</option>
                  <option value="ConsultationFee_High_to_Low">Consultation Fee - High to Low</option>
                  <option value="ConsultationFee_low_to_high">Consultation Fee - Low to High</option>

                </select>
              </div>

              
                {
                  showfilter && (
                    <>
                    <div className='flex flex-row flex-wrap flex-1 gap-10 p-5'>
                      <div className='flex flex-col '>
                        <h2>Fees</h2>
                        <div className='flex gap-1'>
                        <input type="radio" name="fee" value="0-500" aria-label='fee' onchange={handlefilter}/>0-500

                        </div>
                        <div className='flex gap-1'>

                        <input type="radio" name="fee" value="500-1000" onchange={handlefilter}/>500-above
                        </div>
                        <div className='flex gap-1'>
                        <input type="radio" name="fee" value="1000-2000" onchange={handlefilter}/>1000-above

                        </div>
                        <div className='flex gap-1'>
                        <input type="radio" name="fee" value="2000-0" onchange={handlefilter}/>2000-above

                        </div>
                      </div>
                      <div className='flex flex-col '>
                        <h2>Availability</h2>
                        <div className='flex gap-1'>
                        <input type="radio" name="Availability" value="0-500" aria-label='fee' onchange={handlefilter}/>Available in next 4 hours
                        </div>
                        <div className='flex gap-1'>
                        <input type="radio" name="Availability" value="500-1000" onchange={handlefilter}/> Available Today

                        </div>
                        <div className='flex gap-1'>
                        <input type="radio" name="Availability" value="1000-2000" onchange={handlefilter}/>Available Tomorrow

                        </div>
                        <div className='flex gap-1'>
                        <input type="radio" name="Availability" value="2000-0" onchange={handlefilter}/>Available in next 7 days
                        </div>
       

                      </div>
                      <div className='flex flex-col '>
                        <h2>Consult type</h2>
                        <div className='flex gap-1'>
                        <input type="radio" name="Consulttype" value="Video consult" onchange={handlefilter}/>Video consult
                        </div>
                      </div>
                    </div>
                    </>
                  )
                }


            

            </div>
          </div>
          <div className="content">
            <div className="left">
              <img src='/DoctorListingBannerDWeb.jpg' alt='banner' />
              <div className='mt-3'>
                <p className='text-3xl'>{searchdata?.length || 0} doctors available in {searchvalue.doc}</p>
                <p className='text-xl'><CheckCircleIcon style={{ color: 'gray' }} /> Book appointments with minimum wait-time & verified doctor details</p>
              </div>
              {
                currentData?.map((data, index) => {
                  return (
                    <>
                      <div className="card">
                        <div className="left-section">
                          <img src="/offer-specialist-v1.png" alt="Doctor" className="doctor-image" />
                          <Link href={`/doctorprofile/${data._id}`} className="badge">View Profile</Link>
                          {/* <Link href={`/doctorprofile/${data.id}`} className="badge">View Profile</Link> */}
                        </div>
                        <div className="middle-section">
                          <h2>{data.fullname}</h2>
                          <p className='text-left'>{data?.spcename[0]?.spec}</p>
                          <p className='text-left'>{data.experience} years experience overall</p>
                          <p className='text-left'>{data?.cityname[0]?.name}, {data?.statename[0].name} • {data?.carecenter}</p>
                          <p className='text-left'><span className="free">{data.free ? 'FREE' : ''}</span> <span className={`${data.free ? 'fee' : 'text-lg text-bold'}`}>₹{data.feePerCunsultation}</span> {'Consultation fee at clinic'}</p>
                          {/* <p className='text-left'>{data.prof}</p>
                          <p className='text-left'>{data.exp}</p>
                          <p className='text-left'>{data.city}, {data.state} • {data.carecenter}</p>
                          <p className='text-left'><span className="free">{data.free?'FREE':''}</span> <span className={`${data.free?'fee':'text-lg text-bold'}`}>₹{data.fee}</span> {data.consult}</p> */}
                          <div className="rating">
                            <ThumbUpAltIcon style={{ color: 'green' }} />
                            <span>{data?.ratting || 100}%</span>
                            <u className="stories">{data?.stories || 0} Patient Stories</u>
                          </div>
                        </div>
                        <div className="right-section">
                          <div className="available">
                            <CheckCircleIcon style={{ color: 'green' }} />
                            <span>{"Available Today"}</span>
                            {/* <span>{data.Avaiable}</span> */}
                          </div>
                          <button onClick={() => handleBookClick(index)}>Book FREE Clinic Visit</button>
                        </div>
                      </div>
                      <div>
                        {indexopen == index && showSlots && (
                          <div className="slots">
                            <div className="date-navigation">
                              <ArrowBackIosIcon onClick={handlePreviousDate} style={{ cursor: 'pointer' }} />
                              <p>{dates[currentDateIndex]}<span style={{ color: 'green' }}> (3 Slot Available)</span></p>

                              <ArrowForwardIosIcon onClick={handleNextDate} style={{ cursor: 'pointer' }} />
                            </div>
                            <div className="slot-section">
                              <div className="slot-category">
                                <p className='text-left'>Morning</p>
                                <div className="slot-times">
                                  {slots.morning.map((time,index) => (
                                    <span onClick={() => alert(time)} key={index}>{time}</span>
                                  ))}
                                </div>
                              </div>
                              <div className="slot-category">
                                <p className='text-left'>Afternoon</p>
                                <div className="slot-times">
                                  {slots.afternoon.map((time, index) => (
                                    <span onClick={() => alert(time)} key={index}>{time}</span>
                                  ))}
                                </div>
                              </div>
                              <div className="slot-category">
                                <p className='text-left'>Evening</p>
                                <div className="slot-times">
                                  {slots.evening.map((time, index) => (
                                    <span onClick={() => alert(time)} key={index}>{time}</span>
                                  ))}
                                </div>
                              </div>
                              <div className="slot-category">
                                <p className='text-left'>Night</p>
                                <div className="slot-times">
                                  {slots.night.map((time, index) => (
                                    <span onClick={() => alert(time)} key={index}>{time}</span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  )
                })
              }
            </div>
            <div ref={mapRef} className="right">
          
              <div className='bg-white p-4 shadow-lg border rounded-lg hover:shadow-sm transition duration-200 max-w-sm'>
                <div>
                  <p className='text-blue-400 text-xl'>Provide current location to see Dentist near you</p>
                  <p className='text-blue-400 text-sm'>You are seeing results from Bangalore. See results near you</p>
                </div>
                <div className="locations">
                  {
                    locationdata?.map((data, index) => {
                      return <p onClick={() => { alert(data.name) }} key={index}>{data.name}</p>
                    })
                  }

                </div>
                <div className='flex gap-2'>
                  <Button onClick={() => { alert('Search Location') }} style={{ background: '#fff', color: '#3F51B4' }}> Search Location</Button>
                  <Button onClick={() => { alert('Current Location') }} style={{ background: '#3F51B4' }}> Current Location</Button>
                </div>
              </div>
            </div>
          </div>
          <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top:1%;
        }
        .navbar {
          width: 100%;
          display: flex;
          justify-content: space-around;
          background-color: #3f51b5;
          color: white;
          padding: 10px;
        }
        .sticky {
          position: fixed;
          top: 0;
          z-index: 1000;
        }
        .content {
          display: flex;
          width: 100%;
          max-width: 1200px;
          margin-top: 50px;
        }
        .left {
          flex:3;
          overflow-y: auto;
          height: calc(100vh - 50px);
        }
        .right {
          flex:1;
          background-image:url('/mapfill.png');
          display: flex;
          flex-direction: column;
          padding:2%;
          margin-top:3rem
          justify-content: center;
          align-items: center;

        }
        .card {
          display: flex;
          border: 1px solid #ddd;
          padding: 20px;
          margin: 10px 0;
          align-items: center;
          justify-content: space-between;
          background-color: #fff;
          border-radius: 8px;
        }
        .left-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 20px;
        }
        .doctor-image {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin-bottom: 10px;
        }
        .badge {
          background-color:#007bff;
          color: white;
          padding: 5px 10px;
          border-radius: 5px;
          font-size: 12px;
        }
        .middle-section {
          flex: 1;
        }
        .left h2 {
          margin: 0;
          font-size: 20px;
          color: #007bff;
        }
        .text-left {
          margin: 5px 0;
          color: #666;
          font-size: 14px;
        }
        .free {
          color: green;
          font-weight: bold;
        }
        .fee {
          text-decoration: line-through;
          color: red;
        }
        .rating {
          display: flex;
          align-items: center;
          margin-top: 10px;
        }
        .rating span {
          margin-left: 5px;
          font-size: 14px;
          color: #666;
        }
        .stories {
          margin-left: 10px;
          color: #007bff;
          cursor: pointer;
        }
        .right-section {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .available {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
        .available span {
          margin-left: 5px;
          color: green;
          font-size: 14px;
        }
        .left button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
        }
 .slots {
          width: 100%;
          border-top: 1px solid #ddd;
          padding-top: 20px;
          margin-top: 20px;
        }
        .date-navigation {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .slot-section {
          display: flex;
          flex-direction: column;
        }
        .slot-category {
          margin-bottom: 20px;
        }
        .slot-category p {
          margin: 0;
          font-size: 16px;
          font-weight: bold;
          color: #333;
        }
        .slot-times {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .slot-times span {
          background-color: #f0f0f0;
          padding: 5px 10px;
          border-radius: 5px;
          cursor: pointer;
        }
       
        .locations {
          display: flex;
          flex-wrap: wrap;
        }
        .locations p {
          flex: 1 1 33%; 
          box-sizing: border-box;
          margin: 5px;
          border:3px solid #DCDCDC;
          border-redius:5%;
          text-align:center;
          cursor:pointer;
        }
        .locations p :hover{
          background-color: #434EA2;
        }
       
        .filters {
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          gap: 10px;
        }
        .filter-dropdown {
          flex: 1;
          padding: 10px;
          margin-right: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #3f51b5;
        }
        .ad-banner {
          margin: 20px 0;
        }
        .ad-banner img {
          width: 100%;
          height: auto;
        }
        .results {
          margin-top: 20px;
        }
        .location-notification {
          display: flex;
          flex-direction: column;
          padding: 10px;
          background-color: #f8f8f8;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin-top: 20px;
        }
        .location-buttons {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }
        .location-buttons button {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #fff;
          cursor: pointer;
        }
        .location-buttons .current-location {
          background-color: #007bff;
          color: #fff;
          border: none;
        }
        @media (max-width: 768px) {
          .content {
            flex-direction: column;
          }
          .left, .right {
            width: 100%;
            height: auto;
          }
          .locations p {
            flex: 1 1 50%; /* Adjust for smaller screens, each item takes up 1/2 of the container */
          }
          .card {
            flex-direction: column;
            align-items: flex-start;
          }
          .left-section, .right-section {
            margin-right: 0;
            margin-bottom: 10px;
          }
        }
      `}</style>
        </div>
      </div>
      <div>
{
  searchdata.length>0 && (
    <div className="flex justify-center p-5">
    <nav className="flex space-x-2" aria-label="Pagination">
      <button style={{ background: '#007BFF' }} onClick={prevPage} disabled={currentPage === 1} className="relative inline-flex items-center px-4 py-2 text-sm  border border-fuchsia-100 hover:border-themecolor text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
        Previous
      </button>
      {[...Array(Math.ceil(searchdata.length / dataPerPage)).keys()].map(number => (
        <button style={{ background: '#007BFF' }} key={number} onClick={() => setCurrentPage(number + 1)} className={`relative inline-flex items-center px-4 py-2 text-sm font-medium ${currentPage === number + 1 ? 'text-white bg-themecolor border border-fuchsia-100 hover:border-themecolor' : 'text-yellow-700 bg-white border border-fuchsia-100 hover:bg-themecolor'} cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10`}>
          {number + 1}
        </button>
      ))}
      <button style={{ background: '#007BFF' }} onClick={nextPage} disabled={indexOfLastData >= searchdata.length} className="relative inline-flex items-center px-4 py-2 text-sm bg-themecolor  border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
        Next
      </button>
    </nav>
  </div>
  )
}
       

      </div>
    </>
  )
}

export default Searchdocprofile

"use client"

import React, { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
function DoctorEdit({ data, setdataadd, onSubmit, eduData, setUserData }) {

 
  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('Eye Care');

  const [instagramUsername, setInstagramUsername] = useState('');
  const [facebookUsername, setFacebookUsername] = useState('');
  const [linkedinUsername, setLinkedinUsername] = useState('');
  const [twitterUsername,setTwitterUsername]= useState('');
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to your backend
    console.log({
      image,
      firstName,
      lastName,
      email,
      phone,
      department,
   
      instagramUsername,
      facebookUsername,
    });
  };

  return (

    <div className="p-3 pt-4">

<span className="cursor-pointer" onClick={() => { setdataadd(false) }}><SkipPreviousIcon/>Back</span>
    <h1 className="text-2xl font-bold mb-4">{data}</h1>
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="grid grid-cols-2 gap-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Upload your picture
        </label>
        <input type="file" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleImageUpload} />
        {image && <img src={URL.createObjectURL(image)} alt="Profile Picture" className="mt-2 w-24 h-24 rounded-full" />}
        <p className="text-gray-600 text-xs italic">
          For best results, use an image at least 600px by 600px in either .jpg or .png format.
        </p>
      </div>
  
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          First Name
        </label>
        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </div>
  
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Last Name
        </label>
        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
  
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Your Email
        </label>
        <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
  
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Phone no.
        </label>
        <input type="tel" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
  
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Departments
        </label>
        <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option value="Eye Care">Eye Care</option>
          {/* Add more department options */}
        </select>
      </div>
  
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Instagram
        </label>
        <div className="flex items-center">
          <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <InstagramIcon />
          </span>
          <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2" value={instagramUsername} onChange={(e) => setInstagramUsername(e.target.value)} />
        </div>
      </div>
  
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Facebook
        </label>
        <div className="flex items-center">
          <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <FacebookIcon />
          </span>
          <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2" value={facebookUsername} onChange={(e) => setFacebookUsername(e.target.value)} />
        </div>
      </div>
  
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          LinkedIn
        </label>
        <div className="flex items-center">
          <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <LinkedInIcon />
          </span>
          <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2" value={linkedinUsername} onChange={(e) => setLinkedinUsername(e.target.value)} />
        </div>
      </div>
  
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Twitter
        </label>
        <div className="flex items-center">
          <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <XIcon />
          </span>
          <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2" value={twitterUsername} onChange={(e) => setTwitterUsername(e.target.value)} />
        </div>
      </div>
  
      <div className="mb-4 col-span-2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">
          Bio
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="bio"
          placeholder="Your Bio Here"
          name="bio"
          value={bio} onChange={(e) => setBio(e.target.value)} />
      </div>
  
    </div>
    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Add Doctor
    </button>
  </form>


    </div>
 
  
  );
}

export default DoctorEdit;
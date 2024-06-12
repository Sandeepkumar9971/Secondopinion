import React, { useState } from 'react';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
interface AppointmentEditProps {
  data: any;
  setdataadd: (data: any) => void;
  onSubmit: (formData: any) => void;
  eduData: any;
  setUserData: (data: any) => void;
}

const PatientsAdd: React.FC<AppointmentEditProps> = ({ data, setdataadd, onSubmit, eduData, setUserData }) => {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    doctor: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    comments: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    onSubmit(formData); // Call the onSubmit prop function
  };

  return (
    <div className="p-3 pt-4">
    <span className="cursor-pointer" onClick={() => { setdataadd(false) }}><SkipPreviousIcon/>Back</span>
    <h1 className="text-2xl font-bold mb-4">{data}</h1>
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">
              Patient Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Patient Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">
              Departments
            </label>
            <select
              name="department"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.department}
              onChange={handleChange}
            >
              <option value="">Select Department</option>
              <option>Eye Care</option>
              <option>Gynecologist</option>
              <option>Psychotherapist</option>
              <option>Orthopedic</option>
              <option>Dentist</option>
              <option>Gastrologist</option>
              <option>Urologist</option>
              <option>Neurologist</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">
              Doctor
            </label>
            <select
              name="doctor"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.doctor}
              onChange={handleChange}
            >
              <option value="">Select Doctor</option>
              <option>Dr. Calvin Carlo</option>
              <option>Dr. Cristino Murphy</option>
              <option>Dr. Alia Reddy</option>
              <option>Dr. Toni Kovar</option>
              <option>Dr. Jessica McFarlane</option>
              <option>Dr. Elsie Sherman</option>
              <option>Dr. Bertha Magers</option>
              <option>Dr. Louis Batey</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">
              Your Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">
              Your Phone <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              type="tel"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">
              Date
            </label>
            <input
              name="date"
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">
              Time
            </label>
            <input
              name="time"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="03:30 PM"
              value={formData.time}
              onChange={handleChange}
            />
          </div>
          <div className="lg:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">
              Comments <span className="text-red-500">*</span>
            </label>
            <textarea
              name="comments"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Message"
              value={formData.comments}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
     
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
);
 
};

export default PatientsAdd;

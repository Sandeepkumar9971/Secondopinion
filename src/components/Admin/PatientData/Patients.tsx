"use client";

import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PatientsEdit from "./PatientsEdit";
import PatientsAdd from "./PatientsAdd";

const Patients = () => {

    const [dataadd, setDataAdd] = useState(false);
    const [editData, setEditData] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const dataPerPage = 10;

    const [userData, setUserData] = useState([
        {
            id: 1,
            doctorName: "Damilare Anjorin",
            patientName: "raman",
            gender: "male",
            speciality: "Cardiology",
            phone: "+2348106420637",
            status: "active",
            createdAt: "September 12",
      
            fees: 1500
        },
        {
            id: 2,
            doctorName: "Damilare Anjorin",
            patientName: "pandey",
            gender: "male",
            speciality: "Cardiology",
            phone: "+2348106420637",
            status: "active",
            createdAt: "September 12",
         
            fees: 1500
        },
    ]);

    const handleEdit = (eduData: React.SetStateAction<null>) => {
        setEditData(eduData);
        setDataAdd(false); 
    };

    const filteredData = userData.filter(user => {
        return (
            user.doctorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.speciality.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.phone.includes(searchQuery)
        );
    });

    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = filteredData.slice(indexOfFirstData, indexOfLastData);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleSubmit = () => {
        setDataAdd(true);
    };

    return (
        <>
            {dataadd ? (
                <PatientsAdd data={"add data"} setdataadd={setDataAdd} onSubmit={function (formData: any): void {
                    throw new Error("Function not implemented.");
                } } eduData={undefined} setUserData={function (data: any): void {
                    throw new Error("Function not implemented.");
                } } />
            ) : editData ? (
                <PatientsEdit
                    data={"Edit data"}
                    setdataadd={setEditData}
                    eduData={editData}
                    setUserData={setUserData}
                    onSubmit={handleEdit}
                />
            ) : (
                <>
                    <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
                        <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
                            <div className="flex justify-between">
                                <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
                                    <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
                                        <div className="flex">
                                            <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                                                <svg width="18" height="18" className="w-4 lg:w-auto" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z" stroke="#455A64" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M16.9993 16.9993L13.1328 13.1328" stroke="#455A64" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-black-500 font-thin"
                                            placeholder="Search"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <button
                                    className="rounded-lg bg-cyan-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    data-ripple-light="true"
                                    onClick={handleSubmit}
                                >
                                  Patients Add
                                </button>
                            </div>
                        </div>
                        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                            <table className="min-w-full">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>

                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Patient Name</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Age</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Gender</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Address</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Phone</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Status</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Created At</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Fees</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300"></th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
  {currentData.map((row, index) => (
    <tr key={row.id}>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="flex items-center">
          <div>
            <div className="text-sm leading-5 text-gray-800">{indexOfFirstData + index + 1}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="text-sm leading-5 text-blue-900">{row.doctorName}</div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{row.patientName}</td>
      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{row.speciality}</td>
      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{row.phone}</td>
      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
          <span className="relative text-xs">{row.status}</span>
        </span>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{row.createdAt}</td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{row.gender}</td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{row.fees}</td>
      <td className="px-6 py-4 space-x-2 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
        <button className="inline-flex items-center justify-center p-0 h-9 w-9 rounded focus:outline-none transition-all duration-300 bg-[#53c7971a] border border-[#53c7971a] shadow-[0_3px_5px_0_#53c7974d] text-[#53c797]">
          <VisibilityIcon />
        </button>
        <button className="inline-flex items-center justify-center p-0 h-9 w-9 rounded focus:outline-none transition-all duration-300 bg-[#53c7971a] border border-[#53c7971a] shadow-[0_3px_5px_0_#53c7974d] text-[#53c797]" onClick={() => handleEdit(row)}>
          <EditIcon />
        </button>
        <button className="inline-flex items-center justify-center p-0 h-9 w-9 rounded focus:outline-none transition-all duration-300 bg-[#53c7971a] border border-[#53c7971a] shadow-[0_3px_5px_0_#53c7974d] text-[#53c797]">
          <DeleteForeverIcon />
        </button>
      </td>
    </tr>
  ))}
</tbody>
                            </table>
                        </div>
                    </div>
                    <div className="flex justify-center mt-5">
                        <nav aria-label="Page navigation">
                            <ul className="flex space-x-2">
                                <li>
                                    <button onClick={prevPage} disabled={currentPage === 1} className="bg-gray-200 px-3 py-1 rounded">Previous</button>
                                </li>
                                {[...Array(Math.ceil(filteredData.length / dataPerPage)).keys()].map((number) => (
                                    <li key={number}>
                                        <button onClick={() => setCurrentPage(number + 1)} className={`px-3 py-1 rounded ${currentPage === number + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>{number + 1}</button>
                                    </li>
                                ))}
                                <li>
                                    <button onClick={nextPage} disabled={indexOfLastData >= filteredData.length} className="bg-gray-200 px-3 py-1 rounded">Next</button>
                                </li>
                            </ul>
                        </nav>
                    </div>

















                    
                </>
            )}
        </>
    );
};

export default Patients;

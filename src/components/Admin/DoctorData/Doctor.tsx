"use client"
import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DoctorAdd from "./DoctorAdd";
import DoctorEdit from "./DoctorEdit";

const Doctor = () => {
  const [dataadd, setDataAdd] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleEdit = (eduData: React.SetStateAction<null>) => {
    setEditData(eduData);
    setDataAdd(false);
  };

  return (
    <>
      {dataadd ? (
        <DoctorAdd
          data={"add data"}
          setdataadd={setDataAdd}
          onSubmit={(formData) => {
            // Handle form submission
          }}
          eduData={undefined}
          setUserData={(data) => {
            // Handle setting user data
          }}
        />
      ) : editData ? (
        <DoctorEdit
          data={"Edit data"}
          setdataadd={setEditData}
          eduData={editData}
          onSubmit={handleEdit}
        />
      ) : (
        <>
          <div className="flex justify-between items-center mt-10 mx-4 sm:mx- ml-5">
            <h2 className="text-lg font-semibold text-gray-900">Doctors</h2>
            <button
              className="rounded-lg bg-cyan-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
              onClick={() => setDataAdd(true)}
            >
              Add New Doctor
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ml-5 sm:px-0">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="relative rounded-lg bg-cyan-500 text-center shadow group"
              >
                <div className="flex flex-1 flex-col p-8">
                  <img
                    className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                    src="/doctors/doctor-thumb-02.jpg"
                    alt=""
                  />
                  <h3 className="mt-6 text-sm font-medium text-gray-900">
                    Najib Gafar
                  </h3>
                  <dl className="mt-1 flex flex-grow flex-col justify-between">
                    <dd className="mt-3">
                      <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-green-600/20">
                        Eye Care
                      </span>
                    </dd>
                  </dl>
                </div>
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 flex gap-2 pointer-events-none flex-col">
                  <div>
                    <button className="inline-flex items-center justify-center h-9 w-9 rounded focus:outline-none transition-transform duration-300 bg-white border border-[#396cf01a] shadow-[0_3px_5px_0_#396cf04d] text-[#396cf0] transform scale-100 group-hover:scale-110">
                      <EditIcon />
                    </button>
                  </div>
                  <div>
                    <button className="inline-flex items-center justify-center h-9 w-9 rounded focus:outline-none transition-transform duration-300 bg-white border border-[#396cf01a] shadow-[0_3px_5px_0_#396cf04d] text-[#396cf0] transform scale-100 group-hover:scale-110">
                      <DeleteForeverIcon />
                    </button>
                  </div>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 flex gap-2 pointer-events-auto flex-col">
                  <div>
                    <FaFacebook className="cursor-pointer h-6 w-6 text-[#396cf0] transform scale-100 group-hover:scale-110" />
                  </div>
                  <div>
                    <FaTwitter className="cursor-pointer h-6 w-6 text-[#396cf0] transform scale-100 group-hover:scale-110" />
                  </div>
                  <div>
                    <FaLinkedin className="cursor-pointer h-6 w-6 text-[#396cf0] transform scale-100 group-hover:scale-110" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Doctor;

"use client"

import React, { useState } from "react";

const Deshboard = () => {
  

  return (
    <div >
     
     <section id="content"
            className="w-[100wh-60px] lg:w-[100wh-250px] ml-[60px] lg:ml-[240px] p-5 right-0 transition-all duration-500 ease-in-out">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <div className="bg-slate-50 p-5 m-2 rounded-md flex justify-between items-center shadow">
                    <div>
                        <h3 className="font-bold">Doctors</h3>
                        <p className="text-gray-500">100</p>
                    </div>
                    <i className="fa-solid fa-users p-4 bg-gray-200 rounded-md"></i>
                </div>

                <div className="bg-slate-50 p-5 m-2 flex justify-between items-center shadow">
                    <div>
                        <h3 className="font-bold">Patients</h3>
                        <p className="text-gray-500">65</p>
                    </div>
                    <i className="fa-solid fa-users p-4 bg-green-200 rounded-md"></i>
                </div>

                <div className="bg-slate-50 p-5 m-2 flex justify-between items-center shadow">
                    <div>
                        <h3 className="font-bold">Appointment</h3>
                        <p className="text-gray-500">30</p>
                    </div>
                    <i className="fa-solid fa-users p-4 bg-yellow-200 rounded-md"></i>
                </div>

                <div className="bg-slate-50 p-5 m-2 flex justify-between items-center shadow">
                    <div>
                        <h3 className="font-bold">Revenue</h3>
                        <p className="text-gray-500">5</p>
                    </div>
                    <i className="fa-solid fa-users p-4 bg-red-200 rounded-md"></i>
                </div>
            </div>

           
        </section>
    </div>
  );
};

export default Deshboard;

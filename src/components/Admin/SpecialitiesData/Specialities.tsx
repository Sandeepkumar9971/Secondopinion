import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import VisibilityIcon from '@mui/icons-material/Visibility';
const Specialities = () => {
    return (




<>
<div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
                    <div className="flex justify-between">
                        <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
                            <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
                                <div className="flex">
                                    <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                                        <svg width="18" height="18" className="w-4 lg:w-auto" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16.9993 16.9993L13.1328 13.1328" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                                <input type="text" className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-thin" placeholder="Search"/>
                            </div>
                        </div>


                        <button
          className="rounded-lg bg-cyan-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
     Add
        </button>


                    </div>
                </div>
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
          
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Doctor Name</th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Specialities</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Phone</th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Status</th>
   
                <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            <tr>
                                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                          <div className="flex items-center">
                                              <div>
                                                  <div className="text-sm leading-5 text-gray-800">#1</div>
                                              </div>
                                          </div>
                                      </td>
                                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                          <div className="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                                      </td>
                                      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5"> <div className="relative h-10 w-10">
                    <img
                      className="h-full w-full rounded-full object-cover object-center"
                      src="/specialities/specialities-01.png"
                      alt=""
                    />
                   
                  </div></td>
                                      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>
                                      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                          <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                          <span aria-hidden className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                          <span className="relative text-xs">disabled</span>
                                      </span>
                                      </td>
  
                                      <td className="px-6 py-4 space-x-2 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                   
                                   <button className="inline-flex items-center justify-center p-0 h-9 w-9 rounded focus:outline-none transition-all duration-300 bg-[#53c7971a] border border-[#53c7971a] shadow-[0_3px_5px_0_#53c7974d] text-[#53c797]">
                                       <VisibilityIcon />
                                   </button>
                                   <button className="inline-flex items-center justify-center p-0 h-9 w-9 rounded focus:outline-none transition-all duration-300 bg-[#53c7971a] border border-[#53c7971a] shadow-[0_3px_5px_0_#53c7974d] text-[#53c797]">
                                       <EditIcon />
                                   </button>
                                   <button className="inline-flex items-center justify-center p-0 h-9 w-9 rounded focus:outline-none transition-all duration-300 bg-[#53c7971a] border border-[#53c7971a] shadow-[0_3px_5px_0_#53c7974d] text-[#53c797]">
                                       <DeleteForeverIcon />
                                   </button>
                               
                               
                                                                   </td>
                            </tr>
  
  
                            <tr>
                                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                          <div className="flex items-center">
                                              <div>
                                                  <div className="text-sm leading-5 text-gray-800">#1</div>
                                              </div>
                                          </div>
                                      </td>
                                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                          <div className="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                                      </td>
                                      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5"> <div className="relative h-10 w-10">
                    <img
                      className="h-full w-full rounded-full object-cover object-center"
                      src="/specialities/specialities-02.png"
                      alt=""
                    />
                   
                  </div></td>
                                      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>
                                      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                          <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                          <span aria-hidden className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                          <span className="relative text-xs">disabled</span>
                                      </span>
                                      </td>
  
                                      <td className="px-6 py-4 space-x-2 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                   
                                   <button className="inline-flex items-center justify-center p-0 h-9 w-9 rounded focus:outline-none transition-all duration-300 bg-[#53c7971a] border border-[#53c7971a] shadow-[0_3px_5px_0_#53c7974d] text-[#53c797]">
                                       <VisibilityIcon />
                                   </button>
                                   <button className="inline-flex items-center justify-center p-0 h-9 w-9 rounded focus:outline-none transition-all duration-300 bg-[#53c7971a] border border-[#53c7971a] shadow-[0_3px_5px_0_#53c7974d] text-[#53c797]">
                                       <EditIcon />
                                   </button>
                                   <button className="inline-flex items-center justify-center p-0 h-9 w-9 rounded focus:outline-none transition-all duration-300 bg-[#53c7971a] border border-[#53c7971a] shadow-[0_3px_5px_0_#53c7974d] text-[#53c797]">
                                       <DeleteForeverIcon />
                                   </button>
                               
                               
                                                                   </td>
                            </tr>
  
  
  
  
                            <tr>
                                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                          <div className="flex items-center">
                                              <div>
                                                  <div className="text-sm leading-5 text-gray-800">#1</div>
                                              </div>
                                          </div>
                                      </td>
                                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                          <div className="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                                      </td>
                                      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5"> <div className="relative h-10 w-10">
                    <img
                      className="h-full w-full rounded-full object-cover object-center"
                      src="/specialities/specialities-03.png"
                      alt=""
                    />
                   
                  </div></td>
                                      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>
                                      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                          <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                          <span aria-hidden className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                          <span className="relative text-xs">disabled</span>
                                      </span>
                                      </td>
                                      <td className="px-6 py-4 space-x-2 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                   
                                   <button className="inline-flex items-center justify-center p-0 h-9 w-9 rounded focus:outline-none transition-all duration-300 bg-[#53c7971a] border border-[#53c7971a] shadow-[0_3px_5px_0_#53c7974d] text-[#53c797]">
                                       <VisibilityIcon />
                                   </button>
                                   <button className="inline-flex items-center justify-center p-0 h-9 w-9 rounded focus:outline-none transition-all duration-300 bg-[#53c7971a] border border-[#53c7971a] shadow-[0_3px_5px_0_#53c7974d] text-[#53c797]">
                                       <EditIcon />
                                   </button>
                                   <button className="inline-flex items-center justify-center p-0 h-9 w-9 rounded focus:outline-none transition-all duration-300 bg-[#53c7971a] border border-[#53c7971a] shadow-[0_3px_5px_0_#53c7974d] text-[#53c797]">
                                       <DeleteForeverIcon />
                                   </button>
                               
                               
                                                                   </td>
                            </tr>
  
  
  
  
                            <tr>
                                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                          <div className="flex items-center">
                                              <div>
                                                  <div className="text-sm leading-5 text-gray-800">#1</div>
                                              </div>
                                          </div>
                                      </td>
                                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                          <div className="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                                      </td>
                                      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5"> <div className="relative h-10 w-10">
                    <img
                      className="h-full w-full rounded-full object-cover object-center"
                      src="/specialities/specialities-04.png"
                      alt=""
                    />
                   
                  </div></td>
                                      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>
                                      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                          <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                          <span aria-hidden className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                          <span className="relative text-xs">disabled</span>
                                      </span>
                                      </td>
  
                                      <td className="px-6 py-4 space-x-2 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                   
                                   <button className="inline-flex items-center justify-center p-0 h-9 w-9 rounded focus:outline-none transition-all duration-300 bg-[#53c7971a] border border-[#53c7971a] shadow-[0_3px_5px_0_#53c7974d] text-[#53c797]">
                                       <VisibilityIcon />
                                   </button>
                                   <button className="inline-flex items-center justify-center p-0 h-9 w-9 rounded focus:outline-none transition-all duration-300 bg-[#53c7971a] border border-[#53c7971a] shadow-[0_3px_5px_0_#53c7974d] text-[#53c797]">
                                       <EditIcon />
                                   </button>
                                   <button className="inline-flex items-center justify-center p-0 h-9 w-9 rounded focus:outline-none transition-all duration-300 bg-[#53c7971a] border border-[#53c7971a] shadow-[0_3px_5px_0_#53c7974d] text-[#53c797]">
                                       <DeleteForeverIcon />
                                   </button>
                               
                               
                                                                   </td>
                            </tr>
  
  
                            <tr>
                                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                          <div className="flex items-center">
                                              <div>
                                                  <div className="text-sm leading-5 text-gray-800">#1</div>
                                              </div>
                                          </div>
                                      </td>
                                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                          <div className="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                                      </td>
                                      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5"> <div className="relative h-10 w-10">
                    <img
                      className="h-full w-full rounded-full object-cover object-center"
                      src="/specialities/specialities-05.png"
                      alt=""
                    />
                   
                  </div></td>
                                      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>
                                      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                          <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                          <span aria-hidden className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                          <span className="relative text-xs">disabled</span>
                                      </span>
                                      </td>
                                      <td className="px-6 py-4 space-x-2 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                   
                                   <button className="inline-flex items-center justify-center p-0 h-9 w-9 rounded focus:outline-none transition-all duration-300 bg-[#53c7971a] border border-[#53c7971a] shadow-[0_3px_5px_0_#53c7974d] text-[#53c797]">
                                       <VisibilityIcon />
                                   </button>
                                   <button className="inline-flex items-center justify-center p-0 h-9 w-9 rounded focus:outline-none transition-all duration-300 bg-[#53c7971a] border border-[#53c7971a] shadow-[0_3px_5px_0_#53c7974d] text-[#53c797]">
                                       <EditIcon />
                                   </button>
                                   <button className="inline-flex items-center justify-center p-0 h-9 w-9 rounded focus:outline-none transition-all duration-300 bg-[#53c7971a] border border-[#53c7971a] shadow-[0_3px_5px_0_#53c7974d] text-[#53c797]">
                                       <DeleteForeverIcon />
                                   </button>
                               
                               
                                                                   </td>
                            </tr>
  
  
            </tbody>
          </table>
        </div>

</>
      
    
    );
}

export default Specialities;

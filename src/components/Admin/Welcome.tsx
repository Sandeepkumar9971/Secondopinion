"use client";

import React, { ReactNode,useState } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Deshboard from "./Deshboard"
import Appointment from "./AppointmentData/Appointment"
import Link from "next/link";


interface WelcomeProps {
  children: ReactNode;
}

const Welcome: React.FC<WelcomeProps> = ({ children }) => {


  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };











  return (
    <div className="h-screen dark scroll-smooth">
      <header className="h-14 bg-gray-100 top-0 w-full fixed shadow" style={{ zIndex: 99999 }}>
        <div className="flex justify-between items-center px-10 h-14">
          <div className="flex justify-between items-center gap-x-14">
            <div className="w-40">
              <img
                alt="logo"
                loading="lazy"
                width="120"
                height="120"
                decoding="async"
                data-nimg="1"
                src="/_next/image?url=%2Fsecond_opinion.png&amp;w=256&amp;q=75"
              />
            </div>
            <div
              id="toggle-button"
              className="hidden lg:block bg-gray-200 rounded-full transition-all duration-500 ease-in-out cursor-pointer"
              onClick={toggleSidebar}
            >
              <i className={`fa-solid fa-arrow-left p-3 ${sidebarCollapsed ? "rotate-0" : "rotate-180"}`}></i>
            </div>
          </div>
          <ul className="flex items-center gap-5">
            <li>
              <Link className="bg-gray-200 px-3 py-2 rounded-sm" href="#">
                <i className="fa-regular fa-bell"></i>
              </Link>
            </li>
            <li onClick={toggleUserDropdown}>
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white cursor-pointer"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <ul
                id="user-dropdown"
                className={`absolute ${userDropdownOpen ? "" : "hidden"} bg-white right-4 top-14 w-28 rounded shadow-md`}
              >
                <li className="mb-1 hover:bg-gray-50 text-gray-700 hover:text-gray-900">
                  <Link className="block px-5 py-2" href="#">
                    Profile
                  </Link>
                </li>
                <li className="mb-1 hover:bg-gray-50 text-gray-700 hover:text-gray-900">
                  <Link className="block px-5 py-2" href="#">
                    Settings
                  </Link>
                </li>
                <li className="mb-1 hover:bg-gray-50 text-gray-700 hover:text-gray-900">
                  <Link className="block px-5 py-2" href="#">
                    Logout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </header>

      <main className="h-[calc(100vh-120px)] w-full absolute top-14">
        <aside
          id="sidebar"
          className={`h-[calc(100vh-120px)] whitespace-nowrap fixed shadow overflow-x-hidden transition-all duration-500 ease-in-out ${
            sidebarCollapsed ? "w-[60px]" : "w-[240px]"
          }`}
        >
          <div className="flex flex-col justify-between h-full">
            <ul className="flex flex-col gap-1 mt-2">
              <li className="text-gray-500 hover:bg-cyan-500 hover:text-white">
                <Link href="/dashboard/admin/deshboard" >
                  <div className="w-full flex items-center py-3">
                    <i className="fa-solid fa-house text-center px-5"></i>
                    {!sidebarCollapsed && <span className="whitespace-nowrap pl-1">Dashboard</span>}
                  </div>
                </Link>
              </li>
              <li className="text-gray-500 hover:bg-cyan-500 hover:text-white" >
                <Link className="w-full flex items-center py-3" href="/dashboard/admin/appointment">
                <i className="fa-solid fa-stethoscope text-center px-5"></i>

                  {!sidebarCollapsed && <span className="whitespace-nowrap pl-1">Appointments</span>}
                </Link>
              </li>
              <li className="text-gray-500 hover:bg-cyan-500 hover:text-white">
                <Link className="w-full flex items-center py-3" href="/dashboard/admin/doctor">
                  <i className="fa-solid fa-users text-center px-5"></i>
                  {!sidebarCollapsed && <span className="whitespace-nowrap pl-1">Doctors</span>}
                </Link>
              </li>
              <li className="text-gray-500 hover:bg-cyan-500 hover:text-white">
                <Link className="w-full flex items-center py-3" href="/dashboard/admin/patients">
                  <i className="fa-solid fa-user text-center px-5"></i>
                  {!sidebarCollapsed && <span className="whitespace-nowrap pl-1">Patients</span>}
                </Link>
              </li>
              <li className="text-gray-500 hover:bg-cyan-500 hover:text-white">
                <Link className="w-full flex items-center py-3" href="/dashboard/admin/pharmacy">
                <i className="fa-solid fa-prescription-bottle text-center px-5"></i>
                  {!sidebarCollapsed && <span className="whitespace-nowrap pl-1">Pharmacy</span>}
                </Link>
              </li>
              <li className="text-gray-500 hover:bg-cyan-500 hover:text-white">
                <Link className="w-full flex items-center py-3" href="/dashboard/admin/specialities">
                <i className="fa-solid fa-heartbeat px-3"></i>
                  {!sidebarCollapsed && <span className="whitespace-nowrap pl-1">Specialities</span>}
                </Link>
              </li>
              <li className="text-gray-500 hover:bg-cyan-500 hover:text-white">
                <Link className="w-full flex items-center py-3" href="/dashboard/admin/transactions">
                <i className="fa-solid fa-credit-card px-3"></i>
                  {!sidebarCollapsed && <span className="whitespace-nowrap pl-1">Transactions</span>}
                </Link>
              </li>
              <li className="text-gray-500 hover:bg-cyan-500 hover:text-white">
                <Link className="w-full flex items-center py-3" href="/dashboard/admin/review">
                <i className="fa-solid fa-star px-3"></i>
                  {!sidebarCollapsed && <span className="whitespace-nowrap pl-1">Reviews</span>}
                </Link>
              </li>
              <li className="text-gray-500 hover:bg-cyan-500 hover:text-white">
              <Link className="w-full flex items-center py-3" href="/dashboard/admin/settings">
              <i className="fa-solid fa-cog px-3"></i>
                  {!sidebarCollapsed && <span className="whitespace-nowrap pl-1">Settings</span>}
                </Link>
              </li>


              <li className="text-gray-500 hover:bg-cyan-500 hover:text-white">
              <Link className="w-full flex items-center py-3" href="/dashboard/admin/faq">
              <i className="fa-solid fa-cog px-3"></i>
                  {!sidebarCollapsed && <span className="whitespace-nowrap pl-1">FAQS</span>}
                </Link>
              </li>






      <li className="text-gray-500 hover:bg-cyan-500 hover:text-white ">
      <i className="fa-solid fa-cog px-3"></i>
    { !sidebarCollapsed &&  <span onClick={() => setOpen(!open)} className="whitespace-nowrap pl-1 inline-flex items-center">
        invoice <ArrowDropDownIcon className={`ml-2 h-4 w-4 ${open ? 'transform rotate-180' : ''}`} />
      </span>}
      {open && (
        <div className="absolute z-50 mt-2 w-full rounded-md shadow-lg bg-white border border-gray-200 dark:bg-[#20293A] dark:border-slate-700">
          <div className="py-1 text-gray-700 dark:text-gray-400 text-sm" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          
            <Link href="#">
              <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#161d2a]" role="menuitem">
              <NavigateNextIcon className="ml-1 h-3 w-3" />  Invoice List
              </span>
            </Link>
            <Link href="#">
              <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#161d2a]" role="menuitem">
              <NavigateNextIcon className="ml-1 h-3 w-3" />  Offers
              </span>
            </Link>
          </div>
        </div>
      )}
    </li>


    <li className="text-gray-500 hover:bg-cyan-500 hover:text-white relative">
      <i className="fa-solid fa-cog px-3"></i>
    { !sidebarCollapsed &&  <span onClick={() => setOpen1(!open1)} className="whitespace-nowrap pl-1 inline-flex items-center">
        All Pages <ArrowDropDownIcon className={`ml-2 h-4 w-4 ${open1 ? 'transform rotate-180' : ''}`} />
      </span>}
      {open1 && (
        <div className="absolute z-50 mt-2 w-full rounded-md shadow-lg bg-white border border-gray-200 dark:bg-[#20293A] dark:border-slate-700">
          <div className="py-1 text-gray-700 dark:text-gray-400 text-sm" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link href="/dashboard/admin/counter">
              <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#161d2a]" role="menuitem">
              <NavigateNextIcon className="ml-1 h-3 w-3" />  Counter
              </span>
            </Link>
          
            <Link href="/dashboard/admin/diagnosticTests">
              <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#161d2a]" role="menuitem">
              <NavigateNextIcon className="ml-1 h-3 w-3" />    Diagnostic Tests
              </span>
            </Link>

            <Link href="#">
              <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#161d2a]" role="menuitem">
              <NavigateNextIcon className="ml-1 h-3 w-3" />    Health Checkup Packages
              </span>
            </Link>
            
            <Link href="/dashboard/admin/medicaltests">
              <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#161d2a]" role="menuitem">
              <NavigateNextIcon className="ml-1 h-3 w-3" />   Medical tests
              </span>
            </Link>
          </div>
        </div>
      )}
    </li>
            </ul>
            <ul className="flex flex-col gap-1 mt-2">
              <li className="text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                <Link className="w-full flex items-center py-3" href="/">
                  <i className="fa-solid fa-right-from-bracket text-center px-5"></i>
                  {!sidebarCollapsed && <span className="pl-1">Logout</span>}
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        <section className={`h-full overflow-auto transition-all duration-500 ease-in-out ${sidebarCollapsed ? 'ml-[60px]' : 'ml-[240px]'} p-5`}>
          {children}
        </section>
      </main>
    </div>
  );
};

export default Welcome;

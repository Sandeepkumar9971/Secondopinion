"use client"
import { useState, useEffect, useRef } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button } from '@material-tailwind/react';
import {useRouter} from 'next/navigation'


const layout = ({ children }) => {
    let router = useRouter();
    const [searchval,setsearchval] = useState()
    const nav = [
        {
            id: 1,
            name: 'HOME',
            url: '/articles',
        },
        {
            id: 2,
            name: 'HEALTHY HAIR',
            url: '/articles/type/healthy_hear',
        },
        {
            id: 3,
            name: ' HEALTHY EATING',
            url: '/articles/type/heathly_eating',
        },
        {
            id: 4,
            name: 'HEALTHY SKIN',
            url: '/articles/type/heathly_skin',
        },
        {
            id: 5,
            name: 'WEIGHT LOSS',
            url: '/articles/type/wight_loss',
        },
    ]
    const navRef = useRef(null);
    const mapRef = useRef(null);
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
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    <div ref={navRef} className="navbar">
                        <div className='flex-1 flex-wrap flex-row'>
                            <div className="filters">
                                <ul className='flex gap-5 text-sm mt-3'>
                                    {
                                        nav?.map((item) => {
                                            return <li className='ml-4 border-r cursor-pointer' onClick={()=>{router.push(item.url)}}>
                                                {item.name}
                                            </li>
                                        })
                                    }
                                </ul>

                                <div className='flex flex-row gap-10'>
                                    <div className='mt-3 cursor-pointer' onClick={()=>{router.push('/articles/explore')}}>Explore<ArrowDropDownIcon /></div>
                                    <div>
                                        <div className='flex flex-row gap-1'>
                                            <input className='border p-2' type="text" placeholder="Search Article" onChange={(e)=>{setsearchval(e.target.value)}}/>
                                            <Button onClick={()=>{router.push(`/articles/search/${searchval}`)}} style={{background:'#299AD0',color:'#000'}}>Search</Button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <style jsx>
                        {`
        .navbar {
     
          display: flex;
          justify-content: space-around;
          background-color:#80BFEA;
          color: #000;
          padding: 10px;
        }
          .filters {
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          gap: 10px;
          flex: 1;
         justify-content:space-between;
        }
         .sticky {
        width:88.5%;
          position:fixed;
          top:0;
          z-index: 1000;
        }

            `}

                    </style>
                </div>
                <div style={{background:'#F6F6F6'}}>
                    {children}
                </div>
            </div>

        </>
    )
}

export default layout;
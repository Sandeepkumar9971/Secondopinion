"use client"
import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { toast } from "sonner"
import { useSession, signOut } from "next-auth/react"
import { LayoutDashboard } from 'lucide-react'
import { useRouter } from 'next/navigation'

function Header() {
    const router = useRouter()
    const { data: session } = useSession()
    const [path,setpath] = useState('')

console.log(session);
    // Function to handle sign out
    async function onClickSignOut() {
        try {
            signOut()
            toast("Logout successful", {
                action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                },
            })
        } catch (err) {
            console.log(err);
        }
    }

    // Menu items for navigation
    const Menu = [
        {
            id: 1,
            name: "Find doctor",
            path: '/find_doctor'
        },
        {
            id: 2,
            name: "Video Consult",
            path: '/video_consult'
        },
        {
            id: 3,
            name: "Help Security",
            path: '/help_security'
        },

    ]

    // Render header for authenticated users
    if (session) {
        return (
            <div className='flex items-center justify-between p-4 shadow-sm'>
                <div className='flex items-center gap-10' >
                <Image src="/second_opinion.png" alt='logo' onClick={() => { router.push('/')}}
                    width={100} height={100}
                />
                    <ul className='md:flex gap-8 hidden'>
                        {Menu.map((item, index) => (
                            <Link key={index} href={item.path}>
                               <li onClick={()=>{setpath(item.path)}} className={`text-semi-bold ${path==item.path && 'text-primary underline'}  hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out hover:underline`}>
                                {item.name}
                            </li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className='flex gap-3'>
                    <Button asChild >
                        <h2 className='text-md flex gap-2 text-gray-500'>
                            <LayoutDashboard />
                            <Link href="/dashboard">Dashboard</Link>
                        </h2>
                    </Button>
                    <Button  asChild className='border bg-transparent text-black '>
                        <Link href="#" onClick={() => onClickSignOut()}>Sign out</Link>
                    </Button>
                </div>
            </div>
        )
    }

    // Render header for unauthenticated users
    return (
        <div className='flex items-center justify-between p-4 shadow-sm'>
            <div className='flex items-center gap-10 cursor-pointer'>
                <Image src="/second_opinion.png" alt='logo' onClick={() => { router.push('/')}}
                    width={100} height={100}
                />
                <ul className='md:flex gap-8 hidden'>
                    {Menu.map((item, index) => (
                        <Link key={index} href={item.path}>
                            <li onClick={()=>{setpath(item.path)}} className={`text-semi-bold ${path==item.path && 'text-primary underline'}  hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out hover:underline`}>
                                {item.name}
                            </li>

                        </Link>
                    ))}
                </ul>
            </div>
            <Button asChild className='border bg-transparent text-black '>
                <Link href="/login_signup">Login/Register</Link>
            </Button>
            
        </div>
    )
}

export default Header

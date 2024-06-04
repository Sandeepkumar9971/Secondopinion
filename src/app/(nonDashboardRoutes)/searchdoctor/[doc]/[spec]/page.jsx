'use client'
import Searchdocprofile from '@/pages/Searchdocprofile'
export default function Page({ params }) {
  console.log(params)
  return <Searchdocprofile searchvalue = {params}/>
}
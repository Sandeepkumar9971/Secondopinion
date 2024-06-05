import React from 'react'
import Image from 'next/image'

const Consultnavbar = () => {
  return (
    <div className="navbar">
    <div className="logo">
    <Image src="/second_opinion.png" alt='logo' 
                    width={80} height={80}
                />
    </div>
    <style jsx>{`
      .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #f8f9fa;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 10px 20px;
      }
      .logo {
       margin-left:40px
      }
    `}</style>
  </div>
  )
}

export default Consultnavbar
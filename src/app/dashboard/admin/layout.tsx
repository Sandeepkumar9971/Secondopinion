import React from "react";
import Welcome from "../../../components/Admin/Welcome";


interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
   
     
   <Welcome>{children}</Welcome>
    </>
  );
}

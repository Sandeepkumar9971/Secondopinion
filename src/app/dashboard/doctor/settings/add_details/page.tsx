"use client";
import { Separator } from "@/components/ui/separator";
// import ProfileForm from "./profile-form";
// import add_detailsform from './add_detailsform'
// import Add_detailsform from '@/app/dashboard/doctor/settings/add_details/add_detailsform'
// import AddDetailsForm from './add_detailsform'
import AddDetailsForm from './add_detailsform'
import { useState, useEffect } from "react";
import axios from "axios";

export default function SettingsProfile() {
  const [user, setUser] = useState({});

  // useEffect(() => {
  //   // Function to fetch user data from the backend
  //   async function fetchDataFromBackend() {
  //     try {
  //       const response = await axios.get(`/api/doctors/profile`);
  //       // console.log(response)
  //       setUser(response.data.doctor[0]);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchDataFromBackend(); // Fetch data when the component mounts
  // }, []);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Add More Details</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator className="my-4"/>
      <AddDetailsForm />
      {/* <h1>Render</h1> */}
    </div>
  );
}

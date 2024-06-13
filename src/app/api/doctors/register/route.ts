// Import necessary modules
import bcrypt from "bcryptjs"; // Module for password hashing
import { NextResponse, NextRequest } from "next/server"; // Next.js server-side request and response modules
import { Doctor } from "@/models/doctorModel"; // Import Doctor model
import { connect } from "@/config/dbConfig"; // Import database connection function
import { createHash } from 'crypto';
import { User } from '@/models/userModel';

// Connect to the MongoDB database
connect();

// Endpoint for doctor creation
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const reqBody = await request.json();

    // Destructure request body to extract data
    const {
    fullname,
    degree,
    Collage,
    yearofcompletion,
    specialization,
    experience,
    feePerConsult,
    state,
    city,
    Regisno,
    RegisCouncil,
    Regisyear,
    address,
    gender,
    websiteurl,
    youtube,
    twitter,
    linkdine,
    facebooklink,
    mobile,
    password,
    countryCode,
    email,
    about
    } = reqBody;

    //Prefix dr- with every username
    const newUsername = `dr-${fullname}`;

    // Check if a user with the given username already exists
    const userExists = await User.findOne({
      $or: [
          { mobileNumber: mobile },
          { email: email }
      ]
  }) || await Doctor.findOne({
      $or: [
          { mobileNumber: mobile },
          { email: email }
      ]
  });
    if (userExists) {
      return NextResponse.json(
        {
          message: "email-mobile already exits",
          success: false,
        },
        { status: 200 }
      );
    }

    // Generate salt and hash the password
        const hashedPasswordStage1 = createHash('sha256').update(password).digest('hex');
        const hashedPasswordStage2 = createHash('sha1').update(hashedPasswordStage1).digest('hex');
        const hashedPasswordStage3 = createHash('md5').update(hashedPasswordStage2).digest('hex');



    // Create a new Doctor instance with the provided data
    const newUser = new Doctor({
      countryCode,
      RegisCouncil,
      Regisno,
      Regisyear,
      gender,
      fullname:fullname,
      password:hashedPasswordStage3,
      mobileNumber:mobile,
      yearofcompletion,
      Collage,
      email,
      about,
      specialization,
      address,
      state,
      city,
      feePerCunsultation:feePerConsult,
      experience,
      websiteurl,
      availableSlots: {},
      facebook:facebooklink,
      linkedin:linkdine,
      twitter,
      youtube,
      degrees:degree,
    });

    // Save the new doctor to the database
    await newUser.save();

    // Return success response
    return NextResponse.json(
      { message: "Doctor created successfully", success: true },
      { status: 200 }
    );
  } catch (err: any) {
    console.log(err)
    // Return a JSON response for internal server error with a status code (500)
    return NextResponse.json(
      { message: "Internal Server Error", success: false, err: err.message },
      { status: 500 }
    );
  }
}

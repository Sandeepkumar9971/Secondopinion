// pages/api/users/register.js
// Import necessary modules and dependencies
import bcrypt from 'bcryptjs'; // Module for password hashing
import { NextResponse, NextRequest } from 'next/server'; // Next.js server-side request and response modules
import { User } from '@/models/userModel'; // Import User model
import { connect } from '@/config/dbConfig'; // Import database connection function
import { createHash } from 'crypto';

// Connect to the MongoDB database
connect();

// Endpoint for user creation
export async function POST(request: NextRequest) {
    try {
    
        const reqBody = await request.json();     
        const { password, fullname, countryCode, email, mobile } = reqBody;
    
   
        const userExists = await User.findOne({ mobileNumber:mobile });
        if (userExists) {
          
            return NextResponse.json({ message: "User already exists", success: false }, { status: 200 });
        }
        
        const hashedPasswordStage1 = createHash('sha256').update(password).digest('hex');
        const hashedPasswordStage2 = createHash('sha1').update(hashedPasswordStage1).digest('hex');
        const hashedPasswordStage3 = createHash('md5').update(hashedPasswordStage2).digest('hex');


        const newUser = new User({ fullname, password: hashedPasswordStage3, countryCode, email, mobileNumber:mobile});
        console.log("newUser",newUser)
       
    
        await newUser.save();
        
        // Return success response
        return NextResponse.json({ message: "User created successfully", success: true }, { status: 200 });
    } catch (err: any) {
        console.log(err)
        // Return a JSON response for internal server error with a status code (500)
        return NextResponse.json({ message: 'Internal Server Error', success: false }, { status: 500 });
    }
}


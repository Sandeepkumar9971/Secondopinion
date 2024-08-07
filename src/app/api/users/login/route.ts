// Import necessary modules and dependencies
import { NextRequest, NextResponse } from "next/server";
import {User} from '@/models/userModel'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import {connect} from '@/config/dbConfig'
import { createHash } from 'crypto';

// Connect to the database
connect();

// Endpoint for user login
export async function POST(request: NextRequest) {
    try {
        // Parse request body
        const reqBody = await request.json();
        const { mobile, password } = reqBody;
        console.log('login api Hit')

        // Check if user exists
        const user = await User.findOne({ mobile});
        if (!user) {
            // Return a JSON response indicating that the user does not exist with a bad request status code (400)
            return NextResponse.json({ message: "User does not exist, please check your username", success: false }, { status: 400 });
        }

        // Check if password is correct
        const hashedPasswordStage1 = createHash('sha256').update(password).digest('hex');
        const hashedPasswordStage2 = createHash('sha1').update(hashedPasswordStage1).digest('hex');
        const hashedPasswordStage3 = createHash('md5').update(hashedPasswordStage2).digest('hex');
        console.log(hashedPasswordStage3,user.password)
                    // Check if the password is correct
        const validPassword = hashedPasswordStage3 == user.password
        // const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            // Return a JSON response indicating an invalid password with a bad request status code (400)
            return NextResponse.json({ message: "Invalid password", success: false }, { status: 400 });
        }

        // Create token data
        const tokenData = {
            username: user.username,
            userId: user._id,
            role: 'user'
        };

        // Create token using jwt
        const token = jwt.sign(tokenData, `${process.env.TOKEN_SECRET}`, { expiresIn: '1d' });

        // Respond back to the user with a cookie containing the token
        const response = NextResponse.json({
            message: "Login successful ",
            success: true,
            username: user.username
        }, { status: 200 });

        // Set the token into the cookie on the response
        response.cookies.set("token", token, {
            httpOnly: true
        });

        return response;

    } catch (err: any) {
        // Return a JSON response for internal server error with a status code (500)
        return NextResponse.json({ message: err.message, success: false }, { status: 500 });
    }
}
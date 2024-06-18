import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import { connect } from '@/config/dbConfig';
import { User } from '@/models/userModel';
import { Doctor } from '@/models/doctorModel';
import { Admin } from '@/models/adminModel';
import { createHash } from 'crypto';

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials:{
                mobile: { label: "mobile", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // console.log("credentials==>",credentials);
                
                // // Connect to the database
               
                await connect();
                try {
                    // Check if user exists in any of the user data models
                    const user = await User.findOne({mobileNumber: credentials?.mobile }) ||
                        await Doctor.findOne({ mobileNumber: credentials?.mobile }) ||
                        await Admin.findOne({ mobileNumber: credentials?.mobile });
                    // console.log("user==>",user)
                    if (!user) {
                        // Throw an error if the user does not exist
                        throw new Error("User does not exist, please check your username");
                    }
                    const hashedPasswordStage1 = createHash('sha256').update(credentials?.password!).digest('hex');
                    const hashedPasswordStage2 = createHash('sha1').update(hashedPasswordStage1).digest('hex');
                    const hashedPasswordStage3 = createHash('md5').update(hashedPasswordStage2).digest('hex');
                    // console.log(hashedPasswordStage3,user.password)
                    // Check if the password is correct
                    const validPassword = hashedPasswordStage3 == user.password
                    // await bcrypt.compare(credentials?.password!, user.password);
                    if (!validPassword) {
                        // Throw an error if the password is invalid
                        throw new Error("Invalid password");
                    }
                    
                    // Return the user object if authentication is successful


                    // console.log(user)
                    return user;

                } catch (err: any) {
                    throw new Error(err);
                }
            }
        })
    ],


    callbacks: {
        async session({ session, token }) {
            // console.log("check session==>",session, token)
            // Attach additional user information to the session object
            if (token) {
                session.user.username = token?.email?.toString();
                session.user.userId = token?.userId?.toString();
                session.user.role = token?.role?.toString();
            }
            // console.log("check SESSION==>",session)
            return session;
        },
        async jwt({ token, user }) {
            // console.log("check user==>",user, token)
            // Attach additional user information to the token object
            if (user) {
                token.username = user?.username?.toString();
                token.userId = user._id?.toString();
                token.role = user?.role?.toString();
            }
            // console.log("check token==>", token)
            return token;
        }
    },
    pages: {
        // Custom sign-in page
        signIn: '/login_signup'
    },
    session: {
        // Use JWT for session management
        strategy: "jwt"
    },



    // Secret used to sign the tokens
    // secret: process.env.NEXTAUTH_SECRET
    secret: "%^%^&&*&(%^%%^^&**())"
}



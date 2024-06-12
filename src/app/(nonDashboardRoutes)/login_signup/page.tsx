// Import necessary modules and dependencies
"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { toast } from "sonner";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik'
import { Tooltip,Typography } from "@material-tailwind/react";
import InfoIcon from '@mui/icons-material/Info';
import {  signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import { PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import {auth} from '../../../../firebase'
import {getGreeting} from '@/helper/getGreeting'


// Define the type of props passed to the component
type Props = {}

// Define the LoginSign functional component
function LoginSign({ }: Props) {
    // Define state variables using useState hook
    const [user, setUser] = useState({});
    const [ispasswordshow, setpasswordshow] = useState(true)
    const [loginotp, setloginotp] = useState(false)
    const [isdoctor, setisdoctor] = useState(false)
    const [loginCredential, setLoginCredential] = useState<{ username: string, password: string }>({ username: "", password: "" }); // State for login credentials
    const[page,setpage]=useState(1)
    console.log(page);
    // Initialize useRouter hook for navigation
    const router = useRouter();

    // Function to handle registration form submission
    async function onSubmitRegister(value:any) {
        try {
            // Send a POST request to register a user
            const response = await axios.post(`/api/users/register`, {...value});
            // Display success message using toast notification
            toast(response.data.message, {
                action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                },
            });
        } catch (err: any) {
            console.log(err)
            // Display error message using toast notification on registration failure
            toast(err.response.data.message, {
                action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                },
            });
        }
    }

    // Function to handle login form submission
    async function onSubmitLogin(values:any) {
        console.log(values)
        try {
            // Send a request to sign in the user with credentials
            const result = await signIn('credentials', {
                redirect: false,
                mobile: values.loginmobile,
                password:values.loginpassword

            });
            console.log(result)
            if (result?.error) {
                // Display error message using toast notification on login failure
                toast(result.error, {
                    action: {
                        label: "Undo",
                        onClick: () => console.log("Undo"),
                    },
                });
            }

            if (result?.url) {
                // Display success message using toast notification
                toast("Login successful", {
                    action: {
                        label: "Undo",
                        onClick: () => console.log("Undo"),
                    },
                });
                // Redirect user to dashboard on successful login
                router.replace('/dashboard');
            }
        } catch (err) {
            console.error("Login error:", err);
        }
    }
//////////////////////  Register Formik //////////////////////////////////
    const initialValues = {
        fullname:'sandeep',
        mobile: '8888888888',
        password: '!!11AAaa',
        countryCode: '+91',
        email:'sandeephexbusiness@gmail.com'
    };
    const validate = (values:any) => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobileRegex = /^\d{10}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!emailRegex.test(values.email)) {
            errors.email = 'Invalid email Address';
        }

        else if (!mobileRegex.test(values.mobile)) {
            errors.mobile = 'Invalid mobile number';


        }
        else if (!passwordRegex.test(values.password)) {
            errors.password = 'How to creat password click icon'
        }
        return errors;
    };
    const onSubmit = (values) => {
    onSubmitRegister(values)
    }
    const Formik = useFormik({
        initialValues,
        validate,
        onSubmit,
    });


//////////////////////  LOGIN Formik //////////////////////////////////

const logininitialValues = {
    loginmobile: '8888888888',
    loginpassword: '!!11AAaa',
    logincountrycode: '+91',
  };

  const loginvalidate = (values:any) => {
    const errors = {};
    const mobileRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!mobileRegex.test(values.loginmobile)) {
      errors.loginmobile = 'Invalid mobile number';
    } else if (!passwordRegex.test(values.loginpassword) && !loginotp) {
      errors.loginpassword = 'How to create password click icon';
    }
    return errors;
  };

  const loginonSubmit = (values:any) => {
    alert('submit');
    console.log('submit', values);
    onSubmitLogin(values)
  };

  const loginFormik = useFormik({
    initialValues: logininitialValues,
    validate: loginvalidate,
    onSubmit: loginonSubmit,
  });

    return (
        <div className='w-100 h-screen flex justify-center items-center'>
            {/* Tabs for switching between Login and Register */}
            <Tabs defaultValue="login" className="w-[400px]">
                {/* TabsList for displaying tab labels */}
                <TabsList className="grid w-full grid-cols-3">
                    {/* Tab trigger for Login */}
                    <TabsTrigger value="login">Login</TabsTrigger>
                    {/* Tab trigger for Register */}
                    <TabsTrigger value="userregister">User Register</TabsTrigger>
                    <TabsTrigger value="doctorregister">Doctor Register</TabsTrigger>
                </TabsList>
                {/* Content of the Login tab */}
                <TabsContent value="login">
                    {/* Card for containing login form */}
                    <Card>
                    <form onSubmit={loginFormik.handleSubmit}>
                        <CardHeader>
                            <div>
                                <CardTitle>Login <span style={{ color: '#22A0D8' }}>SECOND OPINION</span></CardTitle>
                            </div>
                            <div>
                                <CardTitle style={{ color: '#22A0D8' }} className='text-sm cursor-pointe'><input type="checkbox" name="" id="" className='p-1' onChange={(e) => { setloginotp(e.target.checked) }} /><label className='ml-1'>Login With OTP instead of password</label> </CardTitle>
                            </div>

                        </CardHeader>
                        <CardContent className="space-y-2">
                  
                            <div className="space-y-1">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Mobile Number
                                </label>
                                <div className="relative flex items-center">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-1">
                                        <select
                                            id="logincountrycode"
                                            name="logincountrycode"
                                            onChange={loginFormik.handleChange}
                                            onBlur={loginFormik.handleBlur}
                                            value={loginFormik.values.logincountrycode}
                                   
                                            className="block w-24 py-2 pr-8 text-gray-900 bg-white border-0 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option className='w-24 py-2 pr-8 text-gray-900 bg-white' value='+91'>+91</option>
                                            
                                        </select>
                                    </div>
                                    <input
                                        id="loginmobile"
                                        name="loginmobile"
                                        type="loginmobile"
                                        autoComplete="mobile"
                                        onChange={loginFormik.handleChange}
                                        onBlur={loginFormik.handleBlur}
                                        value={loginFormik.values.loginmobile}
                                        required
                                        className={`block w-full rounded-md border-0 py-2 pr--4 pl-28 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                    />

                                </div>
                            </div>
                            {
                                !loginotp && (
                                    <div className="space-y-1">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                Enter Password
                                            </label>
                                            <div className="relative">
                                                <input
                                                    id="loginpassword"
                                                    name="loginpassword"
                                                    type={ispasswordshow ? "password" : "text"}
                                                    autoComplete="password"
                                                    onChange={loginFormik.handleChange}
                                                    onBlur={loginFormik.handleBlur}
                                                    value={loginFormik.values.loginpassword}
                                                    required
                                                    className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events cursor-pointer" onClick={() => { setpasswordshow((e) => !e) }}>
                                                    {ispasswordshow ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                                                </div>
                                            </div>
                                            {loginFormik.touched.loginpassword && loginFormik.errors.loginpassword ? (
                                            <div style={{ color: 'red' }}>{loginFormik.errors.loginpassword}   <span>
                                            <Tooltip
                                           content={
                                             <div className="w-80">
                                               <Typography
                                                 variant="small"
                                                 color="white"
                                                 className="font-normal opacity-80"
                                               >
                                                 Password must contain at least 
                                                 Two lowercase letter,
                                                 Two uppercase letter, Two digit, 
                                                 Two special character,
                                                 and be at least 8 characters long
                                               </Typography>
                                             </div>
                                           }
                                         >
                                          <InfoIcon/>
                                         </Tooltip>
                                           </span></div>
                                        ) : null}
                                        </div>
                                    </div>
                                )
                            }

                        </CardContent>
                        <CardFooter className='w-full'>
                            {/* <Button className='w-full' onClick={() => { onSubmitLogin() }}>Send OTP</Button> */}
                            <button
                            style={{background:'#0D7DFF'}}
                                type="submit"
                                className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            > Send OTP
                            </button>
                        </CardFooter>
                      

                        </form>
                    </Card>
                </TabsContent>




                <TabsContent value="userregister">
                    {/* Card for containing registration form */}
                   
                    <Card>
                    <form onSubmit={Formik.handleSubmit}>
                        
                        <CardHeader>
                            <div>
                                <CardTitle>Join <span style={{ color: '#22A0D8' }}>SECOND OPINION</span></CardTitle>
                            </div>
                            <div>
                                <CardTitle className='text-sm'>
                                Hi,<span style={{ color: '#22A0D8', cursor: 'pointer' }}> {getGreeting()}</span> User
                                   
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                            <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                       Full Name
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="fullname"
                                            name="fullname"
                                            type="text"
                                            autoComplete="fullname"
                                            onChange={Formik.handleChange}
                                            onBlur={Formik.handleBlur}
                                            value={Formik.values.fullname}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                       
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="space-y-1">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Mobile Number
                                </label>
                                <div className="relative flex items-center">
                                    
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-1">
                                        <select
                                            id="countryCode"
                                            name="countryCode"
                                            onChange={Formik.handleChange}
                                            onBlur={Formik.handleBlur}
                                            value={Formik.values.countryCode}
                                            // disabled={isotpsend}
                                            className="block w-24 py-2 pr-8 text-gray-900 bg-white border-0 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option className='w-24 py-2 pr-8 text-gray-900 bg-white' value='+91'>+91</option>
                                           
                                        </select>
                                    </div>
                                    <input
                                        id="mobile"
                                        name="mobile"
                                        type="mobile"
                                        autoComplete="mobile"
                                        onChange={Formik.handleChange}
                                        onBlur={Formik.handleBlur}
                                        value={Formik.values.mobile}
                                        required
                                        // disabled={isotpsend}
                                        className={`block w-full rounded-md border-0 py-2 pr--4 pl-28 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                    />
                                    
                                </div>
                                    {Formik.touched.mobile && Formik.errors.mobile ? (
                                        <div style={{ color: 'red' }}>{Formik.errors.mobile}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="space-y-1">
                            <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                      Email Address
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="fullname"
                                            onChange={Formik.handleChange}
                                            onBlur={Formik.handleBlur}
                                            value={Formik.values.email}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                       
                                    </div>
                                    {Formik.touched.email && Formik.errors.email ? (
                                    <div style={{ color: 'red' }}>{Formik.errors.email}</div>
                                ) : null}
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Create Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            name="password"
                                            type={ispasswordshow ? "password" : "text"}
                                            autoComplete="password"
                                            onChange={Formik.handleChange}
                                            onBlur={Formik.handleBlur}
                                            value={Formik.values.password}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events cursor-pointer" onClick={() => { setpasswordshow((e) => !e) }}>
                                            {ispasswordshow ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                                        </div>
                                    </div>
                                    {Formik.touched.password && Formik.errors.password ? (
                                    <div style={{ color: 'red' }}>{Formik.errors.password}  
                                    <span>
                                     <Tooltip
                                    content={
                                      <div className="w-80">
                                        <Typography
                                          variant="small"
                                          color="white"
                                          className="font-normal opacity-80"
                                        >
                                          Password must contain at least 
                                          Two lowercase letter,
                                          Two uppercase letter, Two digit, 
                                          Two special character,
                                          and be at least 8 characters long
                                        </Typography>
                                      </div>
                                    }
                                  >
                                   <InfoIcon/>
                                  </Tooltip>
                                    </span>
                                  </div>
                                ) : null}
                                </div>
                            </div>
{/* <div id='recaptcha-container'></div> */}
                        </CardContent>
                        <CardFooter className='w-full'>
                            <button
                          
                            style={{background:'#0D7DFF'}}
                                type="submit"
                                className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            > Send OTP
                            </button>
                        </CardFooter>
                    </form>
                    </Card>
                </TabsContent>



                <TabsContent value="doctorregister">
                    {/* Card for containing registration form */}
                   
                    <Card>
                    <form onSubmit={Formik.handleSubmit}>
                        
                        <CardHeader>
                            <div>
                                <CardTitle>Join <span style={{ color: '#22A0D8' }}>SECOND OPINION</span></CardTitle>
                            </div>
                            <div>
                            <CardTitle className='text-sm'>
                                Hi,<span style={{ color: '#22A0D8', cursor: 'pointer' }}> {getGreeting()}</span> Doctor
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            {
                                page ==1 && (
<>
<div className="space-y-1">
                            <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                       Full Namme
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="fullname"
                                            name="fullname"
                                            type="text"
                                            autoComplete="fullname"
                                            onChange={Formik.handleChange}
                                            onBlur={Formik.handleBlur}
                                            value={Formik.values.fullname}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                       
                                    </div>
                                    
                                </div>
                            </div>


                            <div className="space-y-1">
                            <div className='flex flex-1 flex-row gap-2'>
                                <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                      Degree
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="fullname"
                                            name="fullname"
                                            type="text"
                                            autoComplete="fullname"
                                            onChange={Formik.handleChange}
                                            onBlur={Formik.handleBlur}
                                            value={Formik.values.fullname}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                       
                                    </div>
                                </div>
                                <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                       Specialization
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="fullname"
                                            name="fullname"
                                            type="text"
                                            autoComplete="fullname"
                                            onChange={Formik.handleChange}
                                            onBlur={Formik.handleBlur}
                                            value={Formik.values.fullname}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                       
                                    </div>
                                </div>
                                    
                                    
                                </div>
                            </div>


                            <div className="space-y-1">
                            <div className='flex flex-1 flex-row gap-2'>
                                <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                      Experience
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="fullname"
                                            name="fullname"
                                            type="text"
                                            autoComplete="fullname"
                                            onChange={Formik.handleChange}
                                            onBlur={Formik.handleBlur}
                                            value={Formik.values.fullname}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                       
                                    </div>
                                </div>
                                <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                     Fee Per Consult
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="fullname"
                                            name="fullname"
                                            type="text"
                                            autoComplete="fullname"
                                            onChange={Formik.handleChange}
                                            onBlur={Formik.handleBlur}
                                            value={Formik.values.fullname}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                       
                                    </div>
                                </div>
                                    
                                    
                                </div>
                            </div>
</>
                                )
                            }

                            {
                                page==2 && (

                                    <>
                                      <div className="space-y-1">
                            <div className='flex flex-1 flex-row gap-2'>
                                <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                     Opening Timming
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="fullname"
                                            name="fullname"
                                            type="text"
                                            autoComplete="fullname"
                                            onChange={Formik.handleChange}
                                            onBlur={Formik.handleBlur}
                                            value={Formik.values.fullname}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                       
                                    </div>
                                </div>
                                <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                     Closing Timing
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="fullname"
                                            name="fullname"
                                            type="text"
                                            autoComplete="fullname"
                                            onChange={Formik.handleChange}
                                            onBlur={Formik.handleBlur}
                                            value={Formik.values.fullname}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                       
                                    </div>
                                </div>
                                    
                                    
                                </div>
                            </div>


                            <div className="space-y-1">
                            <div className='flex flex-1 flex-row gap-2'>
                                <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    State
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="fullname"
                                            name="fullname"
                                            type="text"
                                            autoComplete="fullname"
                                            onChange={Formik.handleChange}
                                            onBlur={Formik.handleBlur}
                                            value={Formik.values.fullname}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                       
                                    </div>
                                </div>
                                <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                     City
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="fullname"
                                            name="fullname"
                                            type="text"
                                            autoComplete="fullname"
                                            onChange={Formik.handleChange}
                                            onBlur={Formik.handleBlur}
                                            value={Formik.values.fullname}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                       
                                    </div>
                                </div>
                                    
                                    
                                </div>
                            </div>


                            <div className="space-y-1">
                            <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                      Address
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="fullname"
                                            name="fullname"
                                            type="text"
                                            autoComplete="fullname"
                                            onChange={Formik.handleChange}
                                            onBlur={Formik.handleBlur}
                                            value={Formik.values.fullname}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                       
                                    </div>
                                    
                                </div>
                            </div>
                                    </>
                                )
                            }
                            

                          {
                            page==3 && (
<>
<div className="space-y-1">
                            <div className='flex flex-1 flex-row gap-2'>
                                <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    URL
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="fullname"
                                            name="fullname"
                                            type="text"
                                            autoComplete="fullname"
                                            onChange={Formik.handleChange}
                                            onBlur={Formik.handleBlur}
                                            value={Formik.values.fullname}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                       
                                    </div>
                                </div>
                                <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    WebSite URL
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="fullname"
                                            name="fullname"
                                            type="text"
                                            autoComplete="fullname"
                                            onChange={Formik.handleChange}
                                            onBlur={Formik.handleBlur}
                                            value={Formik.values.fullname}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                       
                                    </div>
                                </div>
                                    
                                    
                                </div>
                            </div>


                            <div className="space-y-1">
                            <div className='flex flex-1 flex-row gap-2'>
                                <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                 FaceBook Link
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="fullname"
                                            name="fullname"
                                            type="text"
                                            autoComplete="fullname"
                                            onChange={Formik.handleChange}
                                            onBlur={Formik.handleBlur}
                                            value={Formik.values.fullname}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                       
                                    </div>
                                </div>
                                <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                   Linkdine Link
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="fullname"
                                            name="fullname"
                                            type="text"
                                            autoComplete="fullname"
                                            onChange={Formik.handleChange}
                                            onBlur={Formik.handleBlur}
                                            value={Formik.values.fullname}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                       
                                    </div>
                                </div>
                                    
                                    
                                </div>
                            </div>


                            <div className="space-y-1">
                            <div className='flex flex-1 flex-row gap-2'>
                                <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                 Twitter Link
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="fullname"
                                            name="fullname"
                                            type="text"
                                            autoComplete="fullname"
                                            onChange={Formik.handleChange}
                                            onBlur={Formik.handleBlur}
                                            value={Formik.values.fullname}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                       
                                    </div>
                                </div>
                                <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                   YouTube Link
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="fullname"
                                            name="fullname"
                                            type="text"
                                            autoComplete="fullname"
                                            onChange={Formik.handleChange}
                                            onBlur={Formik.handleBlur}
                                            value={Formik.values.fullname}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                       
                                    </div>
                                </div>
                                    
                                    
                                </div>
                            </div>
</>

                            )
                          }

{
    page==4 && (
        <>
         <div className="space-y-1">
                                <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Mobile Number
                                </label>
                                <div className="relative flex items-center">
                                    
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-1">
                                        <select
                                            id="countryCode"
                                            name="countryCode"
                                            onChange={Formik.handleChange}
                                            onBlur={Formik.handleBlur}
                                            value={Formik.values.countryCode}
                                            // disabled={isotpsend}
                                            className="block w-24 py-2 pr-8 text-gray-900 bg-white border-0 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option className='w-24 py-2 pr-8 text-gray-900 bg-white' value='+91'>+91</option>
                                           
                                        </select>
                                    </div>
                                    <input
                                        id="mobile"
                                        name="mobile"
                                        type="mobile"
                                        autoComplete="mobile"
                                        onChange={Formik.handleChange}
                                        onBlur={Formik.handleBlur}
                                        value={Formik.values.mobile}
                                        required
                                        // disabled={isotpsend}
                                        className={`block w-full rounded-md border-0 py-2 pr--4 pl-28 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                    />
                                    
                                </div>
                                    {Formik.touched.mobile && Formik.errors.mobile ? (
                                        <div style={{ color: 'red' }}>{Formik.errors.mobile}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="space-y-1">
                            <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                      Email Address
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="fullname"
                                            onChange={Formik.handleChange}
                                            onBlur={Formik.handleBlur}
                                            value={Formik.values.email}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                       
                                    </div>
                                    {Formik.touched.email && Formik.errors.email ? (
                                    <div style={{ color: 'red' }}>{Formik.errors.email}</div>
                                ) : null}
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Create Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            name="password"
                                            type={ispasswordshow ? "password" : "text"}
                                            autoComplete="password"
                                            onChange={Formik.handleChange}
                                            onBlur={Formik.handleBlur}
                                            value={Formik.values.password}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events cursor-pointer" onClick={() => { setpasswordshow((e) => !e) }}>
                                            {ispasswordshow ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                                        </div>
                                    </div>
                                    {Formik.touched.password && Formik.errors.password ? (
                                    <div style={{ color: 'red' }}>{Formik.errors.password}  
                                    <span>
                                     <Tooltip
                                    content={
                                      <div className="w-80">
                                        <Typography
                                          variant="small"
                                          color="white"
                                          className="font-normal opacity-80"
                                        >
                                          Password must contain at least 
                                          Two lowercase letter,
                                          Two uppercase letter, Two digit, 
                                          Two special character,
                                          and be at least 8 characters long
                                        </Typography>
                                      </div>
                                    }
                                  >
                                   <InfoIcon/>
                                  </Tooltip>
                                    </span>
                                  </div>
                                ) : null}
                                </div>
                            </div>
                            {/* <CardFooter className='w-full'>
                            <button
                          
                            style={{background:'#0D7DFF'}}
                                type="submit"
                                className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            > Send OTP
                            </button>
                        </CardFooter> */}
        </>
    )
}
                             
                    <CardFooter className='w-full'>
                    <div className='flex flex-1 flex-row gap-2'>  
                        {
                                page!=1 && (
                                    <span
                                    style={{background:'#0D7DFF' }}
                                    onClick={()=>{setpage((e)=>e-1)}}
                                        className="flex w-full justify-center rounded-md cursor-pointer  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    > Pre
                                    </span>
                                )
                        }  
                           
                           {
                            page==4 ?   <button
                          
                            style={{background:'#0D7DFF'}}
                                type="submit"
                                className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            > Send OTP
                            </button> :    <span
                            style={{background:'#0D7DFF'}}
                            onClick={()=>{setpage((e)=>e+1)}}
                                className="flex w-full justify-center rounded-md cursor-pointer  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            > Next
                            </span>

                           }

                         
                            </div>  
                        </CardFooter>
                        
                      

                           
{/* <div id='recaptcha-container'></div> */}
                        </CardContent>
                        
                    </form>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}

// Export the LoginSign component
export default LoginSign; 














/////////////////////////////// OTP Verification /////////////////////////////////////


// const sendOtp = async () => {
//     const phoneNumberWithCode = `${Formik.values.countryCode}${Formik.values.mobile}`;
//     try {
//         const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container',{
//             "size": "normal",
//             "callback": function(response) {
//               // reCAPTCHA solved, you can proceed with
//               // phoneAuthProvider.verifyPhoneNumber(...).
//               onSolvedRecaptcha();
//             },
//             "expired-callback": function() {
//               // Response expired. Ask user to solve reCAPTCHA again.
//               // ...
//             }
//           });
//         const confirmationResult = await signInWithPhoneNumber(auth, phoneNumberWithCode, recaptchaVerifier)
//         if (confirmationResult.verificationId) {
//             // notify('success','Send OTP Sucessful')
//             // setisotpsend(true)
//             // setConfirmationResult(confirmationResult)
//         }
//     } catch (error) {
//         if (error.code === 'auth/too-many-requests') {
//             console.log('many auth')
//             // Handle rate limit exceeded error
//             // Swal.fire({
//             //     icon: "error",
//             //     text: `${'Too many requests. Please try again later.'}`,
//             // }).then(() => {
//             //     window.location.reload()
//             // })
//         } else {
//             // Handle other errors
//             console.log('Error sending OTP:', error);
//         }
//     }

// };


// const handleVerifyOTP = async (verificationCode) => {
//     try {
//         if (!confirmationResult || !confirmationResult.verificationId) {
//             console.error('Invalid confirmation result');
//             return;
//         }

//         const credential = PhoneAuthProvider.credential(
//             confirmationResult.verificationId,
//             verificationCode
//         );



//         await signInWithCredential(auth, credential).then(() => {
//             try {
//                 console.log(credential)
//                 // setisloading(true)
//                 // notify('success','OTP verify Successful')
//                 // makeRequest('post', userloginauth, { value: Formik.values, type: 'otp' }).then((data) => {
//                 //     console.log(JSON.parse(decryptData(data)))
//                 //     const resp = JSON.parse(decryptData(data))
//                 //     console.log(resp)
//                 //     setcommand(resp.command)
//                 //     if (resp.command == 1) {
//                 //         // document.cookie = `userID=${resp.userid}; SameSite=Strict`;
//                 //         sessionStorage.setItem('userID', resp.userid)
//                 //         sessionStorage.setItem('gender', resp.gender)
//                 //         router.push("/user/dashboard")
//                 //     }
//                 //     else if (resp.command == 0) {
//                 //             setmsg(resp.message)
//                 //             setOpen(true)
//                 //             setisloading(false)
//                 //             window.location.reload()
//                 //     }
//                 //     else if (resp.command == 2) {
//                 //         setmsg(resp.message)
//                 //         setOpen(true)
//                 //         setisloading(false)
                       
//                 //     }
//                 //     else if (resp.command == 3) {
                       
//                 //         window.location.reload()
//                 //     }
//                 // })
//             } catch (e) {
//                 console.log(e)
            
//             }
//         })

//     } catch (error) {
//         setisloading(false)
//         notify('error','Please Enter Valid OTP')
       
//     }
// };


////////////////////////////////////////////////////////////////////////////////////////



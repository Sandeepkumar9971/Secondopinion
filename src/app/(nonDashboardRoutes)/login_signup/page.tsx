// Import necessary modules and dependencies
"use client";
import React, { useState,useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Select from 'react-select';
import {makeRequest} from '@/Utils/FatchData'
import {special,states_URL,cities_URL} from '@/Utils/Api_URL'
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
import { Breadcrumbs } from "@material-tailwind/react";
import {Checkbox} from '@/components/ui/checkbox' 
import {DocValues,DocErrors} from '@/interfaces/register/index'
import {decryptData} from '@/Utils/Sceret'
import { any } from 'zod';


// Define the type of props passed to the component
type Props = {}

// Define the LoginSign functional component
function LoginSign({ }: Props) {
    // Define state variables using useState hook
    const [user, setUser] = useState<{}>({});
    const [ispasswordshow, setpasswordshow] = useState<Boolean>(true)
    const [loginotp, setloginotp] = useState<Boolean>(false)
    const [isdoctor, setisdoctor] = useState<Boolean>(false)
    const [isloading,setisloading] = useState<Boolean>(false)
    const[page,setpage]=useState(1)
    const [specialdata,setspecialdata]=useState([])
    const [states,setstates] =useState([])
    const [citiesdata,setcitiesdata] =useState([])
   

      const currentYear = new Date().getFullYear();
      const startYear = 1964;
   
      const generateYearOptions = (startYear:any,currentYear:any) => {
        const years = [];
        for (let year = startYear; year <= currentYear; year++) {
          years.push({ value: year, label: year });
        }
        return years;
      };

      const yearOptions = generateYearOptions(startYear,currentYear);

const Councildata = [
    {
        id:1,
        value:'delhiMedicalCouncil',
        label:'Delhi medical Council'
    }
]



//   const generateSlots = (openingTime, closingTime, duration) => {
//     const slots = [];
//     const start = new Date(`1970-01-01T${openingTime}:00`);
//     const end = new Date(`1970-01-01T${closingTime}:00`);
    
//     while (start < end) {
//       const slotStart = new Date(start);
//       start.setMinutes(start.getMinutes() + duration);
//       if (start <= end) {
//         slots.push(`${slotStart.getHours()}:${slotStart.getMinutes().toString().padStart(2, '0')} - ${start.getHours()}:${start.getMinutes().toString().padStart(2, '0')}`);
//       }
//     }
    
//     return slots;
//   };

    const router = useRouter();

    // Function to handle registration form submission
    async function onSubmitRegister(value:any) {
        try {
            // Send a POST request to register a user
            const response = await axios.post(`/api/users/register`, {...value});
            // Display success message using toast notification
            if(response.data.success){
                const result = await signIn('credentials', {
                    redirect: true,
                    mobile:value.mobile,
                    password:value.password
    
                });
    
                }   
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
                redirect: true,
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
////////////////////// User Register Formik //////////////////////////////////
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
    const onSubmit = (values:any) => {
    onSubmitRegister(values)
    }
    const Formik = useFormik({
        initialValues,
        validate,
        onSubmit,
    });


////////////////////// Doctor Register Formik //////////////////////////////////


const docinitialValues:DocValues = {
    fullname:'sandeep',
    degree:'AART',
    Collage:'',
    yearofcompletion:'',
    specialization:'2',
    experience:'3',
    feePerConsult:'222',
    openingtiming:'8:00',
    closingtiming:'9:00',
    state:'4037',
    city:'3',
    Regisno:'',
    RegisCouncil:'',
    Regisyear:'',
    address:'32-3434',
    gender:'male',
    websiteurl:'https://2323jl2.com',
    youtube:'https://2323jl2.com',
    twitter:'https://2323jl2.com',
    linkdine:'https://2323jl2.com',
    facebooklink:'https://2323jl2.com',
    mobile: '8888888888',
    password: '!!11AAaa',
    countryCode: '+91',
    email:'sandeephexbusiness@gmail.com',
    about:'This is about'
};
const docvalidate = (values:DocValues) => {
    const errors:DocErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    const requiredFields: (keyof DocValues)[] = [
        'fullname',
        'degree',
        'specialization',
        'experience',
        'feePerConsult',
        'openingtiming',
        'closingtiming',
        'state',
        'city',
        'address',
        'mobile',
        'password',
        'countryCode',
        'email',
        'about',
        "Regisno",
        'RegisCouncil',
        'Regisno',
        'gender',
        'Collage',
        'yearofcompletion'

      ];
      
      requiredFields.forEach(field => {
        if (!values[field]) {
          errors[field] = 'This field is required';
        }
      });
      console.log(errors);

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
const doconSubmit = async (values:any) => {
    setisloading(true)
    try {
        // Send a POST request to register a user
        const response = await axios.post(`/api/doctors/register`, {...values});
        // Display success message using toast notification
        if(response.data.success){
            const result = await signIn('credentials', {
                redirect: true,
                mobile:values.mobile,
                password:values.password

            });
            toast('Login Sucessfully', {
                action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                },
            });

            }  

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
  
// onSubmitRegister(values)
}
const docFormik = useFormik({
    initialValues:docinitialValues,
    validate:docvalidate,
    onSubmit:doconSubmit,
});


//////////////////////  LOGIN Formik //////////////////////////////////

const logininitialValues = {
    loginmobile: '8888888888',
    loginpassword: '!!11AAaa',
    logincountrycode: '+91',
  };
  interface Errors {}
  const loginvalidate = (values:any) => {
    const errors : Errors = {};
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
    onSubmitLogin(values)
  };


  
  const loginFormik = useFormik({
    initialValues: logininitialValues,
    validate: loginvalidate,
    onSubmit: loginonSubmit,
  });


  useEffect(()=>{
    makeRequest('get',special).then((resp:any)=>{
        setspecialdata(JSON.parse(decryptData(resp.data)))
    })

    makeRequest('get',states_URL).then((resp:any)=>{
        // console.log(resp)
        setstates(JSON.parse(decryptData(resp.data)))
    })
    
  },[])

  useEffect(()=>{
    makeRequest('post',cities_URL,{stateid:docFormik.values.state}).then((resp:any)=>{
        setcitiesdata(JSON.parse(decryptData(resp.data)))
       
    })
    // console.log(docFormik.values.state)
  },[docFormik.values.state])


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
                            > 
                            Login
                         
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
                            > Register
                            </button>
                        </CardFooter>
                    </form>
                    </Card>
                </TabsContent>



                <TabsContent value="doctorregister">
                    {/* Card for containing registration form */}
                   
                    <Card>
                    <form onSubmit={docFormik.handleSubmit}>
                        
                        <CardHeader>
                            <div>
                                <CardTitle>Join <span style={{ color: '#22A0D8' }}>SECOND OPINION</span></CardTitle>
                            </div>
                            <div>
                            <CardTitle className='text-sm'>
                                Hi,<span style={{ color: '#22A0D8', cursor: 'pointer' }}> {getGreeting()}</span> Doctor
                                </CardTitle>
                            </div>
                            <div>
                                <CardTitle>{page==1?'Profile Details':page==2?'Medical Registration':page==3?'Education Qualification':page==4?'Social Medial': page==5 && 'Credential Details'}</CardTitle>
                            </div>
                            <div>
                      
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-2">



                            {
                                page ==1 && (
<>
                    < div className="space-y-1">
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
                                            onChange={docFormik.handleChange}
                                            onBlur={docFormik.handleBlur}
                                            value={docFormik.values.fullname}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                       
                                    </div>
                                    {docFormik.touched.fullname && docFormik.errors.fullname ? (
                                    <div style={{ color: 'red' }}>{docFormik.errors.fullname}</div>
                                ) : null}
                                    
                                </div>
                            </div>

                    < div className="space-y-1">
                            <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                      Gender
                                    </label>
                                    <div className="relative">
                                     <div className='flex flex-1 flex-wrap gap-2'>
                                     <input
                                            type="radio"
                                            name="gender"
                                            onChange={docFormik.handleChange}
                                            onBlur={docFormik.handleBlur}
                                            value="male"
                                            checked={docFormik.values.gender === 'male'}
                                            className="cursor-pointer"
                                            />
                                            <span>Male</span>
                                            <input
                                            type="radio"
                                            name="gender"
                                            onChange={docFormik.handleChange}
                                            onBlur={docFormik.handleBlur}
                                            value="female"
                                            checked={docFormik.values.gender === 'female'}
                                            className="cursor-pointer"
                                            />
                                            <span>Female</span>
                                     </div>
                                  
                                       
                                    </div>
                                    {docFormik.touched.gender && docFormik.errors.gender ? (
                                    <div style={{ color: 'red' }}>{docFormik.errors.gender}</div>
                                ) : null}
                                    
                                </div>
                            </div>


                            <div className="space-y-1">
                                <div >
                                  
                                    <div >
                                    <label htmlFor="specialization" className="block text-sm font-medium leading-6 text-gray-900">
                                        Specialization
                                    </label>
                                    <div className="relative">
                                    <select
                                        id="specialization"
                                        name="specialization"
                                        aria-placeholder='specialization'
                                        autoComplete="fullname"
                                        onChange={docFormik.handleChange}
                                        onBlur={docFormik.handleBlur}
                                        value={docFormik.values.specialization}
                                        required
                                        className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                        <option value=''>Select specialization</option>
                                       {
                                        specialdata?.map((data)=>{
                                        return <option value={data.id}>{data.spec}</option>
                                        })
                                       }
                                        </select>

                                        {docFormik.touched.specialization && docFormik.errors.specialization ? (
                                    <div style={{ color: 'red' }}>{docFormik.errors.specialization}</div>
                                ) : null}
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="space-y-1">
                            <div className='flex flex-1 flex-row gap-2'>
                            <div className="flex-1">
                                <label htmlFor="specialization" className="block text-sm font-medium leading-6 text-gray-900">
                               State
                                </label>
                                <div className="relative">
                                <select
                                    id="state"
                                    name="state"
                                    aria-placeholder='state'
                                    autoComplete="state"
                                    onChange={docFormik.handleChange}
                                    onBlur={docFormik.handleBlur}
                                    value={docFormik.values.state}
                                    required
                                    className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                    <option value=''>Select state</option>
                                   {
                                    states?.map((data)=>{
                                        return <option value={data.id}>{data.name}</option>
                                    })
                                   }
                                    </select>
                                    {docFormik.touched.state && docFormik.errors.state ? (
                                                                    <div style={{ color: 'red' }}>{docFormik.errors.state}</div>
                                                                ) : null}
                                </div>
                                </div>
                                <div className="flex-1">
                                <label htmlFor="specialization" className="block text-sm font-medium leading-6 text-gray-900">
                                City
                                </label>
                                <div className="relative">
                                <select
                                    id="city"
                                    name="city"
                                    aria-placeholder='city'
                                    autoComplete="openingtime"
                                    onChange={docFormik.handleChange}
                                    onBlur={docFormik.handleBlur}
                                    value={docFormik.values.city}
                                    required
                                    className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                    <option value=''>Select city</option>
                                   {
                                    citiesdata?.map((data)=>{
                                        return <option value={data.id}>{data.name}</option>
                                    })
                                   }
                                    </select>
                                    {docFormik.touched.city && docFormik.errors.city ? (
                                                                    <div style={{ color: 'red' }}>{docFormik.errors.city}</div>
                                                                ) : null}
                                </div>
                                </div>
                                                                
                                    
                                </div>
                            </div>


                            <div className="space-y-1">
                            <div>
                                    <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                                      Address
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="address"
                                            name="address"
                                            type="text"
                                            autoComplete="address"
                                            onChange={docFormik.handleChange}
                                            onBlur={docFormik.handleBlur}
                                            value={docFormik.values.address}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                         {docFormik.touched.address && docFormik.errors.address ? (
                                                                    <div style={{ color: 'red' }}>{docFormik.errors.address}</div>
                                                                ) : null}
                                       
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

                                      <div >
                                    <label htmlFor="degree" className="block text-sm font-medium leading-6 text-gray-900">
                                        Degree
                                    </label>
                                    <div className="relative">
                                        <select
                                        id="degree"
                                        name="degree"
                                        aria-placeholder='degree'
                                        autoComplete="fullname"
                                        onChange={docFormik.handleChange}
                                        onBlur={docFormik.handleBlur}
                                        value={docFormik.values.degree}
                                        required
                                        className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                        <option value=''>Select Degree</option>
                                        <option value='AARCF'>AARCF</option>
                                        <option value='AART'>AART</option>
                                        </select>
                                        {docFormik.touched.degree && docFormik.errors.degree ? (
                                    <div style={{ color: 'red' }}>{docFormik.errors.degree}</div>
                                ) : null}
                                    </div>
                                    </div>
                                    </div>

                                    <div className="space-y-1">

                                      <div >
                                    <label htmlFor="degree" className="block text-sm font-medium leading-6 text-gray-900">
                                       Collage/Institute
                                    </label>
                                    <div className="relative">
                                        <select
                                        id="Collage"
                                        name="Collage"
                                        aria-placeholder='Collage'
                                        autoComplete="fullname"
                                        onChange={docFormik.handleChange}
                                        onBlur={docFormik.handleBlur}
                                        value={docFormik.values.Collage}
                                        required
                                        className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                        <option value=''>Select Collage</option>
                                        <option value='XYZ'>XYZ</option>
                                        <option value='ABC'>ABC</option>
                                        </select>
                                        {docFormik.touched.degree && docFormik.errors.degree ? (
                                    <div style={{ color: 'red' }}>{docFormik.errors.degree}</div>
                                ) : null}
                                    </div>
                                    </div>
                                    </div>

                                    <div className="space-y-1">
<div className='flex flex-1 flex-wrap gap-2'>
<div className='flex-1'>      
                                <label htmlFor="URL" className="block text-sm font-medium leading-6 text-gray-900">
                                Year of Completion
                                    </label>
                                    <div className="relative">
                                    <Select
                                    id=" yearofcompletion"
                                    name="yearofcompletion"
                                    options={yearOptions}
                                    onChange={(option) => docFormik.setFieldValue('yearofcompletion', option?.value)}
                                    onBlur={docFormik.handleBlur}
                                    value={yearOptions.find((option) => option.value === docFormik.values.Regisyear)}
                                    placeholder="Year"
                                    classNamePrefix="react-select"
                                    aria-placeholder="Year"
            />
                                       
                                    </div>
                                    {docFormik.touched.Regisyear && docFormik.errors.Regisyear ? (
                                                                    <div style={{ color: 'red' }}>{docFormik.errors.Regisyear}</div>
                                                                ) : null}
                               
                               
                                    
                                    
                                </div>

                            <div className='flex-1'>      
                                <label htmlFor="URL" className="block text-sm font-medium leading-6 text-gray-900">
                                Experience
                                    </label>
                                    <div className="relative">
                                    <input
                                            id="experience"
                                            name="experience"
                                            type="text"
                                            autoComplete="experience"
                                            onChange={docFormik.handleChange}
                                            onBlur={docFormik.handleBlur}
                                            value={docFormik.values.experience}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                       
                                    </div>
                                    {docFormik.touched.experience && docFormik.errors.experience ? (
                                        <div style={{ color: 'red' }}>{docFormik.errors.experience}</div>
                                    ) : null}
                                       
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
                            <div>
                               
                                <label htmlFor="URL" className="block text-sm font-medium leading-6 text-gray-900">
                                Registration Number
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="Regisno"
                                            name="Regisno"
                                            type="Regisno"
                                            autoComplete="Regisno"
                                            onChange={docFormik.handleChange}
                                            onBlur={docFormik.handleBlur}
                                            value={docFormik.values.Regisno}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                       
                                    </div>
                                    {docFormik.touched.Regisno && docFormik.errors.Regisno ? (
                                                                    <div style={{ color: 'red' }}>{docFormik.errors.Regisno}</div>
                                                                ) : null}
                               
                               
                                    
                                    
                                </div>
                            </div>


                            <div className="space-y-1">
                            <div>
                               
                                <label htmlFor="URL" className="block text-sm font-medium leading-6 text-gray-900">
                                Registration Council
                                    </label>
                                    <div className="relative">
                                    <Select
                                    id=" RegisCouncil"
                                    name="RegisCouncil"
                                    options={Councildata}
                                    onChange={(option) => docFormik.setFieldValue('RegisCouncil', option?.value)}
                                    onBlur={docFormik.handleBlur}
                                    value={Councildata.find((option) => option.value === docFormik.values.RegisCouncil)}
                                    placeholder="Registration Council"
                                    classNamePrefix="react-select"
                                    aria-placeholder="openingtime"
            />
                                       
                                    </div>
                                    {docFormik.touched.RegisCouncil && docFormik.errors.RegisCouncil ? (
                                                                    <div style={{ color: 'red' }}>{docFormik.errors.RegisCouncil}</div>
                                                                ) : null}
                               
                               
                                    
                                    
                                </div>
                            </div>


                            <div className="space-y-1">
                            <div>
                               
                                <label htmlFor="URL" className="block text-sm font-medium leading-6 text-gray-900">
                                Registration Year
                                    </label>
                                    <div className="relative">
                                    <Select
                                    id=" Regisyear"
                                    name="Regisyear"
                                    options={yearOptions}
                                    onChange={(option) => docFormik.setFieldValue('Regisyear', option?.value)}
                                    onBlur={docFormik.handleBlur}
                                    value={yearOptions.find((option) => option.value === docFormik.values.Regisyear)}
                                    placeholder="Registration Year"
                                    classNamePrefix="react-select"
                                    aria-placeholder="openingtime"
            />
                                       
                                    </div>
                                    {docFormik.touched.Regisyear && docFormik.errors.Regisyear ? (
                                                                    <div style={{ color: 'red' }}>{docFormik.errors.Regisyear}</div>
                                                                ) : null}
                               
                               
                                    
                                    
                                </div>
                            </div>
</>

                            )
                          }


                          {
                            page==4 && (
<>
                            <div className="space-y-1">
      
                        
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    WebSite URL
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="websiteurl"
                                            name="websiteurl"
                                            type="text"
                                            autoComplete="websiteurl"
                                            onChange={docFormik.handleChange}
                                            onBlur={docFormik.handleBlur}
                                            value={docFormik.values.websiteurl}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                       
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
                                            id="youtube"
                                            name="youtube"
                                            type="text"
                                            autoComplete="youtube"
                                            onChange={docFormik.handleChange}
                                            onBlur={docFormik.handleBlur}
                                            value={docFormik.values.youtube}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                       
                                    </div>
                                </div>
                                <div>
                                <label htmlFor="twitter" className="block text-sm font-medium leading-6 text-gray-900">
                                   Linkdine Link
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="twitter"
                                            name="twitter"
                                            type="text"
                                            autoComplete="twitter"
                                            onChange={docFormik.handleChange}
                                            onBlur={docFormik.handleBlur}
                                            value={docFormik.values.twitter}
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
                                <label htmlFor="linkdine" className="block text-sm font-medium leading-6 text-gray-900">
                                 Twitter Link
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="linkdine"
                                            name="linkdine"
                                            type="text"
                                            autoComplete="linkdine"
                                            onChange={docFormik.handleChange}
                                            onBlur={docFormik.handleBlur}
                                            value={docFormik.values.linkdine}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                       
                                    </div>
                                </div>
                                <div>
                                <label htmlFor="facebooklink" className="block text-sm font-medium leading-6 text-gray-900">
                                   YouTube Link
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="facebooklink"
                                            name="facebooklink"
                                            type="text"
                                            autoComplete="facebooklink"
                                            onChange={docFormik.handleChange}
                                            onBlur={docFormik.handleBlur}
                                            value={docFormik.values.facebooklink}
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
    page==5 && (
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
                                            onChange={docFormik.handleChange}
                                            onBlur={docFormik.handleBlur}
                                            value={docFormik.values.countryCode}
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
                                        onChange={docFormik.handleChange}
                                        onBlur={docFormik.handleBlur}
                                        value={docFormik.values.mobile}
                                        required
                                        // disabled={isotpsend}
                                        className={`block w-full rounded-md border-0 py-2 pr--4 pl-28 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                    />
                                    
                                </div>
                                {docFormik.touched.mobile && docFormik.errors.mobile ? (
                                    <div style={{ color: 'red' }}>{docFormik.errors.mobile}</div>
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
                                            onChange={docFormik.handleChange}
                                            onBlur={docFormik.handleBlur}
                                            value={docFormik.values.email}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                       
                                    </div>
                                    {docFormik.touched.email && docFormik.errors.email ? (
                                    <div style={{ color: 'red' }}>{docFormik.errors.email}</div>
                                ) : null}
                                </div>
                            </div>
                            <div className="space-y-1">
                            <div>
                                    <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                                      About
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="about"
                                            name="about"
                                            type="text"
                                            autoComplete="about"
                                            onChange={docFormik.handleChange}
                                            onBlur={docFormik.handleBlur}
                                            value={docFormik.values.about}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                         {docFormik.touched.about && docFormik.errors.about ? (
                                                                    <div style={{ color: 'red' }}>{docFormik.errors.about}</div>
                                                                ) : null}
                                       
                                    </div>
                                    
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
                                            onChange={docFormik.handleChange}
                                            onBlur={docFormik.handleBlur}
                                            value={docFormik.values.password}
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events cursor-pointer" onClick={() => { setpasswordshow((e) => !e) }}>
                                            {ispasswordshow ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                                        </div>
                                    </div>
                                    {docFormik.touched.password && docFormik.errors.password ? (
                                    <div style={{ color: 'red' }}>{docFormik.errors.password}  
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
                                    > Back
                                    </span>
                                )
                        }  
                           
                           {
                            page==5 ?  
                             <button
                            style={{background:'#0D7DFF'}}
                                type="submit"
                                className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            > Register
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




// const SlotModal = ({ isOpen, onClose, selectedSlots, setSelectedSlots, slots }) => {
//     const handleCheckboxChange = (event) => {
//       const { name, checked } = event.target;
//       if (checked) {
//         setSelectedSlots((prevSlots) => [...prevSlots, name]);
//       } else {
//         setSelectedSlots((prevSlots) => prevSlots.filter((slot) => slot !== name));
//       }
//     };
  
//     if (!isOpen) return null;
  
//     return (
//       <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
//         <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
//           <h2 className="text-lg font-bold mb-4">Select Slots</h2>
//           <div className="grid grid-cols-1 gap-2">
//             {slots.map((slot) => (
//               <label key={slot}>
//                 <input
//                   type="checkbox"
//                   name={slot}
//                   onChange={handleCheckboxChange}
//                   checked={selectedSlots.includes(slot)}
//                 />{' '}
//                 {slot}
//               </label>
//             ))}
//           </div>
//           <button onClick={onClose} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
//             Close
//           </button>
//         </div>
//       </div>
//     );
//   };

    {/* {
                            page==4 && (
<>
<div className="space-y-1">
          <div className="flex flex-1 flex-row gap-2">
            <div className="flex-1">
              <label htmlFor="openingtime" className="block text-sm font-medium leading-6 text-gray-900">
                Opening Timing
              </label>
              <div className="relative">
                <Select
                  id="openingtime"
                  name="openingtime"
                  options={options}
                  onChange={(option) => docFormik.setFieldValue('openingtime', option?.value)}
                  onBlur={docFormik.handleBlur}
                  value={options.find((option) => option.value === docFormik.values.openingtime)}
                  placeholder="Opening Time"
                  classNamePrefix="react-select"
                  aria-placeholder="openingtime"
                />
                {docFormik.touched.openingtime && docFormik.errors.openingtime ? (
                  <div style={{ color: 'red' }}>{docFormik.errors.openingtime}</div>
                ) : null}
              </div>
            </div>
            <div className="flex-1">
              <label htmlFor="closingtime" className="block text-sm font-medium leading-6 text-gray-900">
                Closing Timing
              </label>
              <div className="relative">
                <Select
                  id="closingtime"
                  name="closingtime"
                  options={options}
                  onChange={(option) => docFormik.setFieldValue('closingtime', option?.value)}
                  onBlur={docFormik.handleBlur}
                  value={options.find((option) => option.value === docFormik.values.closingtime)}
                  placeholder="Closing Time"
                  classNamePrefix="react-select"
                  aria-placeholder="closingtime"
                />
                {docFormik.touched.closingtime && docFormik.errors.closingtime ? (
                  <div style={{ color: 'red' }}>{docFormik.errors.closingtime}</div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <div>
            <label htmlFor="slotdurationdata" className="block text-sm font-medium leading-6 text-gray-900">
              Slot-Duration
            </label>
            <div className="relative">
              <Select
                id="slotdurationdata"
                name="slotdurationdata"
                options={durationdata}
                onChange={(option) => docFormik.setFieldValue('slotdurationdata', option?.value)}
                onBlur={docFormik.handleBlur}
                value={durationdata.find((option) => option.value === docFormik.values.slotdurationdata)}
                placeholder="Slot-Duration"
                classNamePrefix="react-select"
                aria-placeholder="slotdurationdata"
              />
              {docFormik.touched.slotdurationdata && docFormik.errors.slotdurationdata ? (
                <div style={{ color: 'red' }}>{docFormik.errors.slotdurationdata}</div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <div>
            <label htmlFor="slot" className="block text-sm font-medium leading-6 text-gray-900">
              Slot-Time
            </label>
            <div className="relative">
              <input
                id="slot"
                name="slot"
                type="text"
                autoComplete="slot"
                onClick={() => setModalOpen(true)}
                onChange={docFormik.handleChange}
                onBlur={docFormik.handleBlur}
                value={docFormik.values.slot}
                required
                readOnly
                className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {docFormik.touched.slot && docFormik.errors.slot ? (
                <div style={{ color: 'red' }}>{docFormik.errors.slot}</div>
              ) : null}
            </div>
          </div>
          <SlotModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            selectedSlots={selectedSlots}
            setSelectedSlots={setSelectedSlots}
            slots={generatedSlots}
          />
        </div>
</>

                            )
                          } */}


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



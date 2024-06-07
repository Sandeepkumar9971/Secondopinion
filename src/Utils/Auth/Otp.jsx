


export const sendOtp = async (countrycode,Mobile) => {
    const phoneNumberWithCode = `${countrycode}${Mobile}`;
    setiscaptcha(true)
    try {
        const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container');
        const confirmationResult = await signInWithPhoneNumber(auth, phoneNumberWithCode, recaptchaVerifier)
        if (confirmationResult.verificationId) {
            notify('success','Send OTP Sucessful')
            setisotpsend(true)
            setConfirmationResult(confirmationResult)
        }
    } catch (error) {
        if (error.code === 'auth/too-many-requests') {
            // Handle rate limit exceeded error
            Swal.fire({
                icon: "error",
                text: `${'Too many requests. Please try again later.'}`,
            }).then(() => {
                window.location.reload()
            })
        } else {
            // Handle other errors
            console.log('Error sending OTP:', error);
        }
    }

};



const handleVerifyOTP = async (verificationCode) => {
    try {
        if (!confirmationResult || !confirmationResult.verificationId) {
            console.error('Invalid confirmation result');
            return;
        }

        const credential = PhoneAuthProvider.credential(
            confirmationResult.verificationId,
            verificationCode
        );



        await signInWithCredential(auth, credential).then(() => {
            try {
                setisloading(true)
                notify('success','OTP verify Successful')
                makeRequest('post', userloginauth, { value: Formik.values, type: 'otp' }).then((data) => {
                    console.log(JSON.parse(decryptData(data)))
                    const resp = JSON.parse(decryptData(data))
                    console.log(resp)
                    setcommand(resp.command)
                    if (resp.command == 1) {
                        // document.cookie = `userID=${resp.userid}; SameSite=Strict`;
                        sessionStorage.setItem('userID', resp.userid)
                        sessionStorage.setItem('gender', resp.gender)
                        router.push("/user/dashboard")
                    }
                    else if (resp.command == 0) {
                            setmsg(resp.message)
                            setOpen(true)
                            setisloading(false)
                            window.location.reload()
                    }
                    else if (resp.command == 2) {
                        setmsg(resp.message)
                        setOpen(true)
                        setisloading(false)
                       
                    }
                    else if (resp.command == 3) {
                        setmsg(resp.message)
                        setOpen(true)
                        setisloading(false)
                        window.location.reload()
                    }
                })
            } catch (e) {
                console.log(e)
                setisloading(false)
            }
        })

    } catch (error) {
        setisloading(false)
        notify('error','Please Enter Valid OTP')
       
    }
};
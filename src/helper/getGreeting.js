export const getGreeting = ()=>{
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    let greeting = '';

    if (currentHour < 12) {
        greeting = 'Good Morning';
    } else if (currentHour < 17) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }

    return greeting;
}
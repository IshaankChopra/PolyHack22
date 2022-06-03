
// Weather Factor 
const weatherValue=async()=>{
    let res=await fetch('');
    let data= await res.json();
   
    let date= '02/07/2022';
    let time='4:45HKT';
    
            data.sport.date.forEach(e=>{
                if(e===date){
                    e.forEach(E=>{
                        if(E===time){
                            return E.precipitationVal*0.66;
                        }
                    })
                }
            })
        }
  //Seats left factor
const seatLeftVal=()=>{
        let totalBookings=100;
        let booked=56;
        let seatsLeft=totalBookings=booked;
        return 0.66-((seatsLeft/ totalBookings)*100)*0.;
}

//Time left factor
const timeLeftval=()=>{
    let currentTime=new Date().getDate;
    let bookingTime='02';
    return ((+bookingTime)-currentTime)/0.66; 
}
let indexVal=seatLeftVal()+timeLeftval()+weatherValue();
let originalPrice=100;
let cancelPrice=indexVal* originalPrice;
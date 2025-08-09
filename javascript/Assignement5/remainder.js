function remainder(ip) {
  const [time, zone] = ip.trim().split(" ");
  let [hr, min] = time.split(":").map(Number);

  if(zone==="PM" && hr!==12){
    hr+=12;
  }
  else if(zone==="AM" && hr===12){
    hr=0;
  }
  if(hr>=5 && hr<=9){
    return "cardio session";
  }
  else if(hr>=9 && hr<12){
    return "strength training";

  }
  else if(hr>=12 && hr<17){
    return "yoga and flexibility";
  }
   else if(hr>=17 && hr<21){
    return "high-intensity interval training";
  }
  else{
    return "light stretching and cool down";
  }
}
console.log(remainder("06:30 AM"));
console.log(remainder("10:15 AM"));
console.log(remainder("03:00 PM"));
console.log(remainder("05:45 PM"));
console.log(remainder("09:10 PM"));


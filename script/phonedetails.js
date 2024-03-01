const Phonedetails= async()=>{
  
    const res = await fetch('https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089')
    const data = await res.json();
    const phoneinfo = data.data;
    
    display_phonedetails(phoneinfo);
}
Phonedetails();

const display_phonedetails=(phoneinfo)=>{
        const{storage,displaySize,chipSet,memory,sensors,slug,name,releaseDate,brand,image,Bluetooth,GPS,}=phoneinfo.mainFeatures;
    //console.log(storage,displaySize,chipSet,memory,sensors,slug);

    
}
//fetching data
const loadphone = async(value)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${value}`);
    const data = await res.json();

    const phones=data.data;
    displayData(phones);
}
loadphone();

//phone details data fetching

const displayData=(phones)=>{
    const phonecontainer = document.getElementById("phone-container");
    //clear container cards before adding new cards
    phonecontainer.textContent ='';
phones.forEach(phone => {
    console.log(phone)
    const {phone_name,image,slug} = phone;
    

    const phonecard = document.createElement('div');
    phonecard.classList=`card w-96 bg-gray shadow-xl`
    phonecard.innerHTML = `<figure class="px-10 pt-10">
    <img src="${image}">
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">${phone_name}</h2>
      <p>${slug}</p>
      <div class="card-actions">
        <button id="button" onclick="Phonedetails()" class="btn btn-primary">Show Details</button>
      </div>
    </div>`
    phonecontainer.appendChild(phonecard);
   
});
}
//search phone


const search = document.getElementById('search');
const searchbtn=document.getElementById('searchbtn');
searchbtn.addEventListener('click',function(){
   // console.log(search.value);
    const value = search.value;
    loadphone(value);
    
});



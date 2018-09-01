let whatsappcontacts = [
    {
        "name" : "Areeba Asif",
        "image" : "nihadp.jpg",
        "message"    : "ready",
        "messageCheck" : "seen",
        "phoneNumber" : "03227878787",
        "email" : "areebaasif21@gmail.com",
        "status" : "hey their i am using whatsapp",
        "lastMessageCheck" : "9:30 PPM"
    },

    {
        "name" : "Shagufta",
        "image" : "2nddp.jpg",
        "message"    : "bhf dhth hhhth..",
        "messageCheck" : "not delivered",
        "phoneNumber" : "0327976549",
        "email" : "shefy@gmail.com",
        "status" : "busy",
        "lastMessageCheck" : "yesterday"
    },

    {
        "name" : "Jiya",
        "image" : "dp3.jpeg",
        "message"    : "hhh lll,srgrgmgrebdbb...",
        "messageCheck" : "sent",
        "phoneNumber" : "032656576",
        "email" : "jiya123@gmail.com",
        "status" : "Avalible",
        "lastMessageCheck" : "7:19 PM"
    },

    {
        "name" : "Hunain",
        "image" : "dp4.jpg",
        "message"    : "jjjj iyhktjtd jgj...",
        "messageCheck" : "seen",
        "phoneNumber" : "5685697965",
        "email" : "hunain@gmail.com",
        "status" : "i am a tainted wether of the flock",
        "lastMessageCheck" : "yesterday"
    },

    {
        "name" : "Maham",
        "image" : "dp5.jpg",
        "message"    : "hvhvhvh hhb",
        "messageCheck" : "not delivered",
        "phoneNumber" : "0656565787",
        "email" : "mahamnadeem@yahoo.com",
        "status" : "blessed",
        "lastMessageCheck" : "12:20 PM"
    },

    {
        "name" : "Nazia",
        "image" : "dp6.jpg",
        "message"    : "gggrfrg grgg...",
        "messageCheck" : "sent",
        "phoneNumber" : "06767688687",
        "email" : "naziaali@gmail.com",
        "status" : "just love the way i am",
        "lastMessageCheck" : "yeaterday"
    },

    {
        "name" : "Jaweria",
        "image" : "dp7.jpg",
        "message"    : "gkndkgn sgb...",
        "messageCheck" : "not delivered",
        "phoneNumber" :"66313265497",
        "email" : "javzakir@gmail.com",
        "status" : "goodby karachi",
        "lastMessageCheck" : "yesterday"
    },

    {
        "name" : "Nagina",
        "image" : "dp8.jpg",
        "message"    : "gjjdj gdkjkhjtj",
        "messageCheck" : "sent",
        "phoneNumber" : "0320858797",
        "email" : "nagin_mohsin@gmail.com",
        "status" : "hey their i am using whatsapp",
        "lastMessageCheck" : "10:00 AM"
    },

    {
        "name" : "Tooba",
        "image" : "dp9.jpg",
        "message"    : "fjlsglg gjfkgj ",
        "messageCheck" : "sent",
        "phoneNumber" : "036863388967",
        "email" : "tuba_321@gmail.com",
        "status" : "Avalible",
        "lastMessageCheck" : "wednesday"
    },

    {
        "name" : "mama",
        "image" : "dp10.jpg",
        "message"    : "hello hello",
        "messageCheck" : "sent",
        "phoneNumber" : "0356798433",
        "email" : "anila_mursaleen@yahoo.com",
        "status" : "hey their i am using whatsapp",
        "lastMessageCheck" : "7:55 AM"
    },

    {
        "name" : "Baji",
        "image" : "dp11.jpg",
        "message"    : "ready ready",
        "messageCheck" : "sent",
        "phoneNumber" : "055578787",
        "email" : "mehjabeen_khan@gmail.com",
        "status" : "i am back ",
        "lastMessageCheck" : "11:00 PM"
    },

    {
        "name" : "Urwa",
        "image" : "dp12.jpg",
        "message"    : "jhh srg hdhdh hh..",
        "messageCheck" : "seen",
        "phoneNumber" : "067578787",
        "email" : "syedzadi@gmail.com",
        "status" : "Dear Problem MY ALLAH is greater than you",
        "lastMessageCheck" : "yesterday"
    },

    {
        "name" : "Nimra",
        "image" : "dp13.jpg",
        "message"    : "jhh j hhghg",
        "messageCheck" : "sent",
        "phoneNumber" : "064654747",
        "email" : "nimra18@gmail.com",
        "status" : "Every day is a second chaance  of life",
        "lastMessageCheck" : "7/31/18"
    },

    {
        "name" : "Asma",
        "image" : "dp14.jpg",
        "message"    : "hjhjksjgss hjgj",
        "messageCheck" : "seen",
        "phoneNumber" : "0367757689687",
        "email" : "asamm@gmail.com",
        "status" : "Available",
        "lastMessageCheck" : "7/31/18"
    },

    {
        "name" : "Hira",
        "image" : "dp15.jpg",
        "message"    : "g htdhdtht dhd",
        "messageCheck" : "not delivered",
        "phoneNumber" : "032566787",
        "email" : "hira_usman@gmail.com",
        "status" : "Can't Talk Whatsapp Only",
        "lastMessageCheck" : "7/30/18"
    },

    {
        "name" : "Faiza",
        "image" : "dp16.jpg",
        "message"    : "glkj jdjg hh",
        "messageCheck" : "seen",
        "phoneNumber" : "032368587",
        "email" : "hina_faiza@gmail.com",
        "status" : "#Zindagi",
        "lastMessageCheck" : "7/20/18"
    }
];

function initialised()
{
    let chatBox =document.querySelector(".card");
  

    for(i=0;i<whatsappcontacts.length;i++)
    {
        let icon = '';
        if(whatsappcontacts[i].messageCheck === 'seen'){
            icon  = "'fas fa-check-double'";
        }
        else if(whatsappcontacts[i].messageCheck === 'sent'){
            icon = "'fas fa-check'"
        }
        else{
            icon = "'far fa-clock'"
        }

        
        chatBox.innerHTML +=
                            `   
                            <div class="card-body list-group-item list-group-item-action" 
                                    onclick="showUserDetail(${i})">
                                    <div class="user-img style="white-space: nowrap""  
                                    style="background-image: url(images/${whatsappcontacts[i].image})";>
                                    </div>
                                    <div class="user-info"> 
                                        <h6 class="user-name">
                                            ${whatsappcontacts[i].name}
                                        </h6>
                                        <p class="user-message" style="white-space: nowrap">
                                            <i class=${icon}></i>  
                                            ${whatsappcontacts[i].message}
                                        </p>
                                    </div>
                                    <div class="user-last-seen">
                                        <p class="message-day" style="white-space: nowrap">
                                        ${whatsappcontacts[i].lastMessageCheck}</p>
                                    </div>
                                </div>
                            `
    }
}


function showUserDetail(contacDetail)
{
    
    document.querySelector("#card-detail #show-image").style.backgroundImage = `url(images/${whatsappcontacts[contacDetail].image})`;
    document.querySelector("#card-detail #show-name.card-text span").innerHTML=`${whatsappcontacts[contacDetail].name}`; 
    document.querySelector("#card-detail #defult.card-text").innerHTML=``; 
    document.querySelector("#card-detail #show-number.card-text span").innerHTML=`<i class="fas fa-phone"></i> ${whatsappcontacts[contacDetail].phoneNumber}`;  
    document.querySelector("#card-detail #show-email.card-text span").innerHTML=`<i class="far fa-envelope"></i> ${whatsappcontacts[contacDetail].email}`;           
    document.querySelector("#card-detail #show-status.card-text span").innerHTML=`${whatsappcontacts[contacDetail].status}`;                   
}

function openNav() {
    document.querySelector("#mySidenav").style.width = "400px";
}

function closeNav() {
    document.querySelector("#mySidenav").style.width = "0";
}
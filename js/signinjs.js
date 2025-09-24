var yourMail = document.getElementById('enterEmail')
var yourPassword = document.getElementById('enterPassword')
var loginuser = document.getElementById('mylogin')




var productinformation = JSON.parse(localStorage.getItem('productinformation')) || [];


console.log (productinformation)


 loginuser.addEventListener ( 'click' , function () {
    loginaccount ()
 } )


// function addusername() {
//     if (yourMail === productinformation[i].email && yourPassword === productinformation[i].password ) {
//         found =true ;
//     }
// }







function loginaccount (){




var found = false;

for (let i = 0; i < productinformation.length; i++) {
    if (yourMail.value === productinformation[i].email &&
        yourPassword.value === productinformation[i].password) {

        found = true;
       
localStorage.setItem('currentuser', productinformation[i].username)

 window.location.href = "..//html/home.html";

    }
}

if (!found) {
    alert("Email or password incorrect.");
}





   
}




































//  var found = false ; 

// for (let i = 0; i < productinformation.length; i++) {
// if(yourMail.value === productinformation[i].email&& yourPassword.value === productinformation[i].password ) {

// found = true; // لو لقينا المطابقة، نغيره true
//     alert("Login successful! Welcome " + productinformation[i].username);
//     break; 


// }



// }

//   if (!found) {
//     alert("Email or password incorrect.");
//   }
 
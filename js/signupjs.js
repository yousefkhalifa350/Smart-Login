// localStorage.clear ()

var productusername = document.getElementById('username')
var productemail = document.getElementById('email')
var productpassword = document.getElementById('password')
var mybutton = document.getElementById('mybutton')




var userdata = JSON.parse(localStorage.getItem('productinformation')) || [];






// Validation
var regexusername = /^[A-Za-z]{5,}$/;
var regexuserpassword = /^[0-9@-]{5,}$/;
var regexuseremail = /^[^\s@]+@[^\s@]+\.com$/;




// Event of Button with a validation
mybutton.addEventListener('click', function () {
    if (regexusername.test(productusername.value) &&

        regexuserpassword.test(productpassword.value) &&
        regexuseremail.test(productemail.value))
         {
        addinformation()

        Swal.fire({
            title: "success!",
            icon: "success",
            draggable: true
        });
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter a valid username (letters only, min 5 chars), password (min 5 chars with numbers/@/-), and valid-email!  ",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }

})


// add the information of the user
function addinformation() {


    var addobj = {

        username: productusername.value,
        email: productemail.value,
        password: productpassword.value,


    }

    userdata.push(addobj)

    localStorage.setItem('productinformation', JSON.stringify(userdata))



    localStorage.setItem('currentUser', productusername.value);


    console.log(userdata);
    

productusername.value = ''
productemail.value= ''
productpassword.value=''




}



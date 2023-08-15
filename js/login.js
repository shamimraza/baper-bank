document.getElementById("btn-submit").addEventListener('click', function(){
   
   const inputField = document.getElementById("input-email")
   const email = inputField.value;
   const inputPassword = document.getElementById("input-pass");
   const passWord = inputPassword.value;
   if(email === 'shamim@gmail.com' && passWord === 'shamim'){
     console.log('valid password');
   }
   else{
    console.log('invalid user');
   }
})
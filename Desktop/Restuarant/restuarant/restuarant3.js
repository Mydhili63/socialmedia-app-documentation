function validateInputs(){
    let Fullname=document.getElementById("fullname");
    let Email=document.getElementById("email");
    let Mobile=document.getElementById("mobile");
    let Street=document.getElementById("street");
    let City=document.getElementById("city");
    let Zipcode=document.getElementById("zipcode");
    
    console.log("Fullname ="+Fullname.value)
    console.log("Email ="+Email.value)
    console.log("Mobile ="+Mobile.value)
    console.log("Street ="+Street.value)
    console.log("City ="+City.value)
    console.log("Zipcode ="+Zipcode.value)
    
    let Btn=document.getElementById("buttonn");
    if(Fullname.value.length <=0){
        alert(" Full name is required..");
        Fullname.focus();
        return false;
    
    }
    if(Email.value.length <=0){
        alert("Email is requrd..");
        Email.focus();
        return false;
    
       
    }
    if(Mobile.value.length <=0){
        alert("Mobile Number is requrd..");
        Mobile.focus();
        return false;
    
    }
    if(Street.value.length <=0){
        alert("Street name is requrd..");
        Street.focus();
        return false;
    
       
    }
    if(City.value.length <=0){
        alert("City is requrd..");
        City.focus();
        return false;
    
       
    }
    if(Zipcode.value.length <=0){
        alert("Zip Code is requrd..");
        Zipcode.focus();
        return false;
    
    }return false;
    }
    function validateNumber(id){
        const element=document.getElementById(id);
        const re=/^[0-9]{10}$/;
        if(!re.test(element.value)){
            setTimeout(function() {alert("Number should be a number and must be 10 digits");},4000);
            
            element.style.border="2px solid #ff0012";
            return false;
        };
        element.style.border="2px solid #5dfbdf";
    };
    function validateEmail(id){
        const element=document.getElementById(id);
        const re=/^[a-zA-z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/;
        if(!re.test(element.value)){
            setTimeout(function() {alert("Enter Valid Email..");},4000);
         
            element.style.border="2px solid #ff0012";
            return false;
        };
        element.style.border="2px solid #5dfbdf";
    };
    function validateFullName(id){
        const element=document.getElementById(id);
        const re=/^[a-zA-z ]+$/;
        if(!re.test(element.value)){
            setTimeout(function() {alert("FullName must be a String..");},4000);
            element.style.border="2px solid #ff0012";
            return false;
        };
        element.style.border="2px solid #5dfbdf";
    };
    function validateAdress(id){
        const element=document.getElementById(id);
        const re=/^[a-zA-z ]+$/;
        if(!re.test(element.value)){
            setTimeout(function() {alert("Adress must be string only..");},4000);
            element.style.border="2px solid #ff0012";
            return false;
        };
        element.style.border="2px solid #5dfbdf";
    };
    
/*    
document.getElementById("check").onclick = function() {
    let allAreFilled = true;
    document.getElementById("myForm").querySelectorAll("[required]").forEach(function(i) {
      if (!allAreFilled) return;
      if (i.type === "radio") {
        let radioValueCheck = false;
  document.getElementById("myForm").querySelectorAll(`[name=${i.name}]`).forEach(function(r) {
          if (r.checked) radioValueCheck = true;
        })
        allAreFilled = radioValueCheck;
        return;
      }
      if (!i.value) { allAreFilled = false;  return; }
    })
    if (!allAreFilled) {
      alert('Fill all the fields');
    }
  };
  */
  'use strict'
  const switcher = document.querySelector('.buttn');
  switcher.addEventListener('click', function() {
      document.body.classList.toggle('dark-theme')
  
      var className = document.body.className;
      if(className == "light-theme") {
          this.textContent = "Dark";
      }
      else {
          this.textContent = "Light";
      }
      console.log('current class name: ' + className);
  });
  
  
let id =(id) =>document.getElementById(id);
let classes=(classes) =>document.getElementsByClassName(classes);


let email = id("email"),
    username = id("username"),
    password = id("password"),
    form = id("form")
    errorMsg =classes ("error"),
    successIcon =classes("success-icon"),
    failureIcon =classes ("failure-icon");


    form.addEventListener("submit",(e)=>{
      e.preventDefault();
    });
      let engine = (id, serial, message) => {
        if (id.value.trim() === "") {
          errorMsg[serial].innerHTML = message;
          id.style.border = "2px solid red";
    
          // icons
          failureIcon[serial].style.opacity = "1";
          successIcon[serial].style.opacity = "0";
        } 
        
        else {
          errorMsg[serial].innerHTML = "";
          id.style.border = "2px solid green";
    
    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
        }
      }
      form.addEventListener("submit", (e) => {
        e.preventDefault();
      
        engine(username, 1, "Please fill all the values");
        engine(email, 0, "Please fill all the values");
        engine(password, 2, "Please fill all the values");
      });



     
    
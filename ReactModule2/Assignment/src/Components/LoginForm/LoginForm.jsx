function LoginForm(){
    
    const handleformsubmit=(event)=>{
        event.preventDefault();
    }

    let handleOnClick=(event)=>{
        event.preventDefault();
        let name=document.getElementById('username');
        let user=name.value;
        let pass=document.getElementById("password");
        let password=pass.value;
        console.log("User Name is:",user);
        console.log("User Password is:",password);
        pass.value="";
        name.value="";
        name.focus();
    }
    return(
        <>
         <h2>Question 5</h2>
        <div className="userContainer">
            <form>
            <label type="text">
                UserName:  </label>
              <input type="text" 
              id="username"
              name="username"></input><br></br>
           
            
                 <label  type="text">
                Password:
              <input name="password" type="password" id="password" required>
              </input>
            </label>
            <button className="login"
            onClick={handleOnClick}
            >
                Login
            </button>
        </form>
     </div>
     </>
    )
}
export default LoginForm;
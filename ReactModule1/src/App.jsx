//import { createElement } from "react"
import Button from "./Components/Button/Button";
import Login from "./Components/Login"
import Product from "./Components/Product"
import CustomComponent from "./Components/State/CustomComponent";
import TextInputForm from "./Components/State/TextInputFrom";

function App() {
  return (
    <>
    <div>
      <h1>Product Component</h1>
     <Product/>
     <h2>Login Form</h2>
     <Login/>
          </div>
          <Button  buttonType="button" text="Primary" styleType="primary" onClickHandler={()=>{
            alert("You clicked on primary button")
          }}></Button>
<Button  buttonType="submit" text="Secondary" styleType="secondary" 
onClickHandler={()=>{
            alert("You clicked on secondary button")
          }}></Button>
<Button  buttonType="button" text="Warning" styleType="warning"
onClickHandler={()=>{
            alert("You clicked on warning button")
          }}></Button>
<Button  buttonType="button" text="Error" styleType="error"
onClickHandler={()=>{
            alert("You clicked on error button")
          }}></Button>

          <CustomComponent/>
          <TextInputForm onSubmit={(value)=> console.log("value coming from hidden form",value)}/>

     </>
    );
}

export default App

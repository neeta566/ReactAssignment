import UserContextProvider from "./component/Context/UserContextProvider"
import Login from "./component/Login"
import Profile from "./component/Profile"
import useToggle from "./component/useToggle"

function App() {

//   const [value,toggleValue]=useToggle(true);
//   return (
//   <div>
//     <button onClick={toggleValue}>Toggle Heading</button>
// <h1>Module 3</h1>
// {value?<h2>hello</h2>:null}
//   </div>
//   )
return(
  //   <div><h1>context </h1>
  //  <Login></Login>
  //   </div>
   
 <UserContextProvider>
  <h1>context API</h1>
  <Login></Login>
  <Profile></Profile>
</UserContextProvider>  
)
}

export default App

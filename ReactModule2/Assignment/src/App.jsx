import Counter from "./Components/Counter/Counter"
import LoginForm from "./Components/LoginForm/LoginForm"
import Todolist from "./Components/ToDolist/ToDolist"
import ToggleButton from "./Components/ToggleButton/ToggleButton"
import UserProfile from "./Components/User/UserProfile"



function App() {
  

  return (
    <>
    <h1>Assignment Module2</h1>
    <div className="maincontainer">
      
      <div>
       
       <h2>Question 1</h2> 
          <UserProfile userName="Ram" userEmail="Ram@gmail.com"/> 
      </div>
      <div >
        <h2>Question 2</h2>
        <Counter/>            
      </div>
      <div>
        <h2>Question 3</h2>
        <ToggleButton/>
      </div>
      <div>
        <h2>Question 4</h2>
      <Todolist/>
      </div>
      <div>
        <LoginForm/>
      </div>
      </div>
    </>
  )
}

export default App

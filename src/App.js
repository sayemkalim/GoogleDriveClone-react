import { useState } from "react";
import Data from "./Component/Data";
import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";
import { auth, provider } from "./firebase";

function App() {
const [user,setUser]= useState(null)
console.log(user)
const signIn=()=>{
  auth.signInWithPopup(provider).then(({user})=>{
    setUser(user)
  }).catch(error=>{
    alert(error.message);
  })
}
  return (
    <>
    {
      user ? (
<>
      <Header photoURL={user.photoURL}/>
    <div className="App">
    <Sidebar/>
    <Data/>
     
    </div>
    </>
    ):( 
      <div className="loginWrap">
        <img src="data:image/png;base64,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"/>
        <button onClick={signIn}>Login with Clone Drive</button>
      </div>
    )
    }
    
    </>
  );
 
}

export default App;

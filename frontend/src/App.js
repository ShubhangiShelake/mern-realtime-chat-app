import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Chat from "./pages/chat";

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/login" element={<Login/>} />

<Route path="/register" element={<Register/>} />

<Route path="/profile" element={<Profile/>} />

<Route path="/Chat" element={<Chat/>}/>

</Routes>

</BrowserRouter>

);

}

export default App;
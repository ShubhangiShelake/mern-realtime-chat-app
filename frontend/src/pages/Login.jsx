import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

function Login(){

const navigate = useNavigate();

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const handleSubmit=async(e)=>{

e.preventDefault();

try{

const res=await API.post("/auth/login",{email,password});

localStorage.setItem("token",res.data.token);

navigate("/chat");

}catch(error){

alert(error.response.data.message);

}

};

return(

<div className="flex items-center justify-center min-h-screen bg-gray-100">

<div className="bg-white p-8 rounded-lg shadow-lg w-96">

<h2 className="text-2xl font-bold text-center mb-6">Login</h2>

<form onSubmit={handleSubmit} className="space-y-4">

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full p-2 border rounded"
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full p-2 border rounded"
/>

<button
type="submit"
className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
>
Login
</button>

</form>

<p className="text-center mt-4">

Don't have an account?

<Link to="/register" className="text-blue-500 ml-1">
Register
</Link>

</p>

</div>

</div>

);

}

export default Login;
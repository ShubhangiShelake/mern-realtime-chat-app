import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

function Register() {

const navigate = useNavigate();

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const handleSubmit=async(e)=>{
e.preventDefault();

try{

await API.post("/auth/register",{name,email,password});

alert("Registration successful");

navigate("/login");

}catch(error){

alert(error.response.data.message);

}

};

return(

<div className="flex items-center justify-center min-h-screen bg-gray-100">

<div className="bg-white p-8 rounded-lg shadow-lg w-96">

<h2 className="text-2xl font-bold text-center mb-6">Register</h2>

<form onSubmit={handleSubmit} className="space-y-4">

<input
type="text"
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full p-2 border rounded"
/>

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
className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
>
Register
</button>

</form>

<p className="text-center mt-4">

Already have an account?

<Link to="/login" className="text-blue-500 ml-1">
Login
</Link>

</p>

</div>

</div>

);

}

export default Register;
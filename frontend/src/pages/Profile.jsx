import { useEffect, useState } from "react";
import API from "../services/api";

function Profile(){

const [user,setUser]=useState(null);

useEffect(()=>{

const getProfile=async()=>{

const token=localStorage.getItem("token");

const res=await API.get("/auth/profile",{
headers:{ Authorization:`Bearer ${token}` }
});

setUser(res.data.user);

};

getProfile();

},[]);

return(

<div className="flex items-center justify-center min-h-screen bg-gray-100">

<div className="bg-white p-8 rounded shadow w-96">

<h2 className="text-2xl font-bold mb-4">Profile</h2>

{user && (

<div>

<p><strong>Name:</strong> {user.name}</p>
<p><strong>Email:</strong> {user.email}</p>

</div>

)}

</div>

</div>

);

}

export default Profile;
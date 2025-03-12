import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/setup";
import { Link, useNavigate } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Login Data:", { email, password });
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const userDoc = await getDoc(doc(db, 'users', user.uid));
            console.log('user doc', userDoc)
            const userData = userDoc.exists() ? userDoc.data() : { name: 'Unknown' };
            console.log('User data', userData)
          
            toast.success('Login Success!')
            navigate('/')
        } catch (error) {
            console.log("Error while user creation",error)
            toast.error(error.code.split('/')[1].split('-').join(' ').toUpperCase())
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-96 p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold text-center mb-4">Log In</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 border rounded focus:outline-none focus:ring-2 focus:border-none focus:ring-yellow-400"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-2 border rounded focus:outline-none focus:ring-2 focus:border-none focus:ring-orange-400"
                    />
                    <button
                        type="submit"
                        className="w-full bg-green-700 text-white p-2 rounded hover:bg-green-800 transition cursor-pointer"
                    >
                        Log In
                    </button>
                </form>
                <div className="mt-7 flex justify-end">
                    <h1 className="text-gray-500">Don't have an account?<Link to={'/signup'} className="text-black font-semibold border-b-2 ml-1 cursor-pointer">Sign Up</Link></h1>
                </div>
            </div>
        </div>
    );
};

export default Login;

import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase/setup";
import { setDoc, doc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Login Data:", { name, email, password });
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('user credential', user);

            await updateProfile(user, { displayName: name });

            if (user && user.uid) {
                await setDoc(doc(db, 'users', user.uid), {
                    uid: user.uid,
                    name,
                    email,
                })
            } else {
                console.error('User UID is undefined')
            }
            console.log('user created successfully');
            toast.success('User created successfully!')
            navigate('/')

        } catch (error) {
            console.log("Error while user creation", error)
            toast.error(error.code.split('/')[1].split('-').join(' ').toUpperCase())
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-96 p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold text-center mb-4">Signup</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-2 border rounded focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-400"
                    />
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
                        Sign Up
                    </button>
                </form>
                <div className="mt-7 flex justify-end">
                    <h1 className="text-gray-500">Already have an account?<Link to={'/login'} className="text-black font-semibold border-b-2 ml-1 cursor-pointer">Login</Link></h1>
                </div>
            </div>
        </div>
    );
};

export default Signup;

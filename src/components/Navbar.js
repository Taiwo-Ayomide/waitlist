import React from 'react'
import { useState } from 'react'
import axios from "axios"

const Navbar = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const handlesubmit = async (e) => {
        e.preventDefault();

        const user = { firstname, lastname, email }

        if (firstname && lastname && email) { 
            axios.post("https://connectpro-app-um0p.onrender.com/api/users/register", user)
            .then(alert("Data Submitted"));
        } else {
            alert("Invalid input");
        }
    }
  return (
    <main className="w-full h-auto bg-yellow-100 pb-24">
                <div className="pt-24 text-center">
                    <h1 className="font-bold text-2xl text-blue-700">CONNECTPRO APPS LIMITED</h1>
                    <p className="italic">Join ConnectPro App Wait list</p>
                </div>
                <section  className="flex justify-center items-center ms-4 me-4">
                    <div className="bg-white w-96 mt-6 pb-10 pt-6 xl:w-100 lg:w-100 h-auto rounded-lg ">
                        <div className="text-center">
                            <h1 className="text-2xl font-sans text-blue-700 font-bold">JOIN CONNECTPRO</h1>
                            <p className="text-xl text-gray-400 font-sans">We will notify you when ConnectPro <br/> App is out.</p>
                        </div>
                        <div className="ms-4 me-4 pt-6">
                            <form onSubmit={handlesubmit}>
                                <div>
                                    <input type="text"
                                        className="w-full h-12 border-2 border-yellow-400 border-solid rounded-lg ps-4 pe-4 outline-none"
                                        name="first_name"
                                        placeholder='First Name'
                                        required
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className="mt-4">
                                    <input type="text"
                                        className="w-full h-12 border-2 border-yellow-400 border-solid rounded-lg ps-4 pe-4 outline-none"
                                        name="last_name"
                                        placeholder='Last Name'
                                        required
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                                <div className="mt-4">
                                    <input type="text"
                                        className="w-full h-12 border-2 border-yellow-400 border-solid rounded-lg ps-4 pe-4 outline-none"
                                        name="email"
                                        placeholder='Email Address'
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mt-4">
                                    <input type="submit"
                                        value="JOIN WAITLIST"
                                        className="w-full h-12 bg-yellow-400 hover:bg-blue-700 text-white hover:text-yellow-400 text-xl font-sans cursor-pointer hover:rounded-full"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
    </main>
  )
}

export default Navbar

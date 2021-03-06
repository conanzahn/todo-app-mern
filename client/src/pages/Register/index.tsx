import React, { useState } from 'react';

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function registerUser() {
        // event.preventDefault()
        const response = await fetch(`http://localhost:4000/api/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
            })
        })

        const data = await response.json()
        console.log(data)
    }
    
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={registerUser}>
                <input 
                value = {name}
                onChange={(e) => setName(e.target.value)}
                type="text" 
                placeholder="name"
                />
                <br />
                <input 
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
                type="text" 
                placeholder="email"
                />
                <br />
                <input 
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" 
                placeholder="password"
                />
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Register;
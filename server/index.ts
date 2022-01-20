import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import User from './models/user.model';

const app = express()
app.use(cors())
app.use(express.json())

// connect to mongoose
mongoose.connect('mongodb://localhost:27017/todo-app-mern')

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({ status: 'ok' })
    } catch (err) {
        console.log(err)
        res.json({ status: 'error', error: 'Duplicate email' })
    }
    
})

// http://localhost:4000/hello
app.listen(4000, ()=> {
    console.log('server started on 4000')
}) 
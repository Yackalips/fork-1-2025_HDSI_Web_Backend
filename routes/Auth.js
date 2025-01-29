import express from 'express';


const authRouter = express.Router();

authRouter.post('/login', (req, res) => {
    res.send('Hello World!')
})


export default authRouter;
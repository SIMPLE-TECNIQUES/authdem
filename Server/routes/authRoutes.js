// const express=require('express');
// const router=express.Router();
// const cors=require('cors');
// const app=express();
// const {login}=require('../controllers/authController').default
// //middleware
// router.use(
//     cors({
//         credentials:true,
//         origin:'http://localhost:5173'
//     })
// )

// app.get('/login',login)

// module.exports=router
const express = require('express');
const router = express.Router();
const cors = require('cors');
const { login } = require('../controllers/authController');

// Middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
);

// Route to handle login requests
router.post('/login', login);

module.exports = router;

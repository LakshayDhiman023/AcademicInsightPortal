import express from 'express';
import { fetchStudentInfo } from '../controller/student-controller.js';




const router = express.Router();


router.get('/', fetchStudentInfo);
// router.get('/', (req, res)=>{
//     res.send("je");
// })


export default router

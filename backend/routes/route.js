import express from 'express';
import { fetchStudentInfo, validateLogin } from '../controller/student-controller.js';
import { fetchAnnouncement } from '../controller/announcement-controller.js';
import { fetchAllAttendance } from '../controller/attendance-controller.js';
import { fetchAllResult } from '../controller/result-controller.js';




const router = express.Router();


router.get('/user/:id', fetchStudentInfo);
// router.get('/', (req, res)=>{
//     res.send("je");
// })
router.get('/announcement', fetchAnnouncement)
router.get('/attendance/:id', fetchAllAttendance)
router.get('/result/:id', fetchAllResult)
router.post('/login', validateLogin)


export default router

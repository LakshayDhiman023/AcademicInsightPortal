import express from 'express';
import { fetchStudentInfo } from '../controller/student-controller.js';
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


export default router

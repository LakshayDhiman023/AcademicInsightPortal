import express from 'express';
import { addStudent, fetchStudentInfo, validateLogin } from '../controller/student-controller.js';
import { addAnnouncement, fetchAnnouncement } from '../controller/announcement-controller.js';
import { fetchAllAttendance } from '../controller/attendance-controller.js';
import { fetchAllResult } from '../controller/result-controller.js';
import { addTeacher, fetchTeacherInfo } from '../controller/teacher-controller.js';




const router = express.Router();


router.get('/user/:id', fetchStudentInfo);
// router.get('/', (req, res)=>{
//     res.send("je");
// })
router.get('/announcement', fetchAnnouncement)
router.get('/attendance/:id', fetchAllAttendance)
router.get('/result/:id', fetchAllResult)
router.post('/login', validateLogin)
router.post('/addAnnouncement', addAnnouncement)
router.post('/addTeacher', addTeacher)
router.post('/addStudent', addStudent)
router.get("/teacher/:id", fetchTeacherInfo);

export default router

import connection from "../database/db.config.js";


export const fetchStudentInfo = async (req, res) =>{
    const { id } = req.params;
    console.log(id);
    const q = `SELECT * FROM student where student_id = ${id}`;
    await connection.query(q, (error, result, fields) =>{
        if (error) throw error;
        res.send(result);
    })
}
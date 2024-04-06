import connection from "../database/db.config.js";


export const fetchStudentInfo = async (req, res) =>{
    
    const q = "SELECT * FROM student";
    await connection.query(q, (error, result, fields) =>{
        if (error) throw error;
        res.send(result);
    })
}
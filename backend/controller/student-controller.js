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

export const validateLogin  = (req, res) => {
    const { student_id, password } = req.body;
  
    // Query to validate login
    const query = `SELECT * FROM student WHERE student_id = ${student_id} AND password = "${password}"`;
    connection.query(query, [student_id, password], (error, results, fields) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      if (results.length > 0) {
        // Login successful
        res.status(200).json({ message: 'Login successful', user: results[0] });
      } else {
        // Invalid credentials
        res.status(401).json({ error: 'Invalid credentials' });
      }
    });
  };
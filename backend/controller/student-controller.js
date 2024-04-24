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
    const { user, id, password } = req.body;

    // console.log(user, id, password);
  
    if(user === 'student'){
      const query = `SELECT * FROM student WHERE student_id = ${id} AND password = "${password}"`;
      connection.query(query, [id, password], (error, results, fields) => {
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
    }
    else if(user === 'teacher'){
      const query = `SELECT * FROM teacher WHERE teacher_id = ${id} AND password = "${password}"`;
      connection.query(query, [id, password], (error, results, fields) => {
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
    }
    else if(user === "admin"){
      const query = `SELECT * FROM admin WHERE admin_id = ${id} AND password = "${password}"`;
      connection.query(query, [id, password], (error, results, fields) => {
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
    }
    else{
      console.log("stupid");
    }
  };


  export const addStudent = (req, res) =>{
    const { student_id, name, contact_no, email, password, course, dob } = req.body;

  // Validate input data (you can add more validation as needed)
  if (!student_id || !name || !contact_no || !email || !password || !course || !dob) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Check if student with the same email already exists in the database
  connection.query(
    `SELECT * FROM student WHERE email = "${email}"`,
    [email],
    (error, results) => {
      if (error) {
        console.error('Error checking for existing student:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (results.length > 0) {
        return res.status(400).json({ error: 'Student with this email already exists' });
      }

      // Insert new student into the database
      connection.query(
        `INSERT INTO student (student_id, name, contact_no, email, password, course, dob) VALUES ("${student_id}0", "${name}", "${contact_no}", "${email}", "${password}", "${course}", "${dob}")`,
        [student_id, name, contact_no, email, password, course, dob],
        (insertError) => {
          if (insertError) {
            console.error('Error adding new student:', insertError);
            return res.status(500).json({ error: 'Internal server error' });
          }

          // Respond with success message and the added student data
          res.status(201).json({ message: 'Student added successfully', student: req.body });
        }
      );
    }
  );
  }


export const deleteStudent = async (req, res) => {
  
    const { id } = req.params;
  
    try {
      
      await connection.query(`DELETE FROM student WHERE student_id = ${id}`, [id]);
      
      res.status(200).json({ message: `Student with ID ${id} deleted successfully.` });
    } catch (error) {
      console.error('Error deleting student:', error);
      res.status(500).json({ error: 'Internal server error.' });
    }
  };


  export const updateStudent = async (req, res) => {
    const { studentId } = req.params;
    const { name, contact_no, email, password, course, dob } = req.body;
  
    const updateQuery = `
      UPDATE students
      SET name = "${name}", contact_no = "${contact_no}", email = "${email}", course = "${course}", dob = "${dob}"
      WHERE student_id = "${studentId}"
    `;
  
    db.query(updateQuery, [name, contact_no, email, password, course, dob, studentId], (err, result) => {
      if (err) {
        console.error('Error updating student details:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Student not found' });
      }
  
      res.json({ message: 'Student details updated successfully' });
    });
    
  }
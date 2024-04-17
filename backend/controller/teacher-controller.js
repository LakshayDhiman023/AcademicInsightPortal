
import connection from "../database/db.config.js";


export const addTeacher = (req, res)=>{
  // res.send("hello")
    const { teacher_id, name, contact_no, email, password, dob } = req.body;

  // Validate input data (you can add more validation as needed)
  if (!teacher_id || !name || !contact_no || !email || !password || !dob) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Check if teacher with the same email already exists in the database
  connection.query(
    `SELECT * FROM teacher WHERE email = " ${email}"`,
    [email],
    (error, results) => {
      if (error) {
        console.error('Error checking for existing teacher:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (results.length > 0) {
        return res.status(400).json({ error: 'Teacher with this email already exists' });
      }

      // Insert new teacher into the database
      connection.query(
        `INSERT INTO teacher (teacher_id, name, contact_no, email, password, dob) VALUES ("${teacher_id}"," ${name}", "${contact_no}", "${email}", "${password}", "${dob}")`,
        [teacher_id, name, contact_no, email, password, dob],
        (insertError) => {
          if (insertError) {
            console.error('Error adding new teacher:', insertError);
            return res.status(500).json({ error: 'Internal server error' });
          }

          // Respond with success message and the added teacher data
          res.status(201).json({ message: 'Teacher added successfully', teacher: req.body });
        }
      );
    }
  );
}


export const fetchTeacherInfo = (req, res) =>{
  const {id} = req.params;
  console.log(id);
  // Fetch teacher data from the database
  connection.query(
    `SELECT * FROM teacher WHERE teacher_id = "${id}"`,
    [id],
    (error, results) => {
      if (error) {
        console.error('Error fetching teacher data:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (results.length === 0) {
        return res.status(404).json({ error: 'Teacher not found' });
      }

      const teacher = results[0];
      res.status(200).json(teacher);
    }
  );
}
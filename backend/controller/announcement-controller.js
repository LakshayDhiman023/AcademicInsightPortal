// Import database connection configuration
import connection from "../database/db.config.js";


export const fetchAnnouncement = async (req, res) =>{
    
    const q = "SELECT * FROM noticeboard";
    await connection.query(q, (error, result, fields) =>{
        if (error) throw error;
        res.send(result);
    })
    // res.send("hi from announcement");
}


export const addAnnouncement = async(req, res) =>{
    const {notice_id, description, date, time, title} = req.body;
    const q = `INSERT INTO noticeboard (notice_id, description, date, time, title) VALUES ( "${notice_id}" ,"${description}", "${date}", "${time}", '${title}')`
    try {
        // Assuming you have a database connection object named 'dbConnection'
        await connection.query(q, [description, date, time, title]);
        
        // Send a success response
        res.status(200).json({ message: 'Announcement added successfully.' });
      } catch (error) {
        console.error('Error adding announcement:', error);
        // Send an error response
        res.status(500).json({ error: 'Failed to add announcement. Please try again.' });
      }
}

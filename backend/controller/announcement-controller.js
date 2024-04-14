import connection from "../database/db.config.js";


export const fetchAnnouncement = async (req, res) =>{
    
    const q = "SELECT * FROM noticeboard";
    await connection.query(q, (error, result, fields) =>{
        if (error) throw error;
        res.send(result);
    })
    // res.send("hi from announcement");
}

import connection from "../database/db.config.js";
export const fetchAllAttendance = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const allAttendanceData = {};
    const queries = [
        `SELECT * FROM sem1Attendance where roll_number = ${id}`,
        `SELECT * FROM sem2Attendance where roll_number = ${id}`,
        `SELECT * FROM sem3Attendance where roll_number = ${id}`,
        `SELECT * FROM sem4Attendance where roll_number = ${id}`,
    ];

    try {
        const results = await Promise.all(queries.map(q => queryDatabase(q)));
        results.forEach((result, index) => {
            allAttendanceData[`sem${index + 1}`] = result;
        });
        res.send(allAttendanceData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching attendance data.');
    }
};

const queryDatabase = (query) => {
    return new Promise((resolve, reject) => {
        connection.query(query, (error, result, fields) => {
            if (error) reject(error);
            resolve(result);
        });
    });
};

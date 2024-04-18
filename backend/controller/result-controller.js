import connection from "../database/db.config.js";
export const fetchAllResult = async (req, res) => {
    const { id } = req.params;
    // let id = 1;
    // console.log(id);
    const allResultData = {};
    const queries = [
        `SELECT * FROM sem1result where roll_number = ${id}`,
        `SELECT * FROM sem2result where roll_number = ${id}`,
        `SELECT * FROM sem3result where roll_number = ${id}`,
        `SELECT * FROM sem4result where roll_number = ${id}`,
    ];

    try {
        const results = await Promise.all(queries.map(q => queryDatabase(q)));
        results.forEach((result, index) => {
            allResultData[`sem${index + 1}`] = result;
        });
        res.send(allResultData);
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


export const addSemResult = async(req, res)=>{
    const { roll_number, semester, subject1_result, subject2_result, subject3_result, subject4_result, subject5_result } = req.body;

  try {
    

    // Insert query
    const query = `INSERT INTO  sem${semester}result (roll_number,  subject1_result, subject2_result, subject3_result, subject4_result, subject5_result) 
                   VALUES ("${roll_number}", "${subject1_result}," "${subject2_result}", "${subject3_result}", "${subject4_result}", "${subject5_result}")`;
    const values = [roll_number, semester, subject1_result, subject2_result, subject3_result, subject4_result, subject5_result];

    // Execute the query
    await connection.query(query, values);

    connection.release(); // Release the connection back to the pool

    res.status(200).json({ message: 'Result added successfully' });
  } catch (error) {
    console.error('Error adding result:', error);
    res.status(500).json({ error: 'Error adding result' });
  }
}

export default function setSlot(isAdmin, slots, name) {
    let conn = mysql.createConnection({
        host: '34.136.180.159',
        user: 'root',
        password: '3316',
        database: 'scheduleDB',
    });
    
    conn.connect();
    
   

    if (isAdmin) {
        // delete admin slots from admint table
        conn.query(
            'DELETE FROM AdminSlot',
            (err, rows, fields) => {
                if (err) {
                    console.log(err);
                }
            }
        )
        if (slots.length > 0) {
                                 //add new available slots to admin table
            for (s in slots) {
                conn.query(
                    'INSERT INTO AdminSlot VALUES ("' + s + '")',
                    (err, rows, fields) => {
                        if (err) {
                            console.log(err);
                        }
                    }
                )
            }
        }
    } else {
        //deleting guest data from guest table
        conn.query(  
            'DELETE FROM GuestSlot WHERE GuestName=' + name,
            (err, rows, fields) => {
                if (err) {
                    console.log(err);
                }
            }
        )
        if (slots.length > 0) {  //adding guest data into guest table
            
            conn.query(
                'INSERT INTO GuestSlot VALUES ("' + name + '", ' + s + '")',
                (err, rows, fields) => {
                    if (err) {
                        console.log(err);
                    }
                }
            )
        }
    }
    conn.end();
};

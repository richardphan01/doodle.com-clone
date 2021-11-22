function getSlot() {
    let conn = mysql.createConnection({
        host: '34.136.180.159',
        user: 'root',
        password: '3316',
        database: 'scheduleDB',
    });
    
    conn.connect();

    var TimesA = '';
    TimesA += "<h1>Admin Selection</h1>";
    TimesA += "<br />";  
    TimesA += "<br />";

    conn.query(
        'SELECT * FROM AdminSlot', //
        (err, rows, fields) => {
            if (err) {
                console.log(err);
            }
            for (r in rows) {
                TimesA += "<h4>" + r.AvailableTime + "</h4>";
                TimesA += "<br />";
            }
        }
    );

    var TimesG = '';
    TimesG += "<br />"
    TimesG += "<h1>Guest Selection</h1>";
    TimesG += "<br />";
    guestTimes += "<br />";

    conn.query(
        'SELECT * FROM GuestSlot',
        (err, rows, fields) => {
            if (err) {
                console.log(err);
            }
            for (r in rows) {
                TimesG += "<h4>" + r.GuestName + ": " + r.AvailableTime + "</h4>";
                TimesG += "<br />"
            }
        }
    );

    TimesG += "<br />"

    return TimesA + TimesG;
}
module.exports = getSlot;
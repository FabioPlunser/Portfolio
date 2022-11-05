import sql3 from "sqlite3"

let db: any; // global variable
export function getDB() {
    if (!db) {
        db = new sql3.Database("db.sqlite3", (err: any) => {
            if (err) {
                console.error(err.message);
            }
            console.log("Connected to the database.");
        });
    }
    return db;
}

export function closeDB(){
    db.close((err: any) => {
        if (err) {
            console.error(err.message)
        }
        console.log("Close the database connection.")
    });
}
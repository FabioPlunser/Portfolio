const sqlite3 = require('sqlite3')

const db = new sqlite3.Database("../../db/sql.db", (err: any) => {
    if (err) {
        console.error(err.message);
    }
    console.log("Connected to the database.");
});


export function createTable() {
    db.run("CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, path TEXT, icon TEXT)");
}

export function insertPost(title: string, description: string, path: string, icon: string) {
    db.run("INSERT INTO posts (title, description, path, icon) VALUES (?, ?, ?, ?)", [title, description, path, icon]);
}

export function closeDB(){
    db.close((err: any) => {
        if (err) {
            console.error(err.message)
        }
        console.log("Close the database connection.")
    });
}
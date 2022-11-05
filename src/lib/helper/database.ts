import sqlite3 from 'sqlite3';

var db: any;
export function connectDB(){
    db = new sqlite3.Database("src/db/sql.sqlite", (err: any) => {
        if (err) {
            console.error(err.message);
        }
        console.log("Connected to the database.");
    });
}

export async function createTable() {
    await db.run("CREATE TABLE IF NOT EXISTS Projects (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, path TEXT, icon TEXT, date TEXT)", function(err) {
        if(err){
            console.log(err)
        }
        else{
            console.log("Successful");
        }
    });
}

export async function destroyTable(){
    await connectDB();
    await db.run("DROP TABLE Projects", function(err) {
        if(err){
            console.log(err)
        }
        else{
            console.log("Successful");
        }
    });
}
export function insertPost(title: string, description: string, path: string, icon: string, date: string) {
    db.run("INSERT INTO Projects (title, description, path, icon, date) VALUES (?, ?, ?, ?, ?)", [title, description, path, icon, date], function(err) {
        if(err){
            console.log(err)
        }
        else{
            console.log("Successful");
        }
    });
}
export function updatePost(id: number, title: string, description: string, path: string, icon: string, date: string) {
    db.run("UPDATE Projects SET title = ?, description = ?, path = ?, icon = ?, date = ? WHERE id = ?", [title, description, path, icon, date, id], function(err) {
        if(err){
            console.log(err)
        }
        else{
            console.log("Successful");
        }
    });
}
export async function deletePost(id: number) {
    db.run("DELETE FROM Projects WHERE id=?", [id], function(err) {
        if(err){
            console.log(err)
            }
        else{
            console.log("Successfuly deleted");
            }
    });         
}

export function updateID(){
    db.run("UPDATE SQLITE_SEQUENCE SET SEQ=0 WHERE NAME='Projects';", function(err) {
        if(err){
            console.log(err)
        }
        else{
            console.log("Successful");
        }
    });
}



export function getPosts() {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM Projects", (err: any, rows: any) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
}

export function closeDB(){
    db.close((err: any) => {
        if (err) {
            console.error(err.message)
        }
        console.log("Close the database connection.")
    });
}
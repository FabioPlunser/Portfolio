const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("../../db/sql.db");

export function createDataBase(){
    db.serialize(() => {
        db.run("CREATE TABLE IF NOT EXISTS projects (title TEXT PRIMARY KEY, picture TEXT, description TEXT, link TEXT)");
    });
}

export function closeDatabase(){
    db.close();
}


export function addData(data: any){
    db.serialize(() => {
        db.run("INSERT OR IGNORE INTO projects VALUES (?, ?, ?, ?)", [data.title, data.picture, data.description, data.link]);
    });
}

export function getData(){
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.all("SELECT * FROM projects", (err: any, rows: any) => {
                if(err){
                    reject(err);
                }else{
                    resolve(rows);
                }
            });
        });
    });
}



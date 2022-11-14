import {MongoClient} from "mongodb"
import { ObjectId } from "mongodb";
const url = import.meta.env.VITE_MONGO_URL

export const client = new MongoClient(url)


export function start_mongo() {
	console.log('Starting mongo...');
	return client.connect();
}

export async function closeDB() {
    await client.close()
}


export async function insertBlog(title: string, content: string, icon: string, date: string){
    const db = client.db("Portfolio")
    const posts = db.collection("Blog")
    await posts.insertOne({title: title, content: content, icon: icon, date: date})
}

export async function getallBlog(){
    const db = client.db("Portfolio")
    const posts = db.collection("Blog")
    return await posts.find().toArray()
}

export async function updateBlog(id: string, title: string, content: string, icon: string, date: string){
    const db = client.db("Portfolio")
    const posts = db.collection("Blog")
    var _id = new ObjectId(id)
    await posts.updateOne({_id: _id}, {$set: {title: title, content: content, icon: icon, date: date}})
}

export async function deleteBlog(id: string){
    console.log("delete blog" + id);
    var _id = new ObjectId(id);
    const db = client.db("Portfolio")
    const posts = db.collection("Blog")
    await posts.deleteOne({_id: _id})
}


export async function getPages() {
    const db = client.db("Portfolio")
    const posts = db.collection("Pages")
    return await posts.find({}).toArray()
}

export async function insertPage(title: string, description: string, path: string, icon: string, date: string){
    const db = client.db("Portfolio")
    const posts = db.collection("Pages")
    await posts.insertOne({title: title, description: description, path: path, icon: icon, date: date})
}

export async function updatePage(id: string, title: string, description: string, path: string, icon: string, date: string){
    const db = client.db("Portfolio")
    const posts = db.collection("Pages")
    await posts.updateOne({_id: id}, {$set: {title: title, description: description, path: path, icon: icon, date: date}})
}
export async function deletePage(id: string){
    var _id = new ObjectId(id);
    const db = client.db("Portfolio")
    const posts = db.collection("Pages")
    await posts.deleteOne({_id: _id})
}
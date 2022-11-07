import { start_mongo } from "../src/lib/helper/db";


start_mongo().then(() => {
    console.log('Mongo started');
}).catch((err) => {
    console.log(err);
});
import { connectDB, createTable, updateID} from "$lib/helper/database";

await connectDB();
await createTable();
await updateID();
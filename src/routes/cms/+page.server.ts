import { sqlite3 } from "sqlite3";

import type { RequestHandler } from '@sveltejs/kit';
export const GET: RequestHandler = async (request) => {
    
    return {
        status: 200,
    }
}

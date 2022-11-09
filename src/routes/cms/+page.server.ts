import { getPages, insertPage, updatePage, deletePage } from "$lib/helper/db";
import type {PageServerLoad, Actions} from './$types';
import {redirect} from '@sveltejs/kit';



export const load: PageServerLoad = async function(){
    const data =  await getPages();
    for (let res of data) {
       res._id = res._id.toString();
    }
    return {
        data
    }
}

export const actions: Actions = {
    // TODO add BlogPost, AddProjects, AddPage
    addDB: async ({request}) => {
        let data = await request.formData();
        const title = data.get('title');
        const description = data.get('description');
        const path = data.get('path');
        const icon = data.get('icon');
        const date = data.get('date');

        insertPage(title, description, path, icon, date)
    },
    update: async ({request}) => {
        let data = await request.formData();
        const id = data.get('id');
        const title = data.get('title');
        const description = data.get('description');
        const path = data.get('path');
        const icon = data.get('icon');
        const date = data.get('date');
        const update = data.get("button");

        if(update === "update"){
            updatePage(id, title, description, path, icon, date);
        }
        else if(update === "delete"){
            deletePage(id);
        }

    }
}
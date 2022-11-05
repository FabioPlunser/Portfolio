import { getPosts, destroyTable, insertPost, updatePost, deletePost, updateID } from "$lib/helper/database";
import type {PageServerLoad, Actions} from './$types';
import {redirect} from '@sveltejs/kit';
import { toast } from '@zerodevx/svelte-toast'



export const load: PageServerLoad = async function(){
    const data =  await getPosts();
    await updateID();
    return {
        data
    }
}

export const actions: Actions = {
    addDB: async ({request}) => {
        let data = await request.formData();
        const title = data.get('title');
        const description = data.get('description');
        const path = data.get('path');
        const icon = data.get('icon');
        const date = data.get('date');

        insertPost(title, description, path, icon, date)
    },
    destroyDB: async () => {
        destroyTable();
        throw redirect(303, '/cms');

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

        console.log(data);
        if(update === "update"){
            updatePost(id, title, description, path, icon, date);
        }
        else if(update === "delete"){
            deletePost(id);
        }

    }
}
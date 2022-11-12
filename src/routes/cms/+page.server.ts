import { insertBlog, getBlog, updateBlog, deleteBlog, insertPage, getPages, updatePage, deletePage} from "$lib/helper/db";
import type {PageServerLoad, Actions} from './$types';
import {redirect} from '@sveltejs/kit';
import { Toast, toastStore } from '@brainandbones/skeleton';
import type { ToastMessage } from '@brainandbones/skeleton';






export const load: PageServerLoad = async function(){
    const pages =  await getPages();
    const blog = await getBlog();

    for (let res of pages) {
       res._id = res._id.toString();
    }
    for (let res of blog){
        res._id = res._id.toString();
    }

    const data = {
        pages: pages,
        blog: blog
    }
    return {
        data
    }
}

export const actions: Actions = {
    // TODO add BlogPost, AddProjects, AddPage
    addBlog: async ({request}) => {
        let data = await request.formData();
        const title = data.get('title');
        const content = data.get('content');
        const icon = data.get('icon');
        const date = data.get('date');

        insertBlog(title, content, icon, date);
        
    },
    updateBlog: async({request}) => {
        let data = await request.formData();
        const id = data.get('id');
        const title = data.get('title');
        const content = data.get('content');
        const icon = data.get('icon');
        const date = data.get('date');
        const button = data.get("button");

        console.log("updateBlog " + id + " " + title + " " + content + " " + icon + " " + date + " " + button);
        if(button === "update"){
            updateBlog(id, title, content, icon, date);            
        }
        else if(button === "delete"){
            deleteBlog(id);
        }
    },

    addPage: async({request}) => {
        let data = await request.formData();
        const title = data.get('title');
        const description = data.get('description');
        const path = data.get('path');
        const icon = data.get('icon');
        const date = data.get('date');
        
        insertPage(title, description, path, icon, date);
    },

    updatePage: async({request}) => {
        let data = await request.formData();
        const id = data.get('id');
        const title = data.get('title');
        const description = data.get('description');
        const path = data.get('path');
        const icon = data.get('icon');
        const date = data.get('date');
        const button = data.get("button");
        
        if(button === "update"){
            updatePage(id, title, description, path, icon, date);
        }
        else if(button === "delete"){
            deletePage(id);
        };
        
        
    },
}
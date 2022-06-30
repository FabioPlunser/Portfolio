import { browser } from '$app/env';

export function toggleDarkMode(dark: boolean) {
    if(browser){
        if(dark){
            document.documentElement.classList.add('dark');
        }
        else{
            document.documentElement.classList.remove('dark');
        }
    }
}

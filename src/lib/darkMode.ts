import { browser } from '$app/env';

export function toggleDarkMode() {
    if(browser){
        if(document.documentElement.classList.contains("dark")){
            document.documentElement.classList.remove("dark");
        }
        else{
            document.documentElement.classList.add("dark");
        }
    }
}

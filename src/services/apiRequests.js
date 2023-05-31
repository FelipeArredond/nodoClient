import { url } from "../environment";

export async function LoginRequest(body){
    const data = await fetch(url.api + "v1/auth/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    }); 
    const res = await data.json();
    return res;
}

export async function SignUpRequest(body){
    const data = await fetch(url.api + "v1/auth/register", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    }); 
    const res = await data.json();
    return res;
}

export async function GetCoursesBySchool(id){
    const data = await fetch(url.api + "course/school/" + id);
    const res = await data.json();
    return res;
}

export async function GetSchools(){
    const data = await fetch(url.api + "school");
    const res = await data.json();
    return res;
}
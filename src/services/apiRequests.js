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

export async function GetCourses(){
    const data = await fetch(url.api + "course");
    const res = await data.json();
    return res;
}

export async function GetCoursesBySchool(id){
    const data = await fetch(url.api + "course/school/" + id);
    const res = await data.json();
    return res;
}

export async function GetClassesByCourse(id){
    const data = await fetch(url.api + "class/course/" + id);
    const res = await data.json();
    return res;
}

export async function GetSchools(){
    const data = await fetch(url.api + "school");
    const res = await data.json();
    return res;
}

export async function CreateSchool(body){
    const data = await fetch(url.api + "school", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    });
    const res = await data.json();
    return res;
}

export async function CreateCourse(body){
    const data = await fetch(url.api + "course", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    });
    const res = await data.json();
    return res;
}

export async function CreateClass(body){
    const data = await fetch(url.api + "class", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    });
    const res = await data.json();
    return res;
}

export async function TransactionStatus(id){
    const data = await fetch("https://sandbox.wompi.co/v1/transactions/"+id);
    const res = await data.json();
    return res;
}

export async function GeneratePaymentReference(body){
    const data = await fetch(url.api + "payment_references", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    })
    const res = await data.json();
    return res;
}

export async function PostSubDetail(body){
    const data = await fetch(url.api + "subdetail", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    })
    const res = await data.json();
    return res;
}

export async function GetSubDetail(id){
    const data = await fetch(url.api + "subdetail/" + id);
    const res = await data.json();
    return res;
}
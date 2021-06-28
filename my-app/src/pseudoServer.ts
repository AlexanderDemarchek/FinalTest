
export async function pseudoRequest(login:string, password:string) {
    let validate = new Promise((resolve) => {
        setTimeout(() => {
            if(login === "steve.jobs@example.com" && password === "password") {
                resolve(true)
            }
            else{
            resolve(false)
            }}, 1000)
    });

    let result = await validate;

    return result;
}


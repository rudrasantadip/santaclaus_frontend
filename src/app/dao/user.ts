export interface User{
    username:string;
    password:string;
    readonly role:'ROLE_USER';
}

export interface Response{
    response:string;
    status:boolean;
    token:string;
}
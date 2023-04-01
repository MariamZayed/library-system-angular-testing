export interface BasicAdmin{
    id:Number,
    firstName:string,
    lastName:string,
    password:string,
    email:string,
    hiredate:string,
    birthdate:string,
    image?:string,// ? means optional
    isActivated:boolean,
    isRoot:boolean
}
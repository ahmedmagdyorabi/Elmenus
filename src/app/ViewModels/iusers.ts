export class User {
    constructor ( public id: string,public email: string,
    private token:string,
    private tokenExpireDate:Date){}


    getToken(){
        if(!this.tokenExpireDate ||this.tokenExpireDate<new Date())
        return null;
        return this.token;
    }
}

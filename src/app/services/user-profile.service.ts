import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class UserProfileService{
    private userName: string;
    private email: string;

    public getUserName(): string{
        return this.userName;
    }

    public setUserName(v:string){
        this.userName = v;
    }

    public getUserEmail(): string{
        return this.email;
    }

    public setUserEmail(v:string){
        this.email = v;
    }
}
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataService } from '../services/data.service';

@Injectable({
    providedIn: 'root'
})
export class TestDataResolver implements Resolve<any>{
    constructor(private dataService: DataService){
        
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.dataService.getData();
        

        
    }
    
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileService } from '../services/user-profile.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  tests = [];
  
  constructor(private router: Router,
    private userSvc: UserProfileService) { }

  ngOnInit(): void {
    this.populateTests();
  }


  // retrieve previous tests' data from the local storage
  populateTests() {
    this.tests = JSON.parse(localStorage.getItem(this.userSvc.getUserEmail()));

  }

  startNewTest(){
    this.router.navigate(["/test"]);
  }

}

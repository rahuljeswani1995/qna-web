import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserProfileService } from "../services/user-profile.service";

@Component({
	selector: 'app-welcome',
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

	constructor(private userSvc: UserProfileService,
		private router: Router) { }


	name: string;
	email: string;
	isNameValid: boolean;
	isEmailValid: boolean;

	ngOnInit(): void {
		this.name = this.email = "";
		this.isNameValid = this.isEmailValid = false;
	}

	onLoginClick() {
		if (this.isNameValid && this.isEmailValid) {
			this.userSvc.setUserName(this.name);
			this.userSvc.setUserEmail(this.email);

			if (localStorage.getItem(this.email) == null) {
				localStorage.setItem(this.email, JSON.stringify([]));
			}

			this.router.navigate(['/main']);
		}
		else {
			alert("Please enter your name and e-mail address.");
		}

	}

	onNameCommit(value: string) {
		if (value != null && value != "") {
			this.name = value;
			this.isNameValid = true;
		}
		else {
			this.name == "";
			this.isNameValid = false;
		}


	}

	onEmailCommit(value: string) {
		if (value != null && value != "") {
			this.email = value;
			this.isEmailValid = true;
		}
		else {
			this.email == "";
			this.isEmailValid = false;
		}
	}
}

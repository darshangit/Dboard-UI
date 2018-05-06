import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'primeng/primeng';
import { LoginService } from '../services/login.service';
import { Login } from '../models/login.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    userName: string;
    password: string;
    msgs: Message[] = [];
    accessRoutes: string[];
    constructor(private loginService: LoginService, private router: Router) { }

    ngOnInit(): void { }

    login(formValue) {

        const login: Login = {
            userName: formValue.userName,
            password: formValue.password
        };

        this.loginService.isValidUser(login).subscribe(response => {
            this.msgs = [];

            if (response) {
                this.msgs.push({ severity: 'success', summary: 'Yehaa', detail: 'Login Success' });
                this.loginService.setValidUser(login.userName);
                this.router.navigate(['/app-service-restart']);
            } else {
                this.msgs.push({ severity: 'error', summary: 'Oh Oh', detail: 'Invalid Credentials' });
            }
        });
    }

}

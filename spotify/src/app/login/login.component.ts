import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  resp1?: string;
  err1?: string;
 
    
  
  constructor(private ser: ServiceService, private route: Router) {
    
  }
  sub(form: NgForm) {
    this.ser.login(form.value.name, form.value.pass).subscribe(
      resp => {
        this.resp1 = resp;
        if (this.resp1 == "invalid credentials" || this.resp1 == "server down") {
          alert('try again');
        }
        else {
          sessionStorage.setItem('user', this.resp1);
          this.route.navigate(['/home']);
        }
      },
      error => {
        this.err1 = error;
        console.log(this.err1);
      },
    )
  }
  ngOnInit(): void {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  resp1?: string;
  err1?: string;

  constructor(private ser: ServiceService, private route: Router) { }

  sub(form: NgForm) {
    this.ser.register(form.value.name,form.value.ename,form.value.pass).subscribe(
      resp => {
        this.resp1 = resp;
        if (this.resp1 == "try again later" || this.resp1 == "serve issue") {
          alert(this.resp1);
        }
        else {
          alert(this.resp1);
          this.route.navigate(['/login']);
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

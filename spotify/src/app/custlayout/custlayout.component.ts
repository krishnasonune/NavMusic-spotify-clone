import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from '../progress/loading.service';

import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-custlayout',
  templateUrl: './custlayout.component.html',
  styleUrls: ['./custlayout.component.css']
})
export class CustlayoutComponent implements OnInit {
  searchsong?: string;
  resp1?: any;
  error1?: any;
 
  constructor(private route: Router, private ser: ServiceService, public load: LoadingService) { }

  submit(form: NgForm) {
    this.ser.setData(form.value.name);
    this.route.navigate(['/result'])
    
  }

  searchmus() {
    console.log(this.searchsong);
  }


  logout() {
    sessionStorage.removeItem('user');
    this.route.navigate(['/login']);
  }
  

  ngOnInit(): void {
    this.ser.getAllArtist().subscribe(

      resp => {

        this.resp1 = (resp);
        
      },

      error => {
        this.error1 = error;
        console.log(this.error1);
      }
    )
  }

}

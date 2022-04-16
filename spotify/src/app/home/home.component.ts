
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchsong?: string;
  play?:string
  resp1?: any;
  error1?: any;
  v?: any;
  x?: any;
  y?: any;

  user: any = sessionStorage.getItem('user');
  
  constructor(private ser: ServiceService, private route: Router) { }

  get(x:string) {
    this.ser.setData(x);
    this.route.navigate(['/audio']);
  }


  customOptions: OwlOptions = {
    loop: false,
    margin: 15,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<','>'],
    items: 6,
    nav: true,
    responsive: {
      0: {
        items: 3
      },
      361: {
        items: 4
      },
      501: {
        items: 4
      },
      721: {
        items: 5
      },
      1000: {
        items: 6
      }
    },

  }
  
  
  ngOnInit(): void {

    this.ser.getAllArtist().subscribe(


      resp => {
        this.x = resp;
        console.log(this.x);
      },
      error => {
        this.y = error;
        console.log(this.y);
      }
    )
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private ser: ServiceService, private rou: Router) { }
  result: string = this.ser.getData();
  resp1?: any;
  error1?: any;
  ngOnInit(): void {
    console.log(this.result);
    this.ser.getAllSongsByArtist(this.result).subscribe(

      resp => {
        this.resp1 = resp;
        console.log(this.resp1);
      },
      error => {
        this.error1 = error;
        console.log(this.error1);
      }
    )
  }

  do() {
    var x = document.getElementById("url")?.innerText;
    this.ser.setData(x);
    this.rou.navigate(['/audio']);
  }

}

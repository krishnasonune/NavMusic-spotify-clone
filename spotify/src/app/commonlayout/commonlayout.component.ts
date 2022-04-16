import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../progress/loading.service';

@Component({
  selector: 'app-commonlayout',
  templateUrl: './commonlayout.component.html',
  styleUrls: ['./commonlayout.component.css']
})
export class CommonlayoutComponent implements OnInit {
  spin: boolean = false;
  constructor(public load: LoadingService) { }

  ngOnInit(): void {
  }

}

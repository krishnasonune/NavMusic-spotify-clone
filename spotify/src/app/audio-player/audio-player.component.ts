import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';


@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit {

  constructor(private ser: ServiceService) { }

  play: string = this.ser.getData();
  error?: string;
  d?: any;
  auth?: string;
  resp1?: any;
  error1?: any;

 
  ngOnInit(): void {

    

    this.ser.getmysong(this.play).subscribe(

      resp => {

        
        var x = (document.getElementById("player") as HTMLAudioElement).src = resp;
      },

      error => {
        this.error = error;
        console.log(this.error);
      }
    )


    this.ser.getAllComp(this.play).subscribe(

      resp => {

        this.resp1 = resp;
        this.d = Array.of(this.resp1);
         
        
      },

      error=> {
        this.error1 = error;
        
      }
    )
  }

}

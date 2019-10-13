import { Component, OnInit } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detailartikel',
  templateUrl: './detailartikel.page.html',
  styleUrls: ['./detailartikel.page.scss'],
})
export class DetailartikelPage implements OnInit {
  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit() : void
  { 
    let i: number;

    this.http.get('https://jsonplaceholder.typicode.com/posts/'+ i)
    .subscribe(
      res=>{
        if(i == 1)
        {
          document.getElementById("judul1").innerHTML = res['title'];
          document.getElementById("konten1").innerHTML = res['body'];
        }

        if(i == 2)
        {
          document.getElementById("judul2").innerHTML = res['title'];
          document.getElementById("konten2").innerHTML = res['body'];
        }

        if(i == 3)
        {
          document.getElementById("judul3").innerHTML = res['title'];
          document.getElementById("konten3").innerHTML = res['body'];
        }
      },
      err=>{
            console.log("Error occured");
          }
      );
  }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpCallService } from '../_services/httpcall.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: any;
  constructor(private router: Router, private pageService: HttpCallService) { }

  ngOnInit(): void {
    this.pageService.getData().subscribe(data => {
      debugger;
      this.categories = data;
     });
  }
  delete(){

    this.pageService.deleteData().subscribe(
      response => {
         console.log("delete call in error", response);
     },
   
     );
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: "chapter 1 | The Beginning",
      url: "/chapter1"
    },
    {
      title:"chapter 2",
      url:"/chapter2"
    }
  ];
  

  constructor() { }

  ngOnInit() {
  }

}

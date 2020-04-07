import { Component, OnInit } from '@angular/core';

export interface tutorials {
  url: string;
  title: string;
  imageUrl: string;
  time_required: number;
}

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}

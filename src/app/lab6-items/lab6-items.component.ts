import { Component, OnInit } from '@angular/core';
import { Resume } from "../resume";
import {res} from "../mock-lab6";

@Component({
  selector: 'app-lab6-items',
  templateUrl: './lab6-items.component.html',
  styleUrls: ['./lab6-items.component.css']
})
export class Lab6ItemsComponent implements OnInit {
  resume: Resume[] = res;
  constructor() { }

  ngOnInit(): void {
  }

}

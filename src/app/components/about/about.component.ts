import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( private titleService: Title,      private meta: Meta,) { }

  ngOnInit(): void {

    this.titleService.setTitle("Kolleges : About"); 
    this.meta.updateTag (  { name: 'keywords', content: 'Kolleges, About Us' }); 
    this.meta.updateTag (  { name: 'description', content: 'Find Kolleges in India' }); 

  }

}

import { Component, OnInit } from '@angular/core';
import { HeroeService, Heroe } from '../shared/heroe.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  misheroes:Heroe[]=[];
  constructor(public miservicio:HeroeService,public router:Router) { 
    console.log("constructor de heroes component");
  }

  ngOnInit(): void {
    console.log("constructor ngOnInit heroes component");
    this.misheroes=this.miservicio.getHeroes();
    console.log(this.misheroes); 
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { HeroeService, Heroe } from '../shared/heroe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  @Input() heroe:Heroe;
  constructor(public HeroeService:HeroeService,public activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(params =>{
      console.log("parametro"+params['id']);
      this.heroe=HeroeService.getHeroe(params['id']);
      console.log(this.heroe);  
    })
   }

  ngOnInit(): void {
  }

}

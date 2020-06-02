import { Component, OnInit } from '@angular/core';
import { HeroeService, Heroe } from '../shared/heroe.service';
import { ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  nombreh:string;
  indice:number;
  miheroe:Heroe;
  constructor(private heroesService:HeroeService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(params=>{
      this.nombreh=params['nombreh'];
      this.indice=this.heroesService.buscarHeroe(this.nombreh);
      console.log(this.indice);
      if(this.indice != -1){
        this.miheroe=this.heroesService.getHeroe(this.indice);
      }
    })
   }

  ngOnInit(): void {
  }

}

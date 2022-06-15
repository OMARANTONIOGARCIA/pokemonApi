import { Component, OnInit } from '@angular/core';
import { pokemonService } from '../../service/pokemonService';
import { pokemonResponse, habilidadesReponse } from '../../models/pokemonModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public foundpokemon!:pokemonResponse;
  public habilidadpokemon!:habilidadesReponse;

  constructor(private pokemon:pokemonService) { }

 

  ngOnInit(): void {
    this.getPokemon('pikachu');
  }


  public recibiPokemon(event:any){ 
    this.getPokemon(event);
  }

  public getHabilidad(ruta:string){
    let index = (ruta.split('/')[6]);
    this.pokemon.getHabilidades(index).subscribe(
      (data:any)=>{
        this.habilidadpokemon = data.effect_entries[1];
      }
    );
  }

  public getPokemon(pokemon:string){
    this.pokemon.getPakemon(pokemon).subscribe(
      (data:any)=>{ 
        this.foundpokemon = data;
        console.log(this.foundpokemon);
        
      }
    ); 
  }

}

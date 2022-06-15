import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { pokemonService } from 'src/app/service/pokemonService';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public form:FormGroup;
  @Output () valueResponse: EventEmitter<string> = new EventEmitter();

  
  constructor(public formBuider:FormBuilder,
             private pokemon:pokemonService) { 
  
              this.form = this.formBuider.group({
                pokemon: ['',[Validators.required]],
              });
  }

  ngOnInit(): void {
  }
 
  enviarPokemon(){
    this.valueResponse.emit(this.form.get('pokemon')?.value);
  }

  get formulario(){
    return this.form.controls;
  }

}

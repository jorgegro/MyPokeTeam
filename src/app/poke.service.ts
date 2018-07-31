import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class PokeService {
  gender = null;

  start(){
    if(this.gender == true){

    }
  }

  input = "";

  team = [];

  select = {
    name: "",
    id: "",
    pic: "",
    description: "",
    empty: true,
    lvl: Math.trunc(Math.random() * 100)
  };

  constructor(public http: HttpClient) { }

  addPokemon = () => {
    if(this.team.length > 5){
      return swal(
        "You have a full party",
        "Release a pokèmon",
        "error"
      )
    }
    let addedPokemon = this.select;


    this.team.push(addedPokemon);

    swal(
      `You captured ${this.select.name}!!!` ,
      'Good Job!',
      'success'
    );

    this.select = {
      name: "",
      id: "",
      pic: "",
      description: "",
      empty: true,
      lvl: Math.trunc(Math.random() * 100)
    };

  }

  search = () => {

    this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${this.input.toLocaleLowerCase()}/`).subscribe((info) => {
      // if (err) {
      //   return console.error(err.message);
      // }

      this.select.name = info.name;
      this.select.id = info.id;
      this.select.pic = info.sprites.front_default;

    })

    this.http.get<any>(`https://pokeapi.co/api/v2/pokemon-species/${this.input.toLocaleLowerCase()}/`).subscribe((data) => {
      let x = null;
      let y = null;

      for(let i = 0; i < data.flavor_text_entries.length; i++){
        if(data.flavor_text_entries[i].language.name == "en" && x == null){
          x = i;
        } else if (data.flavor_text_entries[i].language.name === "en" && y == null){
          y = i;
        } else {
          continue;
        }
      }

      this.select.description = data.flavor_text_entries[x].flavor_text + " " + data.flavor_text_entries[y].flavor_text;

      this.input = "";
      this.select.empty = false;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { PokeService } from '../poke.service';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor(public poke: PokeService) {
    this.poke = poke;
   }

  ngOnInit() {
  }

}

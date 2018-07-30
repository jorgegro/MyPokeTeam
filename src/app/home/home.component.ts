import { Component, OnInit } from '@angular/core';
import { PokeService } from '../poke.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public poke: PokeService) {
    this.poke = poke;

   }

  ngOnInit() {
  }

}

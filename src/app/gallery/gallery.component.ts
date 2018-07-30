import { Component, OnInit } from '@angular/core';
import { PokeService } from '../poke.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  
  constructor(public poke: PokeService) {
    this.poke = poke;
   }

  ngOnInit() {
  }

}

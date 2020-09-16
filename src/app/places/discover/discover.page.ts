import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  places: Place[];
  highlightplace: Place
  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.places = this.placesService.getAllPlaces().filter( place => {
      return place.title !== 'UMN Apartment'
    })
    this.highlightplace = this.placesService.getAllPlaces()[0]
  }

}

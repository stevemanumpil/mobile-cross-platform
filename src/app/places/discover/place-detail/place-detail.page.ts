import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  loadedPlace: Place;
  constructor(
    private activatedRouter: ActivatedRoute,
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')){ return; }
      const placeId = paramMap.get('placeId')
      this.loadedPlace = this.placesService.getPlace(placeId)
    })
  }

}

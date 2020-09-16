import { Injectable } from '@angular/core';
import { Place } from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id: 'p1',
      title: 'UMN Apartment',
      description: 'Apartment for UMN Students',
      imageUrl: 'https://id2-cdn.pgimgs.com/listing/12452120/UPHO.62561711.V550/Dijual-Cepat-Apartemen-Scientia-Gading-Serpong-410-juta-hub-0813-9982-8738-Tangerang-Indonesia.jpg',
      price: 2000000
    },
    {
      id: 'p2',
      title: 'Serpong Apartment',
      description: 'Apartment in serpong',
      imageUrl: 'https://www.summareconbekasi.com/public/images/gallery/article/5607/Serpong-M-Town-Gallery-4.jpg',
      price: 3000000
    },
    {
      id: 'p3',
      title: 'JKT Apartment',
      description: 'Apartment for elite students',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAEKAX9pdaxxj0XOrtxRX5Psa5ugTPbDa-Tw&usqp=CAU',
      price: 100000
    },
  ]

  constructor() { }

  getAllPlaces(){
    return [...this.places]
  }

  getPlace(placeId: string){
    return {...this.places.find(place => {
      return place.id === placeId
    })}
  }
}

import { Loader } from '@googlemaps/js-api-loader';
import { GOOGLE_MAPS_API_KEY } from '../config.js';

export interface Coordinates {
  lng: number;
  lat: number;
}

export interface Mappable {
  location: Coordinates;
  markerContent?(): string;
}

export interface CustomMapOptions {
  center?: Coordinates;
  zoom?: number;
}

export class CustomMap {
  private googleMap: google.maps.Map;
  private static loader: Loader;

  constructor(elementId: string, options?: CustomMapOptions) {
    if (CustomMap.loader) {
      this.googleMap = new google.maps.Map(document.getElementById(elementId), {
        center: options?.center ? options.center : { lng: 0, lat: 0 },
        zoom: options?.zoom ? options.zoom : 1,
      });
    } else {
      console.log(
        'You need to invoke CustomMap.init() method before creating a new map.'
      );
    }
  }

  static async init() {
    if (!CustomMap.loader) {
      CustomMap.loader = new Loader({
        apiKey: GOOGLE_MAPS_API_KEY,
        version: 'weekly',
      });

      await CustomMap.loader.load();
    }
  }

  addMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      position: mappable.location,
      map: this.googleMap,
    });

    if (mappable.markerContent) {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      marker.addListener('click', () => {
        infoWindow.open({
          anchor: marker,
          map: this.googleMap,
          shouldFocus: true,
        });
      });
    }
  }
}

import { Company } from './Company';
import { User } from './User';
import { Loader } from '@googlemaps/js-api-loader';
import { GOOGLE_MAPS_API_KEY } from '../config.js';

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

const loader = new Loader({
  apiKey: GOOGLE_MAPS_API_KEY,
  version: 'weekly',
});

loader.load().then(() => {
  const map = new google.maps.Map(
    document.getElementById('map') as HTMLElement,
    {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    }
  );
});

// AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU

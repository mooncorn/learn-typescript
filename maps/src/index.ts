import { Company } from './Company';
import { User } from './User';
import { Loader } from '@googlemaps/js-api-loader';

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

const loader = new Loader({
  apiKey: 'AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU',
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

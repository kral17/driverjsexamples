import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

const steps = [
  {
    element: '#element1',
    popover: {
      title: 'Title 1',
      description: 'Description 1',
    },
  },
  // Diğer adımları buraya ekleyin...
];

const driverObj = driver({
  steps,
});

export default {driverObj,steps};

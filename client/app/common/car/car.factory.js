let CarFactory = function ($timeout, $q) {
  "ngInject";
  const cars = [
        {id: 1, name: 'Subaru', speed: 23},
        {id: 2, name: 'Heepo', speed: 21},
        {id: 3, name: 'Turbo', speed: 34},
        {id: 4, name: 'Slowki', speed: 11},
      ]

  let getCars = () => {
    return $q((resolve, reject) => {
        $timeout(()=>resolve(cars), 500);
    })
  };
  let getCar = (carId) => {
    return $q((resolve, reject) => {
        const car = cars.find(currCar => currCar.id == carId);
        $timeout(()=>resolve(car), 0);
    })
  };

let save = (car) => {
    return $q((resolve, reject) => {
        if (car.id) {
          const carIdx = cars.findIndex(currCar => currCar.id == car.id);
          cars[carIdx] = car;
        } else {
          cars.push(car);
        }
        
        $timeout(()=>resolve(car), 500);
    })
  };

  return { getCars, getCar, save };
};

export default CarFactory;

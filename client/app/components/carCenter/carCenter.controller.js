class CarCenterController {
 constructor(CarFactory) {
    "ngInject";
    this.CarFactory = CarFactory;
    this.name = 'carCenter';
    this.cars = []
    this.reloadCars();
  }
  reloadCars() {
    this.CarFactory.getCars().then(cars => {
      // console.log(cars);
      this.carsDB = this.cars = cars;
    });

  }
  onSearch(filter) {
    console.log('filter', filter);
    this.cars = this.carsDB.filter(car => car.name.indexOf(filter.byName) >= 0)
  }
}

export default CarCenterController;

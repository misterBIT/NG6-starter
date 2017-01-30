import angular from 'angular'
class CarEditController {
  constructor($state, $stateParams, CarFactory) {
    "ngInject";
    this.CarFactory = CarFactory;
    this.$state = $state;
    this.name = 'carEdit';
    this.carToEdit = {name: '', speed: 0};
    if ($stateParams.id) {
      CarFactory.getCar($stateParams.id).then(car => {
        this.carToEdit = angular.copy(car);
      });
    }
    
  }

  save() {
    
    this.CarFactory.save(this.carToEdit).then(car => {
      console.log('Saved:', car);
      this.$state.go('cars.details', {id: car.id});
    });

  }

}

export default CarEditController;

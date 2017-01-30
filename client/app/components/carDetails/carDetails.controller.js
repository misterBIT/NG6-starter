class CarDetailsController {
  constructor($stateParams, $mdBottomSheet, $mdToast, CarFactory, CartFactory) {
    "ngInject";
     this.$mdBottomSheet  =  $mdBottomSheet;
     this.$mdToast        = $mdToast
     this.CartFactory     = CartFactory;

    // this.name = 'carDetails';

    if ($stateParams.id) {
      CarFactory.getCar($stateParams.id).then(car => {
        this.car = car;
      });
    }    
  }
  buy() {
    var prmBuy = this.$mdBottomSheet.show({
      template: `<car-buy>${this.car.name}</car-buy>`,
      parent: angular.element(document.querySelector('.carDetails')),

    });

    prmBuy.then(amount => {
      console.log('Buying ' + amount + ' of ' + this.car.name)
      this.$mdToast.show(this.$mdToast.simple().capsule(true).textContent('Added to your Cart'));
      this.CartFactory.add(this.car, amount);
    });
  }
}

export default CarDetailsController;

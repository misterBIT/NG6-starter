class CarBuyController {
  constructor($mdBottomSheet) {
    'ngInject';
    this.$mdBottomSheet = $mdBottomSheet;
    this.amount = 1;
  }
  buy() {
    console.log('Buying', this.amount);
    
    this.$mdBottomSheet.hide(this.amount);
  } 
}

export default CarBuyController;

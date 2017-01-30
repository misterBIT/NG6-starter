class NavbarController {
  constructor($mdSidenav, $mdDialog, CartFactory) {
    "ngInject";
    this.$mdSidenav = $mdSidenav;
    this.$mdDialog = $mdDialog;
    // this.name = 'navbar';
    this.CartFactory = CartFactory;
  }
  toggleList() {
      this.$mdSidenav('left').toggle();
  }
  get cartSize() {
    return this.CartFactory.getCount();
  } 
  get cartItems() {
    return this.CartFactory.getItems();
  }
  showCart() {
    this.$mdDialog.show({
      contentElement: '#myStaticDialog',
      clickOutsideToClose: true,
    });
  }
}

export default NavbarController;

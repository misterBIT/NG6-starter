class CarSearchController {
  constructor() {
    this.name = 'carSearch';
    this.filter = {byName: ''}
  }
  emitFilter() {
    this.onSearch({filter: this.filter});
  }
}

export default CarSearchController;

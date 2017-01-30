import CarListModule from './carList'
import CarListController from './carList.controller';
import CarListComponent from './carList.component';
import CarListTemplate from './carList.html';

describe('CarList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CarListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CarListController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(CarListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CarListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CarListTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CarListController);
      });
  });
});

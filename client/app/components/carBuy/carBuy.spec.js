import CarBuyModule from './carBuy'
import CarBuyController from './carBuy.controller';
import CarBuyComponent from './carBuy.component';
import CarBuyTemplate from './carBuy.html';

describe('CarBuy', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CarBuyModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CarBuyController();
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
      expect(CarBuyTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CarBuyComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CarBuyTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CarBuyController);
      });
  });
});

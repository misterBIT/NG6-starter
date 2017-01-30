import CarDetailsModule from './carDetails'
import CarDetailsController from './carDetails.controller';
import CarDetailsComponent from './carDetails.component';
import CarDetailsTemplate from './carDetails.html';

describe('CarDetails', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CarDetailsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CarDetailsController();
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
      expect(CarDetailsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CarDetailsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CarDetailsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CarDetailsController);
      });
  });
});

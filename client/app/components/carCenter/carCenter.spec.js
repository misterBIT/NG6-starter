import CarCenterModule from './carCenter'
import CarCenterController from './carCenter.controller';
import CarCenterComponent from './carCenter.component';
import CarCenterTemplate from './carCenter.html';

describe('CarCenter', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CarCenterModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CarCenterController();
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
      expect(CarCenterTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CarCenterComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CarCenterTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CarCenterController);
      });
  });
});

import CarEditModule from './carEdit'
import CarEditController from './carEdit.controller';
import CarEditComponent from './carEdit.component';
import CarEditTemplate from './carEdit.html';

describe('CarEdit', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CarEditModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CarEditController();
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
      expect(CarEditTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CarEditComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CarEditTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CarEditController);
      });
  });
});

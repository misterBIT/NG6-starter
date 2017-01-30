import CarSearchModule from './carSearch'
import CarSearchController from './carSearch.controller';
import CarSearchComponent from './carSearch.component';
import CarSearchTemplate from './carSearch.html';

describe('CarSearch', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CarSearchModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CarSearchController();
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
      expect(CarSearchTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CarSearchComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CarSearchTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CarSearchController);
      });
  });
});

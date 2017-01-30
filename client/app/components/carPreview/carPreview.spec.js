import CarPreviewModule from './carPreview'
import CarPreviewController from './carPreview.controller';
import CarPreviewComponent from './carPreview.component';
import CarPreviewTemplate from './carPreview.html';

describe('CarPreview', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CarPreviewModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CarPreviewController();
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
      expect(CarPreviewTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CarPreviewComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CarPreviewTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CarPreviewController);
      });
  });
});

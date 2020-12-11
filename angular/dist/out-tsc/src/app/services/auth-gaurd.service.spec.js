import { TestBed } from '@angular/core/testing';
import { AuthGaurdService } from './auth-gaurd.service';
describe('AuthGaurdService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(AuthGaurdService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=auth-gaurd.service.spec.js.map
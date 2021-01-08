import {AuthService} from './auth.service';
import {LoginComponent} from './login.component';

class MockAuthService extends AuthService {
    authenticated: boolean = false;

    isAuthenticated(): boolean {
        return this.authenticated;
    }
}

describe('Component: Login', () => {

    let comp: LoginComponent;
    let service: MockAuthService;

    beforeEach( () => {
        service = new MockAuthService();
        comp = new LoginComponent(service);
    });

    afterEach( () => {
        localStorage.removeItem('token');
    });

    it('needLogin returns true when the user is not authenticated', () => {
        service.authenticated = false;
        expect( comp.needLogin() ).toBeTruthy();
    });

    it('needLogin returns false when the user is authenticated', () => {
        service.authenticated = true;
        //localStorage.setItem('token', '1234');
        expect( comp.needLogin() ).toBeFalsy();
    });

});
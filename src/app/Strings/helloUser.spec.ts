import { from } from "rxjs";
import { helloUser } from './helloUser';

describe('helloUser', () => {

    it('should include the name in the message', () => {
        expect( helloUser('Mark') ).toContain('Mark');
    });

});
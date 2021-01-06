import { compute } from './compute'; 

describe( 'compute', () => {

    // A A A
    it('should return 0 if input is negative', () => {
        const res = compute(-1);

        expect(res).toBe(0); // res == 0
    });
    
    it('should increment if input is positive', () => {
        const res = compute(1);
        expect(res).toBe(2);
    });
} );
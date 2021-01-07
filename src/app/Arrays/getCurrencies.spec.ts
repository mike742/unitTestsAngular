import {getCurrencies} from './getCurrencies';

describe('getCurrencies', () => {

    it('should return supported currencies', () => {
        const res = getCurrencies();

        expect(res).toContain('CAD');
        expect(res).toContain('USD');
        expect(res).toContain('EUR');
    });
});
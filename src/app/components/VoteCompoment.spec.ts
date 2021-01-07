import { VoteComponent } from './VoteCompoment';

describe('VoteCompoment', () => {
    
    let comp: VoteComponent;

    beforeEach( () => {
        comp = new VoteComponent();
    } );

    it('should increment when upVote', () => {
        comp.upVote();

        expect(comp.totalVotes).toBe(1);
    });

    it('should decrement when downVote', () => {
        comp.downVote();

        expect(comp.totalVotes).toBe(-1);
    });
});
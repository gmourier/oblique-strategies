describe('Deck Suite', () => {
    const deck = require('../deck.json')
    
    it('has all cards implemented', () => {
        expect(deck.length).toEqual(118);
    });

    it('each parsed card object has a content property', () => {
        deck.forEach(card => {
            expect(card).toHaveProperty('content')
        });
    });
});

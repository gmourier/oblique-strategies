describe('English Deck', () => {
    const deck = require('../assets/deck.en.json')
    
    it('has cards implemented', () => {
        expect(deck.length).toEqual(113);
    });

    it('each parsed card object has a content property', () => {
        deck.forEach(card => {
            expect(card).toHaveProperty('content')
        });
    });
});

describe('French Deck', () => {
    const deck = require('../assets/deck.fr.json')
    
    it('has cards implemented', () => {
        expect(deck.length).toEqual(113);
    });

    it('each parsed card object has a content property', () => {
        deck.forEach(card => {
            expect(card).toHaveProperty('content')
        });
    });
});
const assert = require('assert');
const chai = require('chai');
const getNoneStopWords = require('./index');

describe('Testing some sentences with stop words', () => {
    it('should return array from the result', () => {
        const result = getNoneStopWords('I want to have relationship with different religion', 'en');
        chai.assert(typeof result, 'object');
        chai.assert.isAbove(result.length, 0);
    });
    it('throw exception when language not available', () => {
        try {
            const result = getNoneStopWords('I want to go to market', 'id');
        } catch (error) {
            chai.assert(error.message, 'Language is not available');
        }
    });
});
const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function () {
    it('should raise error if arg not a number', function () {
        const badInputs = {
            'badInput1': 'a',
            'badInput2': '&',
            'badInput3':' '
        }
        const badInputArray = Object.values(badInputs);
        badInputArray.forEach(function(input){
            (function() {
                fizzBuzzer(input)
            }).should.throw(Error);
        });
    });
    it('should return \'fizz-buzz\' if num is divisble by 3 and 5', function () {
      const normalCases = [
        {num: 15, expected: 'fizz-buzz'},
        {num: 30, expected: 'fizz-buzz'},
        {num: 45, expected: 'fizz-buzz'}
      ];
      normalCases.forEach(function(input){
          const answer = fizzBuzzer(input.num);
          answer.should.equal(input.expected);
      });
    });
    it('should return \'buzz\' if num is divisible by 5', function () {
        const normalCases = [
            {num: 5, expected: 'buzz'},
            {num: 10, expected: 'buzz'},
            {num: 20, expected: 'buzz'}
        ];
        normalCases.forEach(function(input){
          const answer = fizzBuzzer(input.num);
          answer.should.equal(input.expected);
      });
    });
    it('should return \'fizz\' if num is divisible by 3', function () {
        const normalCases = [
            {num: 3, expected: 'fizz'},
            {num: 6, expected: 'fizz'},
            {num: 9, expected: 'fizz'}
        ];
        normalCases.forEach(function(input){
          const answer = fizzBuzzer(input.num);
          answer.should.equal(input.expected);
      });
    });
    it('should return the num arg if not divisable by 3, 5, or 3 and 5', function(){
        const normalCases = [
            {num: 1, expected: 1},
            {num: 7, expected: 7},
            {num: 14, expected: 14}
        ];
        normalCases.forEach(function(input){
          const answer = fizzBuzzer(input.num);
        answer.should.equal(input.expected);
      });
    });

});

import {add} from "../main/calc";

describe('calculator', () => {
    it('should add two numbers', function () {
        expect(add(1,2)).toEqual(3);
    });
})
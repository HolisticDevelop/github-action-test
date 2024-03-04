import {add} from "../main/calc";

describe('calculator', () => {
    it('should add two numbers', function () {
        expect(add(1,3)).toEqual(4);
    });
})
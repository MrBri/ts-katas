import {flat} from './concat.flat';

describe('flat', () => {
	it('should return same array', () => {
		const actual: number[] = flat([42]);
		expect(actual).toEqual([42]);
	});
	it('should take multiple arrays', () => {
		const given = [
			[1, 2],
			[29, 99, 500],
			[42],
		];

		const actual = flat(...given);

		expect(actual).toEqual([1, 2, 29, 99, 500, 42]);
	});
});

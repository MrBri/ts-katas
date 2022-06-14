import { fizzbuzz } from './for.fizzbuzz'

describe('getHighestNumber', () => {
  it('should get the higheest number given an array of one number', () => {
    const actual: number = fizzbuzz(5)
    expect(actual).toEqual([1, 2, 'fizz', 4, 'buzz'])
  })
  it('should get the higheest number given an array of positive numbers', () => {
    const actual: number = fizzbuzz(15)

    expect(actual).toEqual([
      1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz',
      7,
      8,
      'fizz',
      'buzz',
      11,
      'fizz',
      13,
      14,
      'fizzbuzz'
    ])
  })
  xit('should get the higheest number given an array of negative numbers', () => {
    const actual: number = highestNumber([-41, -42, -39, -55, -5])
    expect(actual).toBe(-5)
  })
})

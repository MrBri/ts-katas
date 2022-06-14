import { highestNumber } from './first.highest-number'

describe('getHighestNumber', () => {
  it('should get the higheest number given an array of one number', () => {
    const actual: number = highestNumber([42])
    expect(actual).toBe(42)
  })
  it('should get the higheest number given an array of positive numbers', () => {
    const actual: number = highestNumber([41, 42, 39, 0, 55, 5])
    expect(actual).toBe(55)
  })
  it('should get the higheest number given an array of negative numbers', () => {
    const actual: number = highestNumber([-41, -42, -39, -55, -5])
    expect(actual).toBe(-5)
  })
})

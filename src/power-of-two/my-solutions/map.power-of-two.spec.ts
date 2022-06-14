import { powerOfTwo } from './map.power-of-two'

describe('powerOfTwo', () => {
  it('should provide a new list of one number squared', () => {
    const actual: number[] = powerOfTwo([42])
    console.log('actual: ', actual)
    expect(actual).toEqual([1764])
  })
  it('should get the higheest number given an array of positive numbers', () => {
    const actual: number[] = powerOfTwo([41, 42, 39, 0])
    expect(actual).toEqual([1681, 1764, 1521, 0])
  })
  it('should get the higheest number given an array of negative numbers', () => {
    const actual: number[] = powerOfTwo([-41, -42, -39, -5])
    expect(actual).toEqual([1681, 1764, 1521, 25])
  })
})

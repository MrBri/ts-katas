import { addAll } from './reduce.add-all'

describe('addAll', () => {
  it('should provide the total', () => {
    const actual: number = addAll([42])
    expect(actual).toBe(42)
  })
  it('should get the higheest number given an array of positive numbers', () => {
    const actual: number = addAll([41, 42, 39, 0, 55, 5])
    expect(actual).toBe(182)
  })
  it('should get the higheest number given an array of negative numbers', () => {
    const actual: number = addAll([-41, -42, -39, -5])
    expect(actual).toBe(-127)
  })
})

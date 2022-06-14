import { filterEven } from './filter.filter-even'

describe('filterEven', () => {
  it('should return one even number', () => {
    const actual: number[] = filterEven([42])
    expect(actual).toEqual([42])
  })
  it('should return multiple even numbers', () => {
    const actual: number[] = filterEven([41, 42, 39, 0, 55, 5])
    expect(actual).toEqual([42, 0])
  })
  it('no evens', () => {
    const actual: number = filterEven([-41, -39, -55, -5])
    expect(actual).toEqual([])
  })
})

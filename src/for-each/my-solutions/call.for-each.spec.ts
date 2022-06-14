import { forEach } from './call.for-each'

describe('forEach', () => {
  it('should call a function on each interation', () => {
    const given: number[] = [1, 2, 3]
    let total = 0

    forEach(given, () => {
      total++
    })
    expect(total).toBe(3)
  })
  it('should include the element on each iteration', () => {
    const given: number[] = [1, 2, 3]
    let sum = 0

    forEach(given, (element: number) => {
      sum += element
    })
    expect(sum).toBe(6)
  })
})

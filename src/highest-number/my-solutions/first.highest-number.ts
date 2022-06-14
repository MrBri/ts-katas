export const highestNumber = (arr: number[]) => {
  let highest = Number.NEGATIVE_INFINITY
  for (const n of arr) {
    if (n > highest) {
      highest = n
    }
  }

  return highest
}

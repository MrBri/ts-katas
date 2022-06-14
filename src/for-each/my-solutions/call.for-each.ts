export const forEach = (arr: number[], callback: (ele: number) => void) => {
  arr.forEach(i => {
    callback(i)
  })
}

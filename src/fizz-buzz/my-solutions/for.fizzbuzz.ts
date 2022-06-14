export const fizzbuzz = (max: string) => {
  const build = []

  for (let i = 1; i <= Number(max); i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      build.push('fizzbuzz')
    } else if (i % 3 === 0) {
      build.push('fizz')
    } else if (i % 5 === 0) {
      build.push('buzz')
    } else {
      build.push(i)
    }
  }

  return build
}

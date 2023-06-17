export function multiply(nums: number[]) {
  const result = nums.reduce((acc, num) => acc * num, 1)
  return result
}

export function sum(nums: number[]) {
  const result = nums.reduce((acc, num) => acc + num, 0)
  return result
}

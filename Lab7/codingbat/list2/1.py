def count_evens(nums):
  k = 0
  for i in range(len(nums)):
    if nums[i] % 2 == 0:
      k += 1
  return k
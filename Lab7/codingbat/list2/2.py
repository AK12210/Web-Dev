def big_diff(nums):
  maxx = nums[0]
  for i in range(len(nums)):
    if nums[i] > maxx:
      maxx = nums[i]
  minn = nums[0]
  for i in range(len(nums)):
    if nums[i] < minn:
      minn = nums[i]
  return maxx - minn
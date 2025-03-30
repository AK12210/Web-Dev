def sum67(nums):
    sum = 0
    b = False  
    for num in nums:
        if num == 6:
            b = True  
        elif num == 7 and b:
            b = False 
        elif not b:
            sum += num  
    return sum
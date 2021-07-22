#bubblesort

def bubblesort(nums: list):
    switched = True

    while switched:
        switched = False

        for i in range(len(nums)):
            if nums[i] > nums[i+1]:
                nums[i],nums[i+1] = nums[i+1], nums[i]
                switched = True
   


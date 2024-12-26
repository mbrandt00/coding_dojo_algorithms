def filter_range(list, min: int, max:int):
    n = len(list)
    index = 0
    for i in range(n):
        el = list[i]
        if min <= el <= max:
            list[index] = el
            index += 1
    return list[:index]

filter_range([1,2,3,4,5,6], 2, 4)
assert filter_range([1,2,3,4,5,6], 2, 4) == [2,3,4]
def maxn(x, y):
    if x >= y:
        return y
    return x

a, b, c, d = input().split()
print(maxn(maxn(a, b), maxn(c, d)))
def power(a: float, n: int) -> float:
    ans = 1.0
    for _ in range(n):
        ans *= a
    return ans

a, n = map(float, input().split())
n = int(n)
print(power(a, n))
n = int(input())
s = list(map(int, input().split()))
k = 0
for i in range(1, n - 1):
    if s[i] > s[i - 1] and s[i] > s[i + 1]:  
        k += 1
print(k)
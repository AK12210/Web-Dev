n = int(input())
s = input().split()
k = 0
for i in range(1, len(s)):
    if int(s[i]) > int(s[i - 1]):
        k += 1
print(k)
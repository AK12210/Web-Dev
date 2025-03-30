n = int(input())
k = 0

for i in range(1, int(n**0.5) + 1):
    if n % i == 0:
        k += 2 if i * i != n else 1  
print(k)
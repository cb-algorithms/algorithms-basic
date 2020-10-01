# Subset Sum Problem

## Solutions

```text
set: number[]
totalSum: number

f(n, 0) => true
f(0, sum) => false
f(n, sum) => (sum >= set[n - 1] && f(n - 1, sum - set[n - 1])) || f(n - 1, sum)

return f(set.length, totalSum)
```

## References

1. [[GeeksforGeeks] Subset Sum Problem](https://www.geeksforgeeks.org/subset-sum-problem-dp-25/)

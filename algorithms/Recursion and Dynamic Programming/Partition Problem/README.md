# Partition Problem

## Solutions

```text
arr: number[]

f(n, 0) => true
f(0, sum) => false
f(n, sum) => (sum >= arr[n - 1] && f(n - 1, sum - arr[n - 1])) || f(n - 1, sum)

return f(arr.length + 1, sumOf(arr) / 2)
```

## References

1. [[GeeksforGeeks] Partition Problem](https://www.geeksforgeeks.org/partition-problem-dp-18/)

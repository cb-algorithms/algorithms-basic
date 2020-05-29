# Longest Increasing Subsequence

## Solution

```text
arr: number[]

f(0) => 0
f(n) => max(
  f(n - 1) + 1 if arr[n - 2] < arr[n - 1],
  f(n - 2) + 1 if arr[n - 3] < arr[n - 1],
  ...
  f(1) + 1 if arr[0] < arr[n - 1],
  1,
)

return max(
  f(1),
  f(2),
  ...
  f(n)
)
```

## References

1. [[GeeksforGeeks] Longest Increasing, Subsequence](https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/)

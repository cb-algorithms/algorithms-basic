# Longest Increasing Subsequence

## Solution

```text
arr: number[]

-----------------------------------------------------------
# Solution 1
-----------------------------------------------------------
f(0, m) = 0
f(n, m) = arr[n - 1] > m
  ? f(n - 1, m)
  : max(
    f(n - 1, m),
    1 + f(n - 1, arr[n - 1])
  )

return f(arr.length, max(arr))
-----------------------------------------------------------

-----------------------------------------------------------
# Solution 2
-----------------------------------------------------------
f(0) = 0
f(n) = max(
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
  f(arr.length + 1)
)
-----------------------------------------------------------
```

## References

1. [[GeeksforGeeks] Longest Increasing, Subsequence](https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/)

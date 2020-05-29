# Longest Common Subsequence

## Solutions

```text
s1: string
s2: string

f(0, n2) => 0
f(n1, 0) => 0
f(n1, n2) =>
  s1[n1 - 1] === s2[n2 - 1]
  ? 1 + f(n1 - 1, n2 - 1)
  : max(f(n1 - 1, n2), f(n1, n2 - 1))

return f(s1.length, s2.length)
```

## References

1. [[GeeksforGeeks] Longest Common Subsequence](https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/)
1. [[GeeksforGeeks] A Space Optimized Solution of LCS](https://www.geeksforgeeks.org/space-optimized-solution-lcs/)

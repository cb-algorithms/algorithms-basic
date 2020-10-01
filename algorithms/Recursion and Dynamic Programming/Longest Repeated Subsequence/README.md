# Longest Repeated Subsequence

## Solutions

```text
s: string

f(0, n2) => ''
f(n1, 0) => ''
f(n1, n2) =>
  n1 !== n2 && s[n1 - 1] === s[n2 - 1]
  ? f(n1 - 1, n2 - 1) + s[n1 - 1]
  : whichHasMaxLength(f(n1 - 1, n2), f(n1, n2 - 1))

return f(s.length, s.length - 1)
```

## References

1. [[GeeksforGeeks] Longest Repeated Subsequence](https://www.geeksforgeeks.org/longest-repeated-subsequence/)

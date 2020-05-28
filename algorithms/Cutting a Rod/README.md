# Cutting a Rod

## Solutions

```text
// maps length to price e.g. [1, 5, 8, 9, 10]
// length 1   2   3   4   5
// price  1   5   8   9   10
p: number[];

f(0) = 0;
f(n) = max(p[0] + f(n - 1), p[1] + f(n - 2), ..., p[n - 1] + f(0))
```

## References

1. [[GeeksforGeeks] Cutting a Rod](https://www.geeksforgeeks.org/cutting-a-rod-dp-13/)

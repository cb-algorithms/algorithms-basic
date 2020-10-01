# Coin Change

## Solutions

```text
coins: number[]

f(n, 0) = 1
f(n, t) = 0
  + (t >= coins[n - 1]) && f(n, t - coins[n - 1])
  + (n > 1) && f(n - 1, t)
```

## References

1. [[GeeksforGeeks] Coin Change](https://www.geeksforgeeks.org/coin-change-dp-7/)

## Related

1. Sum Combination: similar problem but counts combinations that differ only in order, e.g. [1, 2, 3] and [2, 3, 1] are considered 2 combinations.

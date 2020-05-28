# Coin Change

## Solutions

```text
coinValues: number[]

f(n, 0) = 1
f(0, cents) = 0
f(n, cents) = f(n - 1, cents) + (cents >= coinValues[n - 1] ? f(n, cents - coinValues[n - 1]) : 0)
```

## References

1. [[GeeksforGeeks] Coin Change](https://www.geeksforgeeks.org/coin-change-dp-7/)

## Related

1. Sum Combination: similar problem but counts combinations that differ only in order, e.g. [1, 2, 3] and [2, 3, 1] are considered 2 combinations.

# Ways to Get Odd Sum

## Solutions

```text
lists: number[][]

f(0, mod2) => mod2
f(n, mod2) => sum(
  f(n - 1, (mod2 + lists[n - 1][0]) % 2),
  f(n - 1, (mod2 + lists[n - 1][1]) % 2),
  ...,
  f(n - 1, (mod2 + lists[n - 1][list[n - 1].length - 1]) % 2),
)

return f(lists.length, 0)
```

## References

1. [[GeeksforGeeks] Count number of ways to get Odd Sum](https://www.geeksforgeeks.org/count-number-of-ways-to-get-odd-sum/)

# Subset Sum Problem

## Solutions

```text
set: number[];
f(∀n, 0) = true
f(0, ∀sum) = false
f(n, sum) = f(n - 1, sum - set[n - 1]) || f(n - 1, sum)
```

## References

1. [[GeeksforGeeks] Subset Sum Problem](https://www.geeksforgeeks.org/subset-sum-problem-dp-25/)

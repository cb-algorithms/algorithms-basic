# 0-1 Knapsack Problem

Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack.

**Examples:**

```text
Input:
  totalItem: 4
  values: [10, 40, 30, 50]
  weights: [5, 4, 6, 3]
  totalWeight: 10
Output: 90
Explanation: [40, 50] has the largest total value (90) and has the total weight of 7
```

## Solutions

1. Dynamic Programming

   ```text
   values: number[]
   weights: number[]

   f(0, w) = 0
   f(n, 0) = 0
   f(n, w) = w < weights[n - 1]
     ? 0
     : max(
       values[n - 1] + f(n - 1, weights[n - 1]),
       f(n - 1, w)
     )
   ```

## References

1. [[GeeksforGeeks] 0-1 Knapsack Problem](https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/)
1. [[Medium] How to solve the Knapsack Problem with dynamic programming](https://medium.com/@fabianterh/how-to-solve-the-knapsack-problem-with-dynamic-programming-eb88c706d3cf)

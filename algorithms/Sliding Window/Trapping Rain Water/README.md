# Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

**Example:**

```text
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
```

## Solutions

1. Brute-force
1. Pre-compute the highest bar on the left and right of every bar in linear time
1. Sliding Window with Front/Back pointers

## References

1. [[LeetCode] Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)
1. [[GeeksforGeeks] Trapping Rain Water](https://www.geeksforgeeks.org/trapping-rain-water/)
1. [[Medium] How to Solve Sliding Window Problems](https://medium.com/outco/how-to-solve-sliding-window-problems-28d67601a66)

## 70 https://leetcode-cn.com/problems/climbing-stairs/

### 我的

```c++
class Solution {
public:
    int x[10000];
    int climb(int n){
        if(n < 0) return 0;
        if(n == 0) return 1;
        if(x[n] < 0) x[n] = climb(n-1)+climb(n-2);
        return x[n];
    }
    int climbStairs(int n) {
        int i = 50;
        while(i >= 0){
            x[i] = -1;
            i--;
        }
        return climb(n);
    }
};
```

类似斐波那契，使用了递归

### DP

```c++
class Solution {
public:
    int climbStairs(int n) {
        int dp[50];
        dp[0] = 1;
        dp[1] = 1;
        int i = 2;
        while( i <= n){
            dp[i] = dp[i-1] + dp[i-2];
            i++;
        }
        return dp[n];
    }
};
```


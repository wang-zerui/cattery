# CH3

## 基本形式

由d个属性描述的实例$X=(x_1;x_2;x_3;...;x_d)$。

> $x_i$是x在第i个属性上的取值

$$
f(\boldsymbol{x})=w_{1} x_{1}+w_{2} x_{2}+\ldots+w_{d} x_{d}+b
$$

$$
f(\boldsymbol{x})=\boldsymbol{w}^{\mathrm{T}} \boldsymbol{x}+b
$$

$\omega和b$确定后，模型就确定了

## 线性回归

![image-20220321203635446](https://cdn.jsdelivr.net/gh/xinwuyun/pictures@main/2022/03/21/c8618cbaf8f7381b98e36140e31ef562-image-20220321203635446-4a00e0.png)

**关键在于：**确定$$f(x)$$和$$y$$的差距

### 均方误差最小化

$$
\begin{aligned}
\left(w^{*}, b^{*}\right) &=\underset{(w, b)}{\arg \min } \sum_{i=1}^{m}\left(f\left(x_{i}\right)-y_{i}\right)^{2} \\
&=\underset{(w, b)}{\arg \min } \sum_{i=1}^{m}\left(y_{i}-w x_{i}-b\right)^{2}
\end{aligned}
$$

> $$\omega^*$$和$b^*$，表示$$\omega$$和$$b$$的解
>
> 

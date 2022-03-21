# FunctionGraph组件开发笔记

项目地址：https://github.com/xinwuyun/fg

## `Function.ts`

SDK原生功能

+ [x] 创建云函数
+ [ ] 更新代码
+ [ ] 更新配置
+ [ ] 获取函数列表
+ [ ] 删除函数（包含触发器）

派生功能

- [ ] 检查函数是否存在
- [ ] 通过functionName获取function_urn
- [ ] 处理输出信息handleResponse

### updateCode

需要先实现获取函数列表功能

```js
import { UpdateFunctionCodeRequest } from './model/UpdateFunctionCodeRequest';
import { UpdateFunctionCodeRequestBody } from './model/UpdateFunctionCodeRequestBody';
import { UpdateFunctionCodeResponse } from './model/UpdateFunctionCodeResponse';
```

### ListFunctions

```js
/**
     * 获取函数列表
     * @summary 获取函数列表
     * @param {string} [marker] 上一次查询到的最后的记录位置。
     * @param {string} [maxitems] 每次查询获取的最大函数记录数量 最大值：400 如果不提供该值或者提供的值大于400或等于0，则使用默认值：400 如果该值小于0，则返回参数错误。
     * @param {string} [packageName] 应用名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFunctions(listFunctionsRequest?: ListFunctionsRequest): Promise<ListFunctionsResponse> {
        const options = ParamCreater().listFunctions(listFunctionsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
```


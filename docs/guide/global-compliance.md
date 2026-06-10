# 海外上架合规

> *字数：约 2950 字；预计阅读时间：6 分钟。*


海外上线技术门槛通常更低，但不代表没有合规门槛。平台政策、隐私、支付、税务、内容安全和用户数据要求仍然会影响产品。

## 海外网站

海外网站通常不涉及中国 ICP 备案，部署上更自由。

常见门槛：

- 域名
- 海外服务器或托管平台
- 隐私政策
- Terms of Service
- Cookie / tracking 合规
- 支付和税务处理
- 数据保护要求

如果面向欧盟用户，需要关注 GDPR；如果面向加州用户，可能需要关注 CCPA/CPRA；如果涉及儿童用户、医疗、金融等场景，规则会更复杂。

如果接入海外支付，还要关注支付平台的账号审核和风控。Stripe、PayPal、Paddle、Lemon Squeezy、Gumroad 等都会根据主体、产品类型、交易风险、退款和争议情况进行审核或限制。

## iOS App Store

发布 iOS App 通常需要加入 Apple Developer Program。

常见事项：

- Apple Developer Program 年费
- 个人或组织开发者账号
- App Store Connect
- App Review 审核
- 隐私信息填写
- 如果销售数字内容或服务，通常要遵守 Apple 的 IAP 规则
- 遵守 App Review Guidelines

Apple 官方说明开发者计划年费为 99 美元或当地等值货币。组织账号通常还会涉及法律实体名称、D-U-N-S Number 等。

### 哪些地方要交钱

- Apple Developer Program：99 美元/年或当地等值货币。
- 销售数字商品、会员、订阅，通常涉及 App Store 佣金。
- 第三方服务如统计、崩溃分析、订阅管理、归因工具，可能产生额外费用。

Apple 标准佣金常见为 30%；符合 App Store Small Business Program 等条件时，付费 App 和 App 内购买可降至 15%；部分符合条件的订阅也可能适用 15%。

### 哪些地方可以免费

- 使用 Xcode 开发和本地调试。
- 使用 TestFlight 分发测试版，前提是已加入开发者计划。
- 免费 App 上架本身不按下载量向 Apple 付费。
- 不涉及数字商品销售时，通常没有 App Store 销售佣金。

### 审核重点

常见被卡的地方：

- App 功能太少，像网页套壳或未完成产品。
- 崩溃、加载失败、按钮不可用。
- 隐私政策不完整。
- 权限申请和实际功能不匹配。
- 使用外部支付绕过 IAP 规则。
- 订阅说明不清楚。
- 内容、医疗、金融、赌博、成人、生成式 AI 等敏感领域说明不足。
- 大量模板化、重复性 App，可能被认为是 spam。

## Google Play

发布 Android App 到 Google Play 通常需要 Play Console 开发者账号。

常见事项：

- Google Play Console 注册
- 开发者身份验证
- App 内容政策
- 隐私政策
- 数据安全表单
- 目标 API、权限、内容分级等
- 如果销售数字商品，通常要遵守 Google Play Billing 规则

### 哪些地方要交钱

- Google Play Console 注册费：常见为一次性 25 美元。
- 如果销售数字商品或服务，通常涉及 Google Play 服务费。
- 广告、统计、订阅管理、崩溃分析、归因等第三方服务，可能有额外成本。

Google Play 官方帮助文档显示，开发者完成相应注册后，前 100 万美元年收入可适用 15% 服务费，超过部分通常为 30%；自动续订订阅也有相应服务费规则。

### 哪些地方可以免费

- Android Studio 开发。
- 本地安装 APK 测试。
- 内部测试、封闭测试、开放测试等测试轨道本身不按测试次数收费。
- 免费 App 不因为下载本身向 Google 付费。

## 海外 App 上架成本对比

| 项目 | Apple App Store | Google Play |
| --- | --- | --- |
| 开发者账号 | 99 美元/年或当地等值货币 | 常见一次性 25 美元 |
| 免费 App 下载 | 通常不按下载收费 | 通常不按下载收费 |
| 数字商品/订阅 | 通常走 IAP，涉及佣金 | 通常走 Play Billing，涉及服务费 |
| 小开发者费率 | Small Business Program 可降至 15% | 前 100 万美元年收入常见 15% 档 |
| 标准费率 | 常见 30% | 常见 30% |
| 测试分发 | TestFlight，需开发者计划 | 内部/封闭/开放测试轨道 |
| 审核 | App Review | Google Play 审核和政策检查 |

## 地区差异

海外不是一个统一市场。

- 美国：CCPA/CPRA、sales tax、儿童隐私 COPPA、平台政策。
- 欧盟：GDPR、Cookie consent、VAT、数据处理协议、跨境数据传输。
- 日本：消费者保护、个人信息保护、本地化、客服和退款说明。
- 新加坡：PDPA、公司主体、支付服务、东南亚业务入口。
- 香港：公司注册、银行账户、隐私条例、跨境支付、面向内地用户的访问速度和信任问题。

## 海外上架流程

### iOS App

```text
注册 Apple Developer Program
-> 创建 App ID 和证书
-> 开发和测试
-> 准备隐私政策
-> 填写 App Privacy 信息
-> 配置 IAP，若销售数字内容
-> TestFlight 测试
-> 提交 App Review
-> 处理审核反馈
-> 发布
```

### Google Play

```text
注册 Play Console
-> 完成开发者验证
-> 创建应用
-> 准备隐私政策
-> 填写 Data safety
-> 配置内容分级和目标受众
-> 配置 Play Billing，若销售数字内容
-> 内部/封闭/开放测试
-> 提交审核
-> 发布
```

## 参考资料

- [Apple Developer Program](https://developer.apple.com/programs/enroll/)
- [Apple Developer Program Membership Details](https://developer.apple.com/programs/whats-included/)
- [App Store Small Business Program](https://developer.apple.com/app-store/small-business-program/)
- [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Google Play Developer Policy Center](https://play.google/developer-content-policy/)
- [Google Play Console](https://play.google.com/console/about/)
- [Google Play service fees](https://support.google.com/googleplay/android-developer/answer/112622)
- [Google Play service fee changes](https://support.google.com/googleplay/android-developer/answer/10632485)

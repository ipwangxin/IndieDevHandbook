# 数据统计和分析

> *字数：约 2988 字；预计阅读时间：6 分钟。*


运营一定要有数据统计和分析。

没有数据，你不知道用户从哪里来，不知道页面哪里流失，不知道推广有没有效果，也不知道该继续做功能、改文案、优化价格，还是换渠道。

早期数据分析的目标不是做复杂大屏，而是回答几个最基本的问题：

- 用户从哪里来？
- 有多少人真正完成了关键动作？
- 哪个页面让人离开？
- 哪个渠道带来的是有效用户？
- 用户有没有第二次回来？
- 付费、注册、提交、加群这些动作发生在哪里？

## 先分清三类数据

### 1. 流量统计

回答“有多少人来，从哪里来，看了什么页面”。

常见指标：

- PV
- UV
- 来源渠道
- 搜索关键词
- 页面停留
- 跳出
- 设备和地区

适合工具：

- Google Analytics
- 百度统计
- Plausible
- Umami
- Cloudflare Web Analytics

### 2. 行为分析

回答“用户做了什么，在哪一步流失”。

常见指标：

- 注册
- 点击 CTA
- 上传文件
- 提交表单
- 生成结果
- 导出
- 付费
- 漏斗转化
- 留存

适合工具：

- PostHog
- Mixpanel
- Amplitude
- Firebase Analytics
- 神策数据
- GrowingIO
- 友盟+

### 3. 体验分析

回答“用户为什么卡住”。

常见能力：

- 热力图
- 点击图
- 滚动深度
- 录屏回放
- 表单流失
- 异常点击

适合工具：

- Microsoft Clarity
- Hotjar
- PostHog Session Replay
- 百度统计热力图

## 国外常用工具

| 工具 | 适合 | 收费机制 | 备注 |
| --- | --- | --- | --- |
| Google Analytics 4 | 网站、App、广告归因 | 基础版免费，Analytics 360 企业版销售制 | 免费强大，但学习成本和隐私合规要注意 |
| Microsoft Clarity | 热力图、录屏、行为观察 | 官方标注免费 | 适合看用户为什么没转化 |
| PostHog | 产品分析、漏斗、录屏、Feature Flag、A/B 测试 | 免费额度 + 按事件/功能用量计费，也可自托管 | 适合产品型 SaaS 和开发者团队 |
| Mixpanel | 事件分析、漏斗、留存 | 免费事件额度 + 超额按事件计费 + 企业版 | 适合 App/SaaS 行为分析 |
| Amplitude | 产品分析、留存、实验 | 免费 Starter + Plus/增长/企业计划 | 适合更成熟的产品团队 |
| Firebase Analytics | App 分析、移动端事件 | Analytics 本身免费，Firebase 其他服务按用量 | 适合 iOS/Android/Flutter/Unity |
| Plausible | 隐私友好网站统计 | 按月访问量订阅 | 适合内容站、SaaS、重视隐私的网站 |
| Umami | 隐私友好网站统计 | 开源可自托管，Cloud 版订阅 | 适合想自托管或轻量统计的独立开发者 |

### 早期国外组合

如果你是网站或免费书：

```text
Plausible / Umami / GA4 + Microsoft Clarity
```

如果你是 SaaS 或工具站：

```text
PostHog 或 Mixpanel + Clarity
```

如果你是 App：

```text
Firebase Analytics + Crashlytics
```

如果你做广告投放：

```text
GA4 + UTM + 广告平台转化追踪
```

## 国内常用工具

| 工具 | 适合 | 收费机制 | 备注 |
| --- | --- | --- | --- |
| 百度统计 | 网站、H5、App、小程序 | 有免费版，也有付费版本和企业定制 | 适合国内网站和百度搜索相关分析 |
| 友盟+ | App、小程序、H5、推送、性能监控 | 有免费产品，也有付费服务 | 国内移动端常见选择 |
| 神策数据 | 中大型产品、企业级行为分析 | SaaS、全托管、私有化，通常定制报价 | 适合重视数据资产和私有化的企业 |
| GrowingIO | 增长分析、CDP、智能运营 | SaaS 和私有化，按模块和用量定制 | 适合较成熟企业做增长闭环 |
| 腾讯云数据/微信小程序后台 | 小程序和微信生态 | 平台内置能力为主 | 小程序基础数据可先看官方后台 |
| 阿里云日志服务 / 腾讯云 CLS | 服务日志、业务事件 | 按存储、写入、查询等资源用量计费 | 更偏技术和运维分析 |

### 早期国内组合

如果你是国内网站：

```text
百度统计 + Microsoft Clarity
```

如果你是小程序：

```text
微信小程序后台 + 友盟+小程序统计
```

如果你是 App：

```text
友盟+ / Firebase Analytics / 厂商统计 + 崩溃监控
```

如果你是中大型企业产品：

```text
神策 / GrowingIO / 自建埋点系统
```

## 收费机制怎么看

数据工具常见收费方式有几种。

### 1. 免费

适合早期。

例如：

- Microsoft Clarity 官方标注免费。
- Firebase Analytics 免费。
- GA4 基础版免费。
- 一些国内统计工具有免费版。

注意：免费不代表没有隐私和合规成本，也不代表数据永远完整、功能永远够用。

### 2. 按 PV 或访问量

常见于网站统计。

例如 Plausible 这类工具通常按 monthly pageviews 分档。

适合：

- 内容站
- 文档站
- 工具站
- 落地页

好处是容易理解，坏处是流量起来后费用会跟着涨。

### 3. 按事件量

常见于产品分析。

例如 Mixpanel、PostHog 这类工具常看事件数。

事件包括：

- page_view
- sign_up
- click_cta
- upload_file
- generate_result
- export
- purchase

适合：

- SaaS
- App
- AI 工具
- 复杂漏斗

风险是埋点太细会导致事件量暴涨。

### 4. 按 MTU / MAU

有些产品按 Monthly Tracked Users 或活跃用户收费。

适合：

- 用户行为分析
- 留存分析
- 用户分群

要注意匿名用户和登录用户的合并，否则可能重复计算。

### 5. 按模块和私有化定制

常见于企业级工具。

例如神策、GrowingIO 这类产品，可能按：

- 产品模块
- 数据量
- 部署方式
- 用户规模
- 私有化交付
- 咨询和服务

适合数据安全要求高、团队规模大、预算充足的企业。

## 独立开发早期应该看哪些指标

不要一开始就看一堆指标。

先看这几个：

### 获客

- 来源渠道
- UTM
- 搜索关键词
- 新用户数

### 激活

- CTA 点击率
- 表单提交率
- 注册率
- 首次核心动作完成率

### 留存

- 次日/7 日回访
- 是否再次使用核心功能
- 是否加入群或邮件列表

### 收入

- 试用到付费转化
- 付费用户数
- ARPU
- 退款率
- 订阅取消率

### 成本

- AI 调用成本
- 广告成本
- 服务器成本
- 单用户成本
- 单次生成成本

## 最小埋点方案

早期不要埋太多。

一个工具站可以先埋：

```text
page_view
click_primary_cta
submit_form
start_task
task_success
task_failed
export_result
click_pricing
purchase_success
```

一个免费书可以先埋：

```text
page_view
click_next_chapter
click_github
click_group
click_affiliate_link
scroll_depth
```

一个 SaaS 可以先埋：

```text
sign_up
login
create_project
complete_onboarding
use_core_feature
invite_member
start_trial
subscribe
cancel_subscription
```

## UTM 要早点用

推广时一定要给链接加 UTM。

例子：

```text
https://example.com/?utm_source=zhihu&utm_medium=post&utm_campaign=launch
```

常用字段：

- utm_source：来源，比如 zhihu、v2ex、xiaohongshu
- utm_medium：媒介，比如 post、comment、ad、referral
- utm_campaign：活动，比如 launch、seo-book、traffic-alliance
- utm_content：具体内容，比如 title-a、button-b

没有 UTM，你很难知道哪个渠道真的有效。

## 数据分析常见误区

### 只看 PV

PV 高不代表产品好。要看有多少人完成核心动作。

### 只看点赞收藏

点赞收藏是兴趣信号，不是转化。

### 埋点太多

早期埋点太多会增加开发成本，也会让分析变复杂。

### 没有事件命名规范

事件名乱写，后面会很痛苦。

建议用统一格式：

```text
动词_对象
click_pricing
submit_form
create_project
export_report
```

### 不看成本

AI 产品、广告投放、文件处理都要看成本。只看用户量可能会越增长越亏。

## 选择建议

如果只做内容站：

```text
Umami / Plausible / GA4 + Clarity
```

如果做国内网站：

```text
百度统计 + Clarity
```

如果做小程序：

```text
微信后台 + 友盟+
```

如果做 App：

```text
Firebase Analytics / 友盟+ + 崩溃监控
```

如果做 SaaS：

```text
PostHog / Mixpanel / Amplitude
```

如果有企业数据安全要求：

```text
神策 / GrowingIO / 私有化埋点系统
```

早期工具选择不要太复杂。先保证你能回答三个问题：

> 用户从哪里来？  
> 用户有没有完成核心动作？  
> 哪个渠道带来了真正有价值的人？

## 参考资料

- [Google Analytics 360](https://marketingplatform.google.com/about/analytics-360/)
- [Microsoft Clarity Pricing](https://clarity.microsoft.com/pricing)
- [Microsoft Clarity FAQ](https://learn.microsoft.com/en-us/clarity/faq)
- [Plausible Analytics Pricing](https://plausible.io/)
- [Umami](https://umami.is/)
- [PostHog](https://posthog.com/)
- [Mixpanel Pricing](https://mixpanel.com/pricing/)
- [Amplitude Pricing](https://amplitude.com/pricing)
- [Firebase Analytics](https://firebase.google.com/products/analytics)
- [Firebase Pricing](https://firebase.google.com/pricing)
- [百度统计](https://tongji.baidu.com/)
- [友盟+付费服务](https://www.umeng.com/market)
- [神策数据私有化部署](https://www.sensorsdata.cn/features/private.html)
- [GrowingIO](https://www.growingio.com/)

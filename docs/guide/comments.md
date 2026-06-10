# 评论系统配置

> *字数：约 512 字；预计阅读时间：2 分钟。*

本站使用 Giscus 接入评论。

Giscus 会让读者使用 GitHub 账号登录并发表评论，评论内容存储在 GitHub Discussions 中。这样不需要自己维护用户系统、评论数据库和垃圾评论风控。

## 配置步骤

1. 把本站代码推到 GitHub 仓库。
2. 在仓库 Settings 中开启 Discussions。
3. 安装 [Giscus GitHub App](https://github.com/apps/giscus) 到这个仓库。
4. 打开 [giscus.app](https://giscus.app/)。
5. 填写仓库名，选择 Discussions 分类。
6. 复制生成配置里的：
   - repo
   - repo-id
   - category
   - category-id
7. 在项目根目录新建 `.env.local`。
8. 按下面格式填写：

```text
VITE_GISCUS_REPO=your-github-name/your-repo
VITE_GISCUS_REPO_ID=your_repo_id
VITE_GISCUS_CATEGORY=General
VITE_GISCUS_CATEGORY_ID=your_category_id
VITE_GISCUS_MAPPING=pathname
```

## 本地预览

配置完成后重新启动开发服务：

```bash
npm run docs:dev
```

如果配置正确，每个正文页面底部会显示评论区。

## 不想显示评论

如果某个页面不想显示评论，可以在 Markdown 顶部加：

```md
---
comments: false
---
```

## 用户身份

用户身份由 GitHub 负责。

你可以看到：

- GitHub 用户名
- 头像
- 用户主页
- 评论和回复

本站不保存用户密码，也不维护独立账号系统。

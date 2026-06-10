export default {
  title: '国内独立开发冷启动手册',
  description: '一本写给国内独立开发者的免费实践手册',
  lang: 'zh-CN',
  cleanUrls: true,

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '开始阅读', link: '/guide/idea' },
      { text: '工具清单', link: '/resources/tools' },
      { text: 'AbandonedIdeas', link: 'https://ideas.swep.top/' }
    ],

    sidebar: [
      {
        text: '从点子到产品',
        items: [
          { text: '为什么写这本书', link: '/' },
          { text: '完整路线图', link: '/guide/roadmap' },
          { text: '怎么从吐槽里找需求', link: '/guide/idea' },
          { text: '怎么定义产品', link: '/guide/product-definition' },
          { text: '怎么做一个足够小的 MVP', link: '/guide/mvp' }
        ]
      },
      {
        text: '开发和上线',
        items: [
          { text: '开发资源和技术选择', link: '/guide/dev-resources' },
          { text: '怎么部署上线', link: '/guide/deploy' },
          { text: '上架门槛总览', link: '/guide/compliance' },
          { text: '国内上线合规', link: '/guide/domestic-compliance' },
          { text: '海外上架合规', link: '/guide/global-compliance' },
          { text: '隐私、SDK 和 AI 合规', link: '/guide/privacy-ai-compliance' },
          { text: '广告接入和变现合规', link: '/guide/ad-compliance' },
          { text: '数据统计和分析', link: '/guide/analytics' },
          { text: 'SEO 基础', link: '/guide/seo' }
        ]
      },
      {
        text: '商业化',
        items: [
          { text: '怎么接入支付', link: '/guide/payment' },
          { text: '变现方式和定价', link: '/guide/pricing' }
        ]
      },
      {
        text: '推广冷启动',
        items: [
          { text: '怎么获得第一批用户', link: '/guide/marketing' },
          { text: '流量联盟使用指南', link: '/guide/traffic-alliance' },
          { text: '什么时候应该放弃', link: '/guide/when-to-quit' },
          { text: '失败项目复盘', link: '/guide/abandoned-ideas' }
        ]
      },
      {
        text: '附录',
        items: [
          { text: '工具清单', link: '/resources/tools' },
          { text: '检查清单', link: '/resources/checklist' },
          { text: '评论系统配置', link: '/guide/comments' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: '持续更新，欢迎评论、补充和提供真实案例。',
      copyright: 'Released as a free handbook for indie makers.'
    }
  }
}

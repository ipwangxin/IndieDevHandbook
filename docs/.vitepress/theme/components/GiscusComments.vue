<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

const route = useRoute()
const { isDark, frontmatter } = useData()
const container = ref(null)

const config = {
  repo: import.meta.env.VITE_GISCUS_REPO || '',
  repoId: import.meta.env.VITE_GISCUS_REPO_ID || '',
  category: import.meta.env.VITE_GISCUS_CATEGORY || 'General',
  categoryId: import.meta.env.VITE_GISCUS_CATEGORY_ID || '',
  mapping: import.meta.env.VITE_GISCUS_MAPPING || 'pathname'
}

const enabled = computed(() => {
  return Boolean(config.repo && config.repoId && config.categoryId)
})

const shouldShow = computed(() => {
  return frontmatter.value?.comments !== false
})

function renderGiscus() {
  if (!container.value || !enabled.value || !shouldShow.value) return

  container.value.innerHTML = ''

  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.async = true
  script.crossOrigin = 'anonymous'
  script.setAttribute('data-repo', config.repo)
  script.setAttribute('data-repo-id', config.repoId)
  script.setAttribute('data-category', config.category)
  script.setAttribute('data-category-id', config.categoryId)
  script.setAttribute('data-mapping', config.mapping)
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'bottom')
  script.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('data-loading', 'lazy')

  container.value.appendChild(script)
}

function updateTheme() {
  const iframe = document.querySelector('iframe.giscus-frame')
  if (!iframe) return

  iframe.contentWindow?.postMessage(
    {
      giscus: {
        setConfig: {
          theme: isDark.value ? 'dark' : 'light'
        }
      }
    },
    'https://giscus.app'
  )
}

onMounted(renderGiscus)
watch(() => route.path, () => {
  setTimeout(renderGiscus, 0)
})
watch(isDark, updateTheme)
</script>

<template>
  <section v-if="shouldShow" class="giscus-section">
    <h2 class="giscus-title">项目和想法收集区</h2>
    <div class="giscus-guide">
      <p>
        欢迎留下你已经上线的站点、正在验证的想法、推广卡点，或者已经暂停/放弃的项目。后续我会定期整理有代表性的案例，用在 AbandonedIdeas、流量联盟和后续文章里。
      </p>
      <ul>
        <li>已上线：链接 + 一句话介绍 + 当前最想验证的问题。</li>
        <li>卡住了：哪里没流量、没转化、没人付费，或者维护成本太高。</li>
        <li>已放弃：为什么停下，踩过什么坑，希望别人接手还是只想复盘。</li>
      </ul>
      <details class="giscus-template">
        <summary>可以直接复制这个格式</summary>
        <pre><code>项目 / 想法：
链接：
当前状态：已上线 / 开发中 / 暂停 / 已放弃
一句话介绍：
现在最卡的地方：
希望大家帮我看：</code></pre>
      </details>
    </div>
    <p v-if="!enabled" class="giscus-placeholder">
      评论区尚未启用。配置 Giscus 仓库信息后，这里会显示 GitHub Discussions 评论。
    </p>
    <div ref="container" />
  </section>
</template>

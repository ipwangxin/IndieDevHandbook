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
    <h2 class="giscus-title">评论</h2>
    <p v-if="!enabled" class="giscus-placeholder">
      评论区尚未启用。配置 Giscus 仓库信息后，这里会显示 GitHub Discussions 评论。
    </p>
    <div ref="container" />
  </section>
</template>

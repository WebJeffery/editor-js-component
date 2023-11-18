export default {
  '/element-plus/': getComponentsSidebar()
}

function getApiSidebar() {
  return [
    {
      text: '功能',
      collapsible: true,
      items: [
        {
          text: '已实现',
          link: '/api/'
        },
      ]
    }
  ]
}

function getComponentsSidebar() {
  return [
    {
      text: 'Basic基础组件',
      items: [
        {
          text: 'Button 按钮',
          link: '/element-plus/button'
        },
        {
          text: 'Border 边框',
          link: '/element-plus/border'
        },
        {
          text: 'Color 色彩',
          link: '/element-plus/color'
        },
        {
          text: 'Container 布局容器',
          link: '/element-plus/container'
        },
        {
          text: 'Icon 图标',
          link: '/element-plus/icon'
        },
        {
          text: 'Layout 布局',
          link: '/element-plus/layout'
        },
        {
          text: 'Link 标签',
          link: '/element-plus/link'
        },
        {
          text: 'Link 标签',
          link: '/element-plus/link'
        }
      ]
    },
    {
      text: 'Form 表单组件',
      items: [
        {
          text: 'Form 表单',
          link: '/element-plus/form'
        }
      ]
    }
  ]
}

function getGuideSidebar() {
  return [
    {
      text: '指南',
      items: [
        {
          text: '文档1',
          link: '/guide/'
        },
        {
          text: '文档2',
          link: '/guide/button'
        },
        {
          text: '文档3',
          link: '/guide/modal'
        }
      ]
    }
  ]
}


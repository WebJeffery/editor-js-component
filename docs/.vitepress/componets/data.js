export const blockData = [
  {
    type: 'h1',
    data: {
      text: 'Heading1',
      level: 1
    }
  },
  {
    type: 'h2',
    data: {
      text: 'Heading 2',
      level: 2
    }
  },
  {
    type: 'h3',
    data: {
      text: 'Heading 3',
      level: 3
    }
  },
  {
    type: 'h4',
    data: {
      text: 'Heading 4',
      level: 4
    }
  },
  {
    type: 'paragraph',
    data: {
      text: 'Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.'
    }
  },
  {
    type: 'button',
    data: {
      text: '按钮',
      link: 'baidu.com'
    }
  },
  {
    type: 'nestedList',
    data: {
      style: 'unordered',
      items: [
        {
          content: 'Apples',
          items: [
            {
              content: 'Red',
              items: []
            },
            {
              content: 'Green',
              items: []
            }
          ]
        },
        {
          content: 'Bananas',
          items: [
            {
              content: 'Yellow',
              items: []
            }
          ]
        }
      ]
    }
  },
  {
    type: 'quote',
    data: {
      text: 'The unexamined life is not worth living.',
      caption: 'Socrates',
      alignment: 'left'
    }
  },
  {
    type: 'warning',
    data: {
      title: 'Note:',
      message: 'Avoid using this method just for lulz. It can be very dangerous opposite your daily fun stuff.'
    }
  },
  {
    type: 'delimiter',
    data: {}
  },
  {
    type: 'code',
    data: {
      text: 'hello world'
    }
  },
  {
    type: 'raw',
    data: {
      html: 'hello world'
    }
  },
  {
    type: 'checklist',
    data: {
      items: [
        {
          text: 'This is a block-styled editor',
          checked: true
        },
        {
          text: 'Clean output data',
          checked: false
        },
        {
          text: 'Simple and powerful API',
          checked: true
        }
      ]
    }
  },
  {
    type: 'nestedchecklist',
    data: {
      style: 'unordered',
      items: [
        {
          content: 'Apples',
          checked: null,
          items: [
            {
              content: 'Red',
              checked: true,
              items: []
            },
            {
              content: 'Green',
              checked: false,
              items: []
            }
          ]
        },
        {
          content: 'Bananas',
          items: [
            {
              content: 'Yellow',
              checked: true,
              items: []
            }
          ]
        }
      ]
    }
  },
  {
    type: 'alert',
    data: {
      type: 'danger',
      align: 'center',
      text: '<strong>Holy smokes!</strong><br>Something seriously <em>bad</em> happened.'
    }
  },
  {
    type: 'toggle',
    data: {
      text: 'toggle'
    }
  },
  {
    type: 'table',
    data: {
      withHeadings: true,
      content: [['Kine', 'Pigs', 'Chicken'], ['1 pcs', '3 pcs', '12 pcs'], ['100$', '200$', '150$']]
    }
  },

  {
    type: 'paragraph',
    data: {
      text: "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏"
    }
  },
  {
    type: 'image',
    data: {
      file: {
        url: 'https://codex.so/public/app/img/external/codex2x.png'
      },
      caption: '',
      withBorder: false,
      stretched: false,
      withBackground: false
    }
  }
]

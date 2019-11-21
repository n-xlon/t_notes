module.exports = {
    title: 'Codding',
    description: '前端技术分享',
    head: [
        ['link', 
            {rel: 'icon', href: '/mokey.jpg'}
        ]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        logo: '/mokey.jpg',
        smoothScroll: true,
        nav: [
            { text: '首页', link: '/' },
            {
                text: '分类',
                ariaLabel: '分类',
                items: [
                    { text: '文章', link: '/pages/webpack/test.md' }
                ]
            },
            { text: 'GitHub', link: 'https://github.com' }
        ],
        sidebar: [
            {
                title: 'home',
                sidebarDepth: 1,
                children: [
                    ['/', 'About']
                ]
            },
            {
                title: 'webpack',
                // path: '/pages/webpack/',
                sidebarDepth: 1,
                // collapsable: false,
                children: [
                    ['/pages/webpack/test.md', 'DllPlugin']
                ]
            }
        ]
    }
}
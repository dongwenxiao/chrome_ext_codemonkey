export default {
    path: '/',
    component: require('@components/app').default,
    meta: {
        name: '根目录',
        // icon: // 支持 () => return JSX,
        title: '',
    },
    children: [{
            title: '首页',
            path: '',
            component: require('@views/home').default,
        },
        {
            path: 'static',
            component: require('@views/static').default,
        }
    ]
}
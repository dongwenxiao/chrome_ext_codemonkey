import { reduxForCreateStore } from 'koot'
const {
    reducers: defaultReducers
} = reduxForCreateStore

const module = {
    state: {...defaultReducers },
    // state: {
    //     // 在此处定义默认的state
    //     // 程序将在创建时将此处定义好的值初始化为默认值
    //     userinfo: {
    //         username: 'liudehua',
    //         password: '123456'
    //     }
    // },
    reducers: {
        // reducer 为一个 funciton
        // reducer的调用名称 = funciton的名称
        ['SOME_REDUCER_FUNCTION'](state, payload) {

        }
    },
    actions: {
        // action 为一个 funciton
        // action的调用名称 = funciton的名称
        ['SOME_ACTION_FUNCTION']({
            commit,
            state,
            rootState,
            dispatch
        }, payload) {
            // commit 用来提交 reducer
            // eg: commit('SOME_REDUCER_FUNCTION', payload)

            // state 用来获取当前模块的局部 state
            // eg: state.userinfo.username

            // rootState 整个状态树的根层，你可以再此拿到整个状态树
            // eg: rootState.App.test

            // dispatch 可以继续派发其他的 action 操作
            // eg: dispatch('OTHER_ACTION_FUNCTION')
        }
    },
    modules: {
        // 此处可扩展子集的 module 模块
        // 子级可以同样扩展自己的子级
        App: {
            state: {
                test: 1
            },
            reducers: {},
            actions: {},
            modules: {}
        }
    }
}
export default module
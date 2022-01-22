# React_Tesla

#### 介绍
React + React Hooks + Koa  特斯拉商城应用
线上地址：http://121.40.35.197/

#### 软件架构
├─api                   // 网路请求代码、工具类函数和相关配置
├─assets                // 字体配置及全局样式
├─baseUI                // 基础 UI 轮子
├─components            // 可复用的 UI 组件
├─routes                // 路由配置文件
└─store                 //redux 相关文件
  App.jsx                // 根组件
  main.jsx              // 入口文件


#### data: 01/07 总结
  author: Tendo

  1. tabbar 切换功能
    - 路由
    - 高亮
      1. spa
      2. 匹配
      3. 组件落地
        route.renderRoutes()

  2. tabbar 开发流程
    - 二级路由构建，组件动态路由落地设计
        一级路由tabbar 二级路由 页面级别组件
    -  全局状态中 index messageCount
    -  MVVM tabbar 组件开发 点击时 维护状态的正确性
    -  考虑用户
    -  hooks 编程风格，比如在tabbar切换使用了useLocation来匹配路由

  3. 性能优化
    路由 懒加载
    组件memo
    connect(mapStateToPorps, {})(memo(Component))
    lazyload 图片

  4. 状态分寸
    - redux 数据流为主，数据共享和一致性
        useState（私有）是破坏性一致的
    - 要不要用 useState，就看是否要和其他组件共享
    - 放在reducer也有好处，复杂组件内部早晚会共享
      严格的修改策略
 

#### data: 01/08 总结
  author: Tendo

  给redux的搭建及其内部API的调用加上注释


#### data: 01/09 总结
  author: Tendo

  1. 后端server搭建 Koa

  2. 前端Ajax 引入数据
  
  3. 轮播图的实现

  4. 改了个bug，当在浏览器航栏刷新时会出现tabbar Icon和文字高亮不匹配的问题
  
  使用 index = route.routes.findIndex(item => item.path == pathname) 绑定index


#### data: 01/10 总结
  author: Tendo

  1. 后端teslaData添加新数据

  2. 添加轮播图上展现的汽车参数

  3. 改了个我永远都不会忘记的bug！！
    配完路由后记得 {renderRoutes(props.route.routes)} 开启子路由！！！


#### data: 01/10 总结
  author: Tendo

  1. filder爬数据拿到详情页的图片并上传gitee图床

  2. 实现在轮播图中点击按钮，不同轮播图进入不同详情页 
    onClick={()=>goToDetail(item)}
    history.push({pathname:`/tesla/${item.id}`, state:item})
    点击state传值给子路由组件


#### data: 01/12 总结
  author: Tendo

  1. 根据不同id拿到的详情页json数据编写详情页

  2. 在首页和详情页的scroll顶部都加了吸顶标题
    在scroll外面一层样式组件加上padding即可，让后标题和返回按钮在scroll同级标签
      position: absolute;
      top: 0;
      display: flex;
      align-items: center;
      即可增加标题


#### data: 01/13 总结
  author: Tendo

  1. 由于json文件的特殊性
    使用两个useState分别确定colorIndex和wheelIndex就可以实现不同轮胎和不同颜色的选配。
    但是由于汽车配置可能在多个页面使用到，我将配置信息都使用Redux数据流管理。

  2. Bug: 刷新页面时无论是state值，还是Redux里面设置的值都会回到默认初始值0

  3. 选配记忆功能的实现
    用浏览器的stroage其实就可以解决
    这里使用了redux 使用了数据流管理，所以可以使用redux-persist
    redux-persist实现redux持久化本地数据存储。

    const storageConfig = {
      key: 'root', // 必须有的
      storage:storageSession, // 缓存机制
      <!-- 必须为跟store，不能是某个属性 -->
      whitelist: ['tesla'] // reducer 里持久化的数据,除此外均为不持久化数据
    }


#### data: 01/14 总结
  author: Tendo

  1. Tesla页面的编写，二级路由级别组件Order的编写


#### data: 01/15 总结
  author: Tendo

  1. 一种中间显示主要内容，两侧附带其他页一部分内容的滑动组件
    使用swiper3组件（Slides居中 + 自动分组）

  2. 注意在 new Swiper 时要用setTimeout包着，不然在导航栏刷新页面swiper组件样式会丢失

  3. 如何在react里使用百度地图API
    npm i @uiw/react-baidu-map
    组件 <Map> 必须包裹在 <APILoader> 组件内，该组件作用是加载百度地图 SDK。
    其他地图组件必须作为 <Map> 的子组件使用。

  4. 使用第二个后端接口将shopdata加入redux中，不同一级路由页面使用不同reducer


#### data: 01/16 总结
  author: Tendo

  1. 如何限制向后端请求数据的数量
    useState 一个 page
    前端dispatch时将page作为参数传出
      dispatch(actionCreators.getFindData(page))

    在调用Ajax请求时将page作为参数传入封装好的Ajax函数中
      export const reqfind = (page) => {
        return Ajax(`/find/${page}`)
      } 

    后端可以从ctx.params拿到page，然后再对数组进行切割
      router.get('/find/:page', async (ctx) => {

        let { page } = ctx.params
        let { newsList } = FindData

        // 根据page做数据筛选，slice不会改变原数组
        let list2 = newsList.slice((page-1)*limit, page*limit)
        
        ctx.response.body = {
            success: true,
            data: {
                newsList: list2
            }
        }
      })


#### data: 01/17 总结
  author: Tendo

  1. 首页长列表业务怎么做？
    后端从ctx.params拿到page
    页面用redux(数据流处理的一致性) 或者 useState mvvm

  2. 列表图片的性能优化
    react-lazyload
    包装img placeholder

  3. scroll组件的 onScroll 属性里面加上 forceCheck()
    加一个timeout会更好看

  4. 项目上线


#### data: 01/18 总结
  author: Tendo

  1. 发现页详情页编写

  2. 商品页如何写吸顶组件，并会随着scroll滚动而改变样式
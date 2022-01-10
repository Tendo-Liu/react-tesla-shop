# React_Tesla

#### 介绍
React + React Hooks + Koa  特斯拉商城应用

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
import { useRef, useEffect, useState } from 'react';
import { APILoader, useMap } from '@uiw/react-baidu-map';
import { TeslaMap, Main } from './index.style'

const Map = () => {
  const [value, setValue] = useState('')
  const divElm = useRef();
  const { setContainer, map, setAutoLocalCity } = useMap({
    enableScrollWheelZoom: true, // 启用滚轮放大缩小，默认禁用
    zoom: 13.5,
    center: '上海'
    // widget: ['GeolocationControl', 'NavigationControl']
  });
  useEffect(() => {
    if (divElm.current && !map) {
      setContainer(divElm.current);
    }
  });

  // // 百度地图中有配置LocalSearch()用于智能检索服务
  // const setPlace = (value) => {
  //   const map = new BMap.Map("address"); // 创建Map实例
  //   var local, point = null;
  //   local = new BMap.LocalSearch(map, { //智能搜索
  //     onSearchComplete: fn
  //   });
  //   local.search(value);
  //   function fn() {
  //     //如果搜索的有结果
  //     if (local.getResults() !== undefined && local.getResults().getPoi(0)) {
  //       point = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
  //       layPoint(point)
  //     } else {
  //     }
  //   }
  // };

  // const layPoint = (e) => {
  //   const map = new BMap.Map("address"); // 创建Map实例
  //   // 清楚点
  //   map.clearOverlays();
  //   if (e !== undefined) {
  //     // 添加点
  //     const point = new BMap.Point(e.lng, e.lat);//根据经纬度添加点坐标
  //     map.centerAndZoom(point, 15);
  //     const marker = new BMap.Marker(point); // 创建标注
  //     map.addOverlay(marker); // 将标注添加到地图中
  //     marker.enableDragging(); // 可拖拽
  //   } else {
  //     map.centerAndZoom("长沙"); // 初始化地图,设置中心点坐标和地图级别
  //     mapOnconfirm(map)//点击智能检索下拉框出发
  //   }
  //   map.addEventListener('click', mapOnclick);//点击地图
  //   map.enableScrollWheelZoom();//启用地图放大缩小
  // };

  // const mapOnclick = (e) => {
  //   layPoint(e.point)
  //   const geoc = new BMap.Geocoder()// 创建地址解析器实例
  //   // 将地址解析结果显示在地图上，并调整地图视野
  //   geoc.getLocation(e.point, function (rs) {
  //     //点击地图获取地标
  //     var myValue;
  //     if (rs.surroundingPois.length > 0) {
  //       myValue = rs.surroundingPois[0].title
  //     } else {
  //       const _value = rs.addressComponents;
  //       myValue = _value.district + _value.city + _value.street + _value.streetNumber
  //     }
  //     setValue(myValue)
  //   });
  // };

  return (
    <TeslaMap>
      <div className="getLocation" onClick={() => setAutoLocalCity(true)}>
        {/* IP定位 */}
        <svg t="1642263277655" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8036" width="200" height="200"><path d="M511.8 510.6m-145.5 0a145.5 145.5 0 1 0 291 0 145.5 145.5 0 1 0-291 0Z" p-id="8037" fill="#757575"></path><path d="M511.8 887.5c-207.8 0-376.9-169.1-376.9-376.9S304 133.7 511.8 133.7c207.8 0 376.9 169.1 376.9 376.9S719.6 887.5 511.8 887.5z m0-660.7C355.3 226.8 228 354.1 228 510.6s127.3 283.8 283.8 283.8 283.8-127.3 283.8-283.8-127.3-283.8-283.8-283.8z" p-id="8038" fill="#757575"></path><path d="M511.8 222.4c-25.7 0-46.5-20.8-46.5-46.5V46.5c0-25.7 20.8-46.5 46.5-46.5s46.5 20.8 46.5 46.5v129.3c0.1 25.7-20.8 46.6-46.5 46.6zM511.8 1024c-25.7 0-46.5-20.8-46.5-46.5V848.2c0-25.7 20.8-46.5 46.5-46.5s46.5 20.8 46.5 46.5v129.3c0.1 25.7-20.8 46.5-46.5 46.5zM964 558.5H860.6c-25.7 0-46.5-20.8-46.5-46.5s20.8-46.5 46.5-46.5H964c25.7 0 46.5 20.8 46.5 46.5 0.1 25.7-20.8 46.5-46.5 46.5zM162.4 558.5H59c-25.7 0-46.5-20.8-46.5-46.5s20.8-46.5 46.5-46.5h103.4c25.7 0 46.5 20.8 46.5 46.5 0.1 25.7-20.8 46.5-46.5 46.5z" p-id="8039" fill="#757575"></path></svg>
      </div>
      <div ref={divElm} style={{ height: 'calc(100vh - 2.8rem)' }} />
    </TeslaMap>
  )
}

const TesMap = () => {
  return (
    <Main>
      <div className="title">Tesla地图</div>
      <div className="search">
        <svg t="1642315292409" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3029" width="200" height="200"><path d="M1008.160651 931.256445l-177.567435-177.567436A464.412483 464.412483 0 1 0 639.131615 897.076798a57.521845 57.521845 0 1 0-43.071914-106.707191 350.758209 350.758209 0 1 1 118.100408-78.988332 10.976391 10.976391 0 0 0-0.83365 1.042063 6.530258 6.530258 0 0 1-0.83365 0.625237 54.465129 54.465129 0 0 0-5.696608 69.887653 58.286024 58.286024 0 0 0 7.850203 9.864857c1.042062 0.972592 2.223066 1.736771 3.3346 2.639892l212.719674 212.719674a54.604071 54.604071 0 0 0 76.904207 0 54.604071 54.604071 0 0 0 0.555766-76.904206z" p-id="3030" fill="#757575"></path></svg>
        <input placeholder='搜索' className='searchBar' />
      </div>
      <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
        <Map />
      </APILoader>
    </Main>
  )
}

export default TesMap
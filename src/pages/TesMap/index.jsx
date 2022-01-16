import { useRef, useEffect, useState } from 'react';
import { APILoader, useMap } from '@uiw/react-baidu-map';
import { TeslaMap, Main } from './index.style'

const Map = () => {
  const divElm = useRef();
  const { setContainer, map, setAutoLocalCity } = useMap({
    enableScrollWheelZoom: true, // 启用滚轮放大缩小，默认禁用
    zoom: 13.5,
    center: '北京',
    // widget: ['GeolocationControl', 'NavigationControl']
  });
  useEffect(() => {
    if (divElm.current && !map) {
      setContainer(divElm.current);
    }
  });

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
      <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
        <Map />
      </APILoader>
    </Main>
  )
}

export default TesMap
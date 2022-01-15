import React, { useState } from "react";
import { Map, APILoader } from '@uiw/react-baidu-map';
import { TeslaMap } from './index.style'

const TesMap = () => {

  const [center, setCenter] = useState('上海');
  const [enableScrollWheelZoom, setEnableScrollWheelZoom] = useState(true);

  return (
    <div style={{paddingTop: '2.8rem'}}>
      <TeslaMap>
        <div className="getLocation" onClick={() => setCenter('南昌')}>
          <svg t="1642263277655" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8036" width="200" height="200"><path d="M511.8 510.6m-145.5 0a145.5 145.5 0 1 0 291 0 145.5 145.5 0 1 0-291 0Z" p-id="8037" fill="#757575"></path><path d="M511.8 887.5c-207.8 0-376.9-169.1-376.9-376.9S304 133.7 511.8 133.7c207.8 0 376.9 169.1 376.9 376.9S719.6 887.5 511.8 887.5z m0-660.7C355.3 226.8 228 354.1 228 510.6s127.3 283.8 283.8 283.8 283.8-127.3 283.8-283.8-127.3-283.8-283.8-283.8z" p-id="8038" fill="#757575"></path><path d="M511.8 222.4c-25.7 0-46.5-20.8-46.5-46.5V46.5c0-25.7 20.8-46.5 46.5-46.5s46.5 20.8 46.5 46.5v129.3c0.1 25.7-20.8 46.6-46.5 46.6zM511.8 1024c-25.7 0-46.5-20.8-46.5-46.5V848.2c0-25.7 20.8-46.5 46.5-46.5s46.5 20.8 46.5 46.5v129.3c0.1 25.7-20.8 46.5-46.5 46.5zM964 558.5H860.6c-25.7 0-46.5-20.8-46.5-46.5s20.8-46.5 46.5-46.5H964c25.7 0 46.5 20.8 46.5 46.5 0.1 25.7-20.8 46.5-46.5 46.5zM162.4 558.5H59c-25.7 0-46.5-20.8-46.5-46.5s20.8-46.5 46.5-46.5h103.4c25.7 0 46.5 20.8 46.5 46.5 0.1 25.7-20.8 46.5-46.5 46.5z" p-id="8039" fill="#757575"></path></svg>
        </div>
        <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
          <Map enableScrollWheelZoom={enableScrollWheelZoom} zoom={12} center={center} />
        </APILoader>
      </TeslaMap>
    </div>
  )
}

export default TesMap
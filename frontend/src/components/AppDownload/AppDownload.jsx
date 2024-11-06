import React from 'react'
import './AppDownload.css'
import { store } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience to Download <br /> YASH App</p>
      <div className="app-download-plateforms">
        <img src={store.play_store} alt="" />
        <img src={store.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload

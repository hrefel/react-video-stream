import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import VideoPlayer from './App';

const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [{
    src: 'http://172.16.201.201:8080/hls/hello.m3u8',
    type: 'application/x-mpegURL'
  }]
};

ReactDOM.render(
  <React.StrictMode>
    <div className="web-container">
      <VideoPlayer videoJsOptions={videoJsOptions}/>
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

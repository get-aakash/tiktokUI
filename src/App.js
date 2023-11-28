import logo from './logo.svg';
import './App.css';
import Video from './components/Video';
import { useEffect, useState } from 'react';

function App() {
	const API_URL =
	'https://raw.githubusercontent.com/codedamn-classrooms/tiktok-react-material/main/data.json'
	const [videos, setVideos] = useState([])
	useEffect(()=>{
		fetch(API_URL)
		.then((res)=>res.json())
		.then((d)=>setVideos(d))

	},[])
  return (
    <div className="app">
			<div className="container">
				{videos.map((video)=>{
					return (
						<Video className="player" loop url= {video.url}/>
					)
				})}
				
			</div>
		</div>
  );
}

export default App;

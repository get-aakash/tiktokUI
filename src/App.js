import Video from "./components/Video";
import "./App.css"
import { useEffect, useState } from "react";

const API_URL =
	'https://raw.githubusercontent.com/codedamn-classrooms/tiktok-react-material/main/data.json'

function App() {
	const [videos, setVideos] = useState([])
	useEffect(()=>{
		const fetchdata = async()=>{
			const response = await fetch(API_URL).then((res)=>res.json()).then((d)=>setVideos(d))
			return response
		}
		fetchdata()
	})


  return (
    <div className="app">
			<div className="container">
				{videos.map((video, index)=>{
					return (
						<Video key={video.url}
						channel={video.channel}
						description={video.description}
						song={video.song}
						likes={video.likes}
						shares={video.shares}
						messages={video.messages}
						url={video.url} />
					)
				})}
				
			</div>
	</div>
  );
}

export default App;

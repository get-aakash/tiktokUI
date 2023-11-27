import logo from './logo.svg';
import './App.css';
import Video from './components/Video';

function App() {
  return (
    <div className="app">
			<div className="container">
				<Video url="https://github.com/codedamn-classrooms/tiktok-react-material/raw/main/v1.mp4" />
			</div>
		</div>
  );
}

export default App;

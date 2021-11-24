import logo from './logo.svg';
import './App.css';
import image1 from "./images/nasaa.png";
function App() {
  return (
    <div className="App">
      <div>

<h1 class="title red">Your name here</h1>

<br />
</div>
<img src={image1}/>
<br />
<img src="/images/welcome.jpg" className="hello" />
<video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;

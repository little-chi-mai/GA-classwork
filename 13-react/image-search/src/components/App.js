import ColorBox from './ColorBox';
import InteractiveColorBox from './InteractiveColorBox';
import Clock from './Clock';
import FlickrSearch from './FlickrSearch'
import Echo from './Echo'



function App() {
  return (
    <div className="App">
      <Echo />
      <FlickrSearch />
      {/* <Clock /> */}
      {/*
        <Clock />

        <ColorBox color='blue' />
        <ColorBox color='teal' />
        <ColorBox color='lime' />
        <ColorBox color='red' />

        <InteractiveColorBox />*/}
    </div>
  );
}

export default App;

import Profile from './Profile'

function App() {
  return (
    <div className="App">
      <h1>Social Network</h1>
      <Profile name='Dom Cheung' age='45' motto='No gods no monsters' pic="http://www.fillmurray.com/500/500"/>
      <Profile name='Dom Lala' age='30' motto='Bla bla' pic="http://www.fillmurray.com/500/501"/>
      <Profile name='Dom Cheung' age='45' motto='No gods no monsters' pic="http://www.fillmurray.com/501/500"/>
    </div>
  );
}

export default App;

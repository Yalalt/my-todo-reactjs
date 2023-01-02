import './App.css';

function App() {
  
  const name = 'Legendary Andy!';
  const customeStyle = name.includes('Legendary')? "legendaryBig": "legendary";

  function getGreeting(name) {
    if(name) {
      return <h1 className={customeStyle}>Hello, {name}</h1>;
    }
    return <h1 className={customeStyle}>Hello, Stranger</h1>;
  }

  return (
    <div className="App">
      <header className="App-header">
        {getGreeting(name)}
      </header>
    </div>
  );
}

export default App;

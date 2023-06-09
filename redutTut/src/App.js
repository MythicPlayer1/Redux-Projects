
import './App.css';

import HeaderContainer from './container/HeaderContainer';
import HomeContainer from './container/HomeContainer';

function App() {
  return (
    <div className="App" style={{display:'flex',justifyContent:'space-between', flexDirection:'row-reverse', padding:'30px'}}>
      <HeaderContainer></HeaderContainer>
      <HomeContainer></HomeContainer>
    </div>
  );
}

export default App;

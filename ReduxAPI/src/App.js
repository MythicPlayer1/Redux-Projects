import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { apiData } from './features/gitUserSlice';
import Card from './Card';



function App() {

  const dispatch = useDispatch();
  const datas = useSelector((state) => {
    console.log('state:', state.storedApiDatas)
    return (state.storedApiDatas)
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Git Users Lists
        </p>
        <button style={{ height: '40px', width: '200px', borderRadius: '5px', border: 'none', background: 'rgb(100, 149, 237)', color: 'white' }} onClick={() => dispatch(apiData())}>Get Users</button>

        {/* {datas.users.map((item)=>{
          <li key={item.id}>{item.login}</li>
        })} */}

        {/* <li>{datas.users[0].login}</li>

        {datas.users.map((item)=>{
         return( <li key={item.id}>{item.login}</li>)
        })} */}

        <div style={{ height: 'auto', width: '100%', display: 'flex',marginLeft:'250px', flexFlow:"wrap"}}>
          {datas.users.map((item) => {
            return(<Card login={item.login}
              id={item.id}
              url={item.url}
              follower={item.followers_url}
              type={item.type}
            ></Card>)
          })}
        </div>


      </header>
    </div>
  );
}

export default App;

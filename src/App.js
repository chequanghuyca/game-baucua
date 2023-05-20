import './App.css';
import Baucua from './TomCuaCa/Baucua';


function App() {
  return (
    <div className='App'>
      <div className='snowflake-left'>
        <img style={{width: 30}} src='./img/tien.png' alt='' />
      </div>
      <div className='snowflake-left-2'>
        <img style={{width: 30}} src='./img/tien.png' alt='' />
      </div>
      <div className='snowflake-left-3'>
        <img style={{width: 30}} src='./img/tien.png' alt='' />
      </div>
      <div className='snowflake-right'>
        <img style={{width: 30}} src='./img/tien.png' alt='' />
      </div>
      <div className='snowflake-right-2'>
        <img style={{width: 30}} src='./img/tien.png' alt='' />
      </div>
      <div className='snowflake-right-3'>
        <img style={{width: 30}} src='./img/tien.png' alt='' />
      </div>
      <Baucua/>
    </div>
  );
}

export default App;

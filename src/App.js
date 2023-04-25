import './App.css';
import Clock from './components/clock/Clock';
import Form from './components/form/Form';
import Ball from './components/ball/Ball';

function App() {
  return (
    <div className="App">
      <div className='telaLado1'>
        <div className='relogio'>
          <Clock />
        </div>
        <div className='manipuladorDeItems'>
          <Form />
        </div>
      </div>
      <div className='telaLado2'>
        <Ball />
      </div>
    </div>
  );
}

export default App;

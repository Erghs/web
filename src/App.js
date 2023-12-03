import logo from './logo.svg';
import './App.css';
import { ClickButtonClass } from './components/ClickButtonClass';
import Hello from './components/Hello';
import { ClickButtonLifeCycle } from './components/ClickButtonLifeCycle';
import { UserForm } from './components/UserForm';
import { UserFormNew } from './components/UserFormNew';

function App() {
  return (
    <div className="App">
     <Hello name="Tom" age="33"/>
     <ClickButtonClass increment="1"/>
     <ClickButtonLifeCycle/>
     <UserForm name="" age="0"/>

     <UserFormNew/>
    </div>
  );
}

export default App;

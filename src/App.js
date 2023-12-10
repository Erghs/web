import logo from './logo.svg';
import './App.css';
import { ClickButtonClass } from './components/ClickButtonClass';
import Hello from './components/Hello';
import { ClickButtonLifeCycle } from './components/ClickButtonLifeCycle';
import { UserForm } from './components/UserForm';
import { UserFormNew } from './components/UserFormNew';
import { ClickButtonHook } from './components/ClickButtonHook';
import Counter from './components/Counter';
import User from './components/User';
import UserData from './components/UserData';

function App() {
  return (
    <div className="App">
     <Hello name="Tom" age="33"/>
     <ClickButtonClass increment="1"/>
     <ClickButtonLifeCycle/>
     <UserForm name="" age="0"/>

     <UserFormNew/>

     <ClickButtonHook/>
     <Counter/>
     <User/>
     <UserData/>
    </div>
  );
}

export default App;

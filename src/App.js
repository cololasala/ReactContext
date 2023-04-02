import './App.css';
import { UserList } from './components/UserList';
import { UserState } from './context/UserState';
import { Profile } from './components/Profile';

function App() {
  return (
    <UserState> {/* Engrapamos los componentes con el componente que tiene el Provider */}
      <UserList/>
      <Profile/>
    </UserState>
  );
}

export default App;

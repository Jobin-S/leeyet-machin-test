import './App.css';
import ChangePassword from './components/ChangePassword/ChangePassword';
import DeleteProfile from './components/DeleteProfile/DeleteProfile';
import ImageUpload from './components/ImageUpload/ImageUpload';
import Login from './components/Login/Login';
import UpdateAddress from './components/UpdateAddress/UpdateAddress';
import UserRegisteration from './components/UserRegisteration/UserRegisteration';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserRegisteration />

        <Login />

        <ChangePassword />

        <UpdateAddress />
        
        <ImageUpload />

        <DeleteProfile />

        <div style={{marginTop:'5rem'}}>
          <p>By Jobin S</p>
        </div>
      </header>
    </div>
  );
}

export default App;

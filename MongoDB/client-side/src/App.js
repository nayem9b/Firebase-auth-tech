import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleAddUser = () => {
    console.log("hello");
  };
  return (
    <div className='App'>
      <form onSubmit={handleAddUser}>
        <input type='text' name='name' placeholder='Name' />
        <br />
        <input type='email' name='email' id='' placeholder='Email' />
        <br />
        <button type='submit'>Add User</button>
      </form>
    </div>
  );
}

export default App;

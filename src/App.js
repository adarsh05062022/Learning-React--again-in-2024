import logo from "./logo.svg";
import "./App.css";
import Gallery from "./components/Gallery";
import { Profile } from "./components/Gallery";



function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);

}

function App() {
  return <>
  <h1 style={{color:"pink"}}>Today  is :- {formatDate(new Date())}</h1>
  <Profile />
  </>;
}

export default App;

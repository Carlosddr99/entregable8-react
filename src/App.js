import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {setUser} from './slices/userInfoSlice'
import Header from './components/Header'
import Email from './components/Email'


function App() {

  const dispatch = useDispatch();

  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/users/1').
    then(response => response.json()).
    then(data => dispatch(setUser(data)))

  });

  return (
      <div>
      <Header />
      <Email />
      </div>
  );
}

export default App;

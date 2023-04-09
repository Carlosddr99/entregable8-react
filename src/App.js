import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import {setUser} from './slices/userInfoSlice'
import Header from './components/Header'


function App() {

  const dispatch = useDispatch();

  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/users/1').
    then(response => response.json()).
    then(data => dispatch(setUser(data)))

  });

  return (
  
      <Header />

  );
}

export default App;

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const request = () => {
    axios
      .post('http://localhost/programming-lab-project-restaurant/restaurant-backend/api/bep.php', {
        name: name,
        surname: surname,
      })
      .then((res) => console.log(res.data.name))
      .catch((err) => console.log(err));
  };

  const onclick = (e) => {
    e.preventDefault();
    request();
  };

  const onChangeName = (e) => {
    setName((prev) => prev + e.nativeEvent.data);
  };

  const onChangeSurname = (e) => {
    setSurname((prev) => prev + e.nativeEvent.data);
  };

  return (
    <>
      <form
        action={
          'https://localhost:80/programming-lab-project-restaurant/restaurant-backend/api/login.php'
        }
        method={'POST'}
      >
        <input type="text" name={'name'} id={'name'} onChange={(e) => onChangeName(e)} />
        <input type="text" name={'surname'} id={'surname'} onChange={(e) => onChangeSurname(e)} />
        <button type={'submit'} onClick={(e) => onclick(e)}>
          Login
        </button>
        <p>{name}</p>
      </form>
    </>
  );
}

export default App;

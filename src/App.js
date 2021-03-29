import React, { useState } from 'react';
import api from './utils/api/api';
import axios from 'axios';
import FormTextInput from './components/FormTextInput';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [message, setMessage] = useState('waiting for response');

  const request = () => {
    // axios
    //   .post('http://localhost/repos/restaurant/restaurant-backend/api/bep.php', {
    //     name: name,
    //     surname: surname,
    //   })
    //   .then((res) => console.log(res.data.name))
    //   .catch((err) => console.log(err));
    api
      .register(name, surname)
      .then((res) => {
        // setMessage(res);
      })
      .catch((err) => console.warn(err));
  };

  const onclick = (e) => {
    e.preventDefault();
    request();
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeSurname = (e) => {
    setSurname(e.target.value);
  };

  return (
    // <>
    //   <input
    //     type="text"
    //     name={'name'}
    //     id={'name'}
    //     onChange={(e) => onChangeName(e)}
    //     value={name}
    //     autoComplete={'off'}
    //   />
    //   <input
    //     type="text"
    //     name={'surname'}
    //     id={'surname'}
    //     onChange={(e) => onChangeSurname(e)}
    //     value={surname}
    //     autoComplete={'off'}
    //   />
    //   <FormTextInput name={'email'} id={'email'} />
    //   <button type={'submit'} onClick={(e) => onclick(e)}>
    //     Login
    //   </button>
    //   <p>{message}</p>
    // </>
    <>
      <RegisterScreen />
      <LoginScreen />
    </>
  );
}

export default App;

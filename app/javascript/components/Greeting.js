import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMessage } from '../redux/Greeting';

function Greeting() {
  const message = useSelector((state) => state.greetingReducer.message);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('/greeting')
      .then((response) => response.json())
      .then((result) => {
        const newMessage = result.message;
        dispatch(setMessage(newMessage));
      }).catch((error) => `Error: ${error}`);
  }, []);
  return (
    <h1>{message}</h1>
  );
}

export default Greeting;

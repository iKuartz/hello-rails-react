import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './Greeting';
import store from '../redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Greeting message="Hello" />} />
            </Routes>
          </BrowserRouter>
        </div>
      </React.StrictMode>
    </Provider>
  );
}

export default App;

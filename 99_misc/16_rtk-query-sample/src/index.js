import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { rest, setupWorker } from 'msw';

import { Provider } from 'react-redux';
import { store } from './store';

const mockServer = setupWorker(
  rest.post('/login', async (req, res, ctx) => {
    const user = await req.json();

    if (user.username === 'john') {
      return res(
        ctx.delay(2000),
        ctx.status(200),
        ctx.json({
          userName: 'john',
          token: 'token1234',
        })
      );
    }

    return res(
      ctx.delay(2000),
      ctx.status(401),
      ctx.json({
        message: 'unauthorized',
      })
    );
  })
);

mockServer.start();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

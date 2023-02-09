# useEffect, useCallback

#### User.js

```javascript
useEffect(
  () => {
    getUser(params.login);
    getUserRepos(params.login);
  },
  // POINT：useCallback, getUserをuseCallbackしないと無限ループしてしまう。
  [getUser, getUserRepos, params.login]
);
```

#### GithubContext.js

```javascript
// POINT：useCallback, useCallbackしないと、User.userEffectで無限ループしてしまう。
const getUser = useCallback(async (login) => {
  setLoading();

  const res = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (res.status === 404) {
    // POINT：window.location でリダイレクト
    window.location = '/not-found';
    return;
  }

  const data = await res.json();

  dispatch({
    type: 'GET_USER',
    payload: data,
  });
}, []);
```

# リダイレクト

#### GithubContext.js

```javascript
  const getUser = useCallback(async (login) => {
    setLoading();

    const res = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (res.status === 404) {
      // POINT：window.location でリダイレクト
      window.location = '/not-found';
      return;
    }
```

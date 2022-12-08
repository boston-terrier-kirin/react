import { useState, useEffect, createContext } from 'react';

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      // Back/Forwardの時のパスをGETする。
      setCurrentPath(window.location.pathname);
    };

    // Back/Forwardの時に、popstateイベントが発生する。
    window.addEventListener('popstate', handler);

    return () => {
      window.removeEventListener('popstate', handler);
    };
  }, []);

  const navigate = (to) => {
    // pushStateを使えば、ブラウザのアドレスは変わるが、リフレッシュは発生しない。
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ navigate, currentPath }}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationProvider };
export default NavigationContext;

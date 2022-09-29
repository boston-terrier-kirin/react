import './App.css';
import { useCallback, useState } from 'react';
import ChildArea from './components/ChildArea';

function App() {
  console.log('App');

  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (event) => {
    /**
     * ChildAreaをメモ化しているので、setTextしてもChildAreaは再レンダリングされない。
     */
    setText(event.target.value);
  };

  const onToggleChild = () => {
    setOpen((prev) => !prev);
  };

  /**
   * ChildAreaはメモ化して、propsが変わった場合のみ再レンダリングされるようにしている。
   * 　↓
   * onCloseをメモ化しない場合、onCloseは毎回新しくなるので、
   * 結局、ChildAreaが再レンダリングされてしまう。
   */
  // こっちが正解
  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  // こっちだとChildAreaが無駄にレンダリングされて、画面が止まってしまう。
  // const onClose = () => {
  //   setOpen(false);
  // };

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onToggleChild}>Display</button>
      <ChildArea open={open} onClose={onClose} />
    </div>
  );
}

export default App;

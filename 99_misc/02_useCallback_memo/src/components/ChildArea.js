import { memo } from 'react';

const style = {
  width: '100%',
  height: '100px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'royalblue',
  marginTop: '20px',
  color: 'white',
};

const ChildArea = (props) => {
  console.log('Child.Start');

  // ChildAreaが無駄にレンダリングされると、止まってしまうようにする。
  delay(3000);

  if (!props.open) {
    return <></>;
  }

  console.log('Child.End');

  return (
    <div style={style}>
      <p>Child</p>
      <button onClick={props.onClose}>Close</button>
    </div>
  );
};

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {}
}

/**
 * memoを使えば、propsが変わった場合のみレンダリングされるようになる。
 */
export default memo(ChildArea);

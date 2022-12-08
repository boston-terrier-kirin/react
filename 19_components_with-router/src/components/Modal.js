import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, actionBar, onClose }) => {
  useEffect(() => {
    // modalを開いている間はスクロールできないようにしたいので、bodyにoverflow-hiddenをつける。
    document.querySelector('body').classList.add('overflow-hidden');

    return () => {
      document.querySelector('body').classList.remove('overflow-hidden');
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>

      {/* overlayと同じ並びにあることがポイント。overlayの中にあると、イベントバブリングが効いて、背景白部分をクリックしてもonCloseが動いてしまう。 */}
      {/* absoluteにすると、画面をスクロールした状態でモーダルを開くとうまくいかないので、結局はfixedを使う。 */}
      <div className="fixed inset-40 p-5 bg-white rounded-md">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
};

export default Modal;

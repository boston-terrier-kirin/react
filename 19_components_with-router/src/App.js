import {
  BsFillGeoAltFill,
  BsFillPencilFill,
  BsFillSkipBackwardFill,
  BsArrowRightSquare,
} from 'react-icons/bs';
import Button from './Button';

const App = () => {
  return (
    <div className="p-2 flex gap-3">
      <div>
        <Button
          className="mb-1 block"
          primary
          onClick={() => console.log('Click')}
        >
          <BsFillGeoAltFill />
          登録
        </Button>
        <Button className="mb-1 block" primary rounded>
          <BsFillPencilFill />
          登録
        </Button>
        <Button className="mb-1 block" primary rounded outline>
          <BsFillSkipBackwardFill />
          登録
        </Button>
        <Button className="mb-1 block" primary outline>
          <BsArrowRightSquare />
          登録
        </Button>
      </div>

      <div>
        <Button className="mb-1 block" secondary>
          登録
        </Button>
        <Button className="mb-1 block" secondary rounded>
          登録
        </Button>
        <Button className="mb-1 block" secondary rounded outline>
          登録
        </Button>
        <Button className="mb-1 block" secondary outline>
          登録
        </Button>
      </div>

      <div>
        <Button className="mb-1 block" success>
          登録
        </Button>
        <Button className="mb-1 block" success rounded>
          登録
        </Button>
        <Button className="mb-1 block" success rounded outline>
          登録
        </Button>
        <Button className="mb-1 block" success outline>
          登録
        </Button>
      </div>

      <div>
        <Button className="mb-1 block" warning>
          登録
        </Button>
        <Button className="mb-1 block" warning rounded>
          登録
        </Button>
        <Button className="mb-1 block" warning rounded outline>
          登録
        </Button>
        <Button className="mb-1 block" warning outline>
          登録
        </Button>
      </div>

      <div>
        <Button className="mb-1 block" danger>
          登録
        </Button>
        <Button className="mb-1 block" danger rounded>
          登録
        </Button>
        <Button className="mb-1 block" danger rounded outline>
          登録
        </Button>
        <Button className="mb-1 block" danger outline>
          登録
        </Button>
      </div>
    </div>
  );
};

export default App;

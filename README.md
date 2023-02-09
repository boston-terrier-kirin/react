<!-- https://gist.github.com/bradtraversy/547a7bbf35ffba1561706e161a50b05a -->

# React Cheatsheet

## Contents

**[reduxjs/toolkit](#reduxjs/toolkit)**,
**[react-router-dom](#react-router-dom)**,
**[formik](#formik)**,
**[react-bootstrap-icons](#react-bootstrap-icons)**,
**[css-module](#css-module)**,
**[react-toastify](#react-toastify)**

## reduxjs/toolkit

- [11_redux-rtk](https://github.com/boston-terrier-kirin/react/tree/main/99_misc/11_redux-rtk)

## react-router-dom

- [99_misc/09_react-router-6](https://github.com/boston-terrier-kirin/react/tree/main/99_misc/09_react-router-6)
- [29_note-manager](https://github.com/boston-terrier-kirin/react/tree/main/29_note-manager/frontend)

## formik

- [99_misc/12_formik](https://github.com/boston-terrier-kirin/react/blob/main/99_misc/12_formik/src/components/FormThree.js)

```javascript
// フォームの初期値をセットする方法
const FormThree = () => {
  const [formData, setFormData] = useState({ firstname: '', lastname: '' });

  const formik = useFormik({
    initialValues: formData,
    validate: (values) => {
        ...
    },
    onSubmit: (values) => {
        ...
    },
    enableReinitialize: true, // enableReinitialize=trueにする。
  });

  useEffect(() => {
    // setValuesを使うよりも、ステートでやった方が賢い。
    // formik.setValues({
    //   firstname: 'kirin',
    //   lastname: 'matsumoto',
    // });

    setFormData({
      firstname: 'kirin',
      lastname: 'matsumoto',
    });
  }, []);
```

## react-bootstrap-icons

- [29_note-manager](https://github.com/boston-terrier-kirin/react/blob/main/29_note-manager/frontend/src/components/note-form/NoteForm.js)

```javascript
import { PencilFill, TrashFill } from 'react-bootstrap-icons';

const NoteForm = () => {
  ...

  const actionIcons = (
    <>
      <div className="col-1">
        {onClickEdit && (
          <PencilFill className={style.icon} onClick={onClickEdit} />
        )}
      </div>
      <div className="col-1">
        {onClickDelete && (
          <TrashFill className={style.icon} onClick={onClickDelete} />
        )}
      </div>
    </>
  );
}
```

## react-toastify

- [99_misc/13_react-toastify](https://github.com/boston-terrier-kirin/react/tree/main/99_misc/13_react-toastify)
- [28_daily-news](https://github.com/boston-terrier-kirin/react/blob/main/28_daily-news/frontend/src/routes/RootRoute.js)

```javascript
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RootRoute = () => {
  return (
    <div className="container p-3">
      <ToastContainer />
      <Outlet />
    </div>
  );
};

export default RootRoute;
```

```javascript
import { toast } from 'react-toastify';

export const showToast = (type, msg) => {
  if (type === 'SUCCESS') {
    toast.success(msg, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return;
  }

  if (type === 'ERROR') {
    toast.error(msg, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};
```

## css-module

- [29_note-manager](https://github.com/boston-terrier-kirin/react/tree/main/29_note-manager/frontend/src/components/logo)

コンポーネントごとにフォルダを作っておけば Logo.module.css にする必要はなく、style.module.css みたいに、module.css になっていれば OK。

#### components/logo/Logo.js

```javascript
import style from './style.module.css';

const Logo = ({ image, title, subtitle, onClick }) => {
  return (
    <div onClick={onClick}>
      <div className={style.container}>
        <img className={style.img} src={image} alt="logo" />
        <div className={style.logo_txt}>{title}</div>
      </div>
      <div className={style.subtitle}>{subtitle}</div>
    </div>
  );
};

export default Logo;
```

#### components/logo/style.module.css

```css
.logo_txt {
  font-size: 30px;
  font-weight: 700;
  color: #0d6efd;
}

.container {
  display: flex;
  width: fit-content;
  cursor: pointer;
}

.img {
  height: 40px;
  margin-right: 0.5rem;
}

.subtitle {
  color: #b8b8b8;
  word-wrap: break-word;
}
```

## uuid

## axios

## boostrap

## react-icons

## react-modal

## propTypes

## defaultProps

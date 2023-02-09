# today_i_learned

## supabase

- github でログイン
- .env に 2 つ設定する

```
REACT_APP_SUPABASE_URL=
REACT_APP_SUPABASE_API_KEY=
```

#### [connect](https://github.com/boston-terrier-kirin/react/blob/main/23_today-i-learned/today-i-learned/src/api/supabase.js)

```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
```

#### [select](https://github.com/boston-terrier-kirin/react/blob/main/23_today-i-learned/today-i-learned/src/App.js)

```javascript
let query = supabase
  .from('facts')
  .select('*')
  .order('created_at', { ascending: false });

if (currentCategory !== 'all') {
  query.eq('category', currentCategory);
}

const { data } = await query;
```

#### [insert](https://github.com/boston-terrier-kirin/react/blob/main/23_today-i-learned/today-i-learned/src/App.js)

```javascript
const { data } = await supabase.from('facts').insert([fact]).select('*');
```

## Loader

#### [Loader.js](https://github.com/boston-terrier-kirin/react/blob/main/23_today-i-learned/today-i-learned/src/components/Loader.js)

```javascript
import './Loader.css';

const Loader = () => {
  return <div className="loader"></div>;
};

export default Loader;
```

#### [Loader.css](https://github.com/boston-terrier-kirin/react/blob/main/23_today-i-learned/today-i-learned/src/components/Loader.css)

```css
.loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}

.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}

@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
```

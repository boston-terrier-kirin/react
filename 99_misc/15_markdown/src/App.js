import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

function App() {
  const [value, setValue] = useState('');

  console.log(value);

  return (
    <div className="container">
      <div className="row mt-3 mb-3">
        <h3>編集モード</h3>
        <MDEditor
          height={200}
          style={{ padding: '1rem' }}
          value={value}
          onChange={setValue}
        />
      </div>

      <div className="row">
        <h3>表示モード</h3>
        <MDEditor.Markdown
          style={{ padding: '1rem' }}
          source={value}
          linkTarget="_blank"
        />
      </div>
    </div>
  );
}

export default App;

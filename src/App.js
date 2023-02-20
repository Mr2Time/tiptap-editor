import { useState } from 'react';
import Preview from './Preview';
import Editor from './Editor';
import GlobalStyles from './GlobalStyles';

function App() {

  const [data, setData] = useState({
    title: "",
    tags: [],
    date: new Date().toLocaleDateString(),
  })

  const [content , setContent] = useState({
    content: "",
  })

  const [preview, setPreview] = useState(false)


  return (
    <div className="App">
      <GlobalStyles />
      <Editor setData={setData} data={data} setContent={setContent} setPreview={setPreview} preview={preview}/>
      {preview && <Preview data={data} content={content}/>}
    </div>
  );
}

export default App;

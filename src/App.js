import { useState } from 'react';
import Preview from './Preview';
import Editor from './Editor';

function App() {

  const [data, setData] = useState({
    title: "",
    tags: [],
  })

  const [content , setContent] = useState({
    content: "",
  })

  console.log(data)
  console.log(content)

  return (
    <div className="App">
      <Editor setData={setData} data={data} setContent={setContent}/>
      <Preview data={data} content={content}/>
    </div>
  );
}

export default App;

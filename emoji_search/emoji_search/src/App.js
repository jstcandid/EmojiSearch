import { useState } from 'react';
import './App.css';
import { Form } from './components/Form/Form';
import { EmojiContainer } from './components/Container/EmojiContainer';
import { emojies } from './emoji';

function App() {
  const [items, setItem] = useState(emojies);
  const [inputValue, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
    const resItems = emojies.filter(
      (el) =>
        compare(el.title, e.target.value) ||
        compare(el.keywords, e.target.value)
    );
    setItem(resItems);
  };

  const compare = (str1, str2) => {
    return str1.toLowerCase().includes(str2.toLowerCase());
  };

  return (
    <div className='App w-100'>
      <Form onChange={onChange} value={inputValue} />
      <EmojiContainer items={items} />
    </div>
  );
}

export default App;

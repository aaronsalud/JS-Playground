import React, {useState} from 'react';
import Route from './components/Route';
import Header from './components/Header';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
  {
    title: 'What is React?',
    content: 'React is a frontend js framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favourite js library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
];

const options = [
  {label: 'Red', value: 'red'},
  {label: 'Blue', value: 'blue'},
  {label: 'Green', value: 'green'},
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown options={options} onSelectedChange={setSelected} selected={selected} />
        <p style={{ color: selected.value }}>This text is {selected.value}!</p>
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
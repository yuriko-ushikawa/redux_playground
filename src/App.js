import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts.js'
import PostForm from './components/PostForm.js'

import store from './store.js'

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
     
      <PostForm />
      <hr />
      <Posts />
    </div>
    </Provider>
  );
}

export default App;

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Todolist from './components/todolist';
import Fetch_Data from './components/fetchdata';

const  App = () => {
  return (
    <BrowserRouter basename='/todo_list'>
    <Routes>
      <Route  exec path="/" element={<Todolist />} />
      <Route path="/todo_list/fetch_data" element={<Fetch_Data />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

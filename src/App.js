import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Todolist from './components/todolist';
import Fetch_Data from './components/fetchdata';

const  App = () => {
  return (
    <BrowserRouter >
    <Routes>
      <Route exec path="/todo_list" element={<Todolist />} />
      <Route path="/fetch_data" element={<Fetch_Data />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

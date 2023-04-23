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
      <Route exec path="/todo_list" exact element={<Todolist />} />
      <Route path="/todo_list/fetch_data" exact  element={<Fetch_Data />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

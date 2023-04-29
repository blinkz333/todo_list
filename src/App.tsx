import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Fetch_Data from './component/fetchdata';
import Todolist from './component/todolist';


const  App = () => {
  return (
    <BrowserRouter >
    <Routes>
      <Route path="/todo_list"  element={<Todolist />} />
      <Route path="/todo_list/fetch_data" element={<Fetch_Data />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

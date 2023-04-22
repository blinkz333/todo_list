import {BrowserRouter,
  Routes,
  Route} from 'react-router-dom';
import Todolist from './components/todolist';

const  App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/todo_list" element={<Todolist />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

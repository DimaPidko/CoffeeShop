import MainPage from './components/UI/main-page/MainPage';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<MainPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;

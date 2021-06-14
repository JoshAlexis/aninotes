import PixivList from './components/Pixiv/PixivList';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import NewPixiv from './components/Pixiv/NewPixiv';
import EditPixiv from './components/Pixiv/EditPixiv';

function App() {
  return (
    <>
      <Router>
        <div className="bg-indigo-500 w-full px-4 py-3">
          <Link to="/" className="text-gray-50 font-bold text-2xl">Aninotes</Link>
        </div>
        <Switch>
          <Route exact path="/" component={PixivList} />
          <Route exact path="/add" component={NewPixiv} />
          <Route path="/edit/:id" component={EditPixiv} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

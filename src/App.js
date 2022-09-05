import './App.css';
import Nav from './component/Nav'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import About from './pages/About';
import AllPosts from './pages/AllPosts';
import SinglePost from './pages/SinglePost';

function App() {
  return (
    <Router>
      <div className="App">
        <h1><Link to='/' >Simple Blog App with External API</Link></h1>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/allPosts' exact component={AllPosts} />
          <Route path='/allPosts/:id' component={SinglePost} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return <h1>Home Page</h1>
}

export default App;

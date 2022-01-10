import './App.css';
import Dashboard from './components';
import Loginn from './components/user-auth/login';
import SignUp from './components/user-auth/signup';
import Layout from './components/Layout';
import Main from './components/Dashboard/main';

function App() {
  return (
    <Layout>
      <Main/>
    </Layout>
  );
}

export default App;

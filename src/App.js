import './App.css';
import Footer from './components/Footer';
import { UserProvider } from './context/UserContext';
import SiteRoutes from './SiteRoutes';

function App() {
  return (
    <div>
      <UserProvider>
        <SiteRoutes />
      </UserProvider>
      <Footer />
    </div>
  );
}

export default App;

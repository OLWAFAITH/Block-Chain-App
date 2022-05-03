import { Navbar, Welcome, Footer, Services,Trancactions } from './components';

const App = () => {
  return (
   <div className='min-h-screen'>
    <div className='gradient-bg-welcome'>
      <Navbar /> 
      <Welcome /> 
    </div>
    <Services />
    <Trancactions />
    <Footer />
    </div>
  );
}

export default App

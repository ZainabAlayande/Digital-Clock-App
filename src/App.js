import './App.css';
import Clock from './pages/components/Clock';
import Spinner from './pages/components/Spinner';
import { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
   
    if (isLoading) {
      return <Spinner />;
    } else {
      return (
        <div>
          <Clock />
        </div>
      );  
     
}
}

export default App;

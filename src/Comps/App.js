import '../Styles/App.css';

import Desc from './Desc'
import Portal from './Portal'
import Contact from './Contact'


function App() {
  return (
    <section className = "wrapper">
        <Portal />
        <Desc />
        <Contact />        
    </section>
  );
}

export default App;

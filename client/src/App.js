import 'bootstrap/dist/css/bootstrap.css';
import Header from './header/Header.js';
import Nav from './navbar/Nav';
import News from './News/News.js';

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Nav/>
                <News/>
            </main>
        </div>
    );
}

export default App;

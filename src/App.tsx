import { Features } from './components/Features';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar
                name="Tiscord"
                elements={[
                    { name: 'Documentation', url: 'https://docs.tiscord.me/' },
                    { name: 'Github', url: 'https://github.com/tiscordlib/tiscord' }
                ]}
            ></Navbar>
            <Header description="A fast, object-oriented Discord API wrapper." />
            <section className="bottom">
                <h1> Why use Tiscord? </h1>
                <Features />
            </section>
        </div>
    );
}

export default App;

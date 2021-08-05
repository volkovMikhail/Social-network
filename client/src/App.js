import 'bootstrap/dist/css/bootstrap.css';

function App() {
    const link = (link)=>{
        window.location.href = link;
    }

    return (
        <div className="App">
            <header>
              <div className="headerContent">
                <h4 onClick={()=>link('/')}>volkov.network</h4>
              </div>
            </header>
            <main>
                <nav>
                    <div className="navItem" onClick={()=>link('/')}><span>Profile</span></div>
                    <div className="navItem" onClick={()=>link('/')}><span>News</span></div>
                    <div className="navItem" onClick={()=>link('/')}><span>Messages</span></div>
                    <div className="navItem" onClick={()=>link('/')}><span>Music</span></div>
                    <div className="navItem" onClick={()=>link('/')}><span>Photos</span></div>
                    <div className="navItem" onClick={()=>link('/')}><span>Videos</span></div>
                    <div className="navItem" onClick={()=>link('/')}><span>Games</span></div>
                </nav>
                <div className="content">
                    <div className="post">
                        <div className="textContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt obcaecati libero expedita laborum quia! Obcaecati expedita nesciunt at enim omnis molestiae, reprehenderit architecto quisquam molestias magni, amet alias ea dolorem!</div>
                        <div className="imageContent" style={{backgroundImage:'url(/images/test1.jpg)'}}></div>
                    </div>
                    <div className="post">
                        <div className="textContent">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ex dolores totam sequi enim eius, quisquam repudiandae eos, dolorem repellendus, amet mollitia ad nesciunt. Blanditiis molestiae vero harum labore rem.</div>
                        <div className="imageContent" style={{backgroundImage:'url(/images/test3.jpg)'}}></div>
                    </div>
                    <div className="post">
                        <div className="textContent">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ex dolores totam sequi enim eius, quisquam repudiandae eos, dolorem repellendus, amet mollitia ad nesciunt. Blanditiis molestiae vero harum labore rem.</div>
                        <div className="imageContent" style={{backgroundImage:'url(/images/test4.jpg)'}}></div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;

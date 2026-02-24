import './App.css';

function App() {
    return (
        <div className="app">
            <header className="hero">
                <h1>Minions Bundle: Crm</h1>
                <p className="tagline">CRM pipeline bundle — leads, deals, interactions, sequences</p>
                <div className="cta-buttons">
                    <a href="https://docs.minions.wtf" className="btn btn-primary">
                        Documentation
                    </a>
                    <a href="https://github.com/mxn2020/minions-bundles-crm" className="btn btn-secondary">
                        GitHub
                    </a>
                </div>
            </header>

            <main className="content">
                <section className="features">
                    <div className="feature-card">
                        <h3>TypeScript SDK</h3>
                        <code>npm install @mxn2020/minions-bundles-crm-core</code>
                    </div>
                    <div className="feature-card">
                        <h3>Python SDK</h3>
                        <code>pip install minions-bundles-crm</code>
                    </div>
                    <div className="feature-card">
                        <h3>CLI Tool</h3>
                        <code>npm install -g @mxn2020/minions-bundles-crm-cli</code>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>
                    Built on the{' '}
                    <a href="https://github.com/mxn2020/minions">Minions SDK</a>
                </p>
            </footer>
        </div>
    );
}

export default App;

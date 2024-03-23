import ReactDOM from 'react-dom/client';
import './index.css';
import Provider from '../app/provides';

function App() {
    return (
        <>
        У тебя открылась базовая страница index.tsx
        </>
    );
}

export default App;

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);

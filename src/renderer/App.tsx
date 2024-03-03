import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

function Hello() {
  return (
    <div>
      <div>
        <div className="grid grid-cols-10 gap-2">
          <div className="bg-sky-50 aspect-square"></div>
          <div className="bg-sky-100 aspect-square"></div>
          <div className="bg-sky-200 aspect-square"></div>
          <div className="bg-sky-300 aspect-square"></div>
          <div className="bg-sky-400 aspect-square"></div>
          <div className="bg-sky-500 aspect-square"></div>
          <div className="bg-sky-600 aspect-square"></div>
          <div className="bg-sky-700 aspect-square"></div>
          <div className="bg-sky-800 aspect-square"></div>
          <div className="bg-sky-900 aspect-square"></div>
        </div>
      </div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <h1>Hello,I'm react</h1>
    )
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
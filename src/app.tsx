import * as React from 'react';
import { createRoot } from 'react-dom/client';

function render() {
    const root = createRoot(document.getElementById("demo-container"));
    root.render(<h2>WHAT CAN I DO FOR YOU!</h2>)
}

render();

import "../index.css"
import {createRoot} from 'react-dom/client'
import {StrictMode} from 'react'
import Offer from "../components/offers/offer.tsx";
export const root = document.createElement('div' );
root.id = 'main-container';
root.textContent = 'This is a popup!';
root.style.position = 'fixed';
root.style.height = 'auto';
root.style.overflow = 'hidden';
root.style.width = 'auto';
root.style.top = '20px';
root.style.left = '35%';
root.style.padding = '20px';
// root.style.backgroundColor = 'rgba(250, 249, 245)';
root.style.color = 'black';
root.style.borderRadius = '10px';
// root.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
root.style.zIndex = '1000';
document.body.appendChild(root);
setTimeout(() => {
    root.style.display = 'none';
}, 10000);
createRoot(root).render(
    <StrictMode>
<Offer/>
    </StrictMode>
)

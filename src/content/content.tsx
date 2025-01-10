import "../index.css";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Offer from "../components/offers/offer";

let root: HTMLDivElement | null = null;

 function showPopup() {
    if (!root) {
        root = document.createElement("div");
        root.id = "main-container";
        root.style.position = "fixed";
        root.style.height = "auto";
        root.style.overflow = "hidden";
        root.style.width = "auto";
        root.style.top = "2px";
        root.style.left = "63%";
        root.style.color = "black";
        root.style.borderRadius = "10px";
        root.style.zIndex = "1000";
        document.body.appendChild(root);
        createRoot(root).render(
            <StrictMode>
                <Offer />
            </StrictMode>
        );
    }
}

export function closePopup() {
    if (root && root.parentNode) {
        root.parentNode.removeChild(root);
        root = null;
    }
}

const pageTitle = document.title.toLowerCase();
if (pageTitle.includes("checkout")) {
    showPopup();
}

export function handleButtonClick() {
    chrome.runtime.sendMessage({ action: 'handleButtonClick' });
}
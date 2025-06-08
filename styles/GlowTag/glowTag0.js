// glowTag0.js
(function() {
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

// Create a style element and append it to the head
var style = document.createElement('style');
document.head.appendChild(style);
// Define CSS for glowing effect and fade animation
style.textContent = `
    glow-tag0 {
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
    }
    .glow0 {
        color: transparent; /* Make the text transparent */
        text-shadow: 
            0 0 5px rgba(255, 255, 255, 0.8), /* White glow */
            0 0 10px rgba(255, 255, 255, 0.6), 
            0 0 15px rgba(255, 255, 255, 0.4);
        background: url('https://raw.githubusercontent.com/thaumaturgists/SDCM/refs/heads/main/images/svg/wavr%C3%AD.svg') no-repeat; /* Use external SVG */
        background-size: cover;
        filter: blur(1.5px); /* Slight blur to obscure text */
        transition: filter 1s ease; /* Smooth transition for blur */
    }

    .glow0::before {
        content: ""; /* Actual text for human readability */
        color: #000; /* Visible text color */
        left: 0;
        top: 0;
        z-index: 1;
        filter: blur(0.5px); /* Additional blur for obscurity */
        transition: filter 1s ease; /* Smooth transition for blur */
    }

    .fade-glow0 {
        color: #000313;
        animation: fade 10s infinite; /* Use fade animation */
    }

    @keyframes fade {
        0%, 100% {
            opacity: 0.5;
            filter: blur(1.5px); /* Initial blur */
        }
        50% {
            opacity: 1;
            filter: blur(0.5px); /* Reduced blur for clarity */
            transition: filter 1s ease;
        }
    }
`;

// Define the custom element
var GlowTag = /** @class */ (function (_super) {
    __extends(GlowTag, _super);
    function GlowTag() {
        return _super.call(this) || this;
    }
    return GlowTag;
}(HTMLElement));
customElements.define('glow-tag', GlowTag);
// Select all elements to apply the glow effect
var elementsToGlow = [
    'glow-tag p',
    'glow-tag h1',
    'glow-tag h2',
    'glow-tag h3',
    'glow-tag h4',
    'glow-tag h5',
    'glow-tag h6'
]; // Add or remove tags as needed
// Function to add the glow and fade class to selected elements
function applyGlow() {
    elementsToGlow.forEach(function (tag) {
        document.querySelectorAll(tag).forEach(function (element) {
            element.classList.add('glow', 'fade-glow'); // Add both classes
        });
    });
}
// Apply the glow effect once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', applyGlow);
})();

```js
// glowTag.template.js
(function() {
// `Var` keeps it from populating the global veriables
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
style.textContent = "\n        glow-tag {\n            background-color: transparent;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            margin: 0;\n        }\n        .glow {\n            color: transparent; /* Make the text transparent */\n            text-shadow: \n                0 0 5px rgba(255, 255, 255, 0.8), /* White glow */\n                0 0 10px rgba(255, 255, 255, 0.6), \n                0 0 15px rgba(255, 255, 255, 0.4);\n            background: url('./wavri.svg') no-repeat; /* Use external SVG */\n            background-size: cover;\n            filter: blur(1.5px); /* Slight blur to obscure text */\n        }\n\n        .glow::before {\n            content: \"\"; /* Actual text for human readability */\n            color: #000; /* Visible text color */\n            left: 0;\n            top: 0;\n            z-index: 1;\n            filter: blur(0.5px); /* Additional blur for obscurity */\n        }\n\n        .fade-glow {\n            color: #1225;\n            animation: fade 10s infinite; /* Use fade animation */\n        }\n\n        @keyframes fade {\n            0%, 100% {\n                opacity: 0.5;\n            }\n            50% {\n                opacity: 1;\n            }\n        }\n    ";
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
```

The provided JavaScript code defines a custom HTML element called `<glow-tag>` that applies a glowing text effect to specific child elements (like paragraphs and headings) within it. Below is a detailed breakdown of the code:

### 1. Variable Declaration and `__extends` Function

```javascript
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
```

- **Purpose**: This code defines a utility function `__extends` that allows for inheritance in JavaScript. It checks if the `Object.setPrototypeOf` method is available and uses it to set the prototype chain between classes. This is particularly useful for creating classes that extend other classes in a way that is compatible with older JavaScript environments.

### 2. Creating a Style Element

```javascript
var style = document.createElement('style');
document.head.appendChild(style);
```

- **Purpose**: This creates a new `<style>` element and appends it to the document's `<head>`, allowing for dynamic CSS styling.

### 3. Defining CSS for the Glow Effect

```javascript
style.textContent = `
    glow-tag {
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
    }
    .glow {
        color: transparent; /* Make the text transparent */
        text-shadow: 
            0 0 5px rgba(255, 255, 255, 0.8), /* White glow */
            0 0 10px rgba(255, 255, 255, 0.6), 
            0 0 15px rgba(255, 255, 255, 0.4);
        background: url('./wavri.svg') no-repeat; /* Use external SVG */
        background-size: cover;
        filter: blur(1.5px); /* Slight blur to obscure text */
    }

    .glow::before {
        content: ""; /* Actual text for human readability */
        color: #000; /* Visible text color */
        left: 0;
        top: 0;
        z-index: 1;
        filter: blur(0.5px); /* Additional blur for obscurity */
    }

    .fade-glow {
        color: #1225;
        animation: fade 10s infinite; /* Use fade animation */
    }

    @keyframes fade {
        0%, 100% {
            opacity: 0.5;
        }
        50% {
            opacity: 1;
        }
    }
`;
```

- **Purpose**: This block defines the CSS styles for the `<glow-tag>` element and its child elements. Key points include:
  - The `glow-tag` element is styled to be a flex container, centering its content.
  - The `.glow` class makes text transparent and applies a glowing effect using `text-shadow`.
  - The `.glow::before` pseudo-element is used to display the actual text in a readable format while keeping the main text obscured.
  - The `.fade-glow` class applies a fading animation to the text.

### 4. Defining the Custom Element

```javascript
var GlowTag = /** @class */ (function (_super) {
    __extends(GlowTag, _super);
    function GlowTag() {
        return _super.call(this) || this;
    }
    return GlowTag;
}(HTMLElement));
customElements.define('glow-tag', GlowTag);
```

- **Purpose**: This code defines the `GlowTag` class, which extends the built-in `HTMLElement`. The `customElements.define` method registers the `<glow-tag>` element, allowing it to be used in HTML.

### 5. Selecting Elements to Apply the Glow Effect

```javascript
var elementsToGlow = [
    'glow-tag p',
    'glow-tag h1',
    'glow-tag h2',
    'glow-tag h3',
    'glow-tag h4',
    'glow-tag h5',
    'glow-tag h6'
]; // Add or remove tags as needed
```

- **Purpose**: This array, `elementsToGlow`, specifies the child elements within the `<glow-tag>` that will receive the glowing effect. It includes various heading tags (`h1` to `h6`) and paragraphs (`p`). You can modify this array to include or exclude specific tags as needed.

### 6. Function to Apply the Glow Effect

```javascript
function applyGlow() {
    elementsToGlow.forEach(function (tag) {
        document.querySelectorAll(tag).forEach(function (element) {
            element.classList.add('glow', 'fade-glow'); // Add both classes
        });
    });
}
```

- **Purpose**: The `applyGlow` function iterates over each tag specified in the `elementsToGlow` array. For each tag, it selects all matching elements in the document and adds the `glow` and `fade-glow` classes to them. This effectively applies the defined CSS styles and animations to those elements, creating the glowing and fading effect.

### 7. Applying the Glow Effect on DOM Content Loaded

```javascript
document.addEventListener('DOMContentLoaded', applyGlow);
```

- **Purpose**: This line sets up an event listener that triggers the `applyGlow` function once the DOM content is fully loaded. This ensures that all elements are available in the document before attempting to apply the glow effect, preventing any potential errors from trying to select elements that do not yet exist.

### Summary of Functionality

- **Custom Element**: The code defines a custom HTML element `<glow-tag>` that can be used in HTML documents.
- **Styling**: It dynamically creates and applies CSS styles for a glowing text effect, including a fade animation.
- **Element Selection**: It targets specific child elements (like headings and paragraphs) within the `<glow-tag>` to apply the glow effect.
- **Event Handling**: The glow effect is applied once the DOM is fully loaded, ensuring that all elements are ready for manipulation.

### Example Usage

To use the `<glow-tag>` element in an HTML document, you would write something like this:

```html
<glow-tag>
    <h1>Glowing Header</h1>
    <p>This is a glowing paragraph.</p>
</glow-tag>
```

### Conclusion

This code snippet is a creative way to enhance the visual appeal of text elements on a webpage by using custom elements, CSS animations, and JavaScript. The glowing effect can be particularly useful for drawing attention to specific content, making it stand out in a visually engaging manner.

# (IIFE)

The addition of the immediately invoked function expression (IIFE) in the form of `(function() { })();` serves a specific purpose in JavaScript programming. Here’s a detailed explanation of what it does and why it might be used:

### What is an IIFE?

An **Immediately Invoked Function Expression (IIFE)** is a function that is defined and executed immediately after its creation. The syntax typically looks like this:

```javascript
(function() {
    // Code here runs immediately
})();
```

### Purpose of Using an IIFE

1. **Encapsulation**: 
   - An IIFE creates a new scope, which helps to encapsulate variables and functions. This means that any variables declared within the IIFE are not accessible from the outside, preventing potential naming conflicts with other variables in the global scope.
   - For example, if you declare a variable inside the IIFE, it won't interfere with variables of the same name outside of it.

2. **Avoiding Global Pollution**:
   - By wrapping code in an IIFE, you can avoid adding variables to the global scope. This is particularly important in larger applications or when integrating multiple scripts, as it helps to prevent conflicts between different scripts.

3. **Initialization**:
   - IIFEs are often used for initialization purposes. You can execute setup code that needs to run once when the script is loaded without leaving any lingering variables in the global scope.

4. **Module Pattern**:
   - IIFEs can be used to create modules in JavaScript. By returning an object from the IIFE, you can expose certain methods or properties while keeping others private.

### Example of an IIFE

Here’s a simple example to illustrate the concept:

```javascript
var myModule = (function() {
    var privateVariable = "I am private";

    function privateFunction() {
        console.log(privateVariable);
    }

    return {
        publicMethod: function() {
            privateFunction(); // Accessing private function
        }
    };
})();

myModule.publicMethod(); // Outputs: "I am private"
console.log(myModule.privateVariable); // Undefined, as it's private
```

### Conclusion

In the context of your code, wrapping the entire script in an IIFE would help to encapsulate all the variables and functions defined within it, preventing them from polluting the global namespace. This is a common practice in JavaScript to maintain clean and modular code, especially in larger applications or when integrating multiple scripts.

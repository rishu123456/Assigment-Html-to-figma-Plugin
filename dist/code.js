"use strict";
figma.showUI(__html__, { width: 400, height: 300 });
figma.ui.onmessage = (msg) => {
    if (msg.type === 'convert-html') {
        const htmlContent = msg.html;
        const fragment = document.createElement('div');
        fragment.innerHTML = htmlContent;
        const elements = Array.from(fragment.children);
        elements.forEach((element) => {
            if (element.tagName === 'DIV') {
                // Create a rectangle for div
                const rect = figma.createRectangle();
                rect.resize(200, 100); // Default size, modify based on content
                rect.x = 100;
                rect.y = 100;
                figma.currentPage.appendChild(rect);
            }
            else if (element.tagName === 'P') {
                // Create a text box for paragraph
                const text = figma.createText();
                text.characters = element.innerText;
                text.x = 100;
                text.y = 100;
                figma.currentPage.appendChild(text);
            }
            // Add more tag handling as needed
        });
        figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);
    }
};

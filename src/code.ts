type Message = {
    type: "convert-html";  // Type of the message
    html: string;          // The HTML content to be converted
  };
figma.showUI(__html__, { width: 400, height: 300 });
figma.ui.onmessage = (message: Message) => {
  if (message.type === "convert-html") {
    const frame = figma.createFrame();
    frame.resize(400, 300);
    frame.name = "Converted HTML";
    frame.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
    
    const text = figma.createText();
    text.characters = message.html;
    frame.appendChild(text);
    
    figma.currentPage.appendChild(frame);
    figma.closePlugin("HTML Converted to Figma Design");
  }
};
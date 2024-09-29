function runCode() {
    const htmlCode = document.getElementById('htmlCode').value;
    const cssCode = document.getElementById('cssCode').value;
    const jsCode = document.getElementById('jsCode').value;

    const outputFrame = document.getElementById('output');
    const outputDocument = outputFrame.contentDocument || outputFrame.contentWindow.document;

    outputDocument.open();
    outputDocument.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>
                ${jsCode}
            <\/script>
        </body>
        </html>
    `);
    outputDocument.close();
}
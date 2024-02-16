function copyPrompt(id) {
    // Get the text content of the specified code block
    var codeBlock = document.getElementById(id);
    var codeText = codeBlock.textContent || codeBlock.innerText;

    // Create a textarea element to hold the code text temporarily
    var textarea = document.createElement('textarea');
    textarea.value = codeText;
    document.body.appendChild(textarea);

    // Select the text within the textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text
    document.execCommand('copy');

    // Remove the textarea
    document.body.removeChild(textarea);

    // Notify the user that the code has been copied
    alert('Code copied to clipboard!');
}

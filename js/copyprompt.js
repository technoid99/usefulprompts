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

    // Show "- Copied!" next to the button
    var button = document.querySelector('button[onclick="copyPrompt(\'' + id + '\')"]');
    button.textContent = "Copied!";

    // Reset the button text after a few seconds
    setTimeout(function() {
        button.textContent = "Copy Prompt";
    }, 2000); // 2000 milliseconds = 2 seconds

}

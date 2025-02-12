function slide(direction) {
    let loginContainer = document.getElementById('login-container');
    let inputContainer = document.getElementById('input-container');
    
    if (direction === 'left') {
        inputContainer.className = 'input-container slide-left';
    } else if (direction === 'right') {
        inputContainer.className = 'input-container slide-right';
    }
}
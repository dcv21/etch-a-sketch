const main = () => {
    generateDivs(16);

    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        const size = parseInt(prompt('Enter a number'));
        if (!size) return;
        generateDivs(size);
    });
}

const generateDivs = (size) => {
    const container = document.querySelector('.container');
    const div = `<div>${`<div class="child"></div>`.repeat(size)}</div>`.repeat(size);
    container.innerHTML = div;

    const children = document.querySelectorAll('.child');
    children.forEach(child => {
        child.style.height = 100 / size + "vw";
        child.style.width = 100 / size + "vw";
        child.addEventListener('mouseenter', () => {
            child.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        });
    });
}

window.addEventListener('DOMContentLoaded', main);
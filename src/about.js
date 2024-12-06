const createAboutTab = () => {
    const content = document.querySelector('#content');
    const heading = document.createElement('h1');
    const para = document.createElement('p');
    const img = document.createElement('img');
    img.src = '../src/sandwich.png';
    img.style.height = '200px';
    para.textContent = "About us,you dont wanna miss out"
    para.style.color = 'blue';
    heading.textContent ='ABOUT US!!!'
    // //     // div.appendChild(player2)
        // // div.appendChild(resultDisplay)

    // const content = document.getElementById('content');
    content.appendChild(heading)
    content.appendChild(para)
    content.appendChild(img)
}

export { createAboutTab }

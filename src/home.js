const createHomeTab = () => {
    const content = document.querySelector('#content');
    const para = document.createElement('p');
    const img = document.createElement('img');
    img.src = '../src/sandwich.png';
    img.style.height = '200px';
    para.textContent = "Maryann restaurant is here to serve you quality homemade and intercontinental meals"
    
    // //     // div.appendChild(player2)
        // // div.appendChild(resultDisplay)

    // const content = document.getElementById('content');
    content.appendChild(para)
    content.appendChild(img)
}

export { createHomeTab }
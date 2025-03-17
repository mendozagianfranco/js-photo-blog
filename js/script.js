const gridElement = document.getElementById('grid');

const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';

axios.get(endpoint)
    .then(response => {
        const data = response.data;
        renderHTML(gridElement, data);
    });


function renderHTML(parent, elements) {
    let item = '';


    for (let i = 0; i < elements.length; i++) {
        let currentPhoto = elements[i];
        item += makeStructureCardHTML(currentPhoto);
    }
    parent.innerHTML = item;
}

function makeStructureCardHTML(photo) {
    return `<div class="card">
                <div class="card-top">
                    <img src="img/pin.svg" alt="Pin" class="img-pin" />
                    <img
                        src=${photo.url}
                        alt=${photo.title} />
                </div>
                <div class="card-bottom">
                <p class="card-date">${photo.date}</p>
                    <h2 class="card-info">
                    ${photo.title}
                    </h2>
                </div>
            </div>`;
}
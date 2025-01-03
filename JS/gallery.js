const images = [
    {
        preview:'JS/sleepy preview.jpg',
        original: 'JS/sleepy.jpg',
        description: 'this car is very eepy',
    },
    
    {
        preview:'JS/angry preview.jpg',
        original: 'JS/angry.jpg',
        description: 'this car is very angry',
    },

    {
        preview:'JS/distinguished preview.jpg',
        original: 'JS/distinguished.jpg',
        description: 'this car is very distinguished',
    },
    

]

    const gallery = document.querySelector('.gallery');

const galleryHtml = images.map(({ preview, original, description }) => {
    return `
        <li class="gallery-item">
            <a href="${original}" class="gallery-link">
                <img src="${preview}" alt="${description}" class="gallery-image">
            </a>
        </li>
    `;
}).join('');

gallery.innerHTML = galleryHtml;

gallery.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const originalImageSrc = event.target.closest('a').href;

    const instance = basicLightbox.create(`
        <img src="${originalImageSrc}" alt="${event.target.alt}">
    `);

    instance.show();
});
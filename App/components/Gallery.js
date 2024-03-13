class Gallery {
    constructor() {
        this.images = []; 
        this.imageBatchSize = 10; 
        this.loadedImagesCount = 0; 
        this.loadMoreButton = null; 
    }

    // Método para cargar más imágenes
    loadMoreImages() {
        // Calcula el índice de la próxima imagen a cargar
        const startIndex = this.loadedImagesCount;
        const endIndex = Math.min(startIndex + this.imageBatchSize, 25); 

        // Simulación de carga de imágenes: Agrega más imágenes al arreglo
        for (let i = startIndex + 1; i <= endIndex; i++) {
            const imageUrl = `App/assets/imagen${i}.jpg`;
            // Verifica si la imagen ya existe en la lista
            if (!this.images.includes(imageUrl)) {
                this.images.push(imageUrl);
            }
        }
        this.loadedImagesCount = endIndex; 

        // Renderiza la galería nuevamente con las imágenes cargadas
        this.render();
    }

    render() {
        const appContainer = document.getElementById('app');
        if (!appContainer) {
            console.error("No se pudo encontrar el contenedor 'app'");
            return;
        }

        const galleryElement = document.createElement('div');
        galleryElement.classList.add('gallery');

        this.images.forEach((imageSrc, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = imageSrc;
            imgElement.alt = `Imagen ${index + 1}`;
            imgElement.classList.add('gallery-image');
            imgElement.addEventListener('click', () => this.showFullImage(imageSrc));
            galleryElement.appendChild(imgElement);
        });

        // Agrega el botón "Cargar más"
        if (!this.loadMoreButton) {
            this.loadMoreButton = document.createElement('button');
            this.loadMoreButton.textContent = 'Cargar más';
            this.loadMoreButton.id = 'loadMoreBtn';
            this.loadMoreButton.addEventListener('click', () => this.loadMoreImages());
            appContainer.appendChild(this.loadMoreButton);
        }

        appContainer.appendChild(galleryElement);
    }

    showFullImage(imageSrc) {
        // Crea un elemento de imagen para mostrar en pantalla completa
        const fullImage = document.createElement('img');
        fullImage.src = imageSrc;
        fullImage.classList.add('full-screen-image');

        // Crea un contenedor para la imagen en pantalla completa
        const fullImageContainer = document.createElement('div');
        fullImageContainer.classList.add('full-image-container');

        // Agrega la imagen al contenedor
        fullImageContainer.appendChild(fullImage);

        // Agrega el contenedor al cuerpo del documento
        document.body.appendChild(fullImageContainer);

        // Cierra el modal al hacer clic fuera de la imagen
        fullImageContainer.addEventListener('click', () => {
            // Remueve el contenedor de la imagen en pantalla completa
            document.body.removeChild(fullImageContainer);
        });
    }
}

export default Gallery;















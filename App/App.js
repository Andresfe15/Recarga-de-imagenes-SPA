import Gallery from './components/Gallery';

class App {
    constructor() {
        this.gallery = new Gallery([
            'assets/imagen1.jpg',
            'assets/imagen2.jpg',
            'assets/imagen3.jpg',
            'assets/imagen4.jpg',
            'assets/imagen5.jpg',
            'assets/imagen6.jpg',
            'assets/imagen7.jpg',
            'assets/imagen8.jpg',
            'assets/imagen9.jpg',
            'assets/imagen10.jpg',
            'assets/imagen11.jpg',
            'assets/imagen12.jpg',
            'assets/imagen13.jpg',
            'assets/imagen14.jpg',
            'assets/imagen15.jpg',
            'assets/imagen16.jpg',
            'assets/imagen17.jpg',
            'assets/imagen18.jpg',
            'assets/imagen19.jpg',
            'assets/imagen20.jpg',
            'assets/imagen21.jpg',
            'assets/imagen22.jpg',
            'assets/imagen23.jpg',
            'assets/imagen24.jpg',
            'assets/imagen25.jpg',

            // Agrega más imágenes aquí si lo deseas
        ]);
        this.container = document.getElementById('app');
    }

    start() {
        if (!this.container) {
            console.error("No se pudo encontrar el contenedor 'app'");
            return;
        }
        this.gallery.render(this.container);
    }
}

export default App;




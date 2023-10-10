new Vue({
    el: '#app',
    data: {
        currentImageIndex: 0,
        images: [
            'assets/images/png/banners/1.png',
            'assets/images/png/banners/2.png',
            'assets/images/png/banners/3.png'
        ]
    },
    computed: {
        currentImage() {
            return this.images[this.currentImageIndex];
        }
    },
    mounted() {
        this.startSlideshow();
    },
    beforeDestroy() {
        clearInterval(this.timer);
    },
    methods: {
        startSlideshow() {
            this.timer = setInterval(() => {
                this.currentImageIndex =
                    (this.currentImageIndex + 1) % this.images.length;
            }, 6000); // меняем картинку каждые 10 секунды
        }
    }
});
// Photo library
const galleryImages = [
    '/assets/images/gallery/photo1.JPEG',
    '/assets/images/gallery/photo2.JPEG',
    '/assets/images/gallery/photo3.JPEG',
    '/assets/images/gallery/photo4.JPEG',
    '/assets/images/gallery/photo5.JPEG',
    '/assets/images/gallery/photo6.JPEG',
    '/assets/images/gallery/photo7.JPEG',
    '/assets/images/gallery/photo8.JPEG',
    '/assets/images/gallery/photo9.JPEG',
    '/assets/images/gallery/photo10.JPEG',
    '/assets/images/gallery/photo11.JPEG',
    '/assets/images/gallery/photo12.JPEG',
    '/assets/images/gallery/photo13.JPEG',
    '/assets/images/gallery/photo14.JPEG',
    '/assets/images/gallery/photo15.JPEG'
];

let currentImageIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    const openGallery = document.getElementById('openGallery');
    const galleryModal = document.getElementById('galleryModal');
    const galleryClose = document.querySelector('.gallery-close');
    const galleryImage = document.getElementById('galleryImage');
    const prevBtn = document.querySelector('.gallery-prev');
    const nextBtn = document.querySelector('.gallery-next');
    const counterEl = document.querySelector('.gallery-counter');

    // Open
    if (openGallery) {
        openGallery.addEventListener('click', function(e) {
            e.preventDefault();
            currentImageIndex = 0;
            showImage();
            galleryModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Close
    galleryClose.addEventListener('click', closeGallery);
    galleryModal.addEventListener('click', function(e) {
        if (e.target === galleryModal) {
            closeGallery();
        }
    });

    // Navigation
    prevBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage();
    });

    nextBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        showImage();
    });

    // Key navigation
    document.addEventListener('keydown', function(e) {
        if (!galleryModal.classList.contains('active')) return;
        
        if (e.key === 'ArrowLeft') {
            currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
            showImage();
        } else if (e.key === 'ArrowRight') {
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            showImage();
        } else if (e.key === 'Escape') {
            closeGallery();
        }
    });

    function showImage() {
        galleryImage.src = galleryImages[currentImageIndex];
        counterEl.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
    }

    function closeGallery() {
        galleryModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});
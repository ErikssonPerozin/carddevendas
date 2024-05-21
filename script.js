document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeBtns = document.querySelectorAll('.close-btn');
    const cards = document.querySelectorAll('.card');
    const addCartBtns = document.querySelectorAll('.add-cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Function to toggle active class on sections and navigation links
    function toggleActive(id) {
        sections.forEach(section => {
            if (section.id === id) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
        navLinks.forEach(link => {
            if (link.getAttribute('data-target') === id) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Event listeners for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            toggleActive(target);
        });
    });

    // Event listeners for close buttons on modals
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            modal.style.display = 'none';
            cartModal.style.display = 'none';
        });
    });

    // Event listeners for "Detalhes" buttons on cards
    cards.forEach(card => {
        const detailsBtn = card.querySelector('.details-btn');
        detailsBtn.addEventListener('click', function() {
            modalTitle.textContent = card.querySelector('h2').textContent;
            modalDescription.textContent = card.querySelector('p').textContent;
            modal.style.display = 'block';
        });
    });

    // Event listeners for "Adicionar ao Carrinho" buttons on cards
    addCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const itemName = this.parentNode.querySelector('h2').textContent;
            const itemPrice = this.parentNode.querySelector('p').textContent;
            const listItem = document.createElement('li');
            listItem.textContent = `${itemName} - ${itemPrice}`;
            cartItems.appendChild(listItem);
        });
    });

    // Event listener for "Finalizar Compra" button
    checkoutBtn.addEventListener('click', function() {
        // Add your checkout logic here
        alert('Compra finalizada!');
        // Clear cart after checkout
        cartItems.innerHTML = '';
    });

    // Filter cars based on category
    const categorySelect = document.getElementById('category');
    categorySelect.addEventListener('change', function() {
        const selectedCategory = this.value;
        cards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (selectedCategory === 'all' || selectedCategory === cardCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Search Functionality
var searchButton = document.querySelector('.btn4');
var searchInput = document.querySelector('.inp1');
if (searchButton && searchInput) {
    searchButton.addEventListener('click', function() {
        var keywords = searchInput.value;
        // Filter listings based on keywords
        searchInput.value = ''; // Clear the search input
        console.log('Searching for: ' + keywords);
    });
}

// Filter by Category Functionality
var categorySelect = document.querySelector('.btn2 select');
if (categorySelect) {
    categorySelect.addEventListener('change', function() {
        var selectedCategory = this.value;
        // Filter listings based on selectedCategory
        console.log('Selected category: ' + selectedCategory);
    });
}

// Location Functionality
var locationButton = document.querySelector('.btn2:nth-child(3)');
if (locationButton) {
    locationButton.addEventListener('click', function() {
        // Get current location and filter listings based on location
        console.log('Location button clicked');
    });
}

// Redirect to Category Page
var categorySelectRedirect = document.getElementById('categorySelect');
if (categorySelectRedirect) {
    categorySelectRedirect.addEventListener('change', function() {
        var selectedCategory = this.value;
        if (selectedCategory) {
            window.location.href = selectedCategory + '.html';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var btn;

    // For Business Category
    btn = document.querySelector('.business .btn5');
    if(btn) {
        btn.addEventListener('click', function() {
            window.location.href = 'business.html';
        });
    }

    // For Education Category
    btn = document.querySelector('.education .btn5');
    if(btn) {
        btn.addEventListener('click', function() {
            window.location.href = 'faculty.html';
        });
    }

    // For Food & Restaurants Category
    btn = document.querySelector('.food .btn5');
    if(btn) {
        btn.addEventListener('click', function() {
            window.location.href = 'food.html';
        });
    }
});
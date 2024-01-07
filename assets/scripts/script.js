const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
if (mobileMenuBtn) {
    // Add click event listener to the element
    mobileMenuBtn.addEventListener("click", function() {
        // Get the element with class "mobile-menu" and add the class "show"
        const mobileMenu = document.querySelector(".mobile-menu");
        if (mobileMenu) {
            mobileMenu.classList.add("show");
        }
    });

    // Add click event listener to the element with class "mobile-menu-close"
    const mobileMenuClose = document.querySelector(".mobile-menu-close");
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener("click", function() {
            // Get the element with class "mobile-menu" and remove the class "show"
            const mobileMenu = document.querySelector(".mobile-menu");
            if (mobileMenu) {
                mobileMenu.classList.remove("show");
            }
        });
    }
}
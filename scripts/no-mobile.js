function isMobileOrSmallScreen() {
    const mobileBreakpoint = 768; // Définir un point de rupture pour les petits écrans
    return /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < mobileBreakpoint;
}

if (isMobileOrSmallScreen()) {
    document.getElementById('mobile-warning').style.display = 'flex';
}

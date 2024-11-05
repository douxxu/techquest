function isMobileOrSmallScreen() {
    const mobileBreakpoint = 768;
    return /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < mobileBreakpoint;
}

if (isMobileOrSmallScreen()) {
    document.getElementById('mobile-warning').style.display = 'flex';
}

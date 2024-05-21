function showSection(sectionId) {
    document.querySelectorAll('.container').forEach(section => {
        section.classList.remove('active');
    });
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

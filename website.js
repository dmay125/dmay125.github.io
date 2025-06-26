function showPage(sectionID){
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    var activeSection = document.getElementById(sectionID);
    activeSection.classList.add('active');
}

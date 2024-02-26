document.addEventListener('DOMContentLoaded', function () {
    // Menu links
    let getAbout = document.getElementById("getAbout");
    let getResume = document.getElementById("getResume");
    let getContact = document.getElementById("getContact");
    let contactLink = document.getElementById("contactLink"); // New anchor tag for scrolling to contact

    // Sections
    let about = document.getElementById("about");
    let resume = document.getElementById("resume");
    let contact = document.getElementById("contact");

    function removeClass() {
        // Links
        getAbout.classList.remove('selected');
        getResume.classList.remove('selected');
        getContact.classList.remove('selected');
        // Sections
        about.classList.remove('view');
        resume.classList.remove('view');
        contact.classList.remove('view');
    }

    getAbout.addEventListener('click', function (e) {
        if (window.innerWidth > 1040) {
            e.preventDefault();
            removeClass();
            about.classList.add('view');
            getAbout.classList.add('selected');
        }
    });

    getResume.addEventListener('click', function (e) {
        if (window.innerWidth > 1040) {
            e.preventDefault();
            removeClass();
            resume.classList.add('view');
            getResume.classList.add('selected');
        }
    });

    getContact.addEventListener('click', function (e) {
        if (window.innerWidth > 1040) {
            e.preventDefault();
            removeClass();
            contact.classList.add('view');
            getContact.classList.add('selected');
        }
    });

    // Scroll to contact section when clicking on the contact link
    contactLink.addEventListener('click', function (e) {
        e.preventDefault();
        if (window.innerWidth > 1040) {
            removeClass();
            contact.classList.add('view');
            getContact.classList.add('selected');
            contact.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

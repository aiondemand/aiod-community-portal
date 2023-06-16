window.onload = function () {
    const links = document.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
        let link = links[i];
        let href = link.getAttribute('href');

        if (href === '#') {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                alert('AIoD Community Demo. The page you have requested is ' +
                    'currently under construction.');
            });
        } else if (href.startsWith('#')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                let target = document.querySelector(href);
                if (target) {
                    let targetOffset = target.offsetTop;
                    window.scrollTo({
                        top: targetOffset - 140,
                        behavior: 'smooth'
                    });
                }
            });
        }
    }
};
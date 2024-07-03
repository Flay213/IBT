document.addEventListener('DOMContentLoaded', () => {
    const articlesList = document.getElementById('articles-list');


    const articles = [
        {
            title: "Lorem ipsum dolor sit.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in vehicula erat, sed euismod arcu. Duis convallis lectus in sodales pellentesque. Etiam eget lobortis risus, ac ultrices felis. Fusce id tempor lectus. Ut vulputate risus turpis. Integer sagittis est diam, quis dignissim mi luctus a. Nulla sit amet nisi nec sem consequat fringilla eget id est. Suspendisse lacus tortor, aliquet accumsan sem ut, tincidunt elementum dui. Etiam vel ligula eu lacus dapibus pharetra. In ac enim a velit facilisis convallis. Sed eleifend est quis purus tempor sagittis. Morbi lacinia sapien id faucibus sagittis.Sed felis eros, pulvinar eget elementum ut, mollis sed urna. Phasellus ac est in orci dapibus iaculis sed lacinia libero. Curabitur lacinia, arcu sed ultrices hendrerit, tortor ipsum volutpat eros, at hendrerit ipsum orci at urna. Sed feugiat venenatis dui in finibus. Etiam elementum ullamcorper quam eu vehicula. Aliquam rutrum arcu aliquam ornare interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam elementum scelerisque sem, eu ullamcorper lorem sagittis quis. Proin suscipit, odio id elementum venenatis, felis ligula lacinia massa, id gravida erat justo sit amet felis. Pellentesque purus velit, commodo eu libero et, luctus pulvinar turpis. Curabitur dapibus bibendum sem et laoreet.."
        },
        {
            title: "Proin consequat mauris id ultricies.",
            content: "ConLorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in dui lacus. Vestibulum leo magna, convallis vitae pretium et, molestie sit amet erat. Sed id ultrices dui. Maecenas nulla ligula, lobortis eget dolor sed, pulvinar gravida neque. Aliquam erat volutpat. Praesent quis fringilla odio, non porttitor metus. Praesent rhoncus massa id eros pellentesque tempor. Ut rhoncus dictum mi eget auctor. Nam sit amet nibh vel magna iaculis euismod sed et eros.Phasellus at luctus urna. Praesent massa ligula, placerat eu consectetur a, rutrum eu augue. Nulla facilisi. Pellentesque ut dapibus orci. Duis pretium odio est, non sagittis tellus laoreet ac. Nullam condimentum tempor diam sit amet hendrerit. Donec et nibh a nulla rutrum egestas sit amet luctus massa.ent of article 2."
        },
        {
            title: "Duis vel dictum lorem. Etiam.",
            content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet elit sit amet tellus aliquam vulputate. Suspendisse elementum euismod lacus sed efficitur. In scelerisque blandit suscipit. Ut lacinia a est in luctus. Phasellus ligula purus, accumsan at viverra vitae, interdum sed metus. Proin scelerisque hendrerit suscipit. Sed lectus libero, tincidunt non odio vel, egestas sodales enim. Mauris id sagittis dui. Morbi magna massa, mollis luctus hendrerit a, congue in mi.Aenean euismod purus nulla, ut dapibus sapien vestibulum et. Integer interdum faucibus odio et luctus. Phasellus accumsan auctor bibendum. Donec lacinia faucibus lorem, sit amet tristique eros facilisis at. Duis in metus venenatis, facilisis massa ac, condimentum ipsum. Donec scelerisque dolor sapien. Nam porttitor faucibus risus, in consequat magna luctus id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque dignissim non lorem ut rutrum. Proin facilisis massa arcu, ac vehicula justo hendrerit fringilla. Vestibulum tincidunt at est ac vulputate.Cras accumsan porta lorem, at porttitor dui congue non. Suspendisse pulvinar felis quis urna pharetra, vel porta lacus pellentesque. Donec dignissim convallis viverra. Sed vel lectus finibus, tincidunt ex a, varius est. Cras quis magna a est placerat rutrum. Mauris dictum massa sapien, quis semper ex mollis sed. Proin nec euismod erat, auctor porttitor tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque maximus est sed tincidunt hendrerit. Ut ut feugiat leo. Mauris hendrerit et orci eu eleifend. Vestibulum at lacus sit amet est volutpat mattis nec consequat metus. Nam dignissim varius elit. Ut gravida diam in urna mollis porttitor. Sed eget urna eget sapien auctor semper id eget libero. Aliquam bibendum risus velit, a vestibulum urna imperdiet sed. Aenean tristique, nulla nec tempus molestie, libero magna pretium libero, a sagittis leo nibh a quam. Sed mattis mattis purus at finibus. Etiam tempor felis felis, et dictum magna interdum nec. Proin iaculis accumsan cursus. Nullam ut pellentesque ipsum. Sed nibh nisi, facilisis at pharetra ac, posuere in tortor. Fusce ante justo, scelerisque eu ex et, tempor pretium libero. Nunc in tempus sapien, et placerat elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tortor at est sodales gravida a at nisl. Quisque maximus, ligula eget ultricies rhoncus, nunc sem dapibus nisi, eu dictum lectus velit vitae ante.Etiam imperdiet odio sit amet turpis accumsan ultrices. Vestibulum sit amet venenatis eros, eu hendrerit neque. Donec at felis a libero elementum rutrum. Sed mattis, risus non venenatis placerat, ex metus ullamcorper massa, eget ultricies turpis sem pretium lacus. Integer eros purus, faucibus sit amet sollicitudin id, viverra quis mauris. Mauris eleifend vehicula dui ut convallis. Nunc vel mi in ligula pulvinar iaculis id sit amet nulla. Sed feugiat placerat feugiat. Cras porta ligula eros, a tincidunt tortor aliquet nec. Donec imperdiet interdum nibh, ac interdum dolor. Integer et mi sed velit ultricies sollicitudin in a nisl. Suspendisse id congue justo. Proin tincidunt laoreet mauris, eu porta metus dictum id. "


        }
    ];

   
    function renderArticles() {
        articlesList.innerHTML = '';
        articles.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('article');
            articleDiv.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.content}</p>
            `;
            articlesList.appendChild(articleDiv);
        });
    }

   
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for contacting us!');
        contactForm.reset();
    });


    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

 
    renderArticles();
});

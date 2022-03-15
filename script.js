const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    function (enteries) {
        const ent = enteries[0];
        console.log(enteries);

        if (ent.isIntersecting === false) {
            document.querySelector(".header").classList.add("sticky");
        }
        if (ent.isIntersecting === true) {
            document.querySelector(".header").classList.remove("sticky");
        }
    },
    { root: null, threshold: 0, rootMargin: "-80px" }
);
observer.observe(sectionHeroEl);

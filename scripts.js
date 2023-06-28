const allImgs = document.querySelectorAll(".img")


// observer callback 
const observerCallback = (entries, observer) => {
    const [entry] = entries;
    const targetElment = entry.target

    if(!entry.isIntersecting) return;


    const newImgSrc = targetElment.dataset.src;

    // changing the src of img 
    targetElment.src = newImgSrc;

    // remove the blur class after image doen loading 
    targetElment.addEventListener("load", () => {
        targetElment.classList.remove("blur")
    })

    // stop observing after loading 
    observer.unobserve(targetElment)
}

// observer api 
const observer = new IntersectionObserver(observerCallback, {root: null,rootMargin: "100px", threshold: "0",})

allImgs.forEach(img => {
    img.classList.add("blur")
    observer.observe(img)
})

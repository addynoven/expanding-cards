document.querySelector(".container").addEventListener("click", function (eve) {
    console.log(this.children);
    for (const iterator of this.children) {
        if (eve.target === iterator) {
            iterator.classList.add("active");
        } else {
            iterator.classList.remove("active");
        }
    }
});

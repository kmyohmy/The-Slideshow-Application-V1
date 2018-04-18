/*eslint-env browser*/
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var slideshow = {
    timer: null,
    nodes: {image: null, caption: null},
    img: {cache: [], counter: 0},
    speed: 4000,
       
    loadimages: function (slide) {
        "use strict";
        var image, i;
        for (i = 0; i < slide.length; i += 1) {
            image = new Image();
            image.src = slide[i].href;
            image.title = slide[i].title;
            this.img.cache.push(image);
        }
        return this;
    },
    
    startSlideshow: function (image, caption) {
        "use strict";
        this.nodes.image = image;
        this.nodes.caption = caption;
        
        this.timer = setInterval(this.displayNextImage.bind(this), this.speed);
        return this;
    },
    
    displayNextImage: function () {
        "use strict";
        if (this.img.cache.length === this.img.counter) {
            this.img.counter = 0;

        } else {
            this.img.counter += 1;
        }
        var image = this.img.cache[this.img.counter];
        this.nodes.image.src = image.src;
        this.nodes.caption.innerHTML = image.title;
    }
};
window.addEventListener('load', function () {
    "use strict";
    var slide = [
        {href: "images/backpack.jpg", title: "He outdoor"},
        {href: "images/boat.jpg", title: "He in a boat"},
        {href: "images/camaro.jpg", title: "He in a camaro"},
        {href: "images/punk.jpg", title: "He listen to punk"}
    ];
    
    slideshow.loadimages(slide).startSlideshow($("image"), $("caption"));
});
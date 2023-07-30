    var clamp = document.querySelector(".hide-clamp");
    var readMore = document.getElementById("read-More");
    var lessMore = document.getElementById("less-More");
    function read(){
        clamp.classList.remove("hide-clamp");
        readMore.style.display = "none";
        lessMore.style.display = "block";
    }
    function less(){
        clamp.classList.add("hide-clamp");
        lessMore.style.display = "none";
        readMore.style.display ="block"
    }
    document.querySelector(".btn").onclick = function(){
        document.querySelector(".nav").classList.toggle("hide");
        this.querySelector("i.fa-solid").classList.toggle("fa-bars")
        this.querySelector("i.fa-solid").classList.toggle("fa-xmark")
    }
    
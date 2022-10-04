window.addEventListener("mousemove", function(dets){
    // console.log(dets.clientX*.05, dets.clientY*.05);
    document.querySelector("img").style.transform= `translate(-50%, -50%) translate(${dets.clientX * .05}px, ${dets.clientY * .05}px)`
    document.querySelector("h1").style.transform= `translate(-50%, -50%) translate(${1-dets.clientX * .05}px, ${1-dets.clientY * .05}px)`
})
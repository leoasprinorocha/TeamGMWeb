function dbox(msg) {
    // (B1) GET ELEMENTS
    var box = document.getElementById("dbox"),
        boxm = document.getElementById("dboxm");
    // (B2) SHOW/HIDE
    boxm.innerHTML = (msg === undefined) ? "" : msg;
    box.style.display = (msg === undefined) ? "none" : "block";
}
function toggleCollapse() {
    var x = document.getElementById("nav");
    if (x.className === "navCollapsed") {
        x.className = "";
    }
    else {
        x.className = "navCollapsed";
    }
    
}

function collapse() {
    var x = document.getElementById("nav");
    x.className = "navCollapsed";
}

$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass: 'dots'

});
});

window.addEventListener('DOMContentLoader', function() {


    var form = document.getElementById("my-form");
    var status = document.getElementById("status");

    function success() {
        form.reset();
        status.innerHTML = "Thanks:)";
    }

    function error() {
        status.innerHTML = "Oops! There is a problem.";
    }


    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        this.insertAdjacentText(form.method, form.action, data, success, error);
    });

});

function ajax(method, url ,data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept","application/json");
    xhr.onreadystatechange = function () {

    }
}


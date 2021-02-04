// main.js
/*eslint-env browser*/

//Image Toggling
document.getElementById("radio-air-horn").addEventListener("click", function() {
    document.getElementById("sound-image").setAttribute("src", "./assets/media/images/air-horn.svg");
})

document.getElementById("radio-car-horn").addEventListener("click", function() {
    document.getElementById("sound-image").setAttribute("src", "./assets/media/images/car.svg");
})

document.getElementById("radio-party-horn").addEventListener("click", function() {
    document.getElementById("sound-image").setAttribute("src", "./assets/media/images/party-horn.svg");
})


//Volume number changer
document.getElementById("volume-number").addEventListener("change", function() {
    var val = document.getElementById("volume-number").value;
    document.getElementById("volume-slider").value = val;
    if (parseInt(val) >= 67) {
        document.getElementById("volume-image").setAttribute("src", "./assets/media/icons/volume-level-3.svg");
        document.getElementById("honk-btn").disabled = false;
    }
    else if (parseInt(val) >= 34) {
        document.getElementById("volume-image").setAttribute("src", "./assets/media/icons/volume-level-2.svg");
        document.getElementById("honk-btn").disabled = false;
    }
    else if (parseInt(val) >= 1 && parseInt(val) <= 33) {
        document.getElementById("volume-image").setAttribute("src", "./assets/media/icons/volume-level-1.svg");
        document.getElementById("honk-btn").disabled = false;
    }
    else {
        document.getElementById("volume-image").setAttribute("src", "./assets/media/icons/volume-level-0.svg");
        document.getElementById("honk-btn").disabled = true;
    }
    document.getElementById("horn-sound").volume = parseFloat(0.01*val);


})

//Volume slider changer
document.getElementById("volume-slider").addEventListener("change", function() {
    var val2 = document.getElementById("volume-slider").value;
    document.getElementById("volume-number").value = val2;
    if (parseInt(val2) >= 67) {
        document.getElementById("volume-image").setAttribute("src", "./assets/media/icons/volume-level-3.svg");
        document.getElementById("honk-btn").disabled = false;
    }
    else if (parseInt(val2) >= 34) {
        document.getElementById("volume-image").setAttribute("src", "./assets/media/icons/volume-level-2.svg");
        document.getElementById("honk-btn").disabled = false;
    }
    else if (parseInt(val2) >= 1 && parseInt(val2) <= 33) {
        document.getElementById("volume-image").setAttribute("src", "./assets/media/icons/volume-level-1.svg");
        document.getElementById("honk-btn").disabled = false;
    }
    else {
        document.getElementById("volume-image").setAttribute("src", "./assets/media/icons/volume-level-0.svg");
        document.getElementById("honk-btn").disabled = true;
    }
    document.getElementById("horn-sound").volume = parseFloat(0.01*val2);
    
    
})

    

//Sound Toggling)
document.getElementById("honk-btn").addEventListener("click", function(e) {
    e.preventDefault();
    var audio;
    if (document.getElementById("radio-air-horn").checked) {
        document.getElementById("horn-sound").setAttribute("src", "./assets/media/audio/air-horn.mp3");
        audio = document.getElementById("horn-sound");
        audio.play();
    }
    else if (document.getElementById("radio-car-horn").checked) {
        document.getElementById("horn-sound").setAttribute("src", "./assets/media/audio/car-horn.mp3");
        audio = document.getElementById("horn-sound");
        audio.play();
    }
    else {
        document.getElementById("horn-sound").setAttribute("src", "./assets/media/audio/party-horn.mp3");
        audio = document.getElementById("horn-sound");
        audio.play();
    }
});


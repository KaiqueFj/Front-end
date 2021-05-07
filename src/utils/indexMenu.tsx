export function profileHover() {

    //Get variables
    document.getElementById("headerMenu").style.display = 'block'
    const textProfile = document.getElementById("textProfile");
    const profile = document.getElementById("profile");
    const element = document.getElementById("header");

    //Transition
    element.style.transition = "all 0.7s";
    textProfile.style.transition = "all 0.7s";
    profile.style.transition = "all 0.7s";

    // Change atributes of heaader
    element.style.width = "clamp(16rem, 20vw, 20rem)";
    element.style.height = "clamp(19rem, 18vw, 23rem)";
    element.style.right = "2rem";
    element.style.padding = "1rem";
    element.style.background = "rgba(0, 0, 0, 0.47)";

    // Change position
    profile.style.position = 'absolute'
    profile.style.top = '1rem'
    profile.style.left = '2rem'

    // Change position of textProfile
    textProfile.style.position = 'absolute';
    textProfile.style.top = 'clamp(1.5rem, 2vw, 2rem)'
    textProfile.style.right = '2rem'
}

export function initialProfile() {

    //Get variables
    document.getElementById("headerMenu").style.display = 'none'
    const textProfile = document.getElementById("textProfile");
    const profile = document.getElementById("profile");
    const element = document.getElementById("header");

    //Transition
    element.style.transition = "all 0.7s";
    textProfile.style.transition = "all 0.7s";
    profile.style.transition = "all 0.7s";

    // Change atributes of heaader
    element.style.width = "100%";
    element.style.height = "auto";
    element.style.right = "0";
    element.style.top = "1rem";
    element.style.paddingLeft = "3vw";
    element.style.paddingRight = "3vw";
    element.style.background = "none";

    // Change position
    profile.style.position = ''

    // Change position of textProfile
    textProfile.style.position = '';
}
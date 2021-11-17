// used in LandPageHeader
export const openMenu = (targetElement, isOpen) => {
    let openStyling = `  transition: 0.5s linear;
        height: 42vh;
        border-radius: 0 50% 50% 40%;
        visibility: visible;
        z-index: 2;`

    let windowWidth = window.innerWidth;
    if (isOpen === true) {
        if (windowWidth >= 1000) {
            document.getElementById(`${targetElement}`).style.cssText = `
           ${openStyling}
           width: 45%; 

        `;
        } else if (windowWidth <= 768 && windowWidth > 450) {
            document.getElementById(`${targetElement}`).style.cssText = `
            ${openStyling}
            width: 45vw;
            height: 35vh; 

         `; 

        } else if (windowWidth <= 450) {
            document.getElementById(`${targetElement}`).style.cssText = `
            ${openStyling}
            width: 80vw;
            height: 40vh; 

         `; 
        } 
       
    } else {
        document.getElementById(`${targetElement}`).style.cssText = `
            transition: 0.5s linear;
            width: 0; 
            height: 0vh;
            visibility: hidden;
            border-radius: 0 50% 50% 50%;                
        `;


    }
}


// below are used in SlideShow.js
export const runShow = (preLoadedImgs, counter) => {
    let slideWrapper =  document.getElementById('slide-wrapper');

    if (counter - 1 > 0) {
        document.getElementById(`${counter - 1}`).style.backgroundColor = 'transparent';

    } 
    
    if (counter - 1 === 0) {
        document.getElementById(`0`).style.backgroundColor = 'transparent';

    } 

    if (counter - 1 < 0) {
        document.getElementById(`${preLoadedImgs.length - 1}`).style.backgroundColor = 'transparent';
    }

    slideWrapper.style.backgroundImage = `url(${preLoadedImgs[counter]})`;
    document.getElementById(`${counter}`).style.backgroundColor = '#bbb';
    slideWrapper.style.transition = "0.5s linear";

}

// used in slideshow.js
export const preloadImgs = (imgArray) => {
    let preLoadedImgs = []
    for (var item in imgArray) {
        const img = new Image();
        img.src = imgArray[item];
        preLoadedImgs.push(img.src);
    }
    return preLoadedImgs;
}

let loadedImgs = ['concertLights.jpg', 'secondConcert.jpg', 'thirdConcert.jpg'];

export const chooseBgPhoto = (photoIndex, counter) => {
    let slideWrapper =  document.getElementById('slide-wrapper');

    document.getElementById(`${counter}`).style.backgroundColor = 'transparent';

    counter = photoIndex;
    slideWrapper.style.backgroundImage = `url(${loadedImgs[counter]})`;
    slideWrapper.style.transition = "0.5s linear";  
    document.getElementById(`${photoIndex}`).style.backgroundColor = '#bbb'
}
console.log("")
console.log("%cIf you see this, it's most likely that you know what you are doing.", 'font-size: 24px; font-weight: bold; font-family: IBM Plex Sans; color: black;');
console.log("%cBut there's nothing to see here, so go away.\n ヘ(゜Д、゜)ノ", 'font-size: 24px; font-family: IBM Plex Sans; font-weight: regular; color: black;');
console.log("")


//Load default theme
const loadDefaultMode = () =>{
    if(localStorage.getItem('mode') == 'dark'){
        setDarkMode()
    }
    else{
        setLightMode()
    }
}

loadDefaultMode()


const showGoUpBtn = () => {
    $(document).scroll(function() {
        const viewPortHeight = $(window).height()
        let scrollDistance = $(document).scrollTop()
        if (scrollDistance > viewPortHeight) {
            $("#goUpBtn").prop("hidden", false);
        }
        else {
            $("#goUpBtn").prop("hidden", true);
        }
    })
}

showGoUpBtn()
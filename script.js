window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item__active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item__active');
    }

    hideTabContent();
    showTabContent();

    tabParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                    buts[i].classList.remove('shoot');
                    buts[i].classList.remove('shoot__prepare');
                    buts[i].classList.add('start');
                }
            });
        }
    });
});


let heroes = document.querySelectorAll('.hero'),
    backgrounds = ["img/Новая папка/s72.png" , "img/Новая папка/s2.png", /* "img/Новая папка/s3.png", */ "img/Новая папка/s4.png", "img/Новая папка/s5.png", "img/Новая папка/s6.png","img/Новая папка/s1.png" ];

heroes.forEach((item, i) => {
    item.style.cssText = `background:url("${backgrounds[i]}") no-repeat 50% 50%;
        background-size:contain;`;
});

let mainBackground = document.querySelectorAll('.wrapper'),
mainBackgrounds = [  "img/backgrounds/bg (3).jpg","img/backgrounds/bg4.jpg" ,"img/backgrounds/bg5.jfif","img/backgrounds/bg6.jfif","img/backgrounds/bg7.jfif","img/backgrounds/bg8.jfif","img/backgrounds/bg (1).png","img/backgrounds/bg (2).png","img/backgrounds/bg (3).png","img/backgrounds/bg (4).png","img/backgrounds/bg (5).png","img/backgrounds/bg (6).png"];

mainBackground.forEach((item, i) => {
    
        let timerId=setTimeout(function log(){
           
            item.style.cssText = `
            background:url("${mainBackgrounds[i]}") no-repeat 50% 50%;
            background-size:cover;`;
            
            if(i<mainBackgrounds.length-1){
                i++;
                timerId=setTimeout(log,10000);
            }
            else if(i=mainBackgrounds.length-1){
                i=0;
                timerId=setTimeout(log,10000);
            }
           
        },2000);
    
   
}); 



let soldierContainers = document.querySelectorAll('.soldier__container'),
    soldiers = document.querySelectorAll('.soldier'),
    opponentContainers = document.querySelectorAll('.opponent__container'),
    opponents = document.querySelectorAll('.opponent'),
    bloodSplatter = document.querySelectorAll('.blood__spot');

let bodySectionBlocks = document.querySelectorAll('.body__section__block'),
    bodySections = document.querySelectorAll('.body__section'),
    weapons = document.querySelectorAll('.weapon__container');
tankBottom = document.querySelector('.tankbottom'),
    tankTop = document.querySelector('.tanktop'),
    bayraktar = document.querySelector('.bayraktar__container'),
    bayraktarBomb = document.querySelector('.bayraktar__bomb'),
    i = Number,
    buts = document.querySelectorAll('.but');



let soldierMove = function (i) {

    if (!soldierContainers[i].classList.contains('soldier__move')) {
        soldierContainers[i].classList.add('soldier__move');
    } else {
        soldierContainers[i].classList.remove('soldier__move');
    }

}

let opponentMove = function (i) {

    if (!opponentContainers[i].classList.contains('opponent__move')) {
        opponentContainers[i].classList.add('opponent__move');
    } else {
        opponentContainers[i].classList.remove('opponent__move');
    }

}

function moveLeft(item) {
    if (!item.classList.contains('move__left')) {
        item.classList.add('move__left');
    } else {
        item.classList.remove('move__left');
    }
}

function moveRight(item) {
    if (!item.classList.contains('move__right')) {
        item.classList.add('move__right');
    } else {
        item.classList.remove('move__right');
    }
}

function skewMoveLeft(item) {
    if (!item.classList.contains('skew__move__left')) {
        item.classList.add('skew__move__left');
    } else {
        item.classList.remove('skew__move__left');
    }
}

function skewMoveRight(item) {
    if (!item.classList.contains('skew__move__right')) {
        item.classList.add('skew__move__right');
    } else {
        item.classList.remove('skew__move__right');
    }
}

function skewLeft(item) {
    if (!item.classList.contains('skew__left')) {
        item.classList.add('skew__left');
    } else {
        item.classList.remove('skew__left');
    }
}

function skewRight(item) {
    if (!item.classList.contains('skew__right')) {
        item.classList.add('skew__right');
    } else {
        item.classList.remove('skew__right');
    }
}

function skewHardLeft(item) {
    if (!item.classList.contains('skew__hard__left')) {
        item.classList.add('skew__hard__left');
    } else {
        item.classList.remove('skew__hard__left');
    }
}

function skewHardRight(item) {
    if (!item.classList.contains('skew__hard__right')) {
        item.classList.add('skew__hard__right');
    } else {
        item.classList.remove('skew__hard__right');
    }
}

function walkingBodyMove(item) {
    if (!item.classList.contains('walking__body__move')) {
        item.classList.add('walking__body__move');
    } else {
        item.classList.remove('walking__body__move');
    }
}

function weaponSkew(item) {
    item.classList.add('weapon__skew');
}


function goRight(item) {

    moveLeft(item.children[1]);
    skewMoveLeft(item.children[1].children[1]);

    moveLeft(item.children[4]);
    skewMoveRight(item.children[4].children[1]);

    moveRight(item.children[3]);
    skewMoveLeft(item.children[3].children[1]);

    moveRight(item.children[0]);
    skewMoveRight(item.children[0].children[1]);

}

function goLeft(item) {

    moveRight(item.children[1]);
    skewMoveRight(item.children[1].children[1]);

    moveRight(item.children[4]);
    skewMoveLeft(item.children[4].children[1]);

    moveLeft(item.children[3]);
    skewMoveRight(item.children[3].children[1]);

    moveLeft(item.children[0]);
    skewMoveLeft(item.children[0].children[1]);

}

function flowDown(item) {
    if (!item.classList.contains('flow__down')) {
        item.classList.add('flow__down');
    } else {
        item.classList.remove('flow__down');
    }
}

let tanktopBlow = function () {
    tankBottom.parentElement.parentElement.classList.add('flames');
    tankTop.classList.add('tanktop__move');
    setTimeout(() => {
        tankBottom.parentElement.parentElement.classList.remove('flames');
        tankBottom.parentElement.parentElement.classList.add('smoke');
        tankBottom.parentElement.classList.add('burn__fire');

    }, 500);
}



buts.forEach((but, i) => {
    but.addEventListener('click', () => {

        if (but.classList.contains('start')) {
            soldierMove(i);
            opponentMove(i);
            goRight(soldiers[i]);
            walkingBodyMove(soldiers[i]);
            if (opponents[i].classList.contains('opponent__soldier')) {
                goLeft(opponents[i]);
                walkingBodyMove(opponents[i]);
            }

            but.classList.remove('start');
            but.classList.add('shoot__prepare');
            but.textContent = 'приціл';

             else if (but.classList.contains('shoot__prepare')) {

                    skewRight(soldiers[i].children[4]);
                    skewHardRight(soldiers[i].children[4].children[1]);
                    skewRight(soldiers[i].children[0]);
                    skewHardRight(soldiers[i].children[0].children[1]);
                    skewLeft(weapons[i]);

                    if (soldiers[i].classList.contains('soldier__javeline')) {
                        skewHardRight(soldiers[i].children[1]);
                        skewHardLeft(soldiers[i].children[1].children[1]);
                        skewHardLeft(soldiers[i].children[3].children[1]);
                        skewHardRight(soldiers[i].children[1].children[1].children[2]);
                        skewHardRight(soldiers[i].children[3].children[1].children[2]);
                        flowDown(soldiers[i].parentElement);
                    }

                    but.classList.remove('shoot__prepare');
                    but.classList.add('shoot');
                    but.textContent = 'постріл';
                    
                
           
        } 
else if (but.classList.contains('shoot')) {
            if (weapons[i].children[0].classList.contains('AK')) {
                weapons[i].children[1].classList.remove('fire');
                weapons[i].children[1].classList.add('gun__fire');
                weapons[i].children[0].classList.add('weapon__move');
                bodySectionBlocks.forEach(item => {
                    if (item.parentElement.parentElement.parentElement===opponents[0]) {
                        item.classList.add('soldier__kill');
                    
                });
            }

            if (weapons[i].children[0].classList.contains('javeline')) {
                weapons[i].children[1].classList.remove('rpg__fire');
                weapons[i].children[1].classList.add('javeline__fire');
                weapons[i].children[2].classList.add('rocket__launch');

                setTimeout(() => {
                    tanktopBlow();
                    weapons[i].children[1].classList.remove('javeline__fire');
                    weapons[i].children[1].classList.add('rpg__fire');
                }, 200);
            }

            if (weapons[i].children[0].classList.contains('remote')) {
                bayraktar.classList.remove('bayraktar__container');
                bayraktar.classList.add('bayraktar__fly');
                setTimeout(() => {
                    bayraktarBomb.classList.add('bomb__launch');
                }, 1000);
                setTimeout(() => {
                    opponents[i].parentElement.parentElement.classList.add('flames__blow');
                    bodySectionBlocks.forEach(item => {
                        if (item.parentElement.parentElement.parentElement.classList.contains('opponent__soldier')) {
                            item.classList.add('soldier__blow');
                            item.classList.add('hide');
                            bayraktarBomb.classList.add('hide');                     
                        }
                    });
                    setTimeout(() => {
                        opponents[i].parentElement.parentElement.classList.remove('flames__blow');
                        opponents[i].parentElement.parentElement.classList.add('smoke');
                        opponents[i].parentElement.classList.add('burn__fire');
                    }, 200);
                }, 3500);
            }
        }
    })
})


})

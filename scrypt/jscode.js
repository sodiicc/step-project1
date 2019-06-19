let fiddleTabs = document.querySelectorAll('.nav-our-services>li');
let fiddleFotos = document.querySelectorAll('#fiddlesticks>div');
let triangle = document.querySelectorAll('.triangle');

for (let i = 0, len = fiddleFotos.length; i < len; i++) {
  fiddleTabs[i].onclick = () => {
    for (let i = 0, len = fiddleFotos.length; i < len; i++) {
      fiddleTabs[i].classList.remove("triangle-green");
      fiddleFotos[i].classList.add("invisible");
      triangle[i].classList.remove("triangle-green");
    }
    fiddleTabs[i].classList.add("triangle-green")
    fiddleFotos[i].classList.remove("invisible")
    triangle[i].classList.add("triangle-green")
  }
}

// ****************************


let allGalerea = document.querySelectorAll('.pict img');
let imgWrapper = document.querySelectorAll('.img-wrapper');

for(let i =12; i<36; i++){
  imgWrapper[i].classList.add('invisible');
  allGalerea[i].classList.remove('invisible');
  }

let loadMore = document.querySelector('.load-more');
let loading = document.querySelector('.loading');
let secondBlockPict = document.querySelector('.second-block-pict');
let thirdBlockPict = document.querySelector('.third-block-pict');
let skills = document.getElementById('skills')
let k = 0;
let pushLoadMore = 0;


let designGalerea = document.querySelectorAll('[name=graphic-design-galerea]');
let webGalerea = document.querySelectorAll('[name=web-design-galerea]');
let lendingGalerea = document.querySelectorAll('[name=landing-pages-galerea]');
let wordpressGalerea = document.querySelectorAll('[name=wordpress-galerea]');
let tabMenu = document.querySelectorAll('.nav-our-work>li');
let greenLane = '#18CFAB 3px solid'
let arrNames = [designGalerea, webGalerea, lendingGalerea, wordpressGalerea];

let pictHover = document.querySelector('.pict-hover');

function changeValue() {
  loading.setAttribute('value', +k);
  loading.getAttribute('value')
  
  k += 1;
}


loadMore.onclick = () => {
  k = 0;
  pushLoadMore++; 

  loadMore.classList.add('invisible');
  loading.classList.remove('invisible');
  skills.classList.remove('invisible');

  let timer = setInterval(changeValue, 20);
  setTimeout(function () {
    clearInterval(timer);
    skills.classList.add('invisible'); 
    for(let i =12; i<24; i++){
      imgWrapper[i].classList.remove('invisible');
      // allGalerea[i].classList.remove('invisible');
      }   
      
    if (pushLoadMore < 2) {
      loadMore.classList.remove('invisible');
      loading.classList.add('invisible');
    } else {        
      for(let i =24; i<36; i++){
        imgWrapper[i].classList.remove('invisible');
        // allGalerea[i].classList.remove('invisible');
        }     
    }
  }, 2100);
}

// *****************************




for (let i = 0, len = allGalerea.length; i < len; i++) {
  allGalerea[i].onmouseenter = (() => {
    pictHover.classList.remove('invisible');
    imgWrapper[i].appendChild(pictHover);
    allGalerea[i].style.opacity = 0;
  })
  pictHover.onmouseleave = (() => {
    allGalerea.forEach((el) => {
      el.style.opacity = 1;
    })    
    pictHover.classList.add('invisible');
  })
}

tabMenu[0].style.borderTop = greenLane;

let chooseGalerea = (section, i) => {
  tabMenu[i].classList.add('nav-our-work-active')
  allGalerea.forEach((el) => {
    el.classList.add('invisible')
  })
  section.forEach((el) => {
    el.classList.remove('invisible')
  })
  tabMenu.forEach((el) => {
    el.style.borderTop = '';
  })
  tabMenu[i].style.borderTop = greenLane;
}

tabMenu[0].onclick = (function () {
  allGalerea.forEach((el) => {
    el.classList.remove('invisible')
  })
  tabMenu.forEach((el) => {
    el.style.borderTop = '';
  })
  this.style.borderTop = greenLane;
});

for (let i = 1; i < tabMenu.length; i++) {
  tabMenu[i].onclick = (() => {
    chooseGalerea(arrNames[i - 1], i)
  });
}



// *********************************


const slidePhoto = document.querySelectorAll('.slide-flex-photo');
const mainPhoto = document.querySelector('.main-photo-people');
const photoText = document.querySelectorAll('.text-after-qoutes');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const peopleName = document.querySelectorAll('.hasan1');

let index = 1;

const chooseSelected = (a) => {
  for (let ind = 0, len = slidePhoto.length; ind < len; ind++) {
    slidePhoto[ind].classList.remove("selected");
    photoText[ind].classList.add("invisible");
    peopleName[ind].classList.add("invisible");
  }
  slidePhoto[a].classList.add("selected");
  photoText[a].classList.remove("invisible");
  peopleName[a].classList.remove("invisible");
  mainPhoto.src = slidePhoto[a].src;
  mainPhoto.style.animation = 'opasity .8s linear';
  index = a;  
  setTimeout(() => {
    mainPhoto.style.animation = 'none';
  }, 800)
};


for (let i = 0, len = slidePhoto.length; i < len; i++) {
  slidePhoto[i].onclick = () => {
    chooseSelected(i)
  }
}

prevButton.onclick = () => {
  index--;
  if (index < 0) {
    index = slidePhoto.length - 1
  }
  chooseSelected(index)

};

nextButton.onclick = () => {
  index++;
  if (index > slidePhoto.length - 1) {
    index = 0
  }
  chooseSelected(index)
}


// *************************************


let loadingValue = 0;
let pushGrid = 0;
let pushLoadMoreGrid = 0;
let loadMoreGrid = document.querySelectorAll('.load-more')[1];
let loadingGrid = document.querySelectorAll('.loading')[1];
let nextGrid = document.querySelectorAll(`.next-grid`);
let skills1 = document.getElementById('skills1');

function changeValueGrid() {
  loadingGrid.setAttribute('value', +loadingValue);
  loadingGrid.getAttribute('value')
  loadingValue += 1;
}

loadMoreGrid.onclick = () => {
  loadingValue = 0;

  pushLoadMoreGrid++;
  loadMoreGrid.classList.add('invisible');
  skills1.classList.remove('invisible');
  loadingGrid.classList.remove('invisible');
  let timer = setInterval(changeValueGrid, 20);
  setTimeout(function () {
    clearInterval(timer);
    skills1.classList.add('invisible');
    nextGrid[pushGrid].classList.remove('invisible');

    (nextGrid[pushGrid]).click();
    (nextGrid[pushGrid]).click();

    if (pushLoadMoreGrid < 9) {
      loadMoreGrid.classList.remove('invisible');
      loadingGrid.classList.add('invisible');
    }
  }, 2100);
  pushGrid += 1;
}



// ****************************************


let breakingNews = document.querySelectorAll('.data-relative');

breakingNews.forEach((el) => {
  el.onmouseenter = () => {
    el.children[1].style.color = '#18CFAB';
    el.children[4].style.backgroundColor = '#18CFAB';
  }
  el.onmouseleave = () => {
    el.children[1].style.color = '';
    el.children[4].style.backgroundColor = '';
  }
});
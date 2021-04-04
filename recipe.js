

const searchArry = [
    {

        img: "flavors2.jpg",
        title: "Traditional Pizza",
        price: 79
    },
    {

        img: "flavors3.jpg",
        title: "Burger",
        price: 39
    },
    {

        img: "flavors4.jpg",
        title: "Sharwama",
        price: 29
    },
    {

        img: "flavors5.jpg",
        title: "Sausage & Chips",
        price: 59
    },
    {

        img: "flavors9.jpg",
        title: "Banquet",
        price: 63.00
    },
    {

        img: "flavors12.jpg",
        title: "Traditional Bufe",
        price: 109.99
    },
    {
        img: "flavors14.jpg",
        title: "Coffe",
        price: 19.99
    },
    {
        img: "flavors15.jpg",
        title: "Dizzetti",
        price: 34.00
    },
    {
        img: "flavors21.jpg",
        title: "Banquet",
        price: 180
    },
    {
        img: "flavors24.jpg",
        title: "Nshima with Kapenta",
        price: 25
    }
];

const menuArry = [
    {

        img: "flavors2.jpg",
        title: "Traditional Pizza",
        img_id: "img1"
    },
    {

        img: "flavors3.jpg",
        title: "Burger",
        img_id: "img2"
    },
    {

        img: "flavors4.jpg",
        title: "Sharwama",
        img_id: "img3"
    },
    {

        img: "flavors5.jpg",
        title: "Sausage & Chips",
        img_id: "img4"
    },
    {

        img: "flavors9.jpg",
        title: "Banquet",
        img_id: "img5"
    },
    {

        img: "flavors12.jpg",
        title: "Traditional Bufe",
        img_id: "img6"
    },
    {
        img: "flavors14.jpg",
        title: "Coffe",
        img_id: "img7"
    },
    {
        img: "flavors15.jpg",
        title: "Dizzetti",
        img_id: "img8"
    },
    {
        img: "flavors21.jpg",
        title: "Banquet",
        img_id: "img9"
    },
    {
        img: "flavors24.jpg",
        title: "Nshima with Kapenta",
        img_id: "img10"
    }
];

let count = 0;
const FWBtn = document.querySelector(".forward-btn");
const BWBtn = document.querySelector(".backward-btn");
const mainImg = document.querySelector(".main-img");
const textTitle = document.querySelector(".text-title");
const sho = document.querySelector(".display");
const screen = document.querySelector(".search");
const check = document.querySelector(".search-head");
const whole = document.querySelector(".whole");
const mainBtn = document.getElementById("img");
const all = document.querySelector(".all");
let status = false;

mainBtn.addEventListener("click", function () {
    if (status === false) {
        all.style.display = "flex";
        status = true;
    } else if (status === true) {
        all.style.display = "none";
        status = false;
    }
});

screen.addEventListener("keyup", function () {
    let x = screen.value.toUpperCase();
    let type = searchArry.filter(function (item) {
        if (item.title.toUpperCase().indexOf(x) > -1) {

            return item;
        }

    });
    searchMenu(type);

});

FWBtn.addEventListener("click", function () {
    count++;
    if (count > menuArry.length - 1) {
        count = 0;
    }
    mainImg.src = menuArry[count].img;
    textTitle.innerHTML = menuArry[count].title;
});

BWBtn.addEventListener("click", function () {
    count--;
    if (count < 0) {
        count = menuArry.length - 1;
    }
    mainImg.src = menuArry[count].img;
    textTitle.innerHTML = menuArry[count].title;
});

const boardCancel = document.querySelector(".board-cancel");
const boardText = document.querySelector(".board-text");

boardCancel.addEventListener("click", function () {
    boardCancel.style.display = "none";
    boardText.innerText = " Our Favourite List. Add Favourite.";
});



let addFavArry = [];

const fav = document.querySelector(".fav");
//const delImg = document.getElementById("del");
// delImg.addEventListener("click", function () {

// });

// function del() {
//     addFavArry.pop();
//     fav.innerHTML = addFavArry;
// }



function searchMenu(menu) {
    let x = menu.map(function (item) {
        return `
    <div class='main-search'>
    <img src=${item.img} alt="" class='search-img' />
    <div class="text-head">
        <h6 class="text-title">${item.title}</h6>
        <h6 id="price">K${item.price}</h6>
    </div>
</div>`;

    });
    let c = x.join("");
    sho.innerHTML = c;
}

// function removeDuplicates() {
//     
// }

function here() {
    menuArry.forEach(function (list, index) {
        myFav(sho, list.img, list.text, index);
    });
}

function myFav(favImg, favText, id) {

    const x = `
        <div id="${id}" class='fav-part'>
                <img src=${favImg} alt="" class='img' />
                <h6>${favText}</h6>
            </div>`;

    //fav.innerHTML += x;
    const position = "afterbegin";
    fav.insertAdjacentHTML(position, x);
}

function show() {
    fav.innerHTML = "";
    for (let i = 0; i < addFavArry.length; i++) {
        let object_img = addFavArry[i];

        let img_name = object_img.img;
        let img_text = object_img.text;

        let div = document.createElement('div');
        div.setAttribute('id', i);
        div.setAttribute('class', 'fav-part');

        let img = document.createElement('img');
        img.setAttribute('class', 'img');
        img.src = img_name;
        // insert the image 
        div.appendChild(img);
        let h6 = document.createElement('h6');
        h6.innerText = img_text;
        div.appendChild(h6);

        fav.prepend(div);
    }
}

const addBtn = document.getElementById("toAdd");


addBtn.addEventListener("click", function () {
    let { img, title, img_id } = menuArry[count]
    if (addFavArry.length) if (addFavArry.find(fav => img_id === fav.img_id)) return;

    let obj = {
        img: img,
        text: title,
        img_id: img_id
    }
    // addFavArry = addFavArry.filter(function (a, b) {
    //     if (addFavArry.indexOf(a) === b) {
    //         return 
    //     }
    // });

    // addFavArry.push(obj);
    addFavArry = [...addFavArry, obj];
    show();
});




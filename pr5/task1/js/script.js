let viewer = document.querySelector(".viewer");
let default_image_CSS = "margin:20px; position:relative;"

    let e = document.createElement("img");
    e.src = `src/images/img1.jfif`;
    e.style.cssText = default_image_CSS + "transform: translate(-50%, -50%); margin-left:50%; margin-top:200px; width:500px; justify-content:center";

viewer.append(e);

const img_quantity = 6;
let img_counter = 1;

function nextImage(){
    if(img_counter == img_quantity)
        img_counter = 1;
    else img_counter++;
    changeImage(img_counter);
}

function prevImage(){
    if(img_counter == 1)
        img_counter = 6;
    else img_counter --;
    changeImage(img_counter)
}

function changeImage(counter, action){
    e.src = `src/images/img${counter}.jfif`;
}
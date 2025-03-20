//Отримання поточної дати
date_opt = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false}
document.querySelector(".date").textContent = Intl.DateTimeFormat("en-US", date_opt).format(new Date()).replace("at", "\t");

//Змінити Best Soft на Best Proffesional Soft
document.querySelector(".tittle span").textContent = "Professional Soft"

//функція вираз для видалення блоку новин

let removeNewsAndEvents = function() {document.querySelectorAll(".col1 .wrapper").forEach(e => e.remove())}

const dataSite = { 
    proSoft: [ "Firewall", "Antivirus", "VPN"],
    whyUs: ["High quality", "Reliable", "Fast"]};
    
//Вивід списку ПЗ
let soft_list = document.querySelector(".prof-soft-list")
soft_list.outerHTML.replace(/<ul>/, "<ol>").replace(/<\/ul>/, "/ol"); //перетворення списку на нумерований
soft_list.style.listStyleType = "decimal"; //вмикаємо числову нумерацію.
soft_list.style.marginLeft = "20px" //рівняємо щоб було схоже як на прикладі
document.querySelectorAll(".prof-soft-item").forEach((e, i) => e.textContent = dataSite.proSoft.sort()[i]);

//Вивід блоку "Про нас"
document.querySelectorAll(".list1 li a").forEach((e, i) => e.textContent = dataSite.whyUs.sort()[i]);

//зміна bg-soft.png
document.querySelector("#myRoundabout li img").src = "images/bg-soft.png";
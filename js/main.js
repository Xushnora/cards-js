function addJSON (){
let xhr = new XMLHttpRequest();
let url = "https://reqres.in/api/users";

xhr.open("GET", url);

xhr.onload = function (){
    let outData = JSON.parse(xhr.responseText);
    renderObj(outData)
};

xhr.send();
}
addJSON()

let cardsBox = document.querySelector('.cards__box');

function renderObj(obj) {
    // console.log(obj.data);
    obj.data.forEach(el => {
        let box = document.createElement('div');
        box.className = "col"
        box.innerHTML = `
        <div class="card">
            <div class="card-body">
            <div>
                <div>
                    <button class="removBtn">remove</button>
                </div>
                <div class="data__desc">
                    <img src="${el.avatar}">
                    <div class="info">
                        <h3 class="name">${el.first_name}</h3>
                        <p class="lastName">${el.last_name}</p>
                    </div>
                </div>
            </div>
            <div>
                <div class="information">
                    <h4 class="email-title">company</h4>
                    <p class="email">meta</p>
                </div>
                <div class="information">
                    <h4 class="email-title">email</h4>
                    <p class="email">${el.email}</p>
                </div>
                <div class="information">
                    <h4 class="email-title">phone</h4>
                    <p class="email">123456789</p>
                </div>
                <div class="information">
                    <h4 class="email-title">website</h4>
                    <p class="email">lorem.com</p>
                </div>
            </div>
            </div>
        </div>
        `
        cardsBox.appendChild(box);

        let items = document.querySelectorAll('.card');
        let removBtn = document.querySelectorAll('.remov-button');
        let btnn;
        items.forEach((item, index) =>{
            item.addEventListener('mouseover', (e) =>{
                console.log(e.currentTarget.querySelector('.removBtn'));
                e.currentTarget.querySelector('.removBtn').style.display = "block"
                e.currentTarget.querySelector('.removBtn').addEventListener('click', () =>{
                    item.style.transition = 'all 0.4s ease';
                    item.remove()
                })
            })
            
            item.addEventListener('mouseout', (e) =>{
                e.currentTarget.querySelector('.removBtn').style.display = "none"
            })
        })

    });
}



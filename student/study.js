const tbody = document.querySelector(".row__tbody");
// const delet = document.querySelector(".row__del")



getStData()
function getStData() {
    fetch("https://6427fbdc46fd35eb7c492488.mockapi.io/Students", {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => res.json())
        .then(data => innerStData(data))
}

function innerStData(a) {
    tbody.innerHTML = ""
    if (a.length > 0) {
        a.forEach(element => {
            tbody.innerHTML += `
        <tr class="row__tr">
        <td>
            <img class="row__imag" src="${element.url?element.url:"./img/men.webp"}">
        <td>${element.name}</td>
        <td>${element.surname}</td>
        <td>${element.date}</td>
        <td>${element.address}</td>
        <td>${element.course}</td>
        <td class="row__btns">
            <div> <img src="./img/trash.webp" class="row__del" onclick=removSt(${element.id})></div>
            <div> <img src="./img/edit.webp" class="row__edt"></div>
        </td>
    </tr>
        `
        });
    } 
    else {
        tbody.innerHTML = ` <tr>
       <td colspan="7">
           <p class="row__load">Ma'lumot Yo'q</p>
       </td>
   </tr>`
    }
}



function removSt(id) {
    fetch(`https://6427fbdc46fd35eb7c492488.mockapi.io/Students/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => res.json())
        .then(data => getStData(data))
}
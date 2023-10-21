const url = document.querySelector("#url");
const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const address = document.querySelector("#address");
const date = document.querySelector("#date");
const course = document.querySelector("#course");
const add = document.querySelector("#add");



add.addEventListener("click", function () {
    let student = {};
    student.url = url.value;
    student.name = name.value;
    student.surname = surname.value;
    student.address = address.value;
    student.date = date.value;
    student.course = course.value;

    if (student.name && student.surname && student.address && student.date && student.date && student.course) {
        fetch("https://6427fbdc46fd35eb7c492488.mockapi.io/Students", {
            method: "POST",
            body: JSON.stringify(student),
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => res.json())
            .then(data => location.href = "study.html")
    } else {
        alert("polyani to'ldiring")
    }

})
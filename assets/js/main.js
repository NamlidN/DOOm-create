let enter = document.getElementById('enter');
let input = document.getElementById('userinput');

enter.addEventListener('click', (event) => {

    event.preventDefault();


    let input = document.getElementById('userinput').value;

    const ul = document.querySelector('#list');

    const li = document.createElement('li');
    li.innerHTML = input;

    ul.appendChild(li);

 

});

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("enter").click();
        input.value = ''
    }


});



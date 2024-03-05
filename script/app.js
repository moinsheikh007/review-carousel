const url = 'https://randomuser.me/api/';
async function loadData () {
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.results)
    console.log(data.results)
}

function displayData (user) {
    const userImg = document.getElementById('userImg');
    userImg.src = user[0].picture.medium; 
    const userName = document.getElementById('userName');
    userName.innerHTML = `${user[0].name.title} ${user[0].name.first} ${user[0].name.last}`
    const userEmail = document.getElementById('userEmail');
    userEmail.innerHTML = user[0].email
}

document.getElementById('random').addEventListener('click', loadData);
document.getElementById('prev').addEventListener('click', loadData)
document.getElementById('next').addEventListener('click', loadData)


loadData();
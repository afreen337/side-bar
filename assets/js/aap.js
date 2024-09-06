const cl = console.log;

// const navigationToggle = document.getElementById('navigationToggle');
// const closeNavbar = document.getElementById('closeNavbar');
const toogleSidebar = [...document.querySelectorAll('.toogleSidebar')]
const backDrop = document.getElementById('backDrop');
const sidebar = document.getElementById('sidebar');



// const onNavBarShow = () => {
//     sidebar.classList.add('active')

// }

// const onNavBarclose = () => {
//     sidebar.classList.remove('active')
// }

const onNavToggle = () => {
    sidebar.classList.toggle('active')
    backDrop.classList.toggle('active')
}


toogleSidebar.forEach(ele => {
    ele.addEventListener('click', onNavToggle)
})





// navigationToggle.addEventListener("click", onNavToggle)
// closeNavbar.addEventListener('click', onNavToggle)
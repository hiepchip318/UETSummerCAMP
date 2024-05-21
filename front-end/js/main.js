let body = document.body;

let profile = document.querySelector('.header .flex .profile');
let searchForm = document.querySelector('.header .flex .search-form');
let sideBar = document.querySelector('.header .flex .sidebar');

const today = new Date();
const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Asia/Ho_Chi_Minh'
};

const formattedTime = today.toLocaleDateString('vi-VN', options);
const timeElement = document.getElementById('time');
timeElement.textContent = formattedTime;

document.querySelector('#user-btn').onclick = () =>{
    profile.classList.toggle('active');
    searchForm.classList.remove('active');
    sideBar.classList.remove('active');

}

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    profile.classList.remove('active');
    sideBar.classList.remove('active');
}

document.querySelector('#menu-btn').onclick = () =>{
    sideBar.classList.toggle('active');
    searchForm.classList.remove('active');
    profile.classList.remove('active');
}

window.onscroll = () =>{
    profile.classList.remove('active');
    searchForm.classList.remove('active');
    sideBar.classList.remove('active');
}

const header = document.querySelector('.header');
const initialBackgroundColor = header.style.backgroundColor || 'inherit';

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;

    if(scrollY > 1) {
        header.style.backgroundColor = '#000';
    }
    else {
        header.style.backgroundColor = initialBackgroundColor;
    }
});


// rating

const allStar = document.querySelectorAll('.rating .star')

allStar.forEach((item, idx)=> {
	item.addEventListener('click', function () {
		let click = 0
		ratingValue.value = idx + 1

		allStar.forEach(i=> {
			i.classList.replace('fa-solid', 'fa-regular')
			i.classList.remove('active')
		})
		for(let i=0; i<allStar.length; i++) {
			if(i <= idx) {
				allStar[i].classList.replace('fa-regular', 'fa-solid')
				allStar[i].classList.add('active')
			} else {
				allStar[i].style.setProperty('--i', click)
				click++
			}
		}
	})
})
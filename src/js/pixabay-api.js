import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

//
const API_KEY = "50823959-4aaa76fee656d12ff3aaa5105";
const URL = "https://pixabay.com/api/";
const iconPath = './img/error.svg';

export const params = {
	"key": API_KEY,
	"q": "",
	"image_type": "photo",
	"orientation": "horizontal",
	"safesearch": "true",
	"per_page": "9"
};

const headers = {
	"ContentType": "application/json"
}


export function getData(qParams) {
	console.log(URL, qParams);
	const queryString = new URLSearchParams(qParams).toString();

	axios(`${URL}?${queryString}`)
		//axios("https://pixabay.com/api/?key=50823959-4aaa76fee656d12ff3aaa5105&q=yellow+flowers&image_type=photo&pretty=true")
		.then(res => {
			console.log(res.data.hits);

			if (res.data.hits.length > 0) {
				console.log(res.hits);


				//const imgUrl = res.data[0].previewURL;

				//catCard.innerHTML = `
				//            <div class="card">
				//                <img class="card-image" src="${imgUrl}" alt="${myBreed}"/>
				//                <div class="card-body">
				//                    <h2 class="card-title">${myBreed}</h2>
				//                </div>
				//            </div>
				//        `
			} else {
				iziToast.show({
					id: 'error',
					title: 'Error',
					message: "Sorry, there are no images matching your search query. Please, try again!",
					messageColor: 'white',
					color: '#ef4040',
					position: 'topCenter',
					iconUrl: iconPath,
				});
			}
		})
		.catch(error => {
			console.log(error);
		})
		.finally(() => {
			loader.classList.add("hidden");
		})
}
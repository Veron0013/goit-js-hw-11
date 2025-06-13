import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const listView = document.querySelector(".gallery")
const loader = document.querySelector(".loader_cont");

let gallery = new SimpleLightbox('.gallery a', {
	captions: true,
	captionsData: 'alt',
	captionPosition: 'bottom',
	animationSpeed: 250,
	showCounter: false,
});


export function createGallery(images) {
	listView.innerHTML = createGalleryMark(images);
	gallery.refresh();
}

export function clearGallery() {
	listView.innerHTML = "";
}

export function showLoader() {
	loader.classList.remove("hidden");
}

export function hideLoader() {
	loader.classList.add("hidden");
}

function createGalleryMark(images) {
	return images.map(element => {
		return element.previewURL && element.largeImageURL && element.tags ?
			`<li class="data_list_items">
				<a class="gallery_link" href="${element.largeImageURL}">
					<img
						class="_list_img"
						src="${element.previewURL}" 
						alt="${element.tags}"/>		
					<ul class="_list_attr">
						<li class="_list_attr_itm">
							<h3 class="_list_attr_title">Likes</h3>
							<p class="_list_attr_text">${element.likes}</p>
						</li>
						<li class="_list_attr_itm">
							<h3 class="_list_attr_title">Views</h3>
							<p class="_list_attr_text">${element.views}</p>
						</li>
						<li class="_list_attr_itm">
							<h3 class="_list_attr_title">Comments</h3>
							<p class="_list_attr_text">${element.comments}</p>
						</li>
						<li class="_list_attr_itm">
							<h3 class="_list_attr_title">Downloads</h3>
							<p class="_list_attr_text">${element.downloads}</p>
						</li>
					</ul>
				</a>
			</li>` : null;
	})
		.filter(el => el !== null)
		.join("");
}

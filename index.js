import{a as f,S as h,i as p}from"./assets/vendor-Bg_GrDtl.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const m="50823959-4aaa76fee656d12ff3aaa5105",y="https://pixabay.com/api/",n={key:m,q:"",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"99"};function g(r){const t=new URLSearchParams(r).toString();return f(`${y}?${t}`).then(i=>i.data.hits).catch(i=>[])}const _=document.querySelector(".gallery"),d=document.querySelector(".loader_cont");let L=new h(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",animationSpeed:250,showCounter:!1});function S(r){_.innerHTML=R(r),L.refresh()}function c(){_.innerHTML=""}function w(){d.classList.remove("hidden")}function u(){d.classList.add("hidden")}function R(r){return r.map(t=>t.previewURL&&t.largeImageURL&&t.tags?`<li class="data_list_items">
				<a class="gallery_link" href="${t.largeImageURL}">
					<img
						class="_list_img"
						src="${t.previewURL}" 
						alt="${t.tags}"/>		
					<ul class="_list_attr">
						<li class="_list_attr_itm">
							<h3 class="_list_attr_title">Likes</h3>
							<p class="_list_attr_text">${t.likes}</p>
						</li>
						<li class="_list_attr_itm">
							<h3 class="_list_attr_title">Views</h3>
							<p class="_list_attr_text">${t.views}</p>
						</li>
						<li class="_list_attr_itm">
							<h3 class="_list_attr_title">Comments</h3>
							<p class="_list_attr_text">${t.comments}</p>
						</li>
						<li class="_list_attr_itm">
							<h3 class="_list_attr_title">Downloads</h3>
							<p class="_list_attr_text">${t.downloads}</p>
						</li>
					</ul>
				</a>
			</li>`:null).filter(t=>t!==null).join("")}const q="img/error.svg",P="Sorry, there are no images matching your search query. Please, try again!",v="Sorry, there is error in your request. Please, try again later!",O="Sorry, there is error in your request. Please, try to write more than 3 letters!",$="Sorry, there is error in your request. Please, try to write not only digits!",G=document.querySelector(".form"),x=document.querySelector(".input_delay");function o(r){p.show({id:"error",title:"Error",message:r,messageColor:"white",color:"#ef4040",position:"topCenter",iconUrl:q})}function E(r){return r.length<3?(o(O),!1):/^\d+$/.test(r)?(o($),!1):!0}G.addEventListener("submit",r=>{r.preventDefault();const t=x.value.trim();E(t)&&(w(),n.q=t,g(n).then(i=>{if(i.length===0){c(),o(P);return}S(i),u()}).catch(i=>{o(v),c(),u()}))});
//# sourceMappingURL=index.js.map

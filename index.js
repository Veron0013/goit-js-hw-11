import{a as d,S as h,i as m}from"./assets/vendor-Bg_GrDtl.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(e){if(e.ep)return;e.ep=!0;const l=s(e);fetch(e.href,l)}})();const p="50823959-4aaa76fee656d12ff3aaa5105",g="https://pixabay.com/api/",c={key:p,q:"",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"99"};function S(t){const r=new URLSearchParams(t).toString();return d(`${g}?${r}`).then(s=>s.data.hits).catch(s=>[])}const y=document.querySelector(".gallery"),_=document.querySelector(".loader_cont");let L=new h(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",animationSpeed:250,showCounter:!1});function q(t){y.innerHTML=P(t),L.refresh()}function u(){y.innerHTML=""}function w(){_.classList.remove("hidden")}function o(){_.classList.add("hidden")}function P(t){return t.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:l,comments:a,downloads:f})=>r&&s&&i?`<li class="data_list_items">
				<a class="gallery_link" href="${s}">
					<img
						class="gallery_list_img"
						src="${r}" 
						alt="${i}"/>		
					<ul class="gallery_list_attr">
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Likes</h3>
							<p class="gallery_list_attr_text">${e}</p>
						</li>
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Views</h3>
							<p class="gallery_list_attr_text">${l}</p>
						</li>
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Comments</h3>
							<p class="gallery_list_attr_text">${a}</p>
						</li>
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Downloads</h3>
							<p class="gallery_list_attr_text">${f}</p>
						</li>
					</ul>
				</a>
			</li>`:null).filter(r=>r!==null).join("")}const O="Sorry, there are no images matching your search query. Please, try again!",$="Sorry, there is error in your request. Please, try again later!",G="Sorry, there is error in your request. Please, try to write more than 3 letters!",R="Sorry, there is error in your request. Please, try to write not only digits!",x=document.querySelector(".form"),E=document.querySelector(".input_delay");function n(t){m.show({id:"error",title:"Error",message:t,messageColor:"white",color:"#ef4040",position:"topCenter"})}function M(t){return t.length<3?(n(G),!1):/^\d+$/.test(t)?(n(R),!1):!0}x.addEventListener("submit",t=>{t.preventDefault();const r=E.value.trim();M(r)&&(w(),c.q=r,S(c).then(s=>{if(s.length===0){o(),u(),n(O);return}q(s),o()}).catch(s=>{o(),u(),n($)}).finally(()=>{o()}))});
//# sourceMappingURL=index.js.map

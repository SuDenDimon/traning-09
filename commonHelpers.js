var c=(t,r,e)=>{if(!r.has(t))throw TypeError("Cannot "+e)};var a=(t,r,e)=>(c(t,r,"read from private field"),e?e.call(t):r.get(t)),n=(t,r,e)=>{if(r.has(t))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(t):r.set(t,e)};import"./assets/styles-f4ff1362.js";var l,s;class i{constructor(){n(this,l,"https://api.unsplash.com/search/photos");n(this,s,"gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58")}getPopularsFhotos(r){const e=`${a(this,l)}?query=popular&page=${r}&per_page=12&orientation=portrait&client_id=${a(this,s)}`;return fetch(e).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).catch(o=>console.log("error"))}}l=new WeakMap,s=new WeakMap;function p(t){return t.map(({urls:r,alt_description:e})=>`<li class='gallery__item'><img src='${r.small}' alt='${e}'></li>`).join("")}const u=document.querySelector(".js-gallery"),h=new i;h.getPopularsFhotos(1).then(t=>{const r=p(t.results);u.innerHTML=r});
//# sourceMappingURL=commonHelpers.js.map

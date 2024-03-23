import {UnsplashAPI} from "./UnsplashAPI";
import { createGalleryCard } from "./createGalleryCard";
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

const searchForm = document.querySelector(".js-search-form")

const gallery = document.querySelector(".js-gallery");
const service = new UnsplashAPI();

const container = document.getElementById('tui-pagination-container');

const options = { // below default value of options
    totalItems: 0,
    itemsPerPage: 12,
    visiblePages: 5,
    page: 1,
}

const pagination = new Pagination(container, options);
const page = pagination.getCurrentPage();

service.getPopularsFhotos(page).then(({results, total}) => {
    const markup = createGalleryCard(results);
    pagination.reset(total);
    gallery.innerHTML = markup;
} );

pagination.on('afterMove',popular );
function popular (event){
    const currentPage = event.page;
    service.getPopularsFhotos(currentPage).then(({results, total}) => {
        const markup = createGalleryCard(results);
        gallery.innerHTML = markup;
    } );
}
searchForm.addEventListener('submit',onSearchPhotos)

function onSearchPhotos(event){
event.preventDefault()
const searchQuery = event.target.elements.query.value.trim();
if (!searchQuery) return
service.query=searchQuery
pagination.off('afterMove',popular );
pagination.off('afterMove',byQuery );
service.getFhotosByQuery(page)
.then(({results, total}) => {
    if (results.length===0) return;
    const markup = createGalleryCard(results);
    
    pagination.reset(total);
    gallery.innerHTML = markup;
} );
pagination.on('afterMove',byQuery );
}

function byQuery (event){
    const currentPage = event.page;
    service.getFhotosByQuery(currentPage).then(({results, total}) => {
        const markup = createGalleryCard(results);
        gallery.innerHTML = markup;
    } );
}
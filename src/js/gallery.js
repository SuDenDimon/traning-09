import {UnsplashAPI} from "./UnsplashAPI";
import { createGalleryCard } from "./createGalleryCard";
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

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


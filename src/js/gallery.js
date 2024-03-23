import {UnsplashAPI} from "./UnsplashAPI";
import { createGalleryCard } from "./createGalleryCard";

const gallery = document.querySelector(".js-gallery");
const service = new UnsplashAPI();

service.getPopularsFhotos(1).then((data) => {
    const markup = createGalleryCard(data.results);

    gallery.innerHTML = markup;
} );


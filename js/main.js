import { generateCards } from "./cards.js";
import { addEventListeners } from "./events.js";
import { setPhotoUrl, preventDoubleTapZoom } from "./utils.js";

// Initialize the app
generateCards(".list");
setPhotoUrl();
addEventListeners();
preventDoubleTapZoom();
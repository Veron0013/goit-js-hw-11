import * as apiTools from "./js/pixabay-api.js"
import * as renderTools from "./js/render-functions.js"

const localStorage = window.localStorage;


console.log(apiTools.params);
apiTools.params.q = "cars";

apiTools.getData(apiTools.params);




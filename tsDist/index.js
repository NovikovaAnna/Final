"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toursDataArray = void 0;
var tours_1 = require("@rest/tours");
require("./assets/styles/main.scss");
var img_1 = require("@services/img/img");
var general_1 = require("@services/general/general");
var tours_2 = require("@services/tours");
exports.toursDataArray = [];
var imagesStore = img_1.images; // ссылка на изображения нужна чтобы webpack формировал изображения в папке dist
function initApp() {
    (0, general_1.initHeaderTitle)('Туры', 'h1');
    (0, general_1.initFooterTitle)('Туры по всему миру', 'h2');
    var tourData = (0, tours_1.getTours)();
    tourData.then(function (data) {
        console.log('call ');
        exports.toursDataArray = data;
        (0, tours_2.initToursDivElements)(data);
    });
}
initApp();
//# sourceMappingURL=index.js.map
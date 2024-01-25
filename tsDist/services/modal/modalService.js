"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalService = exports.openModal = void 0;
var modal_1 = require("../../classess/modal");
var index_1 = require("../../index");
function openModal(type, i) {
    if (type === "order") {
        openTourModal(i);
    }
}
exports.openModal = openModal;
function openTourModal(tourIndx) {
    var data = index_1.toursDataArray[tourIndx];
    var tourId = (data === null || data === void 0 ? void 0 : data.id) || 0;
    var modalBody = "\n                <div> \n                  <p>".concat(data.name, "</p>\n                  <p>").concat(data.description, "</p>\n                  <div data-tour-id=").concat(tourId, " class=\"ticket-submit\">\n                    <a href=\"./ticket.html?id=").concat(tourId, "\">\u041A\u0443\u043F\u0438\u0442\u044C \u0431\u0438\u043B\u0435\u0442</a>\n                  </div>\n                </div>");
    ModalService.open('tour-modal-' + tourId, modalBody);
}
var ModalService = /** @class */ (function () {
    function ModalService() {
    }
    ModalService.open = function (id, template) {
        this.modals.forEach(function (modal) { return modal.close(); });
        var modal = this.findModalById(id);
        if (modal) {
            modal.open();
        }
        else {
            var newModal = new modal_1.default(id);
            this.modals.push(newModal);
            newModal.createModal(template);
            newModal.open();
        }
    };
    ModalService.remove = function (id) {
        var modal = this.findModalById(id);
        if (modal) {
            modal.close();
            this.modals = this.modals.filter(function (m) { return m !== modal; });
        }
    };
    ModalService.findModalById = function (id) {
        return this.modals.find(function (modal) { return modal.id === id; });
    };
    ModalService.modals = [];
    return ModalService;
}());
exports.ModalService = ModalService;
//# sourceMappingURL=modalService.js.map
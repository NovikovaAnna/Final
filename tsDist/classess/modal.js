"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Modal = /** @class */ (function () {
    function Modal(id) {
        this.isOpened = false;
        this.id = id;
    }
    Modal.prototype.open = function () {
        if (this.isOpened) {
            return;
        }
        document.body.appendChild(this.modalElement);
        this.isOpened = true;
    };
    Modal.prototype.getCloseButton = function () {
        var _this = this;
        var closeButton = document.createElement('button');
        closeButton.id = 'close_' + this.id;
        closeButton.type = 'brn';
        closeButton.innerHTML = 'X';
        closeButton.className = 'close-modal';
        closeButton.setAttribute('data-modal-id', 'tour-modal');
        closeButton.onclick = function () { return _this.close(); };
        return closeButton;
    };
    Modal.prototype.createModal = function (template) {
        var _this = this;
        var modalElement = document.createElement("div");
        modalElement.id = this.id;
        modalElement.setAttribute('modal_id', this.id);
        modalElement.setAttribute('z-index', '100');
        modalElement.className = 'modal-element';
        modalElement.innerHTML = template;
        modalElement.append(this.getCloseButton());
        var closeBtn = modalElement.querySelector(".close-modal");
        if (closeBtn) {
            closeBtn.addEventListener("click", function () {
                _this.close();
            });
        }
        this.modalElement = modalElement;
    };
    Modal.prototype.close = function () {
        if (this.isOpened) {
            document.getElementById(this.id).remove();
            this.isOpened = false;
        }
    };
    return Modal;
}());
exports.default = Modal;
//# sourceMappingURL=modal.js.map
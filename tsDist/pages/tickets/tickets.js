"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tickets_1 = require("@rest/tickets");
require("@myCss"); // добавлена новая ссылка - ссылка ведет на один файл
require("@assets/styles/tickets.scss");
var general_1 = require("@services/general/general");
var ticket_1 = require("@services/tickets/ticket");
var ticketInstance;
function initApp(ticketId) {
    var ticketData = (0, tickets_1.getTicketById)(ticketId);
    console.log('ticketData', ticketData);
    ticketData.then(function (data) {
        ticketInstance = data[0];
        var ticketName = typeof (ticketInstance === null || ticketInstance === void 0 ? void 0 : ticketInstance.name) === "string" ? ticketInstance === null || ticketInstance === void 0 ? void 0 : ticketInstance.name : '';
        (0, general_1.initHeaderTitle)(ticketName, 'h3');
        (0, general_1.initFooterTitle)('Туры по всему миру', 'h2');
        (0, ticket_1.initTicketInfo)(ticketInstance);
    });
    (0, ticket_1.registerConfirmButton)();
}
function getParameterByName(name, url) {
    if (url === void 0) { url = window.location.href; }
    name = name.replace(/[]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);
    if (!results)
        return null;
    if (!results[2])
        return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var idFromQueryString = getParameterByName("id");
initApp(idFromQueryString);
//# sourceMappingURL=tickets.js.map
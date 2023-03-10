var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var reportAcudits = [];
var getAPITemperature = function () { return __awaiter(_this, void 0, void 0, function () {
    var respuesta, temperatura, temp, numTemp, icono, num;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch('https://api.openweathermap.org/data/2.5/weather?q=Barcelona&APPID=36186b9d10d0073dd0551fb3d0367789')];
            case 1:
                respuesta = _a.sent();
                return [4 /*yield*/, respuesta.json()];
            case 2:
                temperatura = _a.sent();
                temp = document.getElementById("temperature");
                numTemp = document.getElementById("numTemperature");
                icono = temperatura.weather[0].icon;
                num = (temperatura.main.temp) - 273.15;
                temp.src = "https://openweathermap.org/img/wn/".concat(icono, "@2x.png");
                numTemp.textContent = num.toFixed(1) + '??C';
                return [2 /*return*/];
        }
    });
}); };
getAPITemperature();
var randomJoke = function () {
    randomBackground();
    Math.random() > 0.5 ? requestApiJoke() : requestApiJokeChuck();
};
var randomBackground = function () {
    var arrayBackgrounds = ["url('/img/cian.svg')", "url('/img/yellow.svg')", "url('/img/blue.svg')", "url('/img/red.svg')", "url('/img/purple.svg')",];
    var change = document.querySelector(".container");
    var title = document.querySelector("#title");
    var randomNumber = Math.floor(Math.random() * 5);
    change.style.backgroundImage = arrayBackgrounds[randomNumber];
    change.style.backgroundRepeat = "no-repeat";
    change.style.backgroundSize = "cover";
    change.style.backgroundPositionX = "center";
    change.style.backgroundPositionY = "center";
    change.style.backgroundOrigin = "border-box";
    title.style.color = "white";
};
var requestApiJoke = function () { return __awaiter(_this, void 0, void 0, function () {
    var respuesta, data, caja, d, text;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch('https://icanhazdadjoke.com/slack')];
            case 1:
                respuesta = _a.sent();
                return [4 /*yield*/, respuesta.json()];
            case 2:
                data = _a.sent();
                console.log(data.attachments[0].text);
                caja = document.getElementById("jokeBox");
                caja.textContent = data.attachments[0].text;
                reportAcudits[reportAcudits.length] = { joke: data.attachments[0].text, result: "", date: "" };
                d = new Date();
                text = d.toISOString();
                reportAcudits[reportAcudits.length - 1].date = text;
                console.log(reportAcudits);
                return [2 /*return*/];
        }
    });
}); };
var requestApiJokeChuck = function () { return __awaiter(_this, void 0, void 0, function () {
    var respuesta, data, caja, d, text;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch('https://api.chucknorris.io/jokes/random')];
            case 1:
                respuesta = _a.sent();
                return [4 /*yield*/, respuesta.json()];
            case 2:
                data = _a.sent();
                console.log(data.value);
                caja = document.getElementById("jokeBox");
                caja.textContent = data.value;
                reportAcudits[reportAcudits.length] = { joke: data.value, result: "", date: "" };
                d = new Date();
                text = d.toISOString();
                reportAcudits[reportAcudits.length - 1].date = text;
                console.log(reportAcudits);
                return [2 /*return*/];
        }
    });
}); };
var boton = document.getElementById("next");
boton === null || boton === void 0 ? void 0 : boton.addEventListener('click', function () {
    randomJoke();
    addBotons();
    rating();
    boton.textContent = "Next joke!";
});
var opinion = document.getElementById("opinion");
var addBotons = function () {
    opinion.innerHTML = "";
    opinion.insertAdjacentHTML('beforeend', "\n  <button class=\"faces\">\uD83D\uDE01</button>\n  <button class=\"faces\">\uD83D\uDE10</button>\n  <button class=\"faces\">\uD83D\uDE2A</button>");
};
var rank;
var rating = function () {
    var botonPositive = document.getElementById("positive");
    botonPositive === null || botonPositive === void 0 ? void 0 : botonPositive.addEventListener('click', function () {
        rank = 3;
        reportAcudits[reportAcudits.length - 1].result = rank;
    });
    var botonNeutral = document.getElementById("neutral");
    botonNeutral === null || botonNeutral === void 0 ? void 0 : botonNeutral.addEventListener('click', function () {
        rank = 2;
        reportAcudits[reportAcudits.length - 1].result = rank;
    });
    var botonNegative = document.getElementById("negative");
    botonNegative === null || botonNegative === void 0 ? void 0 : botonNegative.addEventListener('click', function () {
        rank = 1;
        reportAcudits[reportAcudits.length - 1].result = rank;
    });
};

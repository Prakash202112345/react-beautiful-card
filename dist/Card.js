"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
require("./Card.css");
const Card = ({ title, description, imageUrl, className }) => {
    return (react_1.default.createElement("div", { className: (0, clsx_1.default)("card", className) },
        react_1.default.createElement("img", { src: imageUrl, alt: title, className: "card-image" }),
        react_1.default.createElement("div", { className: "card-content" },
            react_1.default.createElement("h3", { className: "card-title" }, title),
            react_1.default.createElement("p", { className: "card-description" }, description))));
};
exports.default = Card;

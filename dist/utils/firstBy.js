"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firstBy = (array, comparator, defaultValue) => array.find(comparator) || defaultValue;
exports.default = firstBy;

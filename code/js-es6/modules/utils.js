
// utils.js

// Variables are locally scoped to this module (this file)
// unless you explicitly export them

"use strict";

export let getArea = ( w,l ) => w*l;
export let double = n => n*2;

export let reverse = word => word.split("").reverse().join("");
export let hyphenate = sentence => sentence.split(" ").join("-");

// This variable is private and not visible in code.js
// unless you omit let/var in which case it becomes globally scoped.

let city = "Oxford";

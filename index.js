"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getTweetButton = () => document.querySelector('[data-testid="tweetButton"]');
const getAddTweetButton = () => document.querySelector('[aria-label="Add Tweet"]');
const listener = (e) => {
    e.preventDefault();
    if (e.shiftKey) {
        // load tweets
        console.log("load tweets");
    }
    else {
        // save tweets
        console.log("save tweets");
    }
};
const load = () => __awaiter(void 0, void 0, void 0, function* () {
    let tweetButton = getTweetButton();
    let attempts = 0;
    // max 5 seconds
    while (!tweetButton && attempts < 50) {
        yield new Promise((resolve) => setTimeout(resolve, 100));
        tweetButton = getTweetButton();
    }
    if (!tweetButton) {
        return;
    }
    tweetButton.addEventListener("contextmenu", listener);
});
window.addEventListener("load", load);
navigation.addEventListener("navigate", load);
window.s = {
    getAddTweetButton,
    getTweetButton,
    load,
};

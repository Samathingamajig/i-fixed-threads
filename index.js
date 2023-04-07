"use strict";
const getTweetButton = () => document.querySelector('[data-testid="tweetButton"]');
const getAddTweetButton = () => document.querySelector('[aria-label="Add Tweet"]');
const rightClickHandler = (e) => {
    var _a;
    if (!((_a = getTweetButton()) === null || _a === void 0 ? void 0 : _a.contains(e.target)))
        return;
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
window.addEventListener("contextmenu", rightClickHandler);
window.s = {
    getAddTweetButton,
    getTweetButton,
};

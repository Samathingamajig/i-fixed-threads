"use strict";
const getTweetButton = () => document.querySelector('[data-testid="tweetButton"]');
const getAddTweetButton = () => document.querySelector('[aria-label="Add Tweet"]');
const getTweetDrafts = () => document.querySelectorAll('[role="dialog"] [aria-label="Tweet text"]');
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
        const draftElements = Array.from(getTweetDrafts());
        const draftContents = draftElements.map((draft) => draft.innerText.trim().replaceAll("\n\n", "\n")).filter(Boolean);
        localStorage.setItem(":sgunter:thread", JSON.stringify(draftContents));
    }
};
window.addEventListener("contextmenu", rightClickHandler);
window.s = {
    getAddTweetButton,
    getTweetButton,
    getTweetDrafts,
};

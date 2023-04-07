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
const getTweetDrafts = () => document.querySelectorAll('[role="dialog"] [aria-label="Tweet text"]');
let isCurrentlyPasting = false;
let pastingDraftIndex = 0;
let savedDraftData = [];
const rightClickHandler = (e) => {
    var _a;
    if (!((_a = getTweetButton()) === null || _a === void 0 ? void 0 : _a.contains(e.target)))
        return;
    e.preventDefault();
    if (e.shiftKey) {
        // load tweets
        console.log("load tweets");
        const rawData = localStorage.getItem(":sgunter:thread");
        if (rawData) {
            try {
                savedDraftData = JSON.parse(rawData);
            }
            catch (_b) { }
        }
        if (!savedDraftData) {
            alert("No thread saved or thread corrupted");
            return;
        }
        isCurrentlyPasting = true;
        pastingDraftIndex = 0;
        navigator.clipboard.writeText(savedDraftData[pastingDraftIndex]);
    }
    else {
        // save tweets
        console.log("save tweets");
        const draftElements = Array.from(getTweetDrafts());
        const draftContents = draftElements.map((draft) => draft.innerText.trim().replaceAll("\n\n", "\n")).filter(Boolean);
        localStorage.setItem(":sgunter:thread", JSON.stringify(draftContents));
    }
};
const pasteHandler = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (!isCurrentlyPasting)
        return;
    if (!savedDraftData.includes(yield navigator.clipboard.readText())) {
        isCurrentlyPasting = false;
        return;
    }
    pastingDraftIndex++;
    if (pastingDraftIndex >= savedDraftData.length) {
        navigator.clipboard.writeText("");
        isCurrentlyPasting = false;
        return;
    }
    (_a = getAddTweetButton()) === null || _a === void 0 ? void 0 : _a.focus();
    navigator.clipboard.writeText(savedDraftData[pastingDraftIndex]);
});
window.addEventListener("contextmenu", rightClickHandler);
window.addEventListener("paste", pasteHandler);
window.s = {
    getAddTweetButton,
    getTweetButton,
    getTweetDrafts,
};

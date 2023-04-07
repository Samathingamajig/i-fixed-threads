// ==UserScript==
// @name         Save Twitter Threads
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Save Twitter threads to local storage with easy reentry in case Twitter loses your thread in the ether
// @author       Samuel Gunter
// @match        https://twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        GM_registerMenuCommand
// ==/UserScript==

const getTweetButton = () => document.querySelector<HTMLDivElement>('[data-testid="tweetButton"]');
const getAddTweetButton = () => document.querySelector<HTMLDivElement>('[aria-label="Add Tweet"]');
const getTweetDrafts = () => document.querySelectorAll<HTMLDivElement>('[role="dialog"] [aria-label="Tweet text"]');

let isCurrentlyPasting = false;
let pastingDraftIndex = 0;
let savedDraftData: string[] = [];

const saveTweets = () => {
  const draftElements = Array.from(getTweetDrafts());
  const draftContents = draftElements.map((draft) => draft.innerText.trim().replaceAll("\n\n", "\n")).filter(Boolean);
  if (draftContents.length === 0) return;
  localStorage.setItem(":sgunter:thread", JSON.stringify(draftContents));
};

const loadTweets = () => {
  const rawData = localStorage.getItem(":sgunter:thread");
  if (rawData) {
    try {
      savedDraftData = JSON.parse(rawData);
    } catch {}
  }

  if (!savedDraftData) {
    alert("No thread saved or thread corrupted");
    return;
  }

  isCurrentlyPasting = true;
  pastingDraftIndex = 0;
  navigator.clipboard.writeText(savedDraftData[pastingDraftIndex]);
};

const rightClickHandler = (e: MouseEvent) => {
  if (!getTweetButton()?.contains(e.target as Node)) return;

  e.preventDefault();

  if (e.shiftKey) {
    loadTweets();
  } else {
    saveTweets();
  }
};

const leftClickHandler = (e: MouseEvent) => {
  if (!getTweetButton()?.contains(e.target as Node)) return;

  saveTweets();
};

const pasteHandler = async () => {
  if (!isCurrentlyPasting) return;
  if (!savedDraftData.includes(await navigator.clipboard.readText())) {
    isCurrentlyPasting = false;
    return;
  }
  pastingDraftIndex++;
  if (pastingDraftIndex >= savedDraftData.length) {
    navigator.clipboard.writeText("");
    isCurrentlyPasting = false;
    getAddTweetButton()?.focus();
    getAddTweetButton()?.blur();
    return;
  }
  getAddTweetButton()?.focus();
  navigator.clipboard.writeText(savedDraftData[pastingDraftIndex]);
};

window.addEventListener("contextmenu", rightClickHandler);
window.addEventListener("click", leftClickHandler, true);
window.addEventListener("paste", pasteHandler);

if (typeof GM_registerMenuCommand !== "undefined") {
  GM_registerMenuCommand("Save Thread", saveTweets, "s");
  GM_registerMenuCommand("Load Thread", loadTweets, "l");
}

(window as any).s = {
  getAddTweetButton,
  getTweetButton,
  getTweetDrafts,
};

const getTweetButton = () => document.querySelector<HTMLDivElement>('[data-testid="tweetButton"]');
const getAddTweetButton = () => document.querySelector<HTMLDivElement>('[aria-label="Add Tweet"]');
const getTweetDrafts = () => document.querySelectorAll<HTMLDivElement>('[role="dialog"] [aria-label="Tweet text"]');

const rightClickHandler = (e: MouseEvent) => {
  if (!getTweetButton()?.contains(e.target as Node)) return;

  e.preventDefault();

  if (e.shiftKey) {
    // load tweets
    console.log("load tweets");
  } else {
    // save tweets
    console.log("save tweets");
    const draftElements = Array.from(getTweetDrafts());
    const draftContents = draftElements.map((draft) => draft.innerText.trim().replaceAll("\n\n", "\n")).filter(Boolean);
    localStorage.setItem(":sgunter:thread", JSON.stringify(draftContents));
  }
};

window.addEventListener("contextmenu", rightClickHandler);

(window as any).s = {
  getAddTweetButton,
  getTweetButton,
  getTweetDrafts,
};

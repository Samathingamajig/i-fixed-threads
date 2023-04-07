const getTweetButton = () => document.querySelector<HTMLDivElement>('[data-testid="tweetButton"]');
const getAddTweetButton = () => document.querySelector<HTMLDivElement>('[aria-label="Add Tweet"]');

const rightClickHandler = (e: MouseEvent) => {
  if (!getTweetButton()?.contains(e.target as Node)) return;

  e.preventDefault();

  if (e.shiftKey) {
    // load tweets
    console.log("load tweets");
  } else {
    // save tweets
    console.log("save tweets");
  }
};

window.addEventListener("contextmenu", rightClickHandler);

(window as any).s = {
  getAddTweetButton,
  getTweetButton,
};

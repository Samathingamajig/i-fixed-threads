const getTweetButton = () => document.querySelector<HTMLDivElement>('[data-testid="tweetButton"]');
const getAddTweetButton = () => document.querySelector<HTMLDivElement>('[aria-label="Add Tweet"]');

const listener = (e: MouseEvent) => {
  e.preventDefault();

  if (e.shiftKey) {
    // load tweets
    console.log("load tweets");
  } else {
    // save tweets
    console.log("save tweets");
  }
};

const load = async () => {
  let tweetButton = getTweetButton();
  let attempts = 0;
  // max 5 seconds
  while (!tweetButton && attempts < 50) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    tweetButton = getTweetButton();
  }
  if (!tweetButton) {
    return;
  }
  tweetButton.addEventListener("contextmenu", listener);
};

window.addEventListener("load", load);
navigation.addEventListener("navigate", load);

(window as any).s = {
  getAddTweetButton,
  getTweetButton,
  load,
};

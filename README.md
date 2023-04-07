# Save Twitter Threads

A userscript that allows you to save Twitter threads to local storage with easy reentry in case Twitter loses your thread in the ether.

Why? Because [Theo](https://twitter.com/t3dotgg) has frequently lost threads due to Twitter's poor design (for example, if there's an error submitting a thread, you can't retry. it's just gone).

## 📜 Installation

- Install Tampermonkey from the [Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) (or [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/))
- After this, you have two options (only do one of these):
  - **GreasyFork** _(recommended)_: Go to the [GreasyFork page](https://greasyfork.org/en/scripts/463465-save-twitter-threads) and click the green "Install this script" button. This will take you to a page on Tampermonkey where you need to click "Install" to install the script.
  - **GitHub/Manual install** _(not recommended)_: Go to the [raw script page](https://raw.githubusercontent.com/Samathingamajig/save-twitter-threads/main/save-twitter-threads.user.js). Tampermonkey will automatically detect this file as a userscript (since the file is named `*.user.js`), so click the "Install" button to install it. If it doesn't, copy the entire contents of the script into the Tampermonkey script editor (**make sure you save**).
  - If none of these work, look up how to install a Tampermonkey userscript.

## 📝 Usage

### Saving a thread

To save a thread, you can either:

- Right click "Tweet all"
- Right click anywhere except that button, Tampermonkey > Save Twitter Threads > Save thread

### Loading a thread

To load a thread, you can either:

- Shift + right click "Tweet all"
- Right click anywhere except that button, Tampermonkey > Save Twitter Threads > Load thread

then alternate between <kbd>Cmd</kbd><kbd>v</kbd>/<kbd>Ctrl</kbd><kbd>v</kbd> and <kbd>Space</kbd> to paste and go to the next tweet box. When every tweet has been pasted, the script will automatically defocus to indicate this.

Unfortunately, Twitter doesn't allow you to fill in the tweet box or "Add tweet" programmatically, so you have to do the pasting and spacebar pressing yourself.

## 🚫 Uninstallation

If you don't want to use this script anymore, you can uninstall it anytime.

- Navigate to the Tampermonkey dashboard (click the extension icon in the top right, then click "Dashboard" at the bottom of the popup)
- Click the trashcan on the right side of the page

## 🐛 Bugs:

Please file bugs under the [Issues tab](https://github.com/Samathingamajig/save-twitter-threads/issues).

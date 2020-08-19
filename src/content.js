const port = chrome.runtime.connect({ });

port.onMessage.addListener(msg => {
  console.log(msg);
});

document.addEventListener('DOMNodeInserted', () => {
  port.postMessage('dom changed!!!');
});

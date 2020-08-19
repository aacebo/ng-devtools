chrome.devtools?.panels?.create(
  'Angular Devtools',
  'favicon.ico',
  'index.html'
);

chrome.tabs.query({ active: true }, ([tab]) => {
  chrome.tabs.executeScript(tab.id, {
    file: 'content.js'
  }, () => {
  });
});

chrome.runtime.onConnect.addListener(port => {
  port.onMessage.addListener(msg => {
    console.log(msg);
    port.postMessage({ pop: 'not a test' });
  });
});

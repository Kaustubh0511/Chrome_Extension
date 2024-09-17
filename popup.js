document.getElementById("fetchTitle").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    const tabTitle = currentTab.title;
    document.getElementById("title").textContent = tabTitle;
  });
});

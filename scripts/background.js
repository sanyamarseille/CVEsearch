// Create a context menu
chrome.contextMenus.create({
    title: 'RHEL',
    id: 'checkRHEL',
    contexts: ['selection']
});

chrome.contextMenus.create({
    title: 'NVD',
    id: 'checkNVD',
    contexts: ['selection']
});

// Catch the click on the context menu.
chrome.contextMenus.onClicked.addListener((info, tab) => {
    let CVE = info.selectionText;
    let URL_FULL = '';
    let URL_RHEL = 'https://access.redhat.com/security/cve/';
    let URL_NVD = 'https://nvd.nist.gov/vuln/detail/';

    if(info.menuItemId === "checkRHEL"){
        URL_FULL = URL_RHEL + CVE.toUpperCase();
    }
    else if(info.menuItemId === "checkNVD"){
        URL_FULL = URL_NVD + CVE.toUpperCase();
    }

    // Open new tab.
    chrome.tabs.create({
        url: URL_FULL
    });
});

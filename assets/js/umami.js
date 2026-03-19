/* Function to get the value of a query parameter */
function getQueryParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

/* Function to load the Umami script */
function loadUmami() {
  const script = document.createElement("script");
  script.defer = true;
  script.src = "https://cloud.umami.is/script.js";
  script.setAttribute("data-website-id", "4fcea96a-1ae3-4173-8ccd-f0d5ff4e8f49");
  document.head.appendChild(script);
}

/* Check the umami query parameter and load the script if necessary */
(function checkUmamiParam() {
  const umamiParam = getQueryParam("umami");

  if (umamiParam === null || umamiParam.toLowerCase() !== "false") {
    loadUmami();
  }
})();

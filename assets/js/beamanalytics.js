/* Function to get the value of a query parameter */
function getQueryParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

/* Function to load the beamanalytics script */
function loadBeamanalytics() {
  const script = document.createElement("script");
  script.src = "https://beamanalytics.b-cdn.net/beam.min.js";
  script.async = true;
  script.setAttribute("data-token", "b94aa7d4-c64e-4086-b7e3-d7d5ad700bab");
  document.head.appendChild(script);
}

/* Check the beamanalytics query parameter and load the script if necessary */
(function checkBeamanalyticsParam() {
  const beamanalyticsParam = getQueryParam("beamanalytics");

  if (beamanalyticsParam === null || beamanalyticsParam.toLowerCase() !== "false") {
    loadBeamanalytics();
  }
})();

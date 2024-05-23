function showMoreInfo(openInfo) {
  var time = openInfo.parentNode;
  var jobsDiv = time.parentNode;
  const moreInfoDiv = jobsDiv.nextElementSibling;
  if (moreInfoDiv.style.display === 'block') {
    moreInfoDiv.style.display = 'none';
} else {
    moreInfoDiv.style.display = 'block';
}
}

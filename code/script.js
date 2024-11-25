function showMoreInfo(openInfo) {
  const time = openInfo.parentNode;
  const jobsDiv = time.parentNode;
  var textContent = openInfo.textContent;
  const moreInfoDiv = jobsDiv.nextElementSibling;

  if (moreInfoDiv.style.display === 'block') {
    moreInfoDiv.style.display = 'none';
  } else {
    moreInfoDiv.style.display = 'block';
  }

  console.log(textContent)
  if (textContent == "+") {
    openInfo.textContent = "-"
  }
  else if (textContent == "-") {
    openInfo.textContent = "+"
  }

}

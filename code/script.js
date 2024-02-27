function showMoreInfo() {
  var timeDiv = this.getElementById("openInfo").parentElement;
  var moreInfo = this.getElementById("moreInfo");

  moreInfo == 'block';

  if (moreInfo.style.display == '' || moreInfo.style.display == 'none') {
    moreInfo.style.display = 'block';
  }
  else {
    moreInfo.style.display = 'none';
  }
  // moreInfoDiv.style.display = 'block';

}


function test(element) {
  var moreInfo = element.nextElementSibling; // Zugriff auf das nächste Geschwisterelement von jobs (das mehr Info-Element)

  if (moreInfo.style.display == '' || moreInfo.style.display == 'none') {
    moreInfo.style.display = 'block';
  } else {
    moreInfo.style.display = 'none';
  }
}
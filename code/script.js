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

function test() {
  var moreInfo = document.getElementById('moreInfo');
  var openInfo = document.getElementById('openInfo');

  if (moreInfo.style.display == '' || moreInfo.style.display == 'none') {
    moreInfo.style.display = 'block';
  }
  else {
    moreInfo.style.display = 'none';
  }
}
// scrollToTop
let mybutton = document.getElementById("scrollToTop");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Tabs
const divIds = ['helpTabs1', 'helpTabs2', 'helpTabs3', 'helpTabs4', 'helpTabs5', 'helpTabs6', 'helpTabs7', 'helpTabs8']; 
const headingIds = ['myHelps1', 'myHelps2', 'myHelps3', 'myHelps4', 'myHelps5', 'myHelps6', 'myHelps7', 'myHelps8']; 

const divHeadingMap = {};

divIds.forEach(function(divId, index) {
  const myDiv = document.getElementById(divId);
  const myHeading = document.getElementById(headingIds[index]);

  if (myDiv && myHeading) {
    myDiv.addEventListener('click', function() {
      scrollToHeading(myHeading);
    });
  }

  divHeadingMap[divId] = myHeading;
});

function scrollToHeading(heading) {
  heading.scrollIntoView({ behavior: 'smooth' });
}

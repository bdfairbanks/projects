window.addEventListener("load", function (){

  function showTab(){
    debugger;
    
    var allTabs = document.getElementsByClassName("tab");

    for (var i = 0; i < 3; i++){
      allTabs[i].style.display = "none";
    }

    var tabContentClass = this.dataset.tabContent;

    var tabContent = document.getElementsByClassName(tabContentClass)[0];
    tabContent.style.display = "block";
  }

  var tab1Title = document.getElementsByClassName("tab1Title")[0];
  var tab2Title = document.getElementsByClassName("tab2Title")[0];
  var tab3Title = document.getElementsByClassName("tab3Title")[0];

  tab1Title.addEventListener("click", showTab);
  tab2Title.addEventListener("click", showTab);
  tab3Title.addEventListener("click", showTab);
});
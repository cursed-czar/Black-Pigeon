
function selectTab(tabIndex) {
  //Hide All Tabs
  document.getElementById('tab1Content').style.display="none";
  document.getElementById('tab2Content').style.display="none";
  document.getElementById('tab3Content').style.display="none";
 
  document.getElementById('tab4Content').style.display="none";
  
  //Show the Selected Tab
  
  document.getElementById('tab' + tabIndex + 'Content').style.display="block";  
}









function selectBuy(buyIndex) {
  //Hide All Tabs
  document.getElementById('buy1Content').style.display="none";
  document.getElementById('buy2Content').style.display="none";
  document.getElementById('buy3Content').style.display="none";
 
  document.getElementById('buy4Content').style.display="none";
  
  //Show the Selected Tab
  
  document.getElementById('buy' + buyIndex + 'Content').style.display="block";  
}



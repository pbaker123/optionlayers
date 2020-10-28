const body = document.querySelector("body");
const optionSetLists = {
  boss: ["store","terminal","itemIdentifyList","itemIdentifyData","storeConfigurations","bossConfigurations"],
  bossSdk: ["asset","nrsc","businessPartner","customer","store","terminal","developmentOverride","itemIdentifyList","itemIdentifyData","storeConfigurations","bossConfigurations"],
  eboss: ["asset","nrsc","businessPartner","customer","store","terminal","itemIdentifyList","itemIdentifyData","storeConfigurations","bossConfigurations","consolidatedItemSecurity"],
  ebossSdk: ["asset","nrsc","businessPartner","customer","store","terminal","developmentOverride","itemIdentifyList","itemIdentifyData","storeConfigurations","bossConfigurations","consolidatedItemSecurity"],
  ebossStore: ["store","terminal","itemIdentifyList","storeConfigurations"],
  ebossStoreSdk: ["asset","nrsc","businessPartner","customer","store","terminal","developmentOverride","itemIdentifyList","storeConfigurations"],
};
const tabSelectionLists = {
  all: [["deviceManager","217px"],["miniLane","179px"],["integration","212px"],["testing","184px"],["storeTab","179px"],["security","217px"],["terminalTab","185px"],["corporate","211px"]],
  subset1: [["security","173px"],["integration","223px"],["corporate","226px"],["storeTab","170px"]],
  subset2: [["integration","200px"],["miniLane","196px"],["storeTab","175px"],["security","221px"],["corporate","400px"]],
  subset3: [["storeTab","112px"],["security","131px"],["miniLane","151px"]],
  subset4: [["terminalTab","140px"]],
};

var scope = "boss"; /* boss / sdk */
var bossType = "eboss"; /* eboss / boss */
var locationSetting = "eboss"; /* eboss / store */

body.addEventListener("input", function(e) {
  const name = e.target.name;
  if (name === "scope") {
    scope = e.target.value;
  } else if (name === "type") {
    bossType = e.target.value;
  } else if (name === "location") {
    locationSetting = e.target.value;
  };
  resetOptionSetFormat();
  displayOptionSetList();
});

body.addEventListener("click", function(e) {
  var clickValue;
  if (e.target.attributes.value) {
    clickValue = e.target.attributes.value.value;
  } else {
    return;
  };
  if (clickValue === "all") {
    resetOptionSetFormat();
    highlightOptionSet(e);
    displayOptionViewTabs(tabSelectionLists.all);
  } else if (clickValue === "subset1") {
    resetOptionSetFormat();
    highlightOptionSet(e);
    displayOptionViewTabs(tabSelectionLists.subset1);
  } else if (clickValue === "subset2") {
    resetOptionSetFormat();
    highlightOptionSet(e);
    displayOptionViewTabs(tabSelectionLists.subset2);
  } else if (clickValue === "subset3") {
    resetOptionSetFormat();
    highlightOptionSet(e);
    displayOptionViewTabs(tabSelectionLists.subset3);
  } else if (clickValue === "subset4") {
    resetOptionSetFormat();
    highlightOptionSet(e);
    displayOptionViewTabs(tabSelectionLists.subset4);
  } else if (clickValue === "noview") {
    resetOptionSetFormat();
    highlightOptionSet(e);
    document.querySelector(".noview").style.display = "block";
    document.querySelector(".optionSetLabel").style.display = "block";
  };
});

function displayOptionSetList () {
  for (i = 0; i < optionSetLists.ebossSdk.length; i++) {
    document.querySelector("." + optionSetLists.ebossSdk[i]).style.display = "none";
  }; 
  /* If instoreboss hide location, determine if boss or sdk loop through that option set list */
  if (bossType === "boss") {
    document.querySelector("#location").style.display = "none";
    document.querySelector("#locationLabel").style.display = "none";
    if (scope === "boss") {
      for (i = 0; i < optionSetLists.boss.length; i++) {
        document.querySelector("." + optionSetLists.boss[i]).style.display = "block";
      }; 
      return;
    } else if (scope === "sdk") {
      for (i = 0; i < optionSetLists.bossSdk.length; i++) {
        document.querySelector("." + optionSetLists.bossSdk[i]).style.display = "block";
      }; 
      return;
    } else {
      return;
    } 
    return;
  } else if (bossType === "eboss") {
    document.querySelector("#location").style.display = "inline";
    document.querySelector("#locationLabel").style.display = "inline";
    if (scope === "boss" && locationSetting === "eboss") {
      for (i = 0; i < optionSetLists.eboss.length; i++) {
        document.querySelector("." + optionSetLists.eboss[i]).style.display = "block";
      }; 
      return;
    } else if (scope === "boss" && locationSetting === "store") {
      for (i = 0; i < optionSetLists.ebossStore.length; i++) {
        document.querySelector("." + optionSetLists.ebossStore[i]).style.display = "block";
      }; 
      return;
    } else if (scope === "sdk" && locationSetting === "eboss") {
      for (i = 0; i < optionSetLists.ebossSdk.length; i++) {
        document.querySelector("." + optionSetLists.ebossSdk[i]).style.display = "block";
      }; 
      return;
    } else if (scope === "sdk" && locationSetting === "store") {
      for (i = 0; i < optionSetLists.ebossStoreSdk.length; i++) {
        document.querySelector("." + optionSetLists.ebossStoreSdk[i]).style.display = "block";
      }; 
    };
    return;
  };
};

function resetOptionSetFormat () {
  for (i=0; i < tabSelectionLists.all.length; i++) {
    document.querySelector("." + tabSelectionLists.all[i][0]).style.display = "none";
  };

  document.querySelector(".noview").style.display = "none";
  document.querySelector(".optionSetLabel").style.display = "none";

  for (i=0; i < optionSetLists.ebossSdk.length; i++) {
    const classSelection = "." + optionSetLists.ebossSdk[i];
    document.querySelector(classSelection).style.backgroundColor = "";
    document.querySelector(classSelection).style.color = "#000000";
  };
};

function highlightOptionSet (e) {
  const targetClass = "." + e.target.className;
  document.querySelector(targetClass).style.backgroundColor = "#3399ff";
  document.querySelector(targetClass).style.color = "#FFFFFF";
};

function displayOptionViewTabs (tabs) {
  document.querySelector(".optionSetLabel").style.display = "block";
  for (i=0; i < tabs.length; i++) {
    document.querySelector("." + tabs[i][0]).style.display = "block";
    document.querySelector("." + tabs[i][0]).style.width = tabs[i][1];
    document.querySelector("." + tabs[i][0]).style.order = i + 1;
  }
};

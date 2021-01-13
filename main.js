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

body.addEventListener("click", function(e) {
  setGlobalVariables(e);
  resetOptionSetFormat();
  clearOptionSetList();
  displayOptionSetList();
});

body.addEventListener("click", function(e) {
  if (e.target.attributes.value) {
    resetOptionSetFormat();
    switch (e.target.attributes.value.value) {
      case "all":
        highlightOptionSet(e.target.className);
        displayOptionViewTabs(tabSelectionLists.all);
        break;
      case "subset1":
        highlightOptionSet(e.target.className);
        displayOptionViewTabs(tabSelectionLists.subset1);
        break;
      case "subset2":
        highlightOptionSet(e.target.className);
        displayOptionViewTabs(tabSelectionLists.subset2);
        break;
      case "subset3":
        highlightOptionSet(e.target.className);
        displayOptionViewTabs(tabSelectionLists.subset3);
        break;
      case "subset4":
        highlightOptionSet(e.target.className);
        displayOptionViewTabs(tabSelectionLists.subset4);
        break;
      case "iil":
        highlightOptionSet(e.target.className);
        displayDbOptions("iil");
        break;
      case "iid":
        highlightOptionSet(e.target.className);
        displayDbOptions("iid");
        break;
      case "sc":
        highlightOptionSet(e.target.className);
        displayDbOptions("sc");
        break;
      case "bc":
        highlightOptionSet(e.target.className);
        displayDbOptions("bc");
        break;
      case "cis":
        highlightOptionSet(e.target.className);
        displayDbOptions("cis");
        break;
    }
  } else {
    return;
  };
});

function displayOptionSetList () {
  switch (bossType) {
    case "boss":
      setBossOptionSets();
      break;
    case "eboss":
      setEBossOptionSets();
      break;
  };
};

function setBossOptionSets () {
  document.querySelector("#location").style.display = "none";
  document.querySelector("#locationLabel").style.display = "none";
  switch (scope) {
    case "boss":
      for (i = 0; i < optionSetLists.boss.length; i++) {
        document.querySelector("." + optionSetLists.boss[i]).style.display = "block";
      };
      break;
    case "sdk":
      for (i = 0; i < optionSetLists.bossSdk.length; i++) {
        document.querySelector("." + optionSetLists.bossSdk[i]).style.display = "block";
      };
      break;
  };
};

function setEBossOptionSets () {
  document.querySelector("#location").style.display = "inline";
  document.querySelector("#locationLabel").style.display = "inline";
  switch (locationSetting) {
    case "eboss":
      setEBossBossLayer();
      break;
    case "store":
      setEBossStoreLayer();
      break;
  };
};

function setEBossBossLayer () {
  switch (scope) {
    case "boss":
      for (i = 0; i < optionSetLists.eboss.length; i++) {
        document.querySelector("." + optionSetLists.eboss[i]).style.display = "block";
      }; 
      break;
    case "sdk":
      for (i = 0; i < optionSetLists.ebossSdk.length; i++) {
        document.querySelector("." + optionSetLists.ebossSdk[i]).style.display = "block";
      }; 
      break;
  };
};

function setEBossStoreLayer () {
  switch (scope) {
    case "boss":
      for (i = 0; i < optionSetLists.ebossStore.length; i++) {
        document.querySelector("." + optionSetLists.ebossStore[i]).style.display = "block";
      }; 
      break;
    case "sdk":
      for (i = 0; i < optionSetLists.ebossStoreSdk.length; i++) {
        document.querySelector("." + optionSetLists.ebossStoreSdk[i]).style.display = "block";
      }; 
      break;
  };
};

function clearOptionSetList () {
  for (i = 0; i < optionSetLists.ebossSdk.length; i++) {
    document.querySelector("." + optionSetLists.ebossSdk[i]).style.display = "none";
  }; 
}

function resetOptionSetFormat () {
  for (i=0; i < tabSelectionLists.all.length; i++) {
    document.querySelector("." + tabSelectionLists.all[i][0]).style.display = "none";
  };
  for (i=0; i < optionSetLists.ebossSdk.length; i++) {
    const classSelection = "." + optionSetLists.ebossSdk[i];
    document.querySelector(classSelection).style.backgroundColor = "";
    document.querySelector(classSelection).style.color = "#000000";
  };
  document.querySelector(".dbOptionLabel").style.display = "none";
  document.querySelector(".optionSetLabel").style.display = "none";
  document.querySelector(".iil").style.display = "none";
  document.querySelector(".iid").style.display = "none";
  document.querySelector(".sc").style.display = "none";
  document.querySelector(".bc").style.display = "none";
  document.querySelector(".cis").style.display = "none"; 
};

function setGlobalVariables (e) {
  switch (e.target.name) {    
    case "scope":
      scope = e.target.value;
      break;
    case "type":
      bossType = e.target.value;
      break;
    case "location":
      locationSetting = e.target.value;
      break;
  }; 
};

function highlightOptionSet (targetClass) {
  document.querySelector("." + targetClass).style.backgroundColor = "#3399ff";
  document.querySelector("." + targetClass).style.color = "#FFFFFF";
};

function displayOptionViewTabs (tabs) {
  document.querySelector(".optionSetLabel").style.display = "block";
  for (i=0; i < tabs.length; i++) {
    document.querySelector("." + tabs[i][0]).style.display = "block";
    document.querySelector("." + tabs[i][0]).style.width = tabs[i][1];
    document.querySelector("." + tabs[i][0]).style.order = i + 1;
  };
};

function displayDbOptions (dbOption) {
  document.querySelector(".dbOptionLabel").style.display = "block";
  document.querySelector("." + dbOption).style.display = "block";
}

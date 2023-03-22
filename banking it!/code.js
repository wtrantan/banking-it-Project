var money;
var pie;
var pieMoney;
var drinks;
var drinksMoney;
var wood;
var unlockDrink;
var woodMoney;
var woodUnlock;
var unlockWood;
var drinkUnlock;
var pieUpgradeCount;
var drinkUpgradeCount;
var woodUpgradeCount;
var winCondition;
var upgradePie;
var upgradePieCost;
var upgradePieCounter;
var pieSum;
var upgradeDrink;
var upgradeDrinkCost;
var drinkSum;
var upgradeDrinkCounter;
var upgradeWood;
var upgradeWoodCost;
var woodSum;
var upgradeWoodCounter;
var random;
var cheat=false;
//
game();
function game() {
  upgradeUpdate();
  buttons();
  moneyUpdate();
  allDrinks();
  allPie();
  allWood();
  music();
  cheatChecker();
}
function music() {
  playSound("assets/C418---Haggstrom---Minecraft-Volume-Alpha.mp3", true);
}
function pieIncrements() {
 pie*=1.5;
}
function drinkIncrements() {
 drinks*=1.5;
}
function woodIncrements() {
  wood*=1.5;
}

function reset() {
  if (cheat==false) {
    money = 0;
  } else if (cheat==true) {
    money = 999999;
    cheat = false;
  } else {
    
  }
  pie = 1000;
  pieMoney= 1;
  drinks = 5000;
  drinksMoney = 5;
  wood = 50000;
  unlockDrink = 5;
  woodMoney = 50;
  woodUnlock = false;
  unlockWood = 1000;
  drinkUnlock = false;
  pieUpgradeCount = 0;
  drinkUpgradeCount = 0;
  woodUpgradeCount = 0;
  winCondition = 10000;
  upgradePie = 0;
  upgradePieCost = 500;
  upgradePieCounter = 0;
  upgradeDrink=0;
  upgradeDrinkCost=1000;
  upgradeDrinkCounter = 0;
  upgradeWood=0;
  upgradeWoodCost=5000;
  upgradeWoodCounter = 0;
 
  setText("drinkCount", 0);
  setText("pieCount", 0);
  setText("woodCount", 0);
  showElement("drinkUnlockPrice");
  showElement("woodUnlockPrice");
  setProperty("woodBtn", "image", "icon://fa-lock");
  setProperty("drinkBtn", "image", "icon://fa-lock");
  textSetting();
}
function upgradeUpdate() {
  setText("upgradePieLabel", (("Upgrade: "+  upgradePieCounter)+"\n $") + upgradePieCost);
  setText("upgradeBiscuitLabel", (("Upgrade: "+  upgradeWoodCounter)+"\n $") + upgradeWoodCost);
  setText("upgradeDrinkLabel", (("Upgrade: "+  upgradeDrinkCounter)+"\n $") + upgradeDrinkCost);
}
function textSetting() {
  setText("upgradeBiscuitLabel", "Upgrade: $"+upgradeWoodCost);
  setText("drinkUnlockPrice", "Unlock Soda: $"+unlockDrink);
  setText("woodUnlockPrice", "Unlock Biscuit: $"+unlockWood);
  setText("pieLabel", "Pie: $"+pieSum);
  setText("drinkLabel2", "Soda: $"+drinkSum);
  setText("woodLabel", "Biscuit: $"+woodSum);
  setText("nextBtn", "Win: $"+winCondition);
  setText("upgradePieBtn", "Upgrade");
  setText("upgradeDrinksBtn", "Upgrade");
  setText("upgradeWoodBtn", "Upgrade");
  setText("upgradePieLabel", (("Upgrade: "+  upgradePieCounter)+"\n $") + upgradePieCost);
  setText("upgradeBiscuitLabel", (("Upgrade: "+  upgradeWoodCounter)+"\n $") + upgradeWoodCost);
  setText("upgradeDrinkLabel", (("Upgrade: "+  upgradeDrinkCounter)+"\n $") + upgradeDrinkCost);
}
function buttons() {
  onEvent("startBtn", "click", function( ) {
    playSound("assets/category_objects/metallic_switch.mp3", false);
    reset();
    setScreen("gameScreen");
    moneyUpdate();
  });
  onEvent("instructions", "click", function( ) {
    setScreen("instructionScreen");
    playSound("assets/category_objects/metallic_switch.mp3", false);
  });
  onEvent("nextBtn", "click", function( ) {
    if (money>=winCondition) {
      setScreen("winScreen");
      playSound("assets/category_achievements/peaceful_win_8.mp3", false);
    } else {
      playSound("assets/category_retro/retro_game_echo_error_2.mp3", false);
    }
  });
  onEvent("creditsBtn", "click", function( ) {
    setScreen("creditScreen");
    playSound("assets/category_objects/metallic_switch.mp3", false);
  });
  onEvent("back", "click", function( ) {
    playSound("assets/category_objects/metallic_switch.mp3", false);
    setScreen("title");
  });
  onEvent("backBtn", "click", function( ) {
    playSound("assets/category_objects/metallic_switch.mp3", false);
    setScreen("title");
  });
  onEvent("yesBtn", "click", function( ) {
    playSound("assets/category_objects/metallic_switch.mp3", false);
    cheatChecker();
    reset();
    stopTimedLoop();
    setScreen("title");
  });
  onEvent("resetBtn", "click", function( ) {
    setScreen("warningScreen");
    playSound("assets/category_objects/metallic_switch.mp3", false);
  });
  onEvent("playAgain", "click", function( ) {
    playSound("assets/category_objects/metallic_switch.mp3", false);
    stopTimedLoop();
    cheatChecker();
    reset();
    setScreen("title");
  });
  onEvent("noBtn", "click", function( ) {
    playSound("assets/category_objects/metallic_switch.mp3", false);
    setScreen("gameScreen");
    moneyUpdate();
  });
  onEvent("cheat", "click", function( ) {
    cheatThing();
    cheatChecker();
    playSound("assets/category_objects/metallic_switch.mp3", false);
  });
}
function cheatThing() {
  if (cheat==false) {
    cheat = true;
  } else if ((cheat==true)) {
    cheat = false;
  }
}
function cheatChecker() {
  if (cheat==false) {
    setProperty("cheat", "text", "Cheats: Off");
  } else if ((cheat==true)) {
    setProperty("cheat", "text", "Cheats: On");
  }
}
function moneyUpdate() {
  timedLoop(100, function() {
    pieSum = upgradePie+pieMoney;
    drinkSum = upgradeDrink+drinksMoney;
    woodSum = upgradeWood+woodMoney;
    setText("moneyLabel", "$"+Math.round(money));
    setText("pieCost", "$"+Math.round(pie));
    setText("drinkCost", "$"+Math.round(drinks));
    setText("woodCost", "$"+Math.round(wood));
    setText("pieLabel", ("Pie: $"+pieSum));
    textSetting();
    setText("woodLabel", "Biscuit: $"+woodSum);
    hideAll();
  
  });
}
function managerSound() {
  random = randomNumber(0, 1);
  if (random==0) {
    playSound("assets/category_male_voiceover/power_up_male.mp3", false);
  } else if ((random==1)) {
    playSound("assets/category_female_voiceover/power_up_female.mp3", false);
  }
}
function hideAll() {
  if (money<upgradePieCost) {
    hideElement("upgradePieBtn");
  } else if ((money>=upgradePieCost)) {
    showElement("upgradePieBtn");
  }
  if (money<upgradeDrinkCost||drinkUnlock==false) {
    hideElement("upgradeDrinksBtn");
  } else if ((money>=upgradeDrinkCost)) {
    showElement("upgradeDrinksBtn");
  }
  if (money<upgradeWoodCost||woodUnlock==false) {
    hideElement("upgradeWoodBtn");
  } else if ((money>=upgradeWoodCost)) {
    showElement("upgradeWoodBtn");
  }
}
function allPie() {
  onEvent("managerBtn", "click", function( ) {
    if (money>=pie) {
      money -= pie;
      pieUpgradeCount +=1;
      setText("pieCount", pieUpgradeCount);
      managerSound();
      
      pieIncrements();
      timedLoop(500, function() {
      money+=Math.round(pieSum);
      setText("moneyLabel", "$"+ Math.round(money));
        });
    } else {
      playSound("assets/category_retro/retro_game_echo_error_2.mp3", false);
    }
  });
  onEvent("upgradePieBtn", "click", function() {
    if (money>=upgradePieCost) {
      playSound("assets/category_achievements/sharp_win_3.mp3", false);
      money -= upgradePieCost;
      upgradePieCounter += 1;
      upgradePie += 5;
      textSetting();
      upgradePieCost += Math.round(upgradePieCost*0.5);
      setText("upgradePieLabel", "Upgrade: $"+upgradePieCost);
    } else {
      playSound("assets/category_retro/retro_game_echo_error_2.mp3", false);
    }
  });
  onEvent("pieBtn", "click", function( ) {
  money+=Math.round(pieSum);
  });
}

//drink
function allDrinks() {
  onEvent("upgradeDrinksBtn", "click", function( ) {
    if (money>=upgradeDrinkCost&&drinkUnlock==true) {
      playSound("assets/category_achievements/sharp_win_3.mp3", false);
      money -= upgradeDrinkCost;
      upgradeDrinkCounter += 1;
      upgradeDrink += 10;
      setText("drinkLabel2", "Soda: $"+drinkSum);
      upgradeUpdate();
      upgradeDrinkCost += Math.round(upgradeDrinkCost*0.5);
    } else {
      playSound("assets/category_retro/retro_game_echo_error_2.mp3", false);
    }
  });
  onEvent("drinkBtn", "click", function( ) {
  if (money>=unlockDrink && drinkUnlock==false) {
    drinkUnlock = true;
    money-=unlockDrink;
    playSound("Cash-Register-(Kaching)---Sound-Effect-(HD).mp3", false);
    setProperty("drinkBtn", "image", "https://i.ya-webdesign.com/images/cartoon-milkshake-png-7.png");
    hideElement("drinkUnlockPrice");
  } else if ((drinkUnlock==true)) {
    money += drinksMoney+upgradeDrink;
  } else {
    playSound("assets/category_retro/retro_game_echo_error_2.mp3", false);
  }
  
  });
  onEvent("drinkManagerBtn", "click", function( ) {
    if (money>=drinks && drinkUnlock==true) {
      managerSound();
      money -= drinks;
      drinkUpgradeCount +=1;
      setText("drinkCount", drinkUpgradeCount);
      
      drinkIncrements();
      timedLoop(1000, function() {
      money+=Math.round(drinkSum);
      setText("moneyLabel", "$"+ Math.round(money));
      
        });
    } else {
      playSound("assets/category_retro/retro_game_echo_error_2.mp3", false);
    }
  });
}

//Biscuit
function allWood() {
  onEvent("woodBtn", "click", function( ) {
  if (money>=unlockWood && woodUnlock==false) {
    woodUnlock = true;
    money-=unlockWood;
    playSound("Cash-Register-(Kaching)---Sound-Effect-(HD).mp3", false);
    setProperty("woodBtn", "image", "https://cdn0.iconfinder.com/data/icons/bakery-10/512/Cookie-512.png");
    hideElement("woodUnlockPrice");
  } else if ((woodUnlock==true)) {
    money += woodSum;
  } else {
    playSound("assets/category_retro/retro_game_echo_error_2.mp3", false);
  }
  
  });
  onEvent("upgradeWoodBtn", "click", function( ) {
    if (money>=upgradeWoodCost&&woodUnlock==true) {
      playSound("assets/category_achievements/sharp_win_3.mp3", false);
      money -= upgradeWoodCost;
      upgradeWoodCounter += 1;
      upgradeWood += 50;
      upgradeWoodCost += Math.round(upgradeWoodCost*0.5);
      upgradeUpdate();
      setText("upgradeWoodBtn", "Upgrade");
    } else {
      playSound("assets/category_retro/retro_game_echo_error_2.mp3", false);
    }
  });
  onEvent("woodManagerBtn", "click", function( ) {
    if (money>=wood&&woodUnlock==true) {
      money -= wood;
      woodUpgradeCount +=1;
      setText("woodCount", woodUpgradeCount);
      managerSound();
      woodIncrements();
      timedLoop(2000, function() {
      money+=Math.round(woodSum);
      setText("moneyLabel", "$"+ Math.round(money));
      
        });
    } else {
      playSound("assets/category_retro/retro_game_echo_error_2.mp3", false);
    }
  });
}

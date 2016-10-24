// Push tags into vars to be controlled (turned on or off) with clicks
var $statistics = $('#statistics'),
    $statisticsWapper = $('#statisticsWapper'),
    statisticsVisible = true;

var $watchedFrom = $('#watchedFrom'),
    $watchedFromWrapper = $('#watchedFromWrapper'),
    watchedFromVisible = false;

var $accountInfo = $('#accountInfo'),
    $accountInfoWrapper = $('#accountInfoWrapper'),
    accountInfoVisible = false;

// Button 1
$statistics.click(function(){
  //If watchedFrom was selected at the time
  if(watchedFromVisible == true)
  {
    removeWatchedFrom();
    addStatistics();
    watchedFromVisible = false;
    statisticsVisible = true;
  }

  // Else the accountInfo was selected at the time
  if(accountInfoVisible == true)
  {
    removeAccountInfo();
    addStatistics();
    accountInfoVisible = false;
    statisticsVisible = true;
  }
});

// Button 2
$watchedFrom.click(function(){
  //If statistics was selected at the time
  if(statisticsVisible == true)
  {
    removeStatistics();
    addWatchedFrom();
    statisticsVisible = false;
    watchedFromVisible = true;
  }

  // Else the accountInfo was selected at the time
  if(accountInfoVisible == true)
  {
    removeAccountInfo();
    addWatchedFrom();
    accountInfoVisible = false;
    watchedFromVisible = true;
  }
});

// Button 3
$accountInfo.click(function(){
  //If statistics was selected at the time
  if(statisticsVisible == true)
  {
    removeStatistics();
    addAccountInfo();
    statisticsVisible = false;
    accountInfoVisible = true;
  }

  // Else the watchedFrom was selected at the time
  if(watchedFromVisible == true)
  {
    removeWatchedFrom();
    addAccountInfo();
    watchedFromVisible = false;
    accountInfoVisible = true;
  }
});

// Add or remove sections
// Add or remove statistics
function addStatistics(){
  $statisticsWapper.slideUp(0,function(){
    $statisticsWapper.removeClass('hide')
         .slideDown('fast');
  });
}
function removeStatistics() {
  $statisticsWapper.slideUp('fast',function(){
    $statisticsWapper.addClass('hide')
         .slideDown(0);
  });
}

// Add or remove watchedFrom
function addWatchedFrom(){
  $watchedFromWrapper.slideUp(0,function(){
    $watchedFromWrapper.removeClass('hide')
         .slideDown('fast');
  });
}
function removeWatchedFrom() {
  $watchedFromWrapper.slideUp('fast',function(){
    $watchedFromWrapper.addClass('hide')
         .slideDown(0);
  });
}

// Add or remove accountInfo
function addAccountInfo(){
  $accountInfoWrapper.slideUp(0,function(){
    $accountInfoWrapper.removeClass('hide')
         .slideDown('fast');
  });
}
function removeAccountInfo() {
  $accountInfoWrapper.slideUp('fast',function(){
    $accountInfoWrapper.addClass('hide')
         .slideDown(0);
  });
}

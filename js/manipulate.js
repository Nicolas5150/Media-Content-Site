// Push tags into vars to be controlled (turned on or off) with clicks
// HULU CONTENT
var $statisticsHulu = $('#statisticsHulu'),
    $statisticsWapperHulu = $('#statisticsWapperHulu'),
    statisticsVisibleHulu = true;

var $watchedFromHulu = $('#watchedFromHulu'),
    $watchedFromWrapperHulu = $('#watchedFromWrapperHulu'),
    watchedFromVisibleHulu = false;

var $accountInfoHulu = $('#accountInfoHulu'),
    $accountInfoWrapperHulu = $('#accountInfoWrapperHulu'),
    accountInfoVisibleHulu = false;

// TWITTER CONTENT
var $statisticsTwitter = $('#statisticsTwitter'),
    $statisticsWapperTwitter = $('#statisticsWapperTwitter'),
    statisticsVisibleTwitter = true;

var $watchedFromTwitter = $('#watchedFromTwitter'),
    $watchedFromWrapperTwitter = $('#watchedFromWrapperTwitter'),
    watchedFromVisibleTwitter = false;

var $accountInfoTwitter = $('#accountInfoTwitter'),
    $accountInfoWrapperTwitter = $('#accountInfoWrapperTwitter'),
    accountInfoVisibleTwitter = false;

// NETFLIX CONTENT
var $statisticsNetflix = $('#statisticsNetflix'),
    $statisticsWapperNetflix = $('#statisticsWapperNetflix'),
    statisticsVisibleNetflix = true
var $watchedFromNetflix = $('#watchedFromNetflix'),
    $watchedFromWrapperNetflix = $('#watchedFromWrapperNetflix'),
    watchedFromVisibleNetflix = false
var $accountInfoNetflix = $('#accountInfoNetflix'),
    $accountInfoWrapperNetflix = $('#accountInfoWrapperNetflix'),
    accountInfoVisibleNetflix = false

// HULU CONTENT
// Button 1
$statisticsHulu.click(function(){
  //If watchedFrom was selected at the time
  if(watchedFromVisibleHulu == true)
  {
    removeWatchedFromHulu();
    addStatisticsHulu();
    watchedFromVisibleHulu = false;
    statisticsVisibleHulu = true;
  }

  // Else the accountInfo was selected at the time
  if(accountInfoVisibleHulu == true)
  {
    removeAccountInfoHulu();
    addStatisticsHulu();
    accountInfoVisibleHulu = false;
    statisticsVisibleHulu = true;
  }
});

// Button 2
$watchedFromHulu.click(function(){
  //If statistics was selected at the time
  if(statisticsVisibleHulu == true)
  {
    removeStatisticsHulu();
    addWatchedFromHulu();
    statisticsVisibleHulu = false;
    watchedFromVisibleHulu = true;
  }

  // Else the accountInfo was selected at the time
  if(accountInfoVisibleHulu == true)
  {
    removeAccountInfoHulu();
    addWatchedFromHulu();
    accountInfoVisibleHulu = false;
    watchedFromVisibleHulu = true;
  }
});

// Button 3
$accountInfoHulu.click(function(){
  //If statistics was selected at the time
  if(statisticsVisibleHulu == true)
  {
    removeStatisticsHulu();
    addAccountInfoHulu();
    statisticsVisibleHulu = false;
    accountInfoVisibleHulu = true;
  }

  // Else the watchedFrom was selected at the time
  if(watchedFromVisibleHulu == true)
  {
    removeWatchedFromHulu();
    addAccountInfoHulu();
    watchedFromVisibleHulu = false;
    accountInfoVisibleHulu = true;
  }
});

// TWITTER CONTENT
// Button 1
$statisticsTwitter.click(function(){
  //If watchedFrom was selected at the time
  if(watchedFromVisibleTwitter == true)
  {
    removeWatchedFromTwitter();
    addStatisticsTwitter();
    watchedFromVisibleTwitter = false;
    statisticsVisibleTwitter = true;
  }

  // Else the accountInfo was selected at the time
  if(accountInfoVisibleTwitter == true)
  {
    removeAccountInfoTwitter();
    addStatisticsTwitter();
    accountInfoVisibleTwitter = false;
    statisticsVisibleTwitter = true;
  }
});

// Button 2
$watchedFromTwitter.click(function(){
  //If statistics was selected at the time
  if(statisticsVisibleTwitter == true)
  {
    removeStatisticsTwitter();
    addWatchedFromTwitter();
    statisticsVisibleTwitter = false;
    watchedFromVisibleTwitter = true;
  }

  // Else the accountInfo was selected at the time
  if(accountInfoVisibleTwitter == true)
  {
    removeAccountInfoTwitter();
    addWatchedFromTwitter();
    accountInfoVisibleTwitter = false;
    watchedFromVisibleTwitter = true;
  }
});

// Button 3
$accountInfoTwitter.click(function(){
  //If statistics was selected at the time
  if(statisticsVisibleTwitter == true)
  {
    removeStatisticsTwitter();
    addAccountInfoTwitter();
    statisticsVisibleTwitter = false;
    accountInfoVisibleTwitter = true;
  }

  // Else the watchedFrom was selected at the time
  if(watchedFromVisibleTwitter == true)
  {
    removeWatchedFromTwitter();
    addAccountInfoTwitter();
    watchedFromVisibleTwitter = false;
    accountInfoVisibleTwitter = true;
  }
});

//NETFLIX CONTENT
// Button 1
$statisticsNetflix.click(function(){
  //If watchedFrom was selected at the time
  if(watchedFromVisibleNetflix == true)
  {
    removeWatchedFromNetflix();
    addStatisticsNetflix();
    watchedFromVisibleNetflix = false;
    statisticsVisibleNetflix = true;
  }

  // Else the accountInfo was selected at the time
  if(accountInfoVisibleNetflix == true)
  {
    removeAccountInfoNetflix();
    addStatisticsNetflix();
    accountInfoVisibleNetflix = false;
    statisticsVisibleNetflix = true;
  }
});

// Button 2
$watchedFromNetflix.click(function(){
  //If statistics was selected at the time
  if(statisticsVisibleNetflix == true)
  {
    removeStatisticsNetflix();
    addWatchedFromNetflix();
    statisticsVisibleNetflix = false;
    watchedFromVisibleNetflix = true;
  }

  // Else the accountInfo was selected at the time
  if(accountInfoVisibleNetflix == true)
  {
    removeAccountInfoNetflix();
    addWatchedFromNetflix();
    accountInfoVisibleNetflix = false;
    watchedFromVisibleNetflix = true;
  }
});

// Button 3
$accountInfoNetflix.click(function(){
  //If statistics was selected at the time
  if(statisticsVisibleNetflix == true)
  {
    removeStatisticsNetflix();
    addAccountInfoNetflix();
    statisticsVisibleNetflix = false;
    accountInfoVisibleNetflix = true;
  }

  // Else the watchedFrom was selected at the time
  if(watchedFromVisibleNetflix == true)
  {
    removeWatchedFromNetflix();
    addAccountInfoNetflix();
    watchedFromVisibleNetflix = false;
    accountInfoVisibleNetflix = true;
  }
});


// Add or remove sections
// HULU CONTENT
function addStatisticsHulu(){
  $statisticsWapperHulu.slideUp(0,function(){
    $statisticsWapperHulu.removeClass('hide')
         .slideDown('fast');
  });
}
function removeStatisticsHulu() {
  $statisticsWapperHulu.slideUp('fast',function(){
    $statisticsWapperHulu.addClass('hide')
         .slideDown(0);
  });
}

// Add or remove watchedFrom
function addWatchedFromHulu(){
  $watchedFromWrapperHulu.slideUp(0,function(){
    $watchedFromWrapperHulu.removeClass('hide')
         .slideDown('fast');
  });
}
function removeWatchedFromHulu() {
  $watchedFromWrapperHulu.slideUp('fast',function(){
    $watchedFromWrapperHulu.addClass('hide')
         .slideDown(0);
  });
}

// Add or remove accountInfo
function addAccountInfoHulu(){
  $accountInfoWrapperHulu.slideUp(0,function(){
    $accountInfoWrapperHulu.removeClass('hide')
         .slideDown('fast');
  });
}
function removeAccountInfoHulu() {
  $accountInfoWrapperHulu.slideUp('fast',function(){
    $accountInfoWrapperHulu.addClass('hide')
         .slideDown(0);
  });
}

// TWITTER CONTENT
function addStatisticsTwitter(){
  $statisticsWapperTwitter.slideUp(0,function(){
    $statisticsWapperTwitter.removeClass('hide')
         .slideDown('fast');
  });
}
function removeStatisticsTwitter() {
  $statisticsWapperTwitter.slideUp('fast',function(){
    $statisticsWapperTwitter.addClass('hide')
         .slideDown(0);
  });
}

// Add or remove watchedFrom
function addWatchedFromTwitter(){
  $watchedFromWrapperTwitter.slideUp(0,function(){
    $watchedFromWrapperTwitter.removeClass('hide')
         .slideDown('fast');
  });
}
function removeWatchedFromTwitter() {
  $watchedFromWrapperTwitter.slideUp('fast',function(){
    $watchedFromWrapperTwitter.addClass('hide')
         .slideDown(0);
  });
}

// Add or remove accountInfo
function addAccountInfoTwitter(){
  $accountInfoWrapperTwitter.slideUp(0,function(){
    $accountInfoWrapperTwitter.removeClass('hide')
         .slideDown('fast');
  });
}
function removeAccountInfoTwitter() {
  $accountInfoWrapperTwitter.slideUp('fast',function(){
    $accountInfoWrapperTwitter.addClass('hide')
         .slideDown(0);
  });
}

// NETFLIX CONTENT
function addStatisticsNetflix(){
  $statisticsWapperNetflix.slideUp(0,function(){
    $statisticsWapperNetflix.removeClass('hide')
         .slideDown('fast');
  });
}
function removeStatisticsNetflix() {
  $statisticsWapperNetflix.slideUp('fast',function(){
    $statisticsWapperNetflix.addClass('hide')
         .slideDown(0);
  });
}

// Add or remove watchedFrom
function addWatchedFromNetflix(){
  $watchedFromWrapperNetflix.slideUp(0,function(){
    $watchedFromWrapperNetflix.removeClass('hide')
         .slideDown('fast');
  });
}
function removeWatchedFromNetflix() {
  $watchedFromWrapperNetflix.slideUp('fast',function(){
    $watchedFromWrapperNetflix.addClass('hide')
         .slideDown(0);
  });
}

// Add or remove accountInfo
function addAccountInfoNetflix(){
  $accountInfoWrapperNetflix.slideUp(0,function(){
    $accountInfoWrapperNetflix.removeClass('hide')
         .slideDown('fast');
  });
}
function removeAccountInfoNetflix() {
  $accountInfoWrapperNetflix.slideUp('fast',function(){
    $accountInfoWrapperNetflix.addClass('hide')
         .slideDown(0);
  });
}

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

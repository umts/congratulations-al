  var text = "Congrat ulations Al on 35 years! Good luck! \n".split(' ');
  var hour = 0;
  var minute = 0;
  var screen = 0;
  var num_screens = 0;
  var index = 0;

$(function(){
  $('#go').click(function(){
    hour = parseFloat($('#hour').val());
    minute = parseFloat($('#minute').val());
    screen = parseFloat($('#screen').val());
    num_screens = parseFloat($('#num_screens').val());
    $('input').hide();
    $('button').hide();
    var launchTime = getTime(hour,minute);
    var currentTime = new Date().getTime();
    setTimeout('startShow()',(launchTime - currentTime) + screen*500);
  });
  

  function getTime(hour,minutes) {
    var t = new Date();
    t.setHours(hour);
    t.setMinutes(minutes);
    t.setSeconds(0);
    t.setMilliseconds(0);
    return t;
  }

});

function startShow(){
  $('#content').text(text[screen]);
  index++;
  setInterval('changeText()',2000);
}

function changeText(){
  if(index*num_screens+screen < text.length){
    $('#content').text(text[index*num_screens+screen])
  }
  else{
    //$('#content').hide();
  }
  
  index++;
}

function startCountdown(callback) {
    let count = 10;
  
    const timerCallback = function() {
      if(count!=0){
        document.getElementById("counts").innerHTML = count;
      }else{
        document.getElementById("counts").innerHTML ="";
        document.getElementById("msg").innerHTML = "Happy Independence Day";
      }
      count--;
  
      if (count >= 0) {
        setTimeout(timerCallback, 1000);
      } else {
        callback();
      }
    };
  
    setTimeout(timerCallback, 1000);
  }
  
  startCountdown(function() {
    let animate = document.getElementsByClassName("animate-charcter");
    animate.style.animation = '2s';
  });
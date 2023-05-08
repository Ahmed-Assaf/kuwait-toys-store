function counterDown(date) {
  // Set the date we're counting down to
  var countDownDate = new Date(date).getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("counter").innerHTML = ` 
    <div class="nums-cards"> 
        <div class="num-card">
            <h5 class="num">${days}</h5>
            <p>يوم</p>
        </div>
        <div class="num-card">
            <h5 class="num">${hours}</h5>
            <p>ساعة</p>
        </div>
        
        <div class="num-card">
            <h5 class="num">${minutes}</h5>
            <p>دقائق</p>
        </div>
        
        <div class="num-card">
            <h5 class="num">${seconds}</h5>
            <p>ثوانى</p>
        </div>
    </div>
    `;
    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("counter").innerHTML = "EXPIRED";
    }
  }, 1000);
}

counterDown("12-16-2022");

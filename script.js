var index = false;
    function toggle() {
      if (index === false)  {
        index = true;
        document.getElementById("tg2").style.animationName = "bg";
        document.getElementById("inner2").style.animationName = "bg";
        document.getElementById("F").style.animationName = "fade";
        document.getElementById("outer2").style.animationName = "tg1";
        document.getElementById("FN20").style.animationName = "tg2";
        document.getElementById("FN21").style.animationName = "tg3";
        document.getElementById("FN22").style.animationName = "tg4";
      }
      else  {
        index = false;
        document.getElementById("tg2").style.animationName = "gb";
        document.getElementById("inner2").style.animationName = "gb";
        document.getElementById("F").style.animationName = "apear";
        document.getElementById("outer2").style.animationName = "gt1";
        document.getElementById("FN20").style.animationName = "gt2";
        document.getElementById("FN21").style.animationName = "gt3";
        document.getElementById("FN22").style.animationName = "gt4";
      }
    }
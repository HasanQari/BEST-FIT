function fitCal() {
    var L = document.getElementById("l").value;
    var W = document.getElementById("w").value;
    var S1 = document.getElementById("s1").checked;
    var S2 = document.getElementById("s2").checked;
    var f = document.getElementById("result");
    let r = 0;

    // S = parseInt(S);
    L = parseInt(L);
    W = parseInt(W);
    if (S1 == true && S2 == false) {
      r = L - 100;
      console.log("111", r)
      f.value = r;
    } else if (S2 == true && S1 == false) {
      r = L - 110;
      console.log("222", r)
      f.value = r;
    } else { console.log(S1); console.log(S2) }
  }
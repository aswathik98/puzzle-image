function startGame() {
  //rotated version of tiles of tiles 
  //so that  user can rotate the tiles to get correct image .

  document.querySelector("#p11").style.transform = "rotate(270deg)";
  document.querySelector("#p12").style.transform = "rotate(180deg)";
  document.querySelector("#p13").style.transform = "rotate(90deg)";
  document.querySelector("#p21").style.transform = "rotate(180deg)";
  document.querySelector("#p22").style.transform = "rotate(270deg)";
  document.querySelector("#p23").style.transform = "rotate(180deg)";
  document.querySelector("#p31").style.transform = "rotate(90deg)";
  document.querySelector("#p32").style.transform = "rotate(180deg)";
  document.querySelector("#p33").style.transform = "rotate(90deg)";




  //timer function


  let timeleft = 60;


  let timer = setInterval(function () {
    timeleft--;;
    document.getElementById("time").innerHTML = timeleft < 10 ? "Time :" + "0" + timeleft + " sec" : "Time : " + timeleft + " sec";

    // console.log(timeleft);


    if (timeleft <= 0) {
      clearInterval(timer);
      document.getElementById("p11").style.visibility = "hidden";
      document.getElementById("p12").style.visibility = "hidden";
      document.getElementById("p13").style.visibility = "hidden";
      document.getElementById("p21").style.visibility = "hidden";
      document.getElementById("p22").style.visibility = "hidden";
      document.getElementById("p23").style.visibility = "hidden";
      document.getElementById("p31").style.visibility = "hidden";
      document.getElementById("p32").style.visibility = "hidden";
      document.getElementById("p33").style.visibility = "hidden";
      document.getElementById("tiles").style.background = 'url("https://media3.giphy.com/media/gLjD6hjRaLcFslzpvR/giphy.gif")';


    }

  }, 1000);



  var first_click = true; //  variables for Rotation of each tile
  var current_rotation = 0;
  var rotation = 0;

  // represents the index.

  var i;

  // represents array .

  var ar = [];
  document.querySelector("#p11").addEventListener("click", function () {

    //Each index is reserved for each tile and value of i keeps on changing for consecutive tiles.
    i = 0;
    // We are storing the value 1 in that particular index if the tile is rotated correctly.
    if (ar[i] == 1) {

      // then again if the tile is rotated it may move from correct position to wrong position so we again set the value to 0.

      ar[i] = 0;

      // here we set first_click to false just so that it doesn't  get restarted.

      first_click = false;
    }

    //this paricular if  condition  will excecute first when user clicks on first tile for first time.

    if (first_click) {

      // Here we set 270 deg as initial position of the tile.

      current_rotation = 270;

      // We don't need first_click from here ownward  so we set it to false otherwise for next
      //click it will once again set the current_rotation to 270 deg.

      first_click = false;

    }

    // the first tile will transform.

    document.querySelector("#p11").style.transform =
      "rotate(" + current_rotation + "deg)";
    rotation++;

    // Meanwhile the next rotation value is getting ready.

    current_rotation += 90;

    //A full rotation takes 360 deg but since 
    // we rotate before itself we take the value as 360 + 90 = 450
    // current_rotation == 90 is if the tile is already set  to 0 deg
    // we can directly set ar[i] value as 1.

    if (current_rotation == 450 || current_rotation == 90) {

      // to be used for win condition. 

      ar[i] = 1;

      // Here we are setting the first_click  to true just so that other tile's first_click  
      // will start with true value.

      first_click = true;

      // if ar[i] is set as 1 we once again set the current_rotation = 90 deg
      //just so that if the player may once again spin the tile not knowing if he/she has
      // already placed it correctly.

      current_rotation = 90;
    }
    // prints the elements of array ar[].

    console.log(ar);
    document.getElementById("rotation").textContent = "Rotations : " + rotation;
    win();

  });

  document.querySelector("#p12").addEventListener("click", function () {
    i = 1;

    if (ar[i] == 1) {
      ar[i] = 0;

      first_click = false;
    }
    if (first_click) {
      current_rotation = 180;
      first_click = false;
    }
    document.querySelector("#p12").style.transform =
      "rotate(" + current_rotation + "deg)";
    rotation++;
    current_rotation += 90;
    if (current_rotation == 450 || current_rotation == 90) {
      ar[i] = 1;
      first_click = true;
      current_rotation = 90;
    }
    console.log(ar);
    document.getElementById("rotation").textContent = "Rotations : " + rotation;
    win();
  });

  document.querySelector("#p13").addEventListener("click", function () {

    i = 2;
    if (ar[i] == 1) {
      ar[i] = 0;

      first_click = false;
    }
    if (first_click) {
      current_rotation = 90;
      first_click = false;
    }
    document.querySelector("#p13").style.transform =
      "rotate(" + current_rotation + "deg)";
    rotation++;
    current_rotation += 90;
    if (current_rotation == 450 || current_rotation == 90) {
      ar[i] = 1;
      first_click = true;
      current_rotation = 90;
    }
    console.log(ar);


    document.getElementById("rotation").textContent = "Rotations : " + rotation;
    win();


  });
  document.querySelector("#p21").addEventListener("click", function () {

    i = 3;
    if (ar[i] == 1) {
      ar[i] = 0;

      first_click = false;
    }
    if (first_click) {
      current_rotation = 180;
      first_click = false;
    }
    document.querySelector("#p21").style.transform =
      "rotate(" + current_rotation + "deg)";
    rotation++;
    current_rotation += 90;
    if (current_rotation == 450 || current_rotation == 90) {
      ar[i] = 1;
      first_click = true;
      current_rotation = 90;
    }
    console.log(ar);

    document.getElementById("rotation").textContent = "Rotations : " + rotation;
    win();


  });
  document.querySelector("#p22").addEventListener("click", function () {
    i = 4;
    if (ar[i] == 1) {
      ar[i] = 0;

      first_click = false;
    }
    if (first_click) {
      current_rotation = 270;
      first_click = false;
    }

    document.querySelector("#p22").style.transform =
      "rotate(" + current_rotation + "deg)";
    rotation++;
    current_rotation += 90;
    if (current_rotation == 450 || current_rotation == 90) {
      ar[i] = 1;
      first_click = true;
      current_rotation = 90;
    }
    console.log(ar);

    document.getElementById("rotation").textContent = "Rotations : " + rotation;
    win();


  });
  document.querySelector("#p23").addEventListener("click", function () {
    i = 5;

    if (ar[i] == 1) {
      ar[i] = 0;

      first_click = false;
    }
    if (first_click) {
      current_rotation = 180;
      first_click = false;
    }
    document.querySelector("#p23").style.transform =
      "rotate(" + current_rotation + "deg)";
    rotation++;
    current_rotation += 90;
    if (current_rotation == 450 || current_rotation == 90) {
      ar[i] = 1;
      first_click = true;
      current_rotation = 90;
    }
    console.log(ar);
    document.getElementById("rotation").textContent = "Rotations : " + rotation;
    win();


  });
  document.querySelector("#p31").addEventListener("click", function () {

    i = 6;

    if (ar[i] == 1) {
      ar[i] = 0;

      first_click = false;
    }
    if (first_click) {
      current_rotation = 90;
      first_click = false;
    }
    document.querySelector("#p31").style.transform =
      "rotate(" + current_rotation + "deg)";
    rotation++;
    rotation++;
    current_rotation += 90;
    if (current_rotation == 450 || current_rotation == 90) {
      ar[i] = 1;
      first_click = true;
      current_rotation = 90;
    }
    console.log(ar);
    document.getElementById("rotation").textContent = "Rotations : " + rotation;
    win();

  });

  document.querySelector("#p32").addEventListener("click", function () {
    i = 7;

    if (ar[i] == 1) {
      ar[i] = 0;

      first_click = false;
    }
    if (first_click) {
      current_rotation = 180;
      first_click = false;
    }
    document.querySelector("#p32").style.transform =
      "rotate(" + current_rotation + "deg)";
    rotation++;
    current_rotation += 90;
    if (current_rotation == 450 || current_rotation == 90) {
      ar[i] = 1;
      first_click = true;
      current_rotation = 90;
    }
    console.log(ar);

    document.getElementById("rotation").textContent = "Rotations : " + rotation;
    win();


  });
  document.querySelector("#p33").addEventListener("click", function () {

    i = 8;
    if (ar[i] == 1) {
      ar[i] = 0;

      first_click = false;
    }
    if (first_click) {
      current_rotation = 90;
      first_click = false;
    }
    document.querySelector("#p33").style.transform =
      "rotate(" + current_rotation + "deg)";

    rotation++;
    current_rotation += 90;
    if (current_rotation == 450 || current_rotation == 90) {
      ar[i] = 1;
      first_click = true;
      current_rotation = 90;
    }
    console.log(ar);
    document.getElementById("rotation").textContent = "Rotations : " + rotation;
    win();

  });



  let newar = [];

  function win() {

    //Here newar will be array of 1s.
    newar = ar.filter(function (ele) {


      if (ele == 1) {
        return 1;
      }


    });

    if (newar.length === 9) {
      clearInterval(timer);
      alert("WoW.. You completed the image");
      alert("You are being headed to next image for the challenge");
      window.location = "html/medium.html";
    }
  }

}
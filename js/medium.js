function startGame() {

    document.querySelector("#p11").style.transform = "rotate(270deg)";
    document.querySelector("#p12").style.transform = "rotate(180deg)";
    document.querySelector("#p13").style.transform = "rotate(90deg)";
    document.querySelector("#p21").style.transform = "rotate(180deg)";
    document.querySelector("#p22").style.transform = "rotate(270deg)";
    document.querySelector("#p23").style.transform = "rotate(180deg)";
    document.querySelector("#p31").style.transform = "rotate(90deg)";
    document.querySelector("#p32").style.transform = "rotate(180deg)";
    document.querySelector("#p33").style.transform = "rotate(90deg)";



    let timeleft = 30;

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


    var first_click = true;
    var current_rotation = 0;
    var rotation = 0;
    var i;
    var ar = [];
    document.querySelector("#p11").addEventListener("click", function () {
        i = 0;
        if (ar[i] == 1) {
            ar[i] = 0;

            first_click = false;
        }
        if (first_click) {
            current_rotation = 270;
            first_click = false;
        }
        document.querySelector("#p11").style.transform =
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
        newar = ar.filter(function (ele) {
            if (ele == 1) {
                return 1;
            }


        });

        if (newar.length === 9) {
            clearInterval(timer);
            window.location = "../html/congrats.html";


        }
    }
}
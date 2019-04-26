$(document).ready(function(){
      // création des variables
      var nbGame = 0;
      var win = 0;
      var draw = 0;
      var lose = 0;
      $("#push").click(function() {
          // choix du player
        var charactere = $("select").val();
        // choix de l'ordinateur
        // 1 = pierre, 2 = feuille, 3 = ciseau
        var iaRandom = Math.floor(Math.random() * 3) + 1;
        // console.log(charactere);
        // console.log(iaRandom);
        switch (charactere) {
          // Dans le cas ou j'ai choisi Pierre
          case "rock":
            // Dans le cas ou le bot choisi ...
            switch (iaRandom) {
              case 1: //Pierre
                console.log("Égalité !");
                $("#draw").text(++draw);
                $("#res").text("Pierre vs Pierre");
              break;
              case 2: //Feuille
                console.log("Perdu !");
                $("#lose").text(++lose);
                $("#res").text("Pierre vs Feuille");
              break;
              case 3: //Ciseaux
                console.log("Gagné !");
                $("#win").text(++win);
                $("#res").text("Pierre vs Ciseaux");
              break;
            }
          break;
          // Dans le cas ou j'ai choisi Feuille
          case "sheet":
            // Dans le cas ou le bot choisi ...
            switch (iaRandom) {
              case 1: //Pierre
              console.log("Gagné !");
                $("#win").text(++win);
                $("#res").text("Pierre vs Ciseaux");
                $("#res").text("Feuille vs Pierre");
              break;
              case 2: //Feuille
                console.log("Égalité");
                $("#draw").text(++draw);
                $("#res").text("Feuille vs Feuille");
              break;
              case 3: //Ciseaux
                console.log("Perdu !");
                $("#lose").text(++lose);
                $("#res").text("Feuille vs Ciseaux");
              break;
            }
          break;
          // Dans le cas ou j'ai choisi Ciseaux
          case "scissor":
            // Dans le cas ou le bot choisi ...
            switch (iaRandom) {
              case 1: //Pierre
                console.log("Perdu !");
                $("#lose").text(++lose);
                $("#res").text("Ciseaux vs Pierre");
              break;
              case 2: //Feuille
                console.log("Gagné !");
                $("#win").text(++win);
                $("#res").text("Pierre vs Ciseaux");
                $("#res").text("Ciseaux vs Feuille");
              break;
              case 3: //Ciseaux
                console.log("Égalité !");
                $("#draw").text(++draw);
                $("#res").text("Ciseaux vs Ciseaux");
              break;
            }
          break;
        }
        // On recalcule le win ratio à la fin de chaque boucle (afin d'éviter un décalage) puis on l'affiche
        // Affichage du win ratio seulement s'il y a des win ou lose (afin d'éviter le NaN)
        if (win != 0 || lose != 0) {
          ratio = ((win/(win+lose))*100).toFixed(2);
          $("#ratio").text(ratio);
        }
      });
  });

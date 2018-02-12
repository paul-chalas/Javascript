let Damier;
(function() {
    "use strict";

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    Damier = function(largeur, hauteur, destination){
        this.largeur = largeur;
        this.hauteur = hauteur;
        this.destination = $(destination);
        this.joueur = 1;
        this.continuer = 1;
        this.slots = [];
        let self = this;

        $('.joueur').html('Joueur ' + this.joueur);

        let poser_pion = function(){

            if ($(this).data('value') === '' && self.continuer === 1){

                let car = (self.joueur ? 'X' : 'O');
                $(this).data('value', car).html(car);
                self.slots[$(this).data('x')][$(this).data('y')] = car;

                //Vérifications (seulement en 3X3)
                //Lignes
                for (let i = 0; i < self.slots.length ; ++i){
                    if((self.slots[i][0] === car && self.slots[i][1] === car && self.slots[i][2] === car)) {
                        terminer_partie();
                    }
                }
                for (let i = 0; i < self.slots.length ; ++i){
                    if((self.slots[0][i] === car && self.slots[1][i] === car && self.slots[2][i] === car)) {
                        terminer_partie();
                    }
                }
                //diagonales
                if((self.slots[0][0] === car && self.slots[1][1] === car && self.slots[2][2] === car)) {
                    terminer_partie();
                }
                if((self.slots[0][2] === car && self.slots[1][1] === car && self.slots[2][0] === car)) {
                    terminer_partie();
                }

                //Match nul
                let finish = 1;
                for (let i = 0; i < self.slots.length ; ++i){
                    for (let j = 0; j < self.slots.length ; ++j){
                        if(self.slots[i][j] === '') {
                            finish = 0;
                        }
                    }
                }
                if (finish === 1){
                    terminer_partie(true);
                }

                //Changer de joueur
                if (self.continuer === 1){
                    if (self.joueur === 1){
                        self.joueur = 0;
                    }else{
                        self.joueur = 1;
                    }
                    $('.joueur').html('Joueur ' + self.joueur);
                }
            }
        };

        let terminer_partie = function(draw = false){
            self.continuer = 0;
            if (draw){
                $('.joueur').html('Match nul !');
            }else{
                $('.joueur').html('Le joueur ' + self.joueur + ' est super fort !! Il a gagné :o');
            }
            $(".newGame").append($('<button />').html('Nouvelle partie').click(function () {
                location.reload();
            }));

        };

        let creer_case_noire = function(x,y) {
            return $('<td />').data('x', x).data('y', y).data('value', '').addClass('case-noire').html(' ').click(poser_pion);
        };
        let creer_case_blanche = function(x,y) {
            return $('<td />').data('x', x).data('y', y).data('value', '').addClass('case-blanche').html(' ').click(poser_pion);
        };


        for (let i = 0; i < this.largeur; ++i){
            let tr = $('<tr />');
            this.slots.push([]);

            for (let j = 0; j < this.hauteur; ++j){
                this.slots[i].push('');
                let slot = (((j+i)%2) === 0 ? creer_case_blanche(i,j) : creer_case_noire(i,j));

                tr.append(slot);
            }
            this.destination.append(tr);
        }
    }

}) ();

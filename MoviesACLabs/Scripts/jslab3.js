var poz = 1;
var curr_id;

function addmovie() {
    curr_id = "id" + poz;
    var a = $("#link").val();
    $("ul").append('<li ' + curr_id + '>' + a + '<button type="button" id="removebutton'+poz+'">x</button></li>');
    
    var rmv1 = $("#removebutton" + poz);
    rmv1.click(scoateFilm);

    poz++;

};

var btn = $("#addbutton");
btn.click(addmovie);



function scoateFilm() {
    $(this).parent().remove();

}


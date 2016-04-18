var link = [];
var a = 0;
var position = 0;

$(".slider ul li").each(function () {

    link[a] = $("img", this).attr("src");
    a++;

});

for (var i = 0; i < link.length; i++) {

    $("ol").append('<li id="dot' + i + '" class="standard"></li>');
    dot1(i);
};

function dot1(i) {

    $("#dot" + i).bind("click", function () {
        $("#poza").attr("src", link[i]);

        $("ol li").each(function () {
            $(this).removeClass("highlight");
        });

        $(this).addClass("highlight");
        position = i;

    });

}

$("#dot0").addClass("highlight");

function functionPrevious() {

    if (position == 0) {
        position = link.length - 1;
    }
    else {
        position--;
    }

    $("#poza").attr("src", link[position]);

    $("ol li").each(function () {
        $(this).removeClass("highlight");
    });

    $("#dot" + position).addClass("highlight");

}

function functionNext() {

    if (position == link.length - 1) {
        position = 0;
    }
    else {
        position++;
    }

    $("#poza").attr("src", link[position]);

    $("ol li").each(function () {
        $(this).removeClass("highlight");
    });

    $("#dot" + position).addClass("highlight");

}



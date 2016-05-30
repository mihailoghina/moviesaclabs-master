var cats = [
    "http://f.tqn.com/y/cats/1/S/k/S/4/Eggie-3rdcowDec15-1600x1200.jpg",
    "http://d38zt8ehae1tnt.cloudfront.net/images/news/700_1e9a6d965c94a9a7acc7402a3ab9cdf3.jpg",
    "http://ipadinsight.com/wp-content/uploads/2013/07/My-Cat-by-Brian-Le-Lion.jpg",
    "http://d38zt8ehae1tnt.cloudfront.net/images/news/700_c654eb94b8a5bb0656673717f7058983.jpg"
];

var culori = [
    "#e1e1ea",
    "#b4b4cb",
    "#9696b6",
    "#696996"
];

var position = 2;
var lungime = cats.length;

var image = document.getElementById("poza");


function functionPrevious() {
    
    if (position == 0) {
        position = lungime - 1;
    }
    else
    {
        position--;
    }
    image.src = cats[position];
}

function functionNext() {
    
    if(position == lungime-1 ) 
    {
        position = 0;
    }
    else {
        position++;
    }
    image.src = cats[position];
}

var prev = document.getElementById("prevbutton");
var next = document.getElementById("nextbutton");

prev.addEventListener("click", functionPrevious, false);
next.addEventListener("click", functionNext, false);


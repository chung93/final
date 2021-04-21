const albums = [
    { name: "Album 1", price: 12.99, inCart: false }, 
    { name: "Album 2", price: 14.99, inCart: false }, 
    { name: "Album 3", price: 9.99, inCart: false }, 
    { name: "Album 4", price: 19.99, inCart: false }
];

function imgloop() {
    var files = [
        "~/Images/Album1.png",
        "~/Images/Album2.png",
        "~/Images/Album3.png",
        "~/Images/Album4.png"
    ]
    for (x = 0; files.length > x; x++) {
        var img = new Image(200, 200);
        img.src = files[x];
    }
  }

img.addEventListener("click", inCart.albums = true)
if (inCart == true) {
    alert("Item already in cart")
}
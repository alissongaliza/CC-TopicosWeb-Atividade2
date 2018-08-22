
function load_categories(){
    
    var items_category = 5;

    for (var i = 1; i <= items_category; i++)
    {
        var li = document.createElement("li");  
        li.className = "category";

        var a = document.createElement("a");
        a.innerHTML = "Subfile " + i;

        li.appendChild(a);
        document.getElementById("category-list-recipient").appendChild(li);
    }
}
//Assignment links
const links = [
    {
        label: "Week 1",
        url: "week1/story_editor.html"
    }
]

//Display links in the portal
const list = document.querySelector("#list");

function displayLinks(link) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    
    li.setAttribute("class", "liList");
    a.setAttribute("class", "aList");
    a.setAttribute("href", `${link.url}`)
    a.innerHTML = `${link.label} Project`;

    li.appendChild(a);
    list.appendChild(li);
}

links.forEach(displayLinks);
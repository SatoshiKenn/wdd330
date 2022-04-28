//Get year code
const p_year = document.querySelector("#copyright");
const today = new Date();
const year = today.getFullYear();
p_year.innerHTML = `&copy; ${year}  :|: Kennette Guevara :|: SV-CL`;

//Assignment links
const links = [
    {
        label: "Week 1",
        url: "week1/index.html"
    },
    {
        label: "Week 2",
        url: "week2/index.html"
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
    a.innerHTML = `${link.label}`;

    li.appendChild(a);
    list.appendChild(li);
}

links.forEach(displayLinks);
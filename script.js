
let ids = ["about", "projects", "contact"];
function hideSections () {
        let sections = document.querySelectorAll("section");
	for (let i=0; i<sections.length; i++) {
	    sections[i].style.display = "none";
	}

}

function renderElement (id) {
   hideSections();
   let el = document.getElementById(id);
   el.style.display = "block"
}

renderElement(ids[0])
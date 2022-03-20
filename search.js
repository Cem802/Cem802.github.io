const searchresulttemplate = document.querySelector("[searchresult]")
const searchresultcontainer = document.querySelector("[search-result-container]")
const searchInput = document.querySelector("[data-search]")

let results = []

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    console.log(results)
    results.forEach(result => {
        const isVisible = result.Link.toLowerCase().includes(value)
        result.Element.classList.toggle("hide", !isVisible)
    })
})

function successFunc(data) {
    results = data.reverse().map(result =>{
        const card = searchresulttemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const body = card.querySelector("[data-body]")
        header.textContent = result.Link
        body.textContent = result.Reason
        searchresultcontainer.append(card)
        return { Link: result.Link, Reason: result.Reason, Element: card}
    })
}

Sheetsu.read("https://sheetsu.com/apis/v1.0su/ee1e2a2be88d", {}, successFunc);

const links = document.querySelectorAll('a')

function handleClick(event) {
    event.preventDefault();
    fetchPage(event.currentTarget.href)
    window.history.pushState(null, null, event.currentTarget.href)
}

async function fetchPage(url) {
    const pageRespose = await fetch(url)
    const pageText = await pageRespose.text()
    replaceContent(pageText)
}

function replaceContent(newText) {
    const newHtml = document.createElement('div');
    newHtml.innerHTML = newText

    const oldContent = document.querySelector('.content')
    const newContent = newHtml.querySelector('.content')

    oldContent.innerHTML = newContent.innerHTML
    document.title = newHtml.querySelector('title').innerText
}

window.addEventListener('popstate', () => {
    fetchPage(window.location.href)
})

links.forEach(link => {
    link.addEventListener('click', handleClick)
})
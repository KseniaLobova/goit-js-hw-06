const categories = document.querySelectorAll('.item')
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const items = category.firstElementChild.textContent
    // console.log(items)
    const elements = category.lastElementChild.children
    // console.log(elements.length)
   
    console.log(`Category: ${items}
    Elements:${elements.length}`)
})


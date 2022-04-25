function duplicateMenu(){
    //get all of the anchor elements from the nav bar
    let topList = document.querySelectorAll('ul#primaryNavigation li a')

    //create the new list items for the bottom of the page
    let newList = document.createElement('ul')

    //take topList and duplicate it to newList

    topList.forEach(menuItem => {
        let newLI = document.createElement('li')
        let newLink = document.createElement('a')
        newLink.setAttribute('href', menuItem.getAttribute('href'))
        // copy the textContent from upper menu to new menu
       newLI.appendChild(newLink)
        
       
       newList.appendChild(newLI)
       newLink.textContent = menuItem.text
       document.querySelector('#smallNavArea').appendChild(newList)
       
    })

}

duplicateMenu()
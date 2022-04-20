function tellStory(){
    //nounArray
    //strip whitespace var theArray = theString.split(/\s+/);
    //const nounArray = [document.querySelector('#noun').select()]
    //console.log(nounArray)
    /*const nounArray =[]
    const noun = document.getElementById("noun")
    const theWord = noun
    res = theWord.replace(/\s+/," ").split(" ");
    nounArray = res;
    console.log(nounArray)
    */
    /*
    var nounArray = document.querySelector('#noun').value().split('\n');

    var verbArray = document.querySelector('#verb').value().split('\n');

    var adjectiveArray = document.querySelector('#adjective').value().split('\n');
    */
   const nounArea = document.getElementById('noun')
   const nounArray = nounArea.value.split(/\s+/)

   const verbArea = document.getElementById('verb')
   const verbArray = verbArea.value.split('\n')

   const adjectiveArea = document.getElementById('adjective')
   const adjectiveArray = adjectiveArea.value.split(String.fromCharCode(10))
    

    //verbArray

    //adjectiveArray

    const myStory = `Once upon a time there were four ${nounArray[0]}s named Phillip, adn, and, and Josh. They were ${verbArray[0]}ing
    ${adjectiveArray[0]}ly when suddenly they saw a ${nounArray[2]} in the distance.`

    document.querySelector('#story').innerHTML = myStory

    //get a reference to the story p querySelector('#story') = myStory

}
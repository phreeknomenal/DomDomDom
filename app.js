

// Select content prior to page load.
document.addEventListener("DOMContentLoaded", function () {
    /// Build button, build & insert text, insert button.
    let btn = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    btn.appendChild(btnText);
    document.body.appendChild(btn);

    // Sets ID counter.
    let idCount = 0;

    // Listen for button clicks. 
    btn.addEventListener('click', function () {
        // Increment idCount.
        idCount++

        // Build & insert the div.
        let myDiv = document.createElement('div');

        // set myDiv class
        myDiv.className = 'square';

        // set increment count as ID
        myDiv.id = idCount;

        // Build p element and text
        let myDivInsert = document.createElement('p');
        let myDivText = document.createTextNode(idCount);

        // text inside myDiv styles
        myDivInsert.style.color = '#fff';

        // insert text into myDiv
        myDivInsert.appendChild(myDivText);
        myDiv.appendChild(myDivInsert);

        // insert myDiv
        document.body.appendChild(myDiv);

        //set opacity of p to 0
        myDivInsert.style.opacity = '0';

        // listens for mouse to hover over square and reveal p
        myDiv.addEventListener('mouseenter', () => myDivInsert.style.opacity = '1');

        // listens for mouse to leave hover over square and hide p
        myDiv.addEventListener('mouseleave', () => myDivInsert.style.opacity = '0');

        myDiv.addEventListener('click', function () {
            colors = ['#f09aac', '#ac2231', '#205cde', '#cce345', '#345ace', '#e98762', '#3a44fe', '#0fac12']

            // Function that gets random colors
            function getRandomColors() {
                // Search thru colors array for random color
                let myRandomColor = colors[Math.floor(Math.random() * colors.length)];
                // Returns #+value.
                return myRandomColor;
            };

            myDiv.style.backgroundColor = getRandomColors();
        });

        //listen for doubleclick on div
        myDiv.addEventListener("dblclick", squareDoubleClick);
        function squareDoubleClick() {
            //check for odd or even
            if (myDiv.id % 2 === 0) {
                let elementID = parseInt(myDiv.id) + 1;
                let element = document.getElementById(elementID);

                if (element == null){
                    alert(`Square with the ID of ${elementID} does not exist!`);
                } else {
                    element.parentNode.removeChild(element);
                }   
            } else {
                let elementID = parseInt(myDiv.id) - 1;
                let element = document.getElementById(elementID);

                if (element == null){
                    alert(`Square with the ID of ${elementID} does not exist!`);
                } else {
                    element.parentNode.removeChild(element);
                } 
            }
        }
        
    

    });

});























// document.addEventListener("DOMContentLoaded", function (){
//     let paragraph = document.createElement('p');
//     let text = document.createTextNode('This can be whatever text you want it to be');

//     paragraph.style.color = 'red';
//     paragraph.style.textTransform = "uppercase";
//     paragraph.className = "some-paragraph";

//     paragraph.appendChild(text);
//     document.body.appendChild(paragraph);

//     let button = document.createElement('button');
//     let btnText = document.createTextNode('Click Me!');
//     button.appendChild(btnText);
//     document.body.appendChild(button);

//     button.addEventListener('click', function(){
//         let h1 = document.createElement('h1');
//         let h1Text = document.createTextNode('Ive been clicked!');
//         h1.appendChild(h1Text);
//         document.body.appendChild(h1);
//     });
// });




























































// // Create button
// let button = document.createElement('button');
// //Create button text
// let btnText = document.createTextNode('Add Square');
// // Add text to button
// button.appendChild(btnText);


// window.addEventListener('DOMContentLoaded', function () {
//     document.body.appendChild(button);
// })
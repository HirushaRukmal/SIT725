const cardList = [
    {
        title: "Kitten 2",
        image: "image/kitten2.png",
        link: "About Kitten 2",
        description: "A cute little kitten!"
    },
    {
        title: "Kitten 3",
        image: "image/kitten3.png",
        link: "About Kitten 3",
        description: "An adorable fluffy kitten!"
    }
];

// Function to handle button click
const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!");
};

// Function to add cards dynamically
const addCards = (items) => {
    console.log("Adding new cards..."); // Debugging step
    items.forEach(item => {
        let itemToAppend = `
            <div class="col s4">
                <div class="card medium">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="${item.image}">
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">
                            ${item.title}<i class="material-icons right">more_vert</i>
                        </span>
                        <p><a href="#">${item.link}</a></p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">
                            ${item.title}<i class="material-icons right">close</i>
                        </span>
                        <p>${item.description}</p>
                    </div>
                </div>
            </div>`;

        // Append new card
        $("#card-section").append(itemToAppend);
    });

    console.log("Cards added successfully!"); // Debugging step
};

// jQuery ready function to ensure DOM is loaded
$(document).ready(function () {
    console.log("Document ready!"); // Debugging step

    $('.materialboxed').materialbox();

    // Attach event listener
    $('#clickMe').click(() => {
        console.log("Button clicked!"); // Debugging step
        clickMe();
        addCards(cardList);
    });
});

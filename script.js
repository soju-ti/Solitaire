const stocks = document.getElementById('stocks');
const emptyWaste = document.getElementById('empty-waste');
const emptyWastePosition = $("#empty-waste").position();
const stocksPositions = $("#stocks").position();
let cardStocks = [{
        image: 'back.png',
        id: 1
    },
    {
        image: 'back.png',
        id: 2
    },
    {
        image: 'back.png',
        id: 3
    },
    {
        image: 'back.png',
        id: 4
    },
    {
        image: 'back.png',
        id: 5
    },
    {
        image: 'back.png',
        id: 6
    },
];


let wasteStocks = [];

initStockItems();

function initStockItems() {
    let listItems = '';

    cardStocks.forEach(function(card, key) {
        listItems += `<div class="stock-item stock" id="stock-item-${card.id}" style="margin-left:${key}px;"><img src="images/cards/${card.image}" /></div>`
    })

    $('#stocks').append(listItems);
}
$(document).on('click', '.stock', function() {
    let lastCard = cardStocks.pop();
    let $clone = $(this);
    wasteStocks.push(lastCard);
    $(this).css({ 'z-index': 2 });
    $clone.animate({ left: $("#empty-waste").offset().left - 20 - 50 + 'px' }, "slow", function() {

        $(`#stock-item-${lastCard.id}`).remove()
        $('#empty-waste').prepend(`<div class="waste-item stock" id="waste-item-${lastCard.id}"><img src="images/cards/${lastCard.image}" /></div>`);
    });
})
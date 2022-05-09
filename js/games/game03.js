// STATIC 
const groupNode = $('.task-list-group');


function transformToCheckList() {
    var liElements = $('.task-list-group li').toArray();

    console.log(liElements);

    liElements.forEach(function (element, indice, array) {
        const className = $(element).attr("class");

        className.includes('rounded') ? null : transform(element);
    });

}

function transform(element) {
    const className = $(element).attr("class");

    var id = className.charAt(className.length - 1);

    var inputElementToBeTransformed = $(element).find('input').toArray()[1];

    var nodeText = $(inputElementToBeTransformed).attr('value');

    var text ="<label class='cursor-pointer font-italic d-block custom-control-label' for='customCheck" + id + "'>" + nodeText + "</label>";

    $(inputElementToBeTransformed).removeClass();

    $(inputElementToBeTransformed).addClass('cursor-pointer font-italic d-block custom-control-label');

    $(inputElementToBeTransformed).replaceWith(text);

    $(element).attr("class", "list-group-item rounded-" + id);
    
}

function toCheckItem(element) {
    console.log(element);
}

function addCheck() {
    var newNodeId = getNewNodeId();

    var newInputNode = getInputNode(newNodeId);

    $(groupNode).append(newInputNode);
}

function getNewNodeId() {
    var newId = $('.task-list-group li').length;

    return newId;
}

function getInputNode(lastId) {
    const id = lastId + 1;

    var nodeString = "<li class='list-group-item task-" + id + "'" + "><div class='custom-control custom-checkbox'> <input class='custom-control-input' id='customCheck" + id + "'" + "type='checkbox'>" + "<input class='centerInput' type='text' onchange='changeInputValue(this)' value='' for='customCheck" + id + "'>" + "</div></li>";

    return nodeString;
}

function changeInputValue(element) {
    console.log('valor', element.value);

    $(element).attr('value', element.value);
}

function getMercName(text) {
    var index = text.indexOf("MERC-");

    return text.substring(index);
}

function changeTaskLink(element) {

    $('.taskLinkTitle').remove();

    var nodeText = element.value;

    var mercName = getMercName(nodeText); 

    var nodeToReplace = "<a href='"+ nodeText + "' target='_blank' class='text-muted font-italic mb-4 taskLinkLabel taskLink' type='text' >" +  mercName + "</a> <button class='btn btn-info buttonMarginLeft' type='button' onclick='copyTestLink()'>Copy</button>";

    $(element).attr('value', element.value);

    $(element).replaceWith(nodeToReplace);
}

function copyTestLink(id) {

    const selector = ".taskLink";

    var copyText = $(idSelector).val();

    navigator.clipboard.writeText(copyText);
}

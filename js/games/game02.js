
function gitStepsCopyText(id) {
    var idSelector = "#" + id;

    var copyText = $(idSelector).val();

    navigator.clipboard.writeText(copyText);
}
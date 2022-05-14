function transformToJspSearchRegex(element, id) {
    var prevRegex = "\\/(\\w+\.jsp.*)[\\s\\S\\n].*";

    var regexResult = prevRegex + element.value;

    $(element).val(regexResult);

    navigator.clipboard.writeText(regexResult);

    
    $("label." + id).show();

    $("." + id).stop().css("background-color", "#FFFF9C")
    .animate({ backgroundColor: "#FFFFFF"}, 700);

    setTimeout(function(){
        $("label." + id).hide();
    }, 2000);
}
 

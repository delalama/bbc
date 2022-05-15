function transformToJspSearchRegex(element, id) {
    var prevRegex = "\\/(\\w+\.jsp.*)[\\s\\S\\n].*";

    var jspName = element.value ;

    if(jspName ==="detailUitgaandeFacturenAction"){
        jspName = "detailUitgaandeFactuurAction";
    }

    var regexResult = prevRegex + jspName;

    $(element).val(regexResult);

    navigator.clipboard.writeText(regexResult);

    
    $("label." + id).show();

    $("." + id).stop().css("background-color", "#FFFF9C")
    .animate({ backgroundColor: "#FFFFFF"}, 700);

    setTimeout(function(){
        $("label." + id).hide();
    }, 2000);
}
 

/* 
    :first - selects the first element meeting the condition.
    :last - selects the last element meeting the condition.
    :even - selects even elements meeting the condition.
    :odd - selects odd elements meeting the condition.
    :gt() - selects all elements of indices greater than the index within the matched set.
    :not() - selects all elements not matching the given selector.
    :eq() - selects the element at index n within the matched set.
*/

$("document").ready(function () {
    $("#example p:first").css("color", "blue");
    $("#example p:last").css("color", "red");
    $("#example p:even").css("background-color", "yellow");
    $("#example p:odd").css("background-color", "grey");
    $("#example p.classA:even").css("border", "3px solid blue");
    $("#example p.classB:first").css("border", "3px solid red");
    $("#example p:gt(1)").css("font-size", "30px");
    $("#example p:not(p:eq(2))").css("font-family", "Comic Sans MS");
});


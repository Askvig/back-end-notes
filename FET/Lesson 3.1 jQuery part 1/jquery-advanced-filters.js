/* 
    :contains() filter - selects elements whose content contains certain text.
    :parent filter - selects elements that have at least one child node (can be an element or text).
    :has() - selects elements that contain at least one element that matches the specified selector.
    :first-child / :last-child - returns all elements that are the first/last child of their parent.
    :first-of-type / :last-of-type - returns all elements that are the first/last among all the siblings of the same element name.
    nth-child() - select n-th child of their parent, we can use the n variable, for example, nth-child(2n) will select all even children.
*/

$("document").ready(function () {
    $("p:contains('th')").css("font-size", "30px");
    $("p:parent").css("border", "3px dashed blue");
    $("div:has(p[class=classA])").css("border", "3px solid red");
    $("div p:first-child").css("color", "blue");
    $("div p:last-of-type").css("color", "red");
    $("div p:nth-child(3)").css("background-color", "yellow");
    $("div p:nth-child(2n)").css("background-color", "grey");
});


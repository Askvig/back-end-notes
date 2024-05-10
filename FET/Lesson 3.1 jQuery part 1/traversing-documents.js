/* 
    parent() method returns the direct parent.
    parents() returns all its parents to the document’s root element.
    parentsUntil() finds all parents of the specified tag.
    children() method returns all direct children of the selected element.
    find() method finds all descendant elements (not only direct children) of the specified tag.
    siblings() method returns all elements of the same level.
    next() – returns the next sibling.
    nextAll() – returns all next siblings.
    nextUntil() – returns all siblings between two given arguments.

    There are also analogous methods: prev(), prevAll() and prevUntil().
*/

$("document").ready(function () {
    var elem = $("#para3");
    elem.prev().css("border", "3px solid red");
    elem.next().css("border", "3px solid green");
    elem.parentsUntil($("body")).css("border", "3px dashed blue");

    var leftMargin = 0;
    var fontSize = 20;
    $("#example")
        .children()
        .each((index, element) => {
            $(element)
                .css("font-size", fontSize + "px")
                .css("margin-left", leftMargin);
            fontSize += 2;
            leftMargin += 10;
        });
});
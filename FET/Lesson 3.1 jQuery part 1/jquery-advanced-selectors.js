$("document").ready(function () {
    // child selector. The element on the left of the “>” sign is a parent, while the element on the right is a child. We must select all the children. So in the first line, we select all paragraphs with a div parent (inside the div). As we can see from the result, we coloured all paragraphs properly inside divs blue.
    $("div > p").css("color", "blue");
    // descendant selector. It’s similar to the first one, but instead of a parent, the element needs to have a specified ‘ancestor’ anywhere above them. To use this, we write the ancestor’s name first, and after a space, we specify the child. In our example, it works the same as the child selector – elements in both the second and third sections receive a red border.
    $("div p.classA").css("border", "3px solid red");
    // adjacent selector. It selects elements if the specified element immediately precedes them. At first, specify the predecessor, then use the “+” sign and specify the elements we want to select.
    // In our example, only the first div got selected. This happened because the first div is the predecessor of the second one, so the second div didn’t meet the specified condition.
    $("p + div").css("background-color", "yellow");
    // sibling selector. It’s similar to the adjacent selector but selects all elements that come after the predecessor. First, specify the predecessor, then use the “~” sign and specify the elements you want to select. In our example, the font of both the fourth and the fifth paragraphs changed.
    $("#para3 ~ p").css("font-size", "20px");
});


$(document).ready(function() 
{
    $("input").click(function() {
       // alert("Hi");
       // $("H1").text($("li:first").text());
        let numberOfListItem=$("#choices li").length;
        let randomChildNumber=Math.floor(Math.random()*numberOfListItem);
        $("#random-result").text($("#choices li").eq(randomChildNumber).text());
		$("#random-pic").attr("src",pictures[randomChildNumber]);
    });
});
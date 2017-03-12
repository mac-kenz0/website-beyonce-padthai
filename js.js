$(document).ready(){
	console.log("yolo");

	$(".click-right").on("click", function(){
		$(".twenty-seventeen-march-tenth").css("display", "none");
		$(".click-right").css("display", "none");
		$(".click-left").css("display", "block");
		console.log("yolo");
	});
}
//keeps track of user answers
var score = [0,0,0];

//to compare user answers with radio button values
var valuesESO = ["T","H","D"];

//descriptions for different results
var tankR = {
	"Title": "<h2 class='resultTxt'><strong>You should be a tank!</strong></h2>",
	"Description1": "<div class='resultTxt descr'>Tanks control the fight by chaining enemies and debuffing them.</div>",
	"Description2": "<div class='resultTxt descr'>You'll need some time to memorize how certain fights work, and need to be flexible with your gear sets.</div>",
	"Description3": "<div class='resultTxt descr'>You're also the most important one in the group, so don't hesitate to call out for things you need.</div>",
	"Description4": "<div class='resultTxt descr'>But overall, just have fun!</div>",
	"Description5": "<div class='resultTxt descr'>Recommended classes: Dragonknight, Necromancer, Nightblade</div>"
}

var healerR = {
	"Title": "<h2 class='resultTxt'><strong>You should be a healer!</strong></h2>",
	"Description1": "<div class='resultTxt descr'>Healers react to both players and enemies by buffing players and debuffing enemies.</div>",
	"Description2": "<div class='resultTxt descr'>You'll need some time to memorize optimal positioning for fights, and will need a little bit of gear flexibility.</div>",
	"Description3": "<div class='resultTxt descr'>You're also one of the more important people in the group, so call out if you go down or need something.</div>",
	"Description4": "<div class='resultTxt descr'>But overall, just have fun!</div>",
	"Description5": "<div class='resultTxt descr'>Recommended classes: Templar, Warden</div>"
}

var damageR = {
	"Title": "<h2 class='resultTxt'><strong>You should be a damage dealer!</strong></h2>",
	"Description1": "<div class='resultTxt descr'>Damage dealers react to the fight as it happens by damaging enemies and avoiding damage taken.</div>",
	"Description2": "<div class='resultTxt descr'>You can usually just follow calls for where to go, but memorizing some positioning wouldn't hurt.</div>",
	"Description3": "<div class='resultTxt descr'>There are more damage dealers than any other role in a group, so prioritize supports over yourself.</div>",
	"Description4": "<div class='resultTxt descr'>But overall, just have fun!</div>",
	"Description5": "<div class='resultTxt descr'>Recommended classes: Sorcerer, Dragonknight, Nightblade</div>"
}

//makes sure all radio buttons are checked, then determines
//user answer and appends the result to the bottom of the page
function submitButton() {
	//puts user answers into an array
	var valuesArray = [$("input[name='q1']:checked").val(),
	$("input[name='q2']:checked").val(),
	$("input[name='q3']:checked").val(),
	$("input[name='q4']:checked").val(),
	$("input[name='q5']:checked").val(),
	$("input[name='q6']:checked").val(),
	$("input[name='q7']:checked").val()
	]
	
	//if array has anything undefined, alert user and return
	for (let i = 0; i < valuesArray.length; i++) {
		if (valuesArray[i] == undefined) {
			alert("Please select one answer for each question!");
			return;
		}
	}
	
	//compares user answers and increments score array accordingly
	for (let i = 0; i < 3; i++) {
		if ($("input[name='q1']:checked").val() == valuesESO[i])
			score[i]++;
		if ($("input[name='q2']:checked").val() == valuesESO[i])
			score[i]++;
		if ($("input[name='q3']:checked").val() == valuesESO[i])
			score[i]++;
		if ($("input[name='q4']:checked").val() == valuesESO[i])
			score[i]++;
		if ($("input[name='q5']:checked").val() == valuesESO[i])
			score[i]++;
		if ($("input[name='q6']:checked").val() == valuesESO[i])
			score[i]++;
		if ($("input[name='q7']:checked").val() == valuesESO[i])
			score[i]++;
	}
	
	//finds max of score array and translates into userResultNum
	var userResult = score[0];
	var userResultNum = 0;
	for (let i = 1; i < 3; i++) {
		if (score[i] > userResult) {
			userResult = valuesESO[i];
			userResultNum = i;
		}
	}
	
	//appends different results depending on userResultNum
	if (userResultNum == 0) {
		for (let i = 0; i < Object.keys(tankR).length; i++) {
			$(".result").append(Object.values(tankR)[i]);
		}
	}
	else if (userResultNum == 1) {
		for (let i = 0; i < Object.keys(healerR).length; i++) {
			$(".result").append(Object.values(healerR)[i]);
		}
	}
	else {
		for (let i = 0; i < Object.keys(damageR).length; i++) {
			$(".result").append(Object.values(damageR)[i]);
		}
	}
}

//removes any result and clears radio buttons
function refreshButton() {
	$('input:radio:checked').prop('checked', false);
	$(".resultTxt").remove();
}

//ready listener
$(function() {
	//submit button listener
	$("#submitBut").click(submitButton);
	
	//refresh button listener
	$("#refreshBut").click(refreshButton);
});

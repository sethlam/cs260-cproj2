$(document).ready(function() {


	$("#convertSubmit").click(function(e) {
		e.preventDefault();
		var currencyFrom = $("#currencyFrom").val();
		var currencyTo = $("#currencyTo").val();
		var currencyAmount = $("#currencyAmount").val();


		var myurl = "https://forex.1forge.com/1.0.3/convert?from=" + currencyFrom + "&to=" + currencyTo + "&quantity=" + currencyAmount + "&api_key=1UCa2fDfVoYa3cZ7mQm82gVhZL882iyS";
		console.log(myurl);
		$.ajax({
			url : myurl,
			dataType : "json",
			success : function funfun(json) {
				console.log(json);
				var results = "<br>";
				results += '<h1 style="font-family:sans-serif;">' + json.text + "</h1>";
				$("#convertResults").html(results);
			}
		});
	});


	$("#quoteSubmit").click(function(e) {
		e.preventDefault();
		var value = $("#quoteInput").val();
		console.log(value);


		var myurl = "https://forex.1forge.com/1.0.3/quotes?pairs=" + value + "&api_key=1UCa2fDfVoYa3cZ7mQm82gVhZL882iyS";
		console.log(myurl);
		$.ajax({
			url : myurl,
			dataType : "json",
			success : function funfunfun(json) {
				console.log(json);
				var results = "";
				results +="<h1 style=\"font-family:sans-serif;\"> The Price is: "  + json[0].price + " </h1> <br>"
				results +="<h1 style=\"font-family:sans-serif;\"> Currently bidding for: "+ json[0].bid + " </h1><br>"
				results +="<h1 style=\"font-family:sans-serif;\"> Currently asking for: " + json[0].ask + " </h1><br>"
				$("#quoteResults").html(results);
			}
		});
	});


	$("#statusSubmit").click(function(e) {
		e.preventDefault();


		var myurl = "https://forex.1forge.com/1.0.3/market_status?&api_key=1UCa2fDfVoYa3cZ7mQm82gVhZL882iyS";
		console.log(myurl);
		$.ajax({
			url : myurl,
			dataType : "json",
			success : function funfun(json) {
				console.log(json);
				var results = "<br>";
				if (json.market_is_open = "true") {
					results += '<h1 style="font-family:sans-serif;">' + "Yes. The market is open right now." + "</h1>";	
				} else {
					results += '<h1 style="font-family:sans-serif;">' + "No. The market is closed right now." + "</h1>";	
				}
				$("#statusResults").html(results);
			}
		});
	});


})
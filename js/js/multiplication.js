function changeColor(c) {
			// alert(c);
			var container = document.querySelector("#container");
			container.style.backgroundColor = c;
			// get-the-container's background-color and apply C
			// body..
		}

		function printTable() {
			var tableinput = document.querySelector("#tableinput");
			var tableNum = tableinput.value;
			var printarea = document.querySelector("#printarea");

			
			printarea.innerHTML = "";

		    for(i = 1; i<= 10; i++){
		    	
		    	if(i%2 > 0){
		    		printarea.innerHTML += "<div class='tableitem'>"+(i +"*"+ tableNum +"=" +tableNum*i)+"</div>";
		    	}
		    	
		    }
		}


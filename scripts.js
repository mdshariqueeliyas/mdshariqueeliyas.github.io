<<<<<<< HEAD
<<<<<<< HEAD

function open_modal(id){
	var e = document.getElementById('modal');
	var f = document.getElementById('modalinside');
	if(e.style.visibility=="hidden" || e.style.visibility==""){
		e.style.visibility = "visible";
		f.className += " animated slideInDown";
	}
	else{
		e.style.visibility = "hidden";
		f.className = "";
	}
}

function CopyToClipboard(id){
	var f = document.getElementById('modalinside');
	f.className="";
	f.className += " animated shake";
	if(document.selection){
		var range = document.body.createTextRange();
		range.moveToElementText(document.getElementById(id));
		range.select().createTextRange();
		document.execCommand("Copy");
	}
	else if(window.getSelection){
		var range = document.createRange();
		range.selectNode(document.getElementById(id));
		window.getSelection().addRange(range);
		document.execCommand("Copy");
	}
=======

function open_modal(id){
	var e = document.getElementById('modal');
	var f = document.getElementById('modalinside');
	if(e.style.visibility=="hidden" || e.style.visibility==""){
		e.style.visibility = "visible";
		f.className += " animated slideInDown";
	}
	else{
		e.style.visibility = "hidden";
		f.className = "";
	}
}

function CopyToClipboard(id){
	var f = document.getElementById('modalinside');
	f.className="";
	f.className += " animated shake";
	if(document.selection){
		var range = document.body.createTextRange();
		range.moveToElementText(document.getElementById(id));
		range.select().createTextRange();
		document.execCommand("Copy");
	}
	else if(window.getSelection){
		var range = document.createRange();
		range.selectNode(document.getElementById(id));
		window.getSelection().addRange(range);
		document.execCommand("Copy");
	}
>>>>>>> 4e60156fbaa969140670f38f42c2f81ee748500f
=======

function open_modal(id){
	var e = document.getElementById('modal');
	var f = document.getElementById('modalinside');
	if(e.style.visibility=="hidden" || e.style.visibility==""){
		e.style.visibility = "visible";
		f.className += " animated slideInDown";
	}
	else{
		e.style.visibility = "hidden";
		f.className = "";
	}
}

function CopyToClipboard(id){
	var f = document.getElementById('modalinside');
	f.className="";
	f.className += " animated shake";
	if(document.selection){
		var range = document.body.createTextRange();
		range.moveToElementText(document.getElementById(id));
		range.select().createTextRange();
		document.execCommand("Copy");
	}
	else if(window.getSelection){
		var range = document.createRange();
		range.selectNode(document.getElementById(id));
		window.getSelection().addRange(range);
		document.execCommand("Copy");
	}
>>>>>>> 4e60156fbaa969140670f38f42c2f81ee748500f
}
		var batch = ["@echo off", "title Corescript File"]
		var builder = false; // Corescript's New Website Builder
		var builder_compiled = ["<!-- Created Using Corescript's Website Builder -->", "<title>Corescript Website<\/title>"];
		
		// Declare Variables
		var q_ = q + 1;
		var aaaa = "// nothing";
		var result_1 = "// Nothing";
		var codel = document.querySelector('#code');
		var codelinesl = document.querySelector('#codelines');
		var gotolimit = 0;
		var draw = false;
		var boxnum = 1;
		var q = 0;
		var t;
		var i;
		var o;
		var p;
		var e;
		var printa = [];
		var current;
		var variablecolumn = 1;
		var printpend;
		var currentvar = "";
		var linedoing = true;
		var thei = 0;
		// Functions
		function runcode() {
		  builder_compiled = ["<!-- Created Using Corescript's Website Builder -->", "<title>Corescript Website<\/title>"];
		  eval(aaaa);
		  gotolimit = 0;
		  var valueof = document.getElementById('code').value;
		  var codelist = $(code).val().split('\n');
		  if (thei == 0) {
		      document.getElementById('output').innerHTML = "";
		  } else {

		  }
		  // Clear the textarea before adding a result.
		  for (i = thei; i < codelist.length; i++) {
		      current = codelist[i];
		      var current2 = current;
		      // Every Command
		      var print = current.startsWith('print ');
		      var note = current.startsWith("//");
		      var set = current.startsWith("var ");
		      var printf = current.startsWith("printf "); // not used
		      var input = current.startsWith("input ");
		      var draw = current.startsWith("draw"); // not used
		      var pen = current.startsWith("pen "); // Not used
		      var cls = current.startsWith("cls");
		      var msg = current.startsWith("msg ");
		      var setit = current.startsWith("set ");
		      var wait = current.startsWith("wait ");
		      var ifelse = current.startsWith("if ");
		      var gotoo = current.startsWith("goto ");
		      var play = current.startsWith('play ');
		      var ifnot = current.startsWith('not ');
		      var stop = current.startsWith('stop');
		      var button = current.startsWith('button ');
		      // Website Builder
		      var text = current.startsWith('text ');
		      var title = current.startsWith("title ");
		      var image = current.startsWith("img ");
		      if (print) {
		          var s1 = current.substring(6);
		          var s1n = s1.replace(/{br}/g, "<br>");
		          var s1split = s1n.split("");
		          // Look for ( variable then stop at )
		          for (p = 0; p < s1split.length; p++) {
		              if (s1split[p] == "(") {
		                  var variable1 = s1n.match(/\(([^)]+)\)/)[1];
		                  s1n = s1n.replace("(" + variable1 + ")", eval(variable1));
		              } else {}
		          }
		          document.getElementById('output').innerHTML = document.getElementById('output').innerHTML + "<span>" + s1n + "<\/span><br>";
		          batch.push("echo " + s1n);
		      } else if (note) {
		          current = codelist[i];
		          var s2 = current.substring(2);
		          batch.push("rem " + s2);
		          console(s2);
		      } else if (set) {
		          // set name=Hello
		          current = codelist[i];
		          //name=hello
		          var s3 = current.substring(4);
		          // hello
		          var val = s3.split('=')[1]; // Input Value
		          var nam = s3.split('=')[0]; // Input Name
		          if (val.startsWith("(")) {
		              var val2 = val.substring(1);
		              if (val.endsWith(")")) {
		                  var val3 = val2.slice(0, -1);
		                  val = eval(val3);
		              }
		          }
		          console.log("Set " + nam + " to " + val);
		          window[nam] = val;
		      } else if (printf) {
		          var s4 = current.substring(7);
		          document.getElementById('output').innerHTML = document.getElementById('output').innerHTML + "<span>" + eval(s4) + "<\/span>";
		      } else if (input) {
		          // input name=Hello
		          current = codelist[i];
		          //name=hello
		          var s5 = current.substring(6);
		          // hello
		          var ival = s5.split('=')[1]; // Input Value
		          var inam = s5.split('=')[0]; // Input Name
		          window[inam] = prompt(ival);
		      } else if (draw) {
		          document.getElementById('output').innerHTML = "";
		          o = 0;
		          boxnum = 1;
		          draw = false;
		          current = codelist[i];
		          draw = true;
		          for (o = 0; o < 200; o++) {
		              var box = "<span id='" + boxnum + "'> <img style='height:20px;' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAOSURBVChTYxgFJAMGBgABNgABY8OiGAAAAABJRU5ErkJggg=='><\/span>";
		              boxnum = boxnum + 1;
		              document.getElementById('output').innerHTML = document.getElementById('output').innerHTML + box;
		          }
		      } else if (pen) {
		          current = codelist[i];
		          var s6 = current.substring(4);
		          document.getElementById(eval("s6")).innerHTML = '<img  style="height:20px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYSURBVChTY/z//z8DbsAEpXGAkSnNwAAApeMDEUEua14AAAAASUVORK5CYII=">';
		      } else if (cls) {
		          document.getElementById("output").innerHTML = "";
		      } else if (msg) {
		          var s7 = current.substring(4);
		          var s7split = s7.split("");
		          // Look for ( variable then stop at )
		          for (t = 1; t < s7split.length; t++) {
		              if (s7split[t] == "(") {
		                  var variable12 = s7.match(/\(([^)]+)\)/)[1];
		                  s7 = s7.replace("(" + variable12 + ")", eval(variable12));
		              } else {}
		          }
		          alert(s7);
		      } else if (setit) {
		          // set score=score + 1
		          current = codelist[i];
		          //name=hello
		          var s8 = current.substring(4);
		          // hello
		          var val8 = s8.split('=')[1]; // Input Value
		          var nam8 = s8.split('=')[0]; // Input Name
		          if (val8.startsWith("(")) {
		              var val18 = val8.substring(1);
		              if (val8.endsWith(")")) {
		                  var val3 = val18.slice(0, -1);
		                  val8 = eval(val3);
		              }
		          }
		          eval("var " + nam8 + " = " + "'" + val8 + "'");
		          console.log("Set " + nam8 + " to " + val8);
		      } else if (ifelse) {
		          var ifend = true;
		          var ended = true;
		          //if name=johndoe 1
		          //name=johndoe 1
		          var s91 = current.split('=')[1]; //johndoe 1
		          var s92 = current.split('=')[0]; //if name
		          var s94 = s92.split(' ')[1]; //name
		          var s93 = s91.split(' ')[0]; //johndoe
		          var s95 = s91.split(' ')[1]; //johndoe
		          eval("if (" + s94 + " == '" + s93 + "') {ifend=true;} else {ifend=false;}");
		          if (ifend) {
		              var ie2 = +s95 - 2;
		              i = ie2;
		          } else {}
		      } else if (current == "") {} else if (gotoo) {
		          gotolimit++;
		          var s101 = current.substring(5);
		          if (gotolimit > 1000) {
		              alert("Goto limit of 1000 reached");
		          } else {
		              var ie = +s101 - 2;
		              i = ie;
		          }
		      } else if (play) {
		          current = codelist[i];
		          var s11 = current.substring(5);
		          var string = isNaN(s11);
		          if (string) {
		              var audio = new Audio(s11);
		              audio.play();
		          } else {}
		      } else if (ifnot) {
		          var _ifend = true;
		          var _ended = true;
		          //if name=johndoe 1
		          //name=johndoe 1
		          var s121 = current.split('=')[1]; //johndoe 1
		          var s122 = current.split('=')[0]; //if name
		          var s124 = s122.split(' ')[1]; //name
		          var s123 = s121.split(' ')[0]; //johndoe
		          var s125 = s121.split(' ')[1]; //johndoe
		          eval("if (" + s124 + " == '" + s123 + "') {_ifend=true;} else {_ifend=false;}");
		          if (ifend) {} else {
		              var ie4 = +s125 - 2;
		              i = ie4;
		          }
		      } else if (button) {
		          if (thei == 0) {
		              // button [Hello!]=12
		              var s13 = current.substring(7);
		              var s131 = s13.split('=')[0]; // [hello]
		              var s132 = s13.split('=')[1]; // 12
		              document.getElementById('output').innerHTML = document.getElementById('output').innerHTML + "<p onclick='thei = " + eval("s132 - 1") + "; runcode();' class='noselect'>" + s131 + "<\/p>";

		          } else {

		          }
		      } else if (stop) {
		          console.log("Program Stopped");
		          return;
		      } else if (text && builder) {
		          var text_output;
		          // text Hello!=bold
		          var a1 = current.substring(5);
		          var a11 = a1.split('=')[0]; // Hello!
		          var a12 = a1.split('=')[1]; // bold
		          if (a12 == "bold") {
		              text_output = "<b>" + a11 + "<\/b>";
		          } else if (a12 == "plain") {
		              text_output = "<p>" + a11 + "<\/p>";
		          } else if (a12 == "italic") {
		              text_output = "<i>" + a11 + "<\/i>";
		          } else if (a12 == "underline") {
		              text_output = "<u>" + a11 + "<\/u>";
		          } else if (a12 == "heading") {
		              text_output = "<h1>" + a11 + "<\/h1>";
		          } else {
		              text_output = "<p>" + a12 + " is not an text style<\/p>";
		          }
		          document.getElementById('output').innerHTML = document.getElementById('output').innerHTML + text_output;
		          builder_compiled.push(text_output);
		      } else if (title && builder) {
		          var a2 = current.substring(6);
		          builder_compiled[1] = "<title>" + a2 + "<\/title>";
		          builder_compiled.push("<title>" + a2 + "<\/title>");
		      } else if (current == "line" && builder) {
		          document.getElementById('output').innerHTML = document.getElementById('output').innerHTML + "<hr style='border:1px solid black;' >";
		          builder_compiled.push("<hr style='border:1px solid black;' >");
		      } else if (image && builder) {
		          var a3 = current.substring(4);
		          document.getElementById('output').innerHTML = document.getElementById('output').innerHTML + "<img src=" + a3 + ">";
		          builder_compiled.push("<img src=" + a3 + ">");
		      } else if (wait) {
		          var s13 = current.substring(5);
		          sleep(+s13 * 1000);

		      } else {
		          var errorline = i + 1;
		          alert("Syntax error on line " + errorline + ".");
		      }
		  }
		  eval(new_command);
		  if (thei == 0) {

		  } else {
		      thei = 0;
		  }
		}

		function save() {
		  popup("<button onclick='save_corescript()'>Save as Corescript File<\/button><br>");
		}

		function save_corescript() {
		  codelist = $('#code').val().split('\n\n');

		  var projectname = prompt("File name:", "myproject");
		  download(projectname + ".corescript", codelist);

		}

		// File opener
		// File Downloader
		function download(filename, text) {
		  var element = document.createElement('a');
		  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		  element.setAttribute('download', filename);
		  element.style.display = 'none';
		  document.body.appendChild(element);
		  element.click();
		  document.body.removeChild(element);
		}

		function checkforfile() {
		  var wll = window.location.href;
		  var wll1 = wll.includes("#");
		  if (wll1) {
		      var pasth = wll.split('#')[1];
		      document.getElementById('code').innerHTML = "";
		      document.getElementById('code').innerHTML = "";
		      var pasth1 = pasth.replace(/@break@/g, "\n");
		      document.getElementById('code').innerHTML = pasth1;
		  } else {}
		}

		checkforfile(); // Check if file is loaded in url.

		function random(num1, num2) {
		  return Math.floor(Math.random() * num2) + num1;
		}
		$(function() {
		  setInterval(update, 100);
		});

		function update() {
		  document.getElementById('codelines').innerHTML = "";
		  var codelist1 = $(code).val().split('\n');
		  for (q = 0; q < codelist1.length; q++) {
		      var q_ = q + 1;
		      document.getElementById('codelines').innerHTML = document.getElementById('codelines').innerHTML + "<span>" + q_ + "<\/span><br>";
		  }
		}
		$(function() {
		  setInterval(update2, 1);
		});

		function update2() {
		  document.querySelector('#lines').scrollTop = document.querySelector('#code').scrollTop;
		}
		$("document").ready(function() {
		  $("#fileInput").change(function() {
		      var file = document.getElementById("fileInput").files[0];
		      if (file) {
		          var reader = new FileReader();
		          reader.readAsText(file, "UTF-8");
		          reader.onload = function(evt) {
		              document.getElementById('code').innerHTML = "ololol";
		              document.getElementById("code").value = evt.target.result;
		          }
		          reader.onerror = function(evt) {
		              document.getElementById("code").value = "// Thats not a CoreScript file, silly.";
		          }
		      }
		  });
		});

		function share() {
		  var compiledshare = document.getElementById('code').value;
		  var compiledshare1 = compiledshare.replace(/\n/g, "@break@");
		  prompt("Share this link with your friends!", "https://corescript.neocities.org/editor/#" + compiledshare1);
		}
		var mystery = "You found the mystery variable!";

		function popup(text) {
		  document.getElementById('popup').style.visibility = "visible";
		  document.getElementById('popuptext').innerHTML = text;
		}

		function settings() {
		  popup("<center><br> <fieldset> <legend>Website Coder (Beta)<\/legend> <span>Enable <span title='( ͡° ͜ʖ ͡°)'>Corescript's<\/span> Built in Website Coder Plugin: <\/span><input style='width: 30px;' type='checkbox' onclick='checkw()' id='website-c'> <br> <button onclick='preview_web()'>Preview Website<\/button> <\/fieldset> <\/center>");
		  document.getElementById("website-c").checked = builder;
		}
		/*

		*/
		function checkw() {
		  var checkw1 = document.getElementById("website-c").checked;
		  if (checkw1) {
		      builder = true;
		  } else {
		      builder = false;
		  }
		}

		function preview_web() {
		  var joined = builder_compiled.join("");
		  prompt("", "data:text/html, " + joined);
		}

		function load() {
		  var file = document.getElementById("plugin_file").files[0];
		  if (file) {
		      var reader = new FileReader();
		      reader.readAsText(file, "UTF-8");
		      reader.onload = function(evt) {
		          aaaa = evt.target.result;
		      }
		      reader.onerror = function(evt) {
		          alert("Error");
		      }
		  }
		}

		function textadd(tttt) {
		  document.getElementById('output').innerHTML = document.getElementById('output').innerHTML + tttt;
		}
		$(function() {
		  $("#popup").draggable({
		      handle: '#draggy'
		  });
		  $("#popup").draggable({
		      containment: "window"
		  });
		});

		function sleep(miliseconds) {
		  var currentTime = new Date().getTime();
		  while (currentTime + miliseconds >= new Date().getTime()) {}
		}

		function console(consoletext) {
		  document.getElementById("console").innerHTML = document.getElementById("console").innerHTML + "<p>" + consoletext + "<\/p>";
		}

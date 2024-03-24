"use strict";

var start = new Date().getTime();
        var rekordZeit = localStorage.getItem("rekordZeit") || Infinity;
        
        function getRandomColor() {
            var letters = '0123456789ABCDEF'.split(''); 
            var color ='#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random()*16)];
            }
            return color;
        }
        
        function makeShapeAppear() {
            var top = Math.random() * 400;
            var left = Math.random() * 400;
            var width = (Math.random() * 200) + 100;
            
            if (Math.random() > 0.5) {
                document.getElementById("form").style.borderRadius = "50%";
            } else {
                document.getElementById("form").style.borderRadius = "0";
            }
            
            document.getElementById("form").style.backgroundColor = getRandomColor();
            document.getElementById("form").style.top = top + "px";
            document.getElementById("form").style.left = left + "px";
            document.getElementById("form").style.width = width + "px";
            document.getElementById("form").style.height = width + "px";
            document.getElementById("form").style.display = "block"; 
            start = new Date().getTime();
        }
        
        function appearAfterDelay() {
            setTimeout(makeShapeAppear, Math.random() * 2000);
        }
        
        appearAfterDelay();
        
        document.getElementById("form").onclick = function() {
            document.getElementById("form").style.display = "none";
            var end = new Date().getTime(); 
            var dauer = (end - start) / 1000; 
            document.getElementById("dauer").innerHTML = dauer + "s";

            if (dauer < rekordZeit) {
                rekordZeit = dauer;
                localStorage.setItem("rekordZeit", rekordZeit);
                document.getElementById("rekord").innerHTML = rekordZeit + "s";
            }
            
            appearAfterDelay();
        }
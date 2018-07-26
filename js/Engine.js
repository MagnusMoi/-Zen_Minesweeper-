				// GLWT(Good Luck With That) Public License
                 // Copyright (c) 2018, Zen Minesweeper
				 // Author : Ludowic "MagnusMoi" EMMANUEL

// Everyone is permitted to copy, distribute, modify, merge, sell, publish,
// sublicense or whatever they want with this software but at their OWN RISK.

	      	       	     // Preamble

// The author has absolutely no clue what the code in this project does.
// It might just work or not, there is no third option.


                // GOOD LUCK WITH THAT PUBLIC LICENSE
   // TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION, AND MODIFICATION

  // 0. You just DO WHATEVER YOU WANT TO as long as you NEVER LEAVE A
// TRACE TO TRACK THE AUTHOR of the original product to blame for or hold
// responsible.

// IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
// DEALINGS IN THE SOFTWARE.

// Good luck and Godspeed.

//More about the GLWT Public License : https://github.com/me-shaon/GLWTPL/blob/master/LICENSE

ZEN_ary_oEngines = [];

function Engine(){
	
	this.members = {
		sDivContainerId : "",
		sId : "",
		sPaddingColor : ZEN_Padding_Color,
		nPeriod : ZEN_period,
		nWidth : ZEN_Map_Width,
		nHeight : ZEN_Map_Height,
		nCellWidth : ZEN_Cell_Width,
		nCellHeight : ZEN_Cell_Height,
		nPadWidth : ZEN_Cell_Width_padding,
		nPadHeight : ZEN_Cell_Height_padding,
		oGameState : {nAction : 0, nCell : 0},
		nTimerHandler : -1,
		nRunCount : 0,
		ary_oCells : [],
		oCvs : null,
		oCtx : null,
		oAudio : null
	};
	
	//trick
	var Me = this;
	
	ZEN_ary_oEngines.push(Me);
	
	var nEngineHandler = ZEN_ary_oEngines.length - 1;
	
	this.createHTML = function(){
		//our HTML Code
		var sHtml = "";
		//our caluculated width 
		var nW = 0;
		//our calculated height 
		var nH = 0;
		
		//calculate my friend !
		nW = this.members.nWidth * ( this.members.nCellWidth + this.members.nPadWidth ) + this.members.nPadWidth;
		nH = this.members.nHeight * ( this.members.nCellHeight + this.members.nPadHeight ) + this.members.nPadHeight;
		
		//create the html
		
		//the great stuff !!!
		sHtml += "<div id=\"" + this.members.sId  +"\" class=\"ENGINE_\">" + "\r\n";
		
		//canvas
		sHtml += "\t" + "<div id=\"" + this.members.sId + "_DIV_CVS\" class=\"CVS_ PARENT_\" >" + "\r\n";
		sHtml += "\t" + "<canvas id=\"" + this.members.sId + "_CVS\" width=\"" + nW + "\" height=\"" + nH + "\" style=\"border:0px solid #000000;\" onmouseup=\"ZEN_ary_oEngines[" + nEngineHandler + "].eventHandler(event);\" oncontextmenu=\"return false;\">Dude !!! Why are you using this stupide browser ? Canvas won't work !!!</canvas> " + "\r\n";
		//canvas End
		sHtml += "\t" + "</div>";
		
		//img container
		sHtml += "\t" + "<div id=\"" + this.members.sId + "_IMGS\" class=\"IMGS_\" style=\"visibility:hidden\">" + "\r\n";		
		sHtml += "\t" + "</div>";
		
		//add the audio object
		sHtml += "\t" + "<audio id=\"" + this.members.sId + "_MUSIC\"></audio>";
		
		//the end
		sHtml += "</div>";
		
		//return the stuff !!!
		return sHtml;
	}
	
	this.loadImg = function(nLine){
		
		//our length
		var nCount = 0;
		//our imag 
		var oImg = null;
		//our element 
		var oElement = null;
		
		//get the count 
		nCount = ZEN_ary_sImages.length;
		
		if(ZEN_DEBUG)
			console.log("Engine " + Me.members.sId + " Loading " + nLine + "/" + nCount);
		
		//ok ?
		if(nLine < nCount){
			//get the parent
			oElement = document.getElementById(Me.members.sId + "_IMGS");
			
			//if present
			if(oElement != null){
				//create the Img tag
				oImg = document.createElement("img");
				oImg.setAttribute("src", ZEN_ary_sImages[nLine] + "?" + ZEN_Version);
				oImg.setAttribute("id", ZEN_ary_sImages[nLine]);
				//oImg.setAttribute("id", Me.members.sId + "_IMG_" + nLine);
				//on load stuff 
				oImg.onload = function(){
					//Load the next !
					Me.loadImg(nLine + 1);
					//
					if(ZEN_DEBUG)
						console.log("Engine " + Me.members.sId + " Loaded " + nLine + "/" + nCount);
				}
				
				//Add it and load !!!
				oElement.appendChild(oImg);
			}
		}
		
	}
	
	this.setBombs = function(){
		
		//our count 
		var nCount = 0;
		//our iterator
		var nLine = 0;
		//our position
		var nPosition = 0;
		
		//create some dude !
		while(nLine < ZEN_Bomb_Number){
			//get position
			nPosition = Math.round( Math.random() * Me.members.ary_oCells.length );
			
			//in the map ?
			if(nPosition < Me.members.ary_oCells.length){
				
				//no bomb Yet ?
				if(Me.members.ary_oCells[nPosition].nValue != -1){
					//Bomb !
					Me.members.ary_oCells[nPosition].nValue = -1;
				}
				else{
					//cancelled the sort 
					nLine--;
				}
				
			}
			else{
				//cancelled the sort 
				nLine--;
			}
			
			//Next 
			nLine++;
		}
		
	}
	
	this.setNumbers = function(){
		
		//our count 
		var nCount = 0;
		//our iterator
		var nLine = 0;
		//position 
		var nPosition = 0;
		//position step
		var nStep = 0;
		//Bomber number 
		var nBomb = 0;
		
		//
		var bOk = false;
		
		//set the number 
		nCount = Me.members.ary_oCells.length;
		while(nLine < nCount){
			
			//if it's not a bomb !!!
			if(Me.members.ary_oCells[nLine].nValue > -1){
				
				//set the set to 0
				nStep = 0;
				nBomb = 0;
				while(nStep < 8){
					
					//the check var 
					bOk = true;
					
					switch(nStep){
						//Top left
						case 0 :
							nPosition = nLine - Me.members.nWidth - 1;
							break;
						//Top
						case 1 :
							nPosition = nLine - Me.members.nWidth;
							break;
						//Top right
						case 2 :
							nPosition = nLine - Me.members.nWidth + 1;
							break;
							
						//Left
						case 3 :
							nPosition = nLine - 1;
							break;
						//Right
						case 4 :
							nPosition = nLine + 1;
							break;
						
						//Bottom Left
						case 5 :
							nPosition = nLine + Me.members.nWidth - 1;
							break;
						//Bottom
						case 6 :
							nPosition = nLine + Me.members.nWidth;
							break;
						//Bottom right
						case 7 :
							nPosition = nLine + Me.members.nWidth + 1;
							break;
					}
					
					//check section ***********************************
					
					//out of map : low 
					if(nPosition < 0)
						bOk = false;
					
					//it's a left cell
					//more top left ??? nope !
					if(nLine % Me.members.nWidth == 0 && nPosition == nLine - Me.members.nWidth - 1)
						bOk = false;
					//more left ??? nope !
					if(nLine % Me.members.nWidth == 0 && nPosition == nLine - 1)
						bOk = false;
					//more bottom left ??? nope !
					if(nLine % Me.members.nWidth == 0 && nPosition == nLine + Me.members.nWidth - 1)
						bOk = false;
					
					//it's a right cell
					//more top right ??? nope !
					if(nLine % Me.members.nWidth == Me.members.nWidth - 1 && nPosition == nLine - Me.members.nWidth + 1)
						bOk = false;
					//more right ??? nope !
					if(nLine % Me.members.nWidth == Me.members.nWidth - 1 && nPosition == nLine + 1)
						bOk = false;
					//more bottom right ??? nope !
					if(nLine % Me.members.nWidth == Me.members.nWidth - 1 && nPosition == nLine + Me.members.nWidth + 1)
						bOk = false;
					
					//out of map : up
					if(nPosition >= Me.members.ary_oCells.length)
						bOk = false;
					
					//yes we can 
					if(bOk){
						if(Me.members.ary_oCells[nPosition].nValue < 0)
							nBomb++;
					}
					
					//next step
					nStep++;
				}
				
				//change the value 
				Me.members.ary_oCells[nLine].nValue = nBomb;
				
			}
			
			//Next
			nLine++;
		}
		
	}
	
	this.createMap = function(){
		
		//our count 
		var nCount = 0;
		//our iterator
		var nLine = 0;
		
		//reset
		Me.members.ary_oCells = [];
		//our count 
		nCount = Me.members.nWidth * Me.members.nHeight;
		
		//create the array
		nLine = 0;
		while(nLine < nCount){
			//add a new one 
			Me.members.ary_oCells.push({ nId : nLine, nValue : 0, bVisible : false, bMarked : false });
			//Next
			nLine++;
		}
		
		//create the bomb
		Me.setBombs();
		
		//get the numbers
		Me.setNumbers();
		
	}
	
	this.init = function(sParentId, sDivId){
		
		//our element 
		var oElement = null;
		
		//init the Ids !
		this.members.sDivContainerId = sParentId;
		this.members.sId = sDivId;
		
		//get the element 
		oElement = document.getElementById(sParentId);
		//is that valid ?
		if(oElement != null){
			//add the stuff
			oElement.innerHTML = this.createHTML();
			
			//load the images 
			this.loadImg(0);
			
			//get the canvas 
			this.members.oCvs = document.getElementById(this.members.sId + "_CVS");
			//get the context 
			this.members.oCtx = this.members.oCvs.getContext("2d");
			//get the audio
			this.members.oAudio = new soundTrack(sDivId,  this.members.sId + "_MUSIC");
			
			//create the map !
			this.createMap();
		}
	}
	
	this.eventHandler = function(ev){
		
		//our X position in px
		var nX = 0;
		//our Y position in px
		var nY = 0;
		//our X position in px
		var nCellX = 0;
		//our Y position in px
		var nCellY = 0;
		//our button value 
		var nBtn = 0;
		
		//is that ok ?
		var bOk = true;
		
		//Canvas position
		var oRect = null;
		
		//get the canvas position 
		oRect = Me.members.oCvs.getBoundingClientRect();
		
		//get the event position 
		nX = ev.clientX - oRect.left;
		nY = ev.clientY - oRect.top;
		
		if(ZEN_DEBUG)
			console.log("Engine eventHandler : brut click (" + nX + ";" + nY + ") ");
		
		//get the nCell 
		nCellX = Math.floor( nX /  (Me.members.nCellWidth + Me.members.nPadWidth) );
		nCellY = Math.floor( nY /  (Me.members.nCellHeight + Me.members.nPadHeight) );
		
		if(ZEN_DEBUG)
			console.log("Engine eventHandler : cell (" + nCellX + ";" + nCellY + ") ");
		
		if( (nX - nCellX * (Me.members.nCellWidth + Me.members.nPadWidth)) < Me.members.nPadWidth  )
			bOk = false;
		
		if( (nY - nCellY * (Me.members.nCellHeight + Me.members.nPadHeight)) < Me.members.nPadHeight  )
			bOk = false;
		
		if(bOk){
			
			//ev.button left : 0, middle : 1, right : 2
			
			if(ev.button == 0)
				nBtn = 1;
			
			if(ev.button == 2)
				nBtn = 2;
			
			if(nBtn > 0){
				
				if(ZEN_DEBUG)
					console.log("Engine eventHandler : Cell " + (nCellY * Me.members.nWidth + nCellX) + " ");
				
				//yeah
				Me.members.oGameState = {nAction : nBtn, nCell : nCellY * Me.members.nWidth + nCellX};
			
				
			}
			
		}
		else{
			if(ZEN_DEBUG)
				console.log("Engine eventHandler : padding " + (nX - nCellX * (Me.members.nCellWidth + Me.members.nPadWidth)));
		}
		
		
	}
	
	this.plots = function(){
		
		//the dimension Width
		var nW = 0;
		//the dimension Height
		var nH = 0;
		//position X
		var nX = 0;
		//position Y
		var nY = 0;
		//our count 
		var nCount = 0;
		//our iterator
		var nLine = 0;
		
		//our img 
		var oImg = null
		
		//our Image Id
		var sImage = "";
		
		//get the dimensions
		nW = Me.members.oCvs.width;
		nH = Me.members.oCvs.height;
		
		//the back !!
		Me.members.oCtx.fillStyle = Me.members.sPaddingColor;
		Me.members.oCtx.fillRect(0, 0, nW, nH);
		
		//create the map
		nCount = Me.members.ary_oCells.length;
		while(nLine < nCount){
			//get the X
			nX = nLine % Me.members.nWidth;
			//get the Y
			nY = (nLine - nX) / Me.members.nWidth;
			
			//get the image
			if(Me.members.ary_oCells[nLine].bVisible)
				sImage = ZEN_Numbers_Path + "/" + Me.members.ary_oCells[nLine].nValue + ".png";
			else if(Me.members.ary_oCells[nLine].bMarked)
				sImage = ZEN_Mark_Path + "/" + "mark.png";
			else 
				sImage = ZEN_Cell_Path + "/" + "cell.png";
			oImg = document.getElementById(sImage);
			if(oImg != null){
				if(ZEN_DEBUG)
					console.log("Engine plots : (" + nX + ";" + nY + ") with value : " + Me.members.ary_oCells[nLine].nValue);
				//Plots !!!
				Me.members.oCtx.drawImage(oImg, nX * ( Me.members.nCellWidth + Me.members.nPadWidth ) + Me.members.nPadWidth  , nY * ( Me.members.nCellHeight + Me.members.nPadHeight ) + Me.members.nPadHeight, Me.members.nCellWidth, Me.members.nCellHeight);
			}
			else{
				if(ZEN_DEBUG)
					console.log("Engine fails to plot : (" + nX + ";" + nY + ") with value : " + Me.members.ary_oCells[nLine].nValue);
				//error launched
				return false
			}
			
			//Next
			nLine++;
		}
		
		//good
		return true;
	}
	
	this.endGame = function(ary_sMusic, sImg, sMessage){
		//msg box ?
		var oMsg = null;
		
		//our message box 
		var sText = "";
		
		//build all 
		sText += "<img src=\"" + sImg + "\"/>";
		sText += "<p>";
		sText += sMessage;
		sText += "</p>";
		
		//stop the music
		//Me.members.oAudio.stop();
		//create a new tracklist
		Me.members.oAudio.setTracks( ary_sMusic );
		//re-run
		//Me.members.oAudio.run();
		
		//create the MsgBox
		oMsg = new MsgBox(sText);
		
		//overload !!!
		oMsg.onDisposed = function(){
			Me.members.oAudio.stop();
			gameApp();
		};
	}
	
	this.checkVictory = function(){
		
		//our count 
		var nCount = 0;
		//our iterator
		var nLine = 0;
		
		//the value of victory
		var bVictory = true;
		
		//set the number 
		nCount = Me.members.ary_oCells.length;
		while(nLine < nCount && bVictory){
			//check 
			
			//case it's a bomb !
			if(Me.members.ary_oCells[nLine].nValue < 0)
				bVictory = Me.members.ary_oCells[nLine].bMarked;
			else 
				bVictory = Me.members.ary_oCells[nLine].bVisible;
			
			//Next 
			nLine++;
		}
		
		//The return
		return bVictory;		
	}
	
	this.run = function(){
		
		//Text for loser
		
		//Text for winner ?
		
		//var time
		var nTime = ZEN_period * Me.members.nRunCount;
		
		/*if(ZEN_DEBUG)
			console.log("Enigne " + Me.members.sId + " running for " + nTime + " Milliseconds");*/
		
		//if we had an action 
		if(Me.members.oGameState != null){
			
			if(ZEN_DEBUG)
				console.log("Enigne GameState Action : " + Me.members.oGameState.nAction);
			
			switch(Me.members.oGameState.nAction){
				case -2 :
					//Win
					Me.endGame(ZEN_ary_sWinMusic, ZEN_Gif_Win_Path, ZEN_Speech_Victory);
					Me.stops();
					break;
				case -1 :
					//Game Over
					Me.endGame(ZEN_ary_sLoseMusic, ZEN_Gif_Lose_Path, ZEN_Speech_Lose);
					Me.stops();
					break;
				case 0 :
					//nothing to do 
					break;
				case 1 :
					//left click 
					Me.members.ary_oCells[Me.members.oGameState.nCell].bVisible = true;
					break;	
				case 2 :
					//right click 
					Me.members.ary_oCells[Me.members.oGameState.nCell].bMarked = ! Me.members.ary_oCells[Me.members.oGameState.nCell].bMarked;
					break;	
			}
				
			if(ZEN_DEBUG)
				console.log("Engine " + Me.members.sId + " Ploted !! ");
			
			//plots it !
			if(Me.plots()){
				
				//GameOver !!!
				if(Me.members.ary_oCells[Me.members.oGameState.nCell].nValue < 0 && Me.members.ary_oCells[Me.members.oGameState.nCell].bVisible)
					Me.members.oGameState = {nAction : -1, nCell : Me.members.oGameState.nCell};
				else if(Me.checkVictory())
					Me.members.oGameState = {nAction : -2, nCell : Me.members.oGameState.nCell};
				else
					Me.members.oGameState = null;//disactive
				
			}
			
		}
		
		//add the count 
		Me.members.nRunCount++;
	}
	
	this.starts = function(){
		
		if(Me.members.nTimerHandler < 0){
			//do nothing !!!
		}
		else{
			//close it !
			Me.stops();
		}
		
		//start the run section !!!
		//Me.members.nTimerHandler = setInterval(Me.run, ZEN_period);
		
		Me.members.oAudio.stop();
		
		Me.members.nTimerHandler = setTimeout( function(){Me.members.nTimerHandler = setInterval(Me.run, ZEN_period);}, 2000 );
		
		Me.members.oAudio.setTracks( ZEN_ary_sGameMusic );
		
		Me.members.oAudio.run();
	}
	
	this.stops = function(){
		if(Me.members.nTimerHandler < 0){
			//do nothing !!!
		}
		else{
			//close it !
			clearInterval(Me.members.nTimerHandler);
			Me.members.nRunCount = 0;
		}
	}
	
}
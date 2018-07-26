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

function Overview(sId, nWidth, nHeight, sColor, sBackgroundColor, xOpacity){
    
    this.sID = sId;
    this.sShadowID = "SHADOWS_" + sId;
    var Me = this;

    //init function 
    this.init = function(nWidth, nHeight, sColor, sBackgroundColor, xOpacity){

        //get da body element
        var oBody = document.body;
        //our code
        var sCode = "";

        //our top
        var nTop = (window.innerHeight - nHeight) / 2;
		//var nTop = (oBody.clientHeight - nHeight) / 2;
        if (nTop < 0)
            nTop = 0;
        var nLeft = (window.innerWidth - nWidth) / 2;
		//var nLeft = (oBody.clientWidth - nWidth) / 2;
        if (nLeft < 0)
            nLeft = 0;

        sCode += "<div id=\"" + this.sShadowID + "\" style=\"background-color:" + sBackgroundColor + ";width:" + oBody.clientWidth + "px;height:" + oBody.clientHeight + "px;opacity:" + xOpacity + ";top:0px;left:0px;position:absolute\">";
        sCode += "</div>";  
        sCode += "\t" + "<div id=\"" + this.sID + "\" style=\"width:" + nWidth + "px;height:" + nHeight + "px;background-color:" + sColor + ";opacity:1.0;top:" + nTop + "px;left:" + nLeft + "px;position:absolute\" />";   

        //add the night to 
        oBody.innerHTML += sCode;

    }

    //init us !
    this.init(nWidth, nHeight, sColor, sBackgroundColor, xOpacity);

    this.onDisposed = function(){
        /* Nothing */
    }

    this.dispose = function(){
        //get da body element
        var oBody = document.body;

        oBody.removeChild(document.getElementById(this.sID));
        oBody.removeChild(document.getElementById(this.sShadowID));

        this.onDisposed();
    }
}

var ptrMsgBox = null;

function MsgBox(sMessage){

    Overview.call(this, "MsgBoxID", 400, 200, "#A2A2A2", 0.5);

    this.sText = sMessage;

    //only one message box
    ptrMsgBox = this;

    this.plotsText = function(){

        //get the parent
        var oElement = document.getElementById(this.sID);

        //our code
        var sCode = "";

        //our code yeah !!!
        sCode += "<div id=\"" + this.sID + "_Content\">" + this.sText + "</div>";
        sCode += "<div class=\"BTN_\" onclick=\"ptrMsgBox.dispose()\">OK</div>";

        //put the code
        oElement.innerHTML = sCode;

    }

    this.plotsText();

}

function notDevYet(){
    return MsgBox("NotDevYet");
}
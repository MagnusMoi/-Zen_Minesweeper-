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

//var ary_Potours_Files = ["lib/Potours_Overview.js"];
var ary_Potours_Files = ["lib/Potours_Legacy.js", "lib/Potours_Overview.js", "lib/Potours_List.js"];

const POTOURS_VERSION = "0.2.2";

function Potours_loadScript(sFilename){
    var fileref = document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("src", sFilename);
    fileref.setAttribute("id", "Potours_Load_" + sFilename);

    //document.getElementsByTagName("head")[0].appendChild(fileref);
    document.head.appendChild(fileref);
    
}

function Potours_loadScriptAsync(ary_sFilename, nLine, callback, sVersion){

    if(nLine < ary_sFilename.length){
        
        //console.log("Potours Load script : " + ary_sFilename[nLine]);
        
        var nNext = nLine + 1;
        var script = document.createElement('script');
        script.setAttribute("type","text/javascript");

        if(sVersion != null)
            script.setAttribute("src", ary_sFilename[nLine] + "?" + sVersion);
        else
            script.setAttribute("src", ary_sFilename[nLine]);

        script.setAttribute("id", "Potours_Load_" + ary_sFilename[nLine]);

        script.onload = function(){
            //console.log("Potours Loaded script : " + ary_sFilename[nLine]);
            Potours_loadScriptAsync(ary_sFilename, nNext, callback, sVersion);
        };

        document.head.appendChild(script);
    }
    else{
        //console.log("Potours Load script over !!! ");
        callback();
    }
} 

function Potours_loadScriptFiles(ary_sFilename, callback, sVersion){

    Potours_loadScriptAsync(ary_sFilename, 0, callback, sVersion);

}

function Potours_init_lib(callback){
    //console.log("Potours init !!! ");
    Potours_loadScriptFiles(ary_Potours_Files, callback, POTOURS_VERSION);
    //console.log("Potours done !!! ");
}
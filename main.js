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

function gameApp(){
	
	//our Engine
	var oEngine = null;
	
	//create the engine
	oEngine = new Engine();
	//init it 
	oEngine.init("mainDiv", "Engine_Div");
	
	//start it !!!
	oEngine.starts();
	
}

function main(){
	
	//our message box 
	var oBox = null; //MsgBox(sMessage)
	
	//create a message Box !!
	oBox = new MsgBox(ZEN_Speech_Intro);
	
	//overload !!!
	oBox.onDisposed = gameApp;
	
}
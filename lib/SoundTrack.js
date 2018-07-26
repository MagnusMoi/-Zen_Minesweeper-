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

/*
functions to make a sound track in a parent div :p
By Ludowic "MagnusMoi" EMMANUEL 2014
*/

//constantes
var CSTT_SOUND_WAITING_SECOND = 5;

function soundTrack(div, Id){
    
    //note the id :p
    this.id = Id;
    
    //had our audio tag :3
	if(document.getElementById(div) != null){
		if(document.getElementById(Id) == null)
			document.getElementById(div).innerHTML += '<audio id="' + Id + '" class="SECRET"> Your Browser don\'t manage audio tag :( </audio>';
	}
    
    //fast acces to our audio
    this.audio =  document.getElementById(Id);
    
    //our audio timeout !!!
    this.audioTimeOut = 0;
    
    //our list of song
    this.soundList = [];
    
    //our current song
    this.position = -1;
    
    //trick ]:)
    var me = this;
    
    //to set the list
    this.setTracks = function(ost){
        this.soundList = ost;
    }
    
    //function to manage
    this.run = function(){
        if(this.audioTimeOut == 0){
            this.autoplayLoop();
        }
    }
    
    //function to play autoloop
    this.autoplayLoop = function(){
        
        //got the next music
        me.position++;
        
        if(me.audioTimeOut != 0){
            //clear the timeout
            clearTimeout(me.audioTimeOut);
            //set it to zero
            me.audioTimeOut = 0;
        }
        
        //indicate the new src
        me.audio.src = me.soundList[ me.position % me.soundList.length];
        //load it !
        me.audio.load();
        //then play it !!!
        me.audio.play();
        
        //here me.audio.duration is a NaN :(
        
        //get Ready for the next :p
        me.audioTimeOut = setTimeout(me.response, CSTT_SOUND_WAITING_SECOND * 1000);
        
    }
    
    //function to restart the autoloop :p
    this.response = function(){
        
        if(me.audioTimeOut != 0){
            //clear the timeout
            clearTimeout(me.audioTimeOut);
            //set it to zero
            me.audioTimeOut = 0;
        }
        
        //get Ready for the next :p
        me.audioTimeOut = setTimeout(me.autoplayLoop, (me.audio.duration - CSTT_SOUND_WAITING_SECOND) * 1000);
        
    }
    
    //stop all
    this.stop = function(){
        
        if(this.audioTimeOut != 0){
            //clear the timeout
            clearTimeout(me.audioTimeOut);
            //set it to zero
            me.audioTimeOut = 0;
            
            me.audio.pause();
        }
        
    }
    //ended
    //play()
    //src , load(), play()
    //volume from 0 to 1.0
    
} 

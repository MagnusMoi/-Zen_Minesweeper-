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


//the version
const ZEN_Version = "0.0.3";

//debug mod enable ?
const ZEN_DEBUG = true;

//loop period in millisecond
const ZEN_period = 20;
//The width in number of cell
const ZEN_Map_Width = 9;
//The cell width in px
const ZEN_Cell_Width = 50;
//The width between cells in px
const ZEN_Cell_Width_padding = 1;
//The height in number of cell
const ZEN_Map_Height = 9;
//The cell height in px
const ZEN_Cell_Height = 50;
//The height between cells in px
const ZEN_Cell_Height_padding = 1;
//Our number of bomb
const ZEN_Bomb_Number = 10;

const ZEN_Padding_Color = "#00aeff";

const ZEN_Data_Path = "data/main";

//our path of music
const ZEN_Music_path = ZEN_Data_Path + "/music";
//our path of game music
const ZEN_Game_Music_path = ZEN_Music_path + "/game";
//our path of win music
const ZEN_Win_Music_path = ZEN_Music_path + "/win";
//our path of win music
const ZEN_Lose_Music_path = ZEN_Music_path + "/lose";
//our game music
var ZEN_ary_sGameMusic = [
	ZEN_Game_Music_path + "/Moriarty_Tick_Tock.mp3"
	];
//our win music
var ZEN_ary_sWinMusic = [
	ZEN_Win_Music_path + "/Final_Fantasy_VII_Victory_Fanfare.mp3"
	];
//our lose music
var ZEN_ary_sLoseMusic = [
	ZEN_Lose_Music_path + "/I_Don_t_Want_To_Set_The_World_On_Fire.mp3"
	];

//our path of graphics
const ZEN_Graphic_path = ZEN_Data_Path + "/img";
//our path of cell graphics
const ZEN_Cell_Path = ZEN_Graphic_path + "/cell";
//our path of number graphics
const ZEN_Numbers_Path = ZEN_Graphic_path + "/numbers";
//our path of mark graphics
const ZEN_Mark_Path = ZEN_Graphic_path + "/mark";
//our path of gif graphics
const ZEN_Gif_Path = ZEN_Graphic_path + "/gif";
//Our win Gif Path
const ZEN_Gif_Win_Path = ZEN_Gif_Path + "/Congrafelicitation.gif";
//Our lose Gif Path
const ZEN_Gif_Lose_Path = ZEN_Gif_Path + "/Fallout4_Nuclear_Blast.gif";
//our images 
var ZEN_ary_sImages = [
	ZEN_Cell_Path + "/cell.png", 
	ZEN_Numbers_Path + "/-1.png",
	ZEN_Numbers_Path + "/0.png",
	ZEN_Numbers_Path + "/1.png",
	ZEN_Numbers_Path + "/2.png",
	ZEN_Numbers_Path + "/3.png",
	ZEN_Numbers_Path + "/4.png",
	ZEN_Numbers_Path + "/5.png",
	ZEN_Numbers_Path + "/6.png",
	ZEN_Numbers_Path + "/7.png",
	ZEN_Numbers_Path + "/8.png",
	ZEN_Mark_Path + "/mark.png"
	];

//Introduction speech
const ZEN_Speech_Intro = "Ludowic \"MagnusMoi\" EMMANUEL 2017<p><span id=\"MSGBOX_Title\" class=\"TITLE_\" > ZEN </span><br/> Zen est un d&eacute;mineur ... ne vous sentez pas trop sous pression<br/> Faites un click gauche de la souris pour r&eacute;v&eacute;ler une case<br/> Faites un click droit de la souris pour marquer une case comme une mine<br/> Bon jeu !!!<br/> </p>";
//Victory speech
const ZEN_Speech_Victory = "Victoire et Congrafelicitation !!!";
//Losing speech
const ZEN_Speech_Lose = "Nous sommes tous mort !!!";
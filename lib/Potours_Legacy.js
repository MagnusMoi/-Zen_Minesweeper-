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

///[CONST][Integer][POTOURS_FIND_NOTFOUND]constant return in not found case
const POTOURS_FIND_NOTFOUND = -1;


///[FUNCTION]Function to copy a set in another
///[PARAMETER][set][destinationSet]the destination set
///[PARAMETER][set][sourceSet]the source set
///[PARAMETER][boolean][bDoOverwrite]do we overwrite an existing value
///[RETURN]integer, our number of copied elements
//function legacy(destinationSet, sourceSet, bDoOverwrite = true) { 
function legacy(destinationSet, sourceSet, bDoOverwrite) { 

    //our number of copied elements
    var nCopied = 0;

    //overwrite or not !
    if(bDoOverwrite){
        //Overwritemode
        for (var element in sourceSet) { 
            //copy
            destinationSet[element] = sourceSet[element]; 
            //count
            nCopied++;
        }
    }else{
        //Don't Overwritemode
        for (var element in sourceSet) { 
            //test of undefined
            if(typeof destinationSet[element] === 'undefined'){
                //copy
                destinationSet[element] = sourceSet[element]; 
                //count
                nCopied++;
            }   
        }
    }
    
    //return the number of copied elements
    return nCopied;
};

///[FUNCTION]Function to copy a set in another for the super mechanism
///[PARAMETER][set][destinationSet]the destination set
///[PARAMETER][set][sourceSet]the source set
///[RETURN]integer, our number of copied elements
function legacySuper(destinationSet, sourceSet){

    //define the parent method
    if( typeof destinationSet["__parent_methods"] === "undefined" ) { 
        //create the set of method
        destinationSet["__parent_methods"] = {};
    } 

    //define the super mechanism
    if( typeof destinationSet["_super"] === "undefined" ) { 
        //the super
        destinationSet["_super"] = function() { 
            //the method name
            var methodName = arguments[0]; 
            //parameters
            var parameters = arguments[1]; 
            
            //execute
            this["__parent_methods"][methodName].apply(this, parameters);  
        } 
    }

    //copy the methods
    return legacy(destinationSet["__parent_methods"], sourceSet, false);
};

///[FUNCTION]Function to found a value on a member in a list of object
///[PARAMETER][List (Of Object)][lst_o]the list to search in
///[PARAMETER][string][sMember]the member we want eval
///[PARAMETER][string][sValueSearched]the value we search
///[RETURN]integer, the first position of the founded value or POTOURS_FIND_NOTFOUND const value
function findInObjLst(lst_o, sMember, sValueSearched){

    //iterrator
    var nLine = 0;
    //our count
    var nCount = 0;

    //init the number of element for the loop
    nCount = lst_o.length;
    //Loop
    while(nLine < nCount){

        //test
        if(lst_o[nLine][sMember] == sValueSearched)
            return nLine;

        //Next
        nLine++;
    };

    //not found issu
    return POTOURS_FIND_NOTFOUND;
};

///[FUNCTION]Function to found a value on a member in a list of object
///[PARAMETER][List (Of PotoursObject)][lst_o]the list to search in
///[PARAMETER][string][sMember]the member we want eval
///[PARAMETER][string][sValueSearched]the value we search
///[RETURN]integer, the first position of the founded value or POTOURS_FIND_NOTFOUND const value
function findInPotoursObjLst(lst_o, sMember, sValueSearched){

    //iterrator
    var nLine = 0;
    //our count
    var nCount = 0;

    //init the number of element for the loop
    nCount = lst_o.length;
    //Loop
    while(nLine < nCount){

        //test
        if(lst_o[nLine].members[sMember] == sValueSearched)
            return nLine;

        //Next
        nLine++;
    };

    //not found issu
    return POTOURS_FIND_NOTFOUND;
};

/* Not called yet */
function findResultInObjLst(lst_o, sMethod, lst_oParameters, sValueSearched){
    
    //iterrator
    var nLine = 0;
    //our count
    var nCount = 0;

    //init the number of element for the loop
    nCount = lst_o.length;
    //Loop
    while(nLine < nCount){

        //test
        if(lst_o[nLine][sMethod].apply(this, lst_oParameters) == sValueSearched)
            return nLine;

        //Next
        nLine++;
    };

    //not found issu
    return POTOURS_FIND_NOTFOUND;
};
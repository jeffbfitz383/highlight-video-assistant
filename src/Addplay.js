import React from "react";

function Addplay()
{
    function submit(e){

    }
  

    
    
    return(
        
            <div className="new-play-form">
              <h2>Add a new play</h2>
              <form  onSubmit={(e)=>submit(e)}>
                <p><input type="text" name="level" placeholder="Level"/> </p>
                <p><input type="text" name="game" placeholder="opposing school" /></p>
                <p><input type="number" name="quarter" placeholder="Quarter" /></p>
                <p><input type="text" name="start" placeholder="Start time" /></p>
                <p><input type="text" name="stop" placeholder="Stop time" /></p>
                <p><input type="number" name="player" placeholder="Player jersey #" /></p>
                <p><input type="text" name="play type" placeholder="Play type " /></p>
                <p><input type="number" name="quality" step="0.1" placeholder="Quality rating" /></p>
                <p><input type="number" name="assist" placeholder="Number of Assisting player" /></p>


                
                <button type="submit">Submit Play</button>
              </form>
            </div>
          );
        }
        
    
        
    

export default Addplay;
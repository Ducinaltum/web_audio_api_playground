const MAX_AUDIBLE_FREQUENCY = 20000;

const config = {
    divisions: divitions = 17
}

const pitches = MakeSoundSet(config.divisions);

function GetRandomPitchInSoundSet(){
    var index = Math.floor(gaussianRandom(pitches.length / 2));
    console.log(index);
    return pitches[index];
}

function MakeSoundSet(divisions, refValue = 20) {
    let freqRatio = Math.pow(2, (1/divisions));
    let baseFreqs = [];
    for(var i = 0; i < divisions; i++)
    {
        const baseFreq = refValue * Math.pow(freqRatio, i);
        let newFreq = baseFreq;
        for(var octave = 1; newFreq * octave < MAX_AUDIBLE_FREQUENCY; octave++)
        {
            newFreq *= octave;
            baseFreqs.push(newFreq);
        }
    }
    baseFreqs = baseFreqs.sort((a, b)=> a - b);
    return baseFreqs;
}




// Standard Normal variate using Box-Muller transform.
function gaussianRandom(mean=0, stdev=1) {
    let u = 1 - Math.random(); // Converting [0,1) to (0,1]
    let v = Math.random();
    let z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    // Transform to the desired mean and standard deviation:
    return z * stdev + mean;
}
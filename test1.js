function SetupRoutingGraph() {
    const context = new AudioContext();
    const lfo = context.createOscillator();
    const hfo = context.createOscillator();
    const modulationGain = context.createGain();
    var hasStarted = false;

    hfo.frequency.value = 0;
    lfo.frequency.value = 0.5;
    modulationGain.gain.value = 50;
    // Configure the graph and start the oscillators

    lfo.connect(modulationGain);
    modulationGain.connect(hfo.detune);
    hfo.connect(context.destination);

    this.ChangeNote = function (freq) {
        console.log(freq);
        hfo.frequency.value = freq;
        lfo.frequency.value = 0.5;
        modulationGain.gain.value = 50;
        if (!hasStarted) {
            hfo.start(0);
            lfo.start(0);
        }
        hasStarted = true;
    }
    return this;
}

var channel = null;

var btn = document.getElementById("START");
btn.onclick = function () {
    if(channel == null) channel = SetupRoutingGraph();
    channel.ChangeNote(GetRandomPitchInSoundSet());
}

/*
var btn = document.getElementById("START");
btn.onclick = function () {
    channel = SetupRoutingGraph();
    channel.ChangeNote(GetRandomPitchInSoundSet());
}
*/
const BPS = 1.0;



function RithmChangeNote(channel){
    var pitch = GetRandomPitchInSoundSet()
    console.log(pitch);
    console.log(channel);
    channel.ChangeNote(pitch);
    setTimeout(
        RithmChangeNote(channel),
        ((Math.random()* 3) + 1) * 1000
    )
}
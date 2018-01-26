window.addEventListener('load', this.init, false);

module.exports = class Audio {

    clips = {
        shoot: '../public/sounds/shoot.wav',
        //die: '../public/sounds/die.wav'
    };

    sources = {};
    context;
    bufferLoader;

    init() {
        try {
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            this.context = new AudioContext();

           this. bufferLoader = new BufferLoader(
                this.context,
                this.clips.values(),
                this.finishedLoading
            );

            this.bufferLoader.load();
        } catch (e) {
            alert('Web Audio API unsupported');
        }
    }

    finishedLoading(bufferList) {
        let i = 0;
        while (i < bufferList.length) {
            let source = this.context.createBufferSource();
            source.buffer = bufferList[i];
            source.connect(context.destination);
            this.sources[this.clips.keys()[i]] = source;

            console.log('Loaded clip:' + this.clips.keys()[i]);
        }

        this.play('shoot');
    }

    play(name) {
        let source = this.sources[name];
        source.start(0);

        console.log('Played clip:' + name);
    }
};

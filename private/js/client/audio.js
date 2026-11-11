class AudioBuffer {
    constructor(context) {
        this.context = context;
        this.urls = {
            'ambient-1': '/sounds/ambient-1.ogg',
            'die-1': '/sounds/die-1.ogg',
            'pickup-1': '/sounds/pickup-1.ogg',
            'pickup-2': '/sounds/pickup-2.ogg',
            'shoot-1': '/sounds/shoot-1.ogg',
            'shoot-2': '/sounds/shoot-2.ogg',
            'button': '/sounds/button.ogg',
            'radar': '/sounds/radar.wav',
            'shoot-3': '/sounds/shoot-3.wav',
            'shoot-4': '/sounds/shoot-4.wav',
            'tank-die': '/sounds/tank-die.mp3',
            'collector-walk':'/sounds/collector-walk.ogg',
            'missile-walk':'/sounds/missile-walk.ogg',
            'die':'/sounds/die.mp3',
            'explode':'/sounds/explode.ogg',
            'missile-die':'/sounds/missile-die.mp3',
            'tank-walk':'/sounds/tank-walk.ogg',
            'spawn':'/sounds/spawn.ogg',
            'kamikaze-walk':'/sounds/kamikaze-move.ogg',

        };
        this.buffer = [];
    }

    loadSound(url, index, bufferIndex = null, callback = null) {
        let request = new XMLHttpRequest();
        let thisBuffer = this;

        request.open('get', url, true);
        request.responseType = 'arraybuffer';
        request.onload = function () {
            thisBuffer.context.decodeAudioData(request.response, function (buffer) {
                thisBuffer.buffer[index] = buffer;

                if (callback) {
                    callback.apply(this, [thisBuffer.buffer[index], bufferIndex]);
                }
            });
        };
        request.send();
    }

    loadAll() {
        for (let key in this.urls) {
            this.loadSound(this.urls[key], key);
        }
    }

    getBufferedSoundByIndex(index) {
        return this.buffer[index];
    }

    getSoundByIndex(index) {
        return this.urls[index];
    }
};

class Audio {
    constructor() {
        this.context = null;
        this.buffer = null;
        this.tracks = [];
    }

    init() {
        this.getGainNode().connect(this.getContext().destination);
        this.getBuffer().loadAll();
    }

    play(soundId, bufferId = null) {
        let bufferedSound = this.getBuffer().getBufferedSoundByIndex(soundId);
        if (!bufferedSound) {
            let soundUrl = this.getBuffer().getSoundByIndex(soundId);
            if (soundUrl) {
                this.getBuffer().loadSound(soundUrl, soundUrl, bufferId, this.playBufferedSound.bind(this));
            } else {
                console.error(`Could not find sound with index "${soundId}".`);

                return null;
            }
        }

        this.playBufferedSound(bufferedSound);
    }

    playBufferedSound(bufferedSound, bufferId) {
        if (!bufferedSound) {
            return null;
        }

        bufferId = bufferId || this.getRandomId();
        this.tracks[bufferId] = this.getContext().createBufferSource();
        this.tracks[bufferId].buffer = bufferedSound;

        // console.log(`Playing buffered sound with ID ${bufferId}`, bufferedSound);

        this.tracks[bufferId].connect(this.getGainNode());
        this.tracks[bufferId].start(0);
    }

    stop(bufferId) {
        if (!this.tracks[bufferId]) {
            console.error(`Could not find track with bufferId ${bufferId}`);

            return null;
        }

        this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.getContext().currentTime + 0.5);
        this.tracks[bufferId].stop(this.getContext().currentTime + 0.5);
    }

    getGainNode() {
        if (!this.gainNode) {
            this.gainNode = this.getContext().createGain();
        }

        return this.gainNode;
    }

    getContext() {
        if (!this.context) {
            let AudioContext = window.AudioContext || window.webkitAudioContext;

            this.context = new AudioContext();
        }

        return this.context;
    }

    getBuffer() {
        if (!this.buffer) {
            this.buffer = new AudioBuffer(this.getContext());
        }

        return this.buffer;
    }

    getRandomId(length = 8) {
        let randomId = '';
        let characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < length; i++) {
            randomId += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
        }

        return randomId;
    }
};
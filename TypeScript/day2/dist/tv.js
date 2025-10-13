"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tv = void 0;
class Tv {
    tChannel;
    tVolumeLevel;
    tOn;
    constructor(tChannel, tVolumeLevel, tOn) {
        this.tChannel = tChannel;
        this.tVolumeLevel = tVolumeLevel;
        this.tOn = tOn;
    }
    setTvChannel(channel) {
        this.tChannel = channel;
    }
    setVolumeLevel(volume) {
        this.tVolumeLevel = volume;
    }
    setTvOn(on) {
        this.tOn = on;
    }
    getTvChannel() {
        return this.tChannel;
    }
    getVolumeLevel() {
        return this.tVolumeLevel;
    }
    getTvOn() {
        return this.tOn;
    }
}
exports.Tv = Tv;
//# sourceMappingURL=tv.js.map
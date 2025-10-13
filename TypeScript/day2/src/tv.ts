export class Tv{
    private tChannel:number;
    private tVolumeLevel:number;
    private tOn:boolean;
    
    constructor(tChannel:number, tVolumeLevel:number, tOn:boolean){
        this.tChannel=tChannel;
        this.tVolumeLevel=tVolumeLevel;
        this.tOn=tOn;
    }

    public setTvChannel(channel:number){
        this.tChannel=channel;
    }

    public setVolumeLevel(volume:number){
        this.tVolumeLevel=volume;
    }

    public setTvOn(on:boolean){
        this.tOn=on;
    }

    public getTvChannel(){
        return this.tChannel;
    }

    public getVolumeLevel(){
        return this.tVolumeLevel;
    }

    public getTvOn(){
        return this.tOn;
    }
}
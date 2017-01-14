class Status {
    public hosts: Array<Thing>;
    public fitToLive: number;
    public fitToReproduce: number;


    constructor(hosts: Array<Thing>, fitToLive: number, fitToReproduce: number) {
        this.hosts = hosts;
        this.fitToLive = Math.floor(fitToLive);
        this.fitToReproduce = Math.floor(fitToReproduce);
    }
}
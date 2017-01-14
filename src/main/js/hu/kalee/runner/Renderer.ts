class Renderer {
    private holderSelector: string;

    constructor(holderSelector: string) {
        this.holderSelector = holderSelector;
    }

    public render(status: Status): void {
        let holder: JQuery = this.getHolderElement();
        this.empty(holder);
        this.renderIn(status.hosts, holder);
        this.showPopulation(status.hosts);
        this.showFitnesses(status);
    }


    private empty(holder: JQuery): void {
        holder.empty();
    }

    private getHolderElement(): JQuery {
        return jQuery(this.holderSelector);
    }

    private renderIn(list: Array<Thing>, holder: JQuery): void {
        list.forEach((item) => {
           holder.append(this.generateRepresentation(item));
        });
    }

    private generateRepresentation(item: any) {
        return "<div class='thing' style='background-color: " + item.getColor() + "'>" + item.getFitness() + "</div>";
    }

    private showPopulation(list: Array<Thing>): void {
        jQuery("#population").empty();
        jQuery("#population").text(list.length);
    }

    private showFitnesses(status: Status): void {
        jQuery("#fitToLive").text(status.fitToLive);
        jQuery("#fitToReproduce").text(status.fitToReproduce);
    }
}

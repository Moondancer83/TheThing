class Renderer {
    private holderSelector: string;

    constructor(holderSelector: string) {
        this.holderSelector = holderSelector;
    }

    public render(list: Array<Thing>): void {
        let holder: JQuery = this.getHolderElement();
        this.empty(holder);
        this.renderIn(list, holder);
        this.showPopulation(list);
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
}

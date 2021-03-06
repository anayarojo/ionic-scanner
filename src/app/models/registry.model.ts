
export class Registry {

    public format: string;
    public text: string;
    public type: string;
    public icon: string;
    public created: Date;

    constructor(format: string, text: string) {
        this.format = format;
        this.text = text;
        this.created = new Date();
        this.determinateTypeAndIcon();
    }

    private determinateTypeAndIcon() {
        const textStart = this.text.substr(0, 4);
        // console.log('TYPE', textStart);

        switch (textStart) {
            case 'http':
                this.type = 'http';
                this.icon = 'globe';
            break;
            case 'geo:':
                this.type = 'geo';
                this.icon = 'pin';
            break;
            default:
                this.type = 'unknown';
                this.icon = 'expand';
            break;
        }
    }
}

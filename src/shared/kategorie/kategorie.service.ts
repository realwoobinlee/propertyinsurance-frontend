export class KategorienGroup {
    public erstekategorie: string[] = ["Hobby- & Sportgeräte", "Kommunikationselektronik", "Unterhaltungselektronik & Computer"];
    public ersteauswahl: string;
    public zweitekategorie: string[];
    public productauswahl: string;
    public maxjahr: string;
    public mussalert: boolean = false;
    public zeigepreisdiv: boolean = false;

    setZweiteKategorie(value:string) {
        this.ersteauswahl = value;
        this.zweitekategorie = [];

        switch (this.ersteauswahl) {
            case this.erstekategorie[0]:
                this.zweitekategorie = ["Fahrrad"];
                break;
            case this.erstekategorie[1]:
                this.zweitekategorie = ["Handy", "Smartphone"];
                break;
            case this.erstekategorie[2]:
                this.zweitekategorie = ["Laptop", "Netbook", "Tablet-Computer"];
                break;
        }
    }

    setFinalProduct(value:string) {
        this.mussalert = false;
        this.maxjahr = "1 Jahr";
        this.productauswahl = value;
        if (this.productauswahl in ["Laptop", "Netbook", "Tablet-Computer"]) {
            this.maxjahr = "3 Jahre";
        }
    }

    setAlert(value: string) {
        if(value === "yes") {
            this.mussalert = true;
            this.zeigepreisdiv = false;
        } else {
            this.mussalert = false;
            this.zeigepreisdiv = true;
        }
    }
}

export class KategorienGroup {
    public erstekategorie: string[] = ["Hobby- & Sportgeräte", "Kommunikationselektronik","Musikinstrumente"];
    public ersteauswahl: string;
    public zweitekategorie: string[];
    public productauswahl: string;
    public maxjahr: string;
    public mussalert: boolean = false;

    setZweiteKategorie(value:string) {
        this.ersteauswahl = value;
        this.zweitekategorie = [];

        switch (this.ersteauswahl) {
            case this.erstekategorie[0]:
                this.zweitekategorie = ["Fahrrad"];
                break;
            case this.erstekategorie[1]:
                this.zweitekategorie = ["Laptop", "Handy", "Smartphone"];
                break;
            case this.erstekategorie[2]:
                this.zweitekategorie = ["blabla"];
                break;
        }
    }

    setFinalProduct(value:string) {
        this.mussalert = false;
        this.maxjahr = "1 Jahr";
        this.productauswahl = value;
        if (this.productauswahl === "Laptop") {
            this.maxjahr = "3 Jahre";
        }
    }

    setAlert(value: string) {
        if(value === "yes") {
            this.mussalert = true;
        } else {
            this.mussalert = false;
        }
    }
}
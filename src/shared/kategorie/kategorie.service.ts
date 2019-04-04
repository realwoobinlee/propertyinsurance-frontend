export class KategorienGroup {
    public erstekategorie: string[] = ["Hobby- & Sportgeräte", "Kommunikationselektronik","Musikinstrumente"];
    public ersteauswahl: string;
    public zweitekategorie: string[];
    public zweiteauswahl: string;

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
}
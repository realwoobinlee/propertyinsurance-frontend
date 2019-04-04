export interface Beitrag{
    // muss definiert werden
    versicherungssumme: number;
    jahresBeitragbrutto: number;
    monatsbetrag: number;
}

export interface Enquiries{
    property: string;
    price: number;
    contractDuration: number;
    salutation: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    birthDate: string;
    address: string;
    postalCode: number;
    city: string;
    country: string;
}

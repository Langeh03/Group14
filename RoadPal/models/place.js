class Place {
    constructor(title, address,  location) {
        this.title =  title;
        this.address = address;
        this.location = location;
        this.id = new Date().toString() + Math.random().toString();
    }
}
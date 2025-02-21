function Mobile(Mdl, prc, clr, rm, stg) {
    this.model = Mdl;
    this.price = prc;
    this.color = clr;
    this.ram = rm;
    this.storage = stg;
}
m1= new Mobile("Apple", 699, "Black", "4GB", "128GB");
m2= new Mobile("Samsung", 799, "White", "6GB", "256GB");
console.log(m1,m2);
m1.brand="iphone";
console.log(m1);
Mobile.prototype.warranty = "1 year";
console.log(m1.warranty,m2.warranty);
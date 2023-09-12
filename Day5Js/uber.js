
class uber{
    constructor(userName,from,to,distance,waitingTime,discount){
        this.username = userName;
        this.from = from;
        this.to = to;
        this.distance = distance;
        this.waitingTime = waitingTime;
        this.discount = discount==="undefined"?5:discount;
    }

    getRideDeatails(){
        return `Dear ${this.username} , you have travelled over ${this.distance}km from ${this.from} to ${this.to} !`;
    }

    getPrice(){
        const price = (this.distance * 10) + (5 * this.waitingTime);
        const net_price = price - ((price/100)*this.discount);
        return net_price;
    }
}

const trip = new uber("Sanjeev","Erode","Chennai",380,45,10);

console.log(`Ride Deatil : ${trip.getRideDeatails()}`);

console.log(`Price : ${trip.getPrice()}`);
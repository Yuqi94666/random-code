
class ParkingLot {
	constructor(slots){
		this.slots = new Array(slots).fill(null);
	}
	park(carId){
		for(let i = 0; i<this.slots.length;i++){
			if(this.slots[i] === null){
				this.slots[i] = carId;
				return true;
			}
		}
		return false;
	}
	remove(carId){
		for(let i=0; i < this.slots.length;i++){
			if(this.slots[i]!== carId){
				this.slots[i] = null;
				return true;
			}
		}
		return false;
	}
	getSlots(){
		return this.slots;
	}
}


class CurrentTab {

	constructor(domain, lastAccessTime) {
		this.domain = domain;
		this.lastAccessTime = lastAccessTime;
	}

	getDomain() {
		return this.domain;
	}

	setDomain(newDomain) {
		this.domain = newDomain;
	}


}

export {CurrentTab};

//https://medium.freecodecamp.org/how-to-use-es6-modules-and-why-theyre-important-a9b20b480773
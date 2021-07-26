/*
Antonio Keyes
7-26-21
*/

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//dna is an array of 15 DNA bases
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      //generate random number from 0-length of dna strand
      let randomIndex = Math.floor(Math.random() * this.dna.length);
      //generate random ATCG 
      let randomBase = returnRandBase();
      //if the generated base is equal to the random index, then get a new random base until its 
        //not the same
      while (this.dna[randomIndex] == randomBase) {
        randomBase = returnRandBase;
      }
      //once a unique base has been found, replace the random index in strand with random base
      this.dna[randomIndex] = randomBase;
      //return
      return this.dna;
    },
    compareDNA(newOrg) {
      // compare this.dna with the dna of otherOrg
      // see how many bases are identical (same base and in same location in array)
      // function returns a print statement
        // 'states percentage of DNA the two objects have in common
        // ** use the .specienNum to identify which pAequor organisms are being compared
      let notSameCounter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] !== newOrg.dna[i]) {
          notSameCounter++;
        }
      }
      let percentageInCommon = ((this.dna.length - notSameCounter) / (this.dna.length)) * 100;

      console.log();
      console.log(`Specimens ${this.specimenNum} and ${newOrg.specimenNum} share ${percentageInCommon}% of DNA in common`)
      console.log();

    },
    willLikelySurvive() {
      // sees if the this.dna is >= 60%
      // if so, return true, otherwise false.
      let COrGCounter = 0;
      for (let base of this.dna) {
        if (base === 'C' || base === 'G') {
          COrGCounter++;
        }
      }
      if ((COrGCounter / this.dna.length) >= 0.6) {
        return true
      } else {
        return false;
      }
    }
  }
}

const thirtyInstances = () => {
  thirtypAequorArray = [];
  for (let i = 1; i <= 30; i++) {
    thirtypAequorArray.push(pAequorFactory(i, mockUpStrand()));
  }
  return thirtypAequorArray;
}



//*****TESTS*****

// let newOrg = pAequorFactory(2, mockUpStrand());

// let originalOrganism = (pAequorFactory(1, mockUpStrand()));

//originalOrganism.compareDNA(newOrg);
// console.log(originalOrganism.willLikelySurvive());

// console.log(originalOrganism.dna);
//console.log(newOrg.dna);
// console.log(thirtyInstances());



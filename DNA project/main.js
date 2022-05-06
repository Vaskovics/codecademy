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

// factory function
function pAequorFactory(number, dna){
  return{
    specimenNum: number,
    dna:dna,

    mutate(){
      let randObj = Math.floor(Math.random()*15);
      let newBase = returnRandBase();
      while(this.dna[randObj] === newBase){
        newBase = returnRandBase();
      };
      console.log(this.dna[randObj], newBase);
      this.dna[randObj] = newBase;
    
      
    },
    compareDNA(pAequor){
      let score = 0;
      for(let i=0; i<this.dna.lenght; i++){
        if(j>i){break;};
        for(let j=i; j<pAequor.dna.lenght; j++){
          if(this.dna[i] === pAequor.dna[i]){score ++;};
        };
      };
      switch(score){
        case 0:
          console.log(`specimen #1 and specimen #2 have 0% DNA in common`);
          break;
        case 1:
          console.log(`specimen #1 and specimen #2 have 25% DNA in common`);
          break;
        case 2:
          console.log(`specimen #1 and specimen #2 have 50% DNA in common`);
          break;
        case 3:
          console.log(`specimen #1 and specimen #2 have 75% DNA in common`);
          break;
        case 4:
          console.log(`specimen #1 and specimen #2 have 100% DNA in common`);
          break;
      };
    },

    willLikelySurvive(){

    },

  };
}


const ex1 = pAequorFactory(1, mockUpStrand()  );
//console.log(ex1);
//ex1.mutate();

const objArr = [];
for(i=0; i<30;i++){
  objArr.push(pAequorFactory(i, mockUpStrand()));
}




console.log(objArr[29]);

objArr[29].mutate();
console.log(objArr[29]);
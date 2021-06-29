const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  userChoice: null,

  play: function() {
    this.secretNum = Math.floor(Math.random() * 
    (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    console.log(this.secretNum)
    keepPlaying = true
    
    while(keepPlaying) {  // if user choice is not = to sceretNum then keep playing
      console.log('Inside while loop')
      this.userChoice = prompt('Enter a guess between 1-100 ') 
      
      if (this.userChoice == this.secretNum) {
        console.log('win')
        keepPlaying = false
        alert('You Win!' ) 
      } 
      else if (this.userChoice <= this.secretNum) {
        console.log('to low guess again')
        alert ('To low guess again!' + this.prevGuesses)
        console.log(this.secretNum)
      } else if (this.userChoice >= this.secretNum) {
        console.log('to high guess again')
        alert ('To high guess again')
      } 
    }
  }
}
console.log('About to run play')
game.play()
console.log('done running plays')
// Review of what variable, function, object looks like
==============================
// In JavaScript, variables look like this:
==============================

const dogSound = "woof";
let dogBreed = "shih tzu";

==============================
// functions look like this:
==============================

function speak() {
  console.log(`${dogBreed} says ${dogSound}`);
}

==============================
// and objects looks like this:
==============================

const dog = {
  sound: "woof",
  dogBreed: "shih tzu",
  speak: function() {
    console.log(`${this.dogBreed} says ${this.dogSound}`);
  }
};

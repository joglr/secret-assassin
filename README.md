# Secret Assassin Game Generator

This small program help you set up your own game of secret assassin!

The algorithm for assigning targets is inspired by [this video](https://www.youtube.com/watch?v=VUK4461pRzc).

## Usage
Simply create a file in this directory (for example named `participants.txt`) with the names of participants on their own line, e.g.

```
Foo
Bar
Baz
```

Then run `npm start [filename]`

If no filename is specified, `participants.txt` is assumed.

**Output**
```
Bob -> Janet
```
This means that the player named `Bob` is supposed to assassinate `Janet`

Each of these lines need to be brought to each assassin in secret, so they know their first target. 
If you also want to participate yourself, you need need to print and cut each line out without looking. Then you need to cover the target names and pass each flap of paper to each secret assassin. 

### Standard rules
1. Each player needs to assassinate their target in private and say "You're dead!" to their target. The assassin then receivers the target of the victim and continues the cycle. 
1. The last player or the player with the most kills win the game. 
1. Remember to buy an awesome price for the winner!

### Recommendedations
It is recommened to establish rules for when and where targets can be eliminated. For example, only allow assassination between 10am and 10pm.
You can also spice up the game by setting rules of which "murder weapon" to use.

Hope you have fun!

## Contributing
Feel free to open an issue or pull request, if you think this `README.md` needs any further explanation, or you have ideas for improving the code or functionality!

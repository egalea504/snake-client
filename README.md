# snake-client

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here. 

## Final Product

!["example of connection established client"](/assets/server_connection client established.png)
!["example of interactions with the other players"](/assets/canned messages displayed.png)


## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command.
- The server will register your name when the connection is successful.
- To proceed with the game, you can press the following keys on the keyboard to start navigating your snake in order to catch the pieces of food:
    w: Move up
    a: Move left
    s: Move down
    d: Move right
- You can press these additional keys on the keyboard to interact with the other players in the game by displaying the following messages:
    h to Say: Hahaha
    j to Say: Watch out!
    k to Say: This is fun!
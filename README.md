# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side. by saying that I encourage you to check server [Guide](https://github.com/lighthouse-labs/snek-multiplayer/blob/master/README.md) first.


## Final Product

![Snake-Client](https://user-images.githubusercontent.com/95319447/155262028-4f345d88-b801-4794-baff-f968e6862880.png)
![Snake-Server](https://user-images.githubusercontent.com/95319447/155262030-53fd051f-6216-461f-bc9f-d60ada72dde9.png)


## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command.
- "Be Fast", There is 7.5 seconds Idel Timeout after first connection. 
- For *exit* press **ctrl** + **c**
- You can move the snake by *wasd* keys.
  * **w**: Move up
  * **a**: Move left
  * **s**: Move down
  * **d**: Move right
- Snake talks to you
  * **l**: Good Luck
  * **g**: Good Game
  * **e**: Enjoy the Game
- "Be Careful", Still there is Idel Timeout, after each movement you have 15 seconds.
- Avoid walls and snake's body... 
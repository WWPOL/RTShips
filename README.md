lexhack
=======

this time we gon win somethin


IDEA
=======

Turn-based "Battleship" game where two players control their fleet of warships to try rek the other guy.
Game takes place on a grid (100 x 100?) 
Ships will have different properties such as speed, firepower, and the player must utilize these to scout, manuever around, and engage the opponent.

What is needed
==============

- Map (2D array that will store ship objects?)
- Viewport- a "camera", shows player part of the map (could be done with Phaser?)
- Ship class
	- properties: alive, x, y, direction, vision, speed, health, range, damage
	- methods: move(), turn(), attack(target)
- The multiplayer aspect:
	- Each player has an array which stores ships
	- A turn:
		- Cycle through the array of ships prompting player for commands for each (move or shoot)
		- Update map (move positions of player's ships, apply damage to opponent's, etc.)
		- Present updated map to other player and repeat (if socket: lock down previous player from doing anything)
- UI/UX: (we will need more than what we had in EI)
	- Main map, but also minimap and ship info section. Might want to use separate canvases
	- LOTS of buttons!
	- For issuing commands: 
		- Mouse must be tracked, separate move and fire modes
		- Way to clearly indicate ship's movement and firing range
	- Fog of War implementation
	- Assets and animations? (and use Phaser?)
- Socket.io Server (may be too challenging)
	- Stuff about getting players into rooms (see Andrew's socket-RPS project)
	- Turn-by-turn, one player will be waiting. Must be able to communicate start-turn, end-turn 
	- How to relay data? Pass ship arrays as JSON objects and allow client to do calculations?

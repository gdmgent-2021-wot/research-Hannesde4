# Py game met keyboard input

Dit is mijn code voorbeeld van de pygame met gewone keyboard input.

``` python
# import the libraries
import pygame
import sys
import random

# initialize the pygame library
pygame.init()

# set my variables for height and width in pixels
WIDTH = 800
HEIGHT = 600
SPEED = 10

RED = (255,0,0)
BLUE = (0,0,255)
BLACK = (0,0,0)
YELLOW = (255,255,0)

PLAYER_SIZE = 50
PLAYER_POS = [WIDTH/2, HEIGHT-2*PLAYER_SIZE]

ENEMY_SIZE = 50
ENEMY_POS = [random.randint(0, WIDTH-ENEMY_SIZE), 0]
ENEMY_LIST = [ENEMY_POS]


screen = pygame.display.set_mode((WIDTH, HEIGHT))

game_over = False

score = 0

clock = pygame.time.Clock()

myFont = pygame.font.SysFont("monospace", 35)

def set_level(score):
	if score < 20:
		SPEED = 4
	else:
		SPEED = score/5 + 1
	return SPEED

def drop_enemies(ENEMY_LIST):
	delay = random.random()
	if len(ENEMY_LIST) < 10 and delay < 0.1:
		x_pos = random.randint(0, WIDTH-ENEMY_SIZE)
		y_pos = 0
		ENEMY_LIST.append([x_pos, y_pos])
		
def draw_enemies(ENEMY_LIST):
	for ENEMY_POS in ENEMY_LIST:
		pygame.draw.rect(screen, BLUE, (ENEMY_POS[0], ENEMY_POS[1], ENEMY_SIZE, ENEMY_SIZE) )
		
def update_enemy_positions(ENEMY_LIST, score):
	for idx, ENEMY_POS in enumerate(ENEMY_LIST):
		if ENEMY_POS[1] >= 0 and ENEMY_POS[1] < HEIGHT:
			ENEMY_POS[1] += SPEED
		else:
			ENEMY_LIST.pop(idx)
			score += 1
	return score
			
def collision_check(ENEMY_LIST, PLAYER_POS):
	for ENEMY_POS in ENEMY_LIST:
		if detect_collision(ENEMY_POS, PLAYER_POS):
			return True
	return False
	

def detect_collision( PLAYER_POS, ENEMY_POS):
	p_x = PLAYER_POS[0]
	p_y = PLAYER_POS[1]
	
	e_x = ENEMY_POS[0]
	e_y = ENEMY_POS[1]
	
	if (e_x >= p_x and e_x < (p_x + PLAYER_SIZE)) or (p_x >= e_x and p_x  < (e_x + ENEMY_SIZE)):
		if (e_y >= p_y and e_y < (p_y + PLAYER_SIZE)) or (p_y >= e_y and p_y  < (e_y + ENEMY_SIZE)):
			return True
	return False

# make a while loop that loops as long as the game is running
while not game_over:
	
	for event in pygame.event.get():
		
		if event.type == pygame.QUIT:
			sys.exit()
		
		if  event.type == pygame.KEYDOWN:	
			x = PLAYER_POS[0]
			y = PLAYER_POS[1]
			if event.key == pygame.K_LEFT:
				x -= PLAYER_SIZE
			elif event.key == pygame.K_RIGHT:
				x += PLAYER_SIZE
		PLAYER_POS = [x, y]
	
	screen.fill((BLACK))
	
	
	drop_enemies(ENEMY_LIST)
	score = update_enemy_positions(ENEMY_LIST, score)
	SPEED = set_level(score)
	
	text = "Score:" + str(score)
	label = myFont.render(text, 1, YELLOW)
	screen.blit(label, (WIDTH-200, HEIGHT-40))

	
	if collision_check(ENEMY_LIST, PLAYER_POS):
		game_over = True
		break
		
	draw_enemies(ENEMY_LIST)
	
	pygame.draw.rect( screen, RED, (PLAYER_POS[0], PLAYER_POS[1], PLAYER_SIZE, PLAYER_SIZE) )
	
	clock.tick(30)

	pygame.display.update()
```
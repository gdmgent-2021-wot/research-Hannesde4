# GPIO input

Dit is mijn code voorbeeld om de GPIO uit te lezen.

``` Python
# import libraries
import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)

# read the GPIO
GPIO.setup(4, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(25, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)

while True:
    if GPIO.input(4) == 1:
		print "left"
		time.sleep(0.1)
	elif GPIO.input(25) == 1 :
		print "right"
		time.sleep(0.1)

```
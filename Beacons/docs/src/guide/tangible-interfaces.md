# Tangible interfaces
De term tangible interfaces kan nu nog wat vaag lijken, maar via deze documentatie gaan we uitleggen wit dit is, enkele voorbeelden geven, en gaan we zelf ook iets maken.

## Wat is een tangible interface
Een tangible interface is letterlijk vertaald een tasbare interface.
In mensentaal kunnen we dit interpreteren als een fysiek object dat digitaal iets gaat aansturen.

## Voorbeelden

### computermuis
Het simpelste voorbeeld is een computermuis. Hierbij ga je een fysiek opbject op een plat oppervlak gaan bewegen, en ondertussen gaat het pijltje op jouw scherm mee bewegen.

### Siftables

Siftables zijn een soort blokjes met verschillende sensoren in, en een klein schermpje. Deze zijn ontworpen door MIT Labs, en zijn een goed voorbeeld van een tangable interface. Hier ga je fysiek dingen gaan manipuleren aan het blokje om dit visueel op het schermpje te zien te krijgen.
Via onderstaand filmpje kun je een mooie demo zien van dit uniek staaltje technologie.

<!-- blank line -->
<figure class="video_container">
    <iframe src="https://player.vimeo.com/video/3164229" width="640" height="361" frameborder="0" allowfullscreen="true"> </iframe>
</figure>
<!-- blank line -->

## Demo
Voor de demo heb ik mij gebasseerd op een tutorial om het feitenlijke spelletje te maken, en documentatie over de GPIO, en hoe ik deze kan uitlezen om manipulaties te doen op het scherm.

### Benodigdheden
Voordat je zelf aan de slag kunt gaan met de demo heb je wel enkele dingen nodig
- lichte voorkennis van python is wel handig
- raspberry pi
- GPIO connector (niet verplicht, maar wel handig)
- een schakelbord
- kabeltjes om verbindingen te maken
- jouw favoriete fruit

### Game maken

We gaan een game maken voor python, hiervoor ga ik jullie op weg helpen met een kleine setup, en dan gaat een tutorial die ik heb gevonden het overnemen.

Voordat we beginnen moet je zorgen dat je Python 3 hebt geinstalleerd.
Om dit te controlleren kun je het volgende commando uitvoeren in de terminal van je raspberry pi:

``` shell
    $ python3 --version
```

Als je geen python versie 3 of hoger hebt, dan kun je deze best installeren met deze [link](https://samx18.io/blog/2018/09/05/python3_raspberrypi.html).

Nu jouw python versie 3 of hoger is kan het echte werk beginnen, of toch bijna, eerst moeten we nog een library downloaden.

Om de pygame library te installeren, moet je het volgende commando uitvoeren:

``` shell
    $ pip install pygame
```

Als dit commande niet werkt, dan kun je het onderstaande commando eens proberen:

``` shell
    $ pip3 install pygame
```

Nadat je dit gedaan hebt kunnen we overgaan naar de tutorial, deze kun je hieronder vinden.

Als je liever geen tutorial volgt, en de code zelf wilt ontleden, dan kun je deze ook vinden in mijn Code examples.

<!-- blank line -->
<figure class="video_container">
    <iframe src="https://www.youtube.com/embed/-8n91btt5d8" width="640" height="361" frameborder="0" allowfullscreen="true"> </iframe>
</figure>
<!-- blank line -->


### GPIO uitlezen

Voordat we kunnen beginnen experimenteren met de GPIO is er nog een klein aandachtspunt:
De GPIO contacten zijn enkel geschikt voor 3.3V, dus opgepast dat je geen 5V gaat aansluiten op de contactpunten of jouw raspberry pi kan hier zwaar onder lijden.
Om met de GPIO te werken gaan we kijken of de python development tools zijn geïnstalleerd.
We gaan volgende commands invoeren in de terminal van de raspberry pi:

``` shell
    $ sudo apt-get update
    $ sudo apt-get install python-dev python-pip
    $ sudo pip install --upgrade distribute
    $ sudo pip install ipython
```

Dan gaan we de GPIO library installeren met onderstaand commande:

``` shell
    $ sudo pip install --upgrade RPi.GPIO
```

Het kan even duren voordat dit alles geïnstalleerd is. Eens het klaar is, dan kunnen we beginnen met een file aan te maken. Daarna gaan we de GPIO importeren met onderstaande code:

```python
    import RPi.GPIO as GPIO
```

Vervolgens gaan we definiëren hoe de GPIO moet geïnterpreteerd worden, dit kan zowel met BCM als BOARD.
Wij gaan hier BCM voor gebruiken, en dit doen we met volgende code:

``` python
    GPIO.setmode(GPIO.BCM)
```

Eerst gaan we de GPIO contacten configureren die we willen gebruiken.
Hier definiëren we dat het over GPIO contact 4 gaat, en dat we dit als input gaan gebruiken.

```python 
    GPIO.setup(4, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
```

Om te kijken of de GPIO correct reageert gaan we een kleine while schrijven.
Bij dit voorbeeld gaan we werken met de GPIO 4 en 25 input.

```python
    while True:
    if GPIO.input(4) == 1:
		print "left"
		time.sleep(0.1)
	elif GPIO.input(25) == 1 :
		print "right"
		time.sleep(0.1)
```


Om de volledige code te zien kun je naar de code files gaan.
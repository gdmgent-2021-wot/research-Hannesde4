(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{368:function(e,t,n){"use strict";n.r(t);var a=n(42),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"tangible-interfaces"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tangible-interfaces"}},[e._v("#")]),e._v(" Tangible interfaces")]),e._v(" "),n("p",[e._v("De term tangible interfaces kan nu nog wat vaag lijken, maar via deze documentatie gaan we uitleggen wit dit is, enkele voorbeelden geven, en gaan we zelf ook iets maken.")]),e._v(" "),n("h2",{attrs:{id:"wat-is-een-tangible-interface"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wat-is-een-tangible-interface"}},[e._v("#")]),e._v(" Wat is een tangible interface")]),e._v(" "),n("p",[e._v("Een tangible interface is letterlijk vertaald een tasbare interface.\nIn mensentaal kunnen we dit interpreteren als een fysiek object dat digitaal iets gaat aansturen.")]),e._v(" "),n("h2",{attrs:{id:"voorbeelden"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#voorbeelden"}},[e._v("#")]),e._v(" Voorbeelden")]),e._v(" "),n("h3",{attrs:{id:"computermuis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#computermuis"}},[e._v("#")]),e._v(" computermuis")]),e._v(" "),n("p",[e._v("Het simpelste voorbeeld is een computermuis. Hierbij ga je een fysiek opbject op een plat oppervlak gaan bewegen, en ondertussen gaat het pijltje op jouw scherm mee bewegen.")]),e._v(" "),n("h3",{attrs:{id:"siftables"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#siftables"}},[e._v("#")]),e._v(" Siftables")]),e._v(" "),n("p",[e._v("Siftables zijn een soort blokjes met verschillende sensoren in, en een klein schermpje. Deze zijn ontworpen door MIT Labs, en zijn een goed voorbeeld van een tangable interface. Hier ga je fysiek dingen gaan manipuleren aan het blokje om dit visueel op het schermpje te zien te krijgen.\nVia onderstaand filmpje kun je een mooie demo zien van dit uniek staaltje technologie.")]),e._v(" "),n("figure",{staticClass:"video_container"},[n("iframe",{attrs:{src:"https://player.vimeo.com/video/3164229",width:"640",height:"361",frameborder:"0",allowfullscreen:"true"}})]),e._v(" "),n("h2",{attrs:{id:"demo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[e._v("#")]),e._v(" Demo")]),e._v(" "),n("p",[e._v("Voor de demo heb ik mij gebasseerd op een tutorial om het feitenlijke spelletje te maken, en documentatie over de GPIO, en hoe ik deze kan uitlezen om manipulaties te doen op het scherm.")]),e._v(" "),n("h3",{attrs:{id:"benodigdheden"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#benodigdheden"}},[e._v("#")]),e._v(" Benodigdheden")]),e._v(" "),n("p",[e._v("Voordat je zelf aan de slag kunt gaan met de demo heb je wel enkele dingen nodig")]),e._v(" "),n("ul",[n("li",[e._v("lichte voorkennis van python is wel handig")]),e._v(" "),n("li",[e._v("raspberry pi")]),e._v(" "),n("li",[e._v("GPIO connector (niet verplicht, maar wel handig)")]),e._v(" "),n("li",[e._v("een schakelbord")]),e._v(" "),n("li",[e._v("kabeltjes om verbindingen te maken")]),e._v(" "),n("li",[e._v("jouw favoriete fruit")])]),e._v(" "),n("h3",{attrs:{id:"game-maken"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#game-maken"}},[e._v("#")]),e._v(" Game maken")]),e._v(" "),n("p",[e._v("We gaan een game maken voor python, hiervoor ga ik jullie op weg helpen met een kleine setup, en dan gaat een tutorial die ik heb gevonden het overnemen.")]),e._v(" "),n("p",[e._v("Voordat we beginnen moet je zorgen dat je Python 3 hebt geinstalleerd.\nOm dit te controlleren kun je het volgende commando uitvoeren in de terminal van je raspberry pi:")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[e._v("    $ python3 --version\n")])])]),n("p",[e._v("Als je geen python versie 3 of hoger hebt, dan kun je deze best installeren met deze "),n("a",{attrs:{href:"https://samx18.io/blog/2018/09/05/python3_raspberrypi.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("link"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("Nu jouw python versie 3 of hoger is kan het echte werk beginnen, of toch bijna, eerst moeten we nog een library downloaden.")]),e._v(" "),n("p",[e._v("Om de pygame library te installeren, moet je het volgende commando uitvoeren:")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[e._v("    $ pip "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" pygame\n")])])]),n("p",[e._v("Als dit commande niet werkt, dan kun je het onderstaande commando eens proberen:")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[e._v("    $ pip3 "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" pygame\n")])])]),n("p",[e._v("Nadat je dit gedaan hebt kunnen we overgaan naar de tutorial, deze kun je hieronder vinden.")]),e._v(" "),n("p",[e._v("Als je liever geen tutorial volgt, en de code zelf wilt ontleden, dan kun je deze ook vinden in mijn Code examples.")]),e._v(" "),n("figure",{staticClass:"video_container"},[n("iframe",{attrs:{src:"https://www.youtube.com/embed/-8n91btt5d8",width:"640",height:"361",frameborder:"0",allowfullscreen:"true"}})]),e._v(" "),n("h3",{attrs:{id:"gpio-uitlezen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gpio-uitlezen"}},[e._v("#")]),e._v(" GPIO uitlezen")]),e._v(" "),n("p",[e._v("Voordat we kunnen beginnen experimenteren met de GPIO is er nog een klein aandachtspunt:\nDe GPIO contacten zijn enkel geschikt voor 3.3V, dus opgepast dat je geen 5V gaat aansluiten op de contactpunten of jouw raspberry pi kan hier zwaar onder lijden.\nOm met de GPIO te werken gaan we kijken of de python development tools zijn geïnstalleerd.\nWe gaan volgende commands invoeren in de terminal van de raspberry pi:")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[e._v("    $ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" update\n    $ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" python-dev python-pip\n    $ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" pip "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --upgrade distribute\n    $ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" pip "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" ipython\n")])])]),n("p",[e._v("Dan gaan we de GPIO library installeren met onderstaand commande:")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[e._v("    $ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" pip "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --upgrade RPi.GPIO\n")])])]),n("p",[e._v("Het kan even duren voordat dit alles geïnstalleerd is. Eens het klaar is, dan kunnen we beginnen met een file aan te maken. Daarna gaan we de GPIO importeren met onderstaande code:")]),e._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[e._v("    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" RPi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("GPIO "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" GPIO\n")])])]),n("p",[e._v("Vervolgens gaan we definiëren hoe de GPIO moet geïnterpreteerd worden, dit kan zowel met BCM als BOARD.\nWij gaan hier BCM voor gebruiken, en dit doen we met volgende code:")]),e._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[e._v("    GPIO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("setmode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("GPIO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("BCM"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),n("p",[e._v("Eerst gaan we de GPIO contacten configureren die we willen gebruiken.\nHier definiëren we dat het over GPIO contact 4 gaat, en dat we dit als input gaan gebruiken.")]),e._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[e._v("    GPIO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("setup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" GPIO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("IN"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" pull_up_down"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("GPIO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("PUD_DOWN"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),n("p",[e._v("Om te kijken of de GPIO correct reageert gaan we een kleine while schrijven.\nBij dit voorbeeld gaan we werken met de GPIO 4 en 25 input.")]),e._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[e._v("    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("while")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("True")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" GPIO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("input")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("print")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"left"')]),e._v("\n\t\ttime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("sleep"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("elif")]),e._v(" GPIO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("input")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("25")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("print")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"right"')]),e._v("\n\t\ttime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("sleep"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),n("p",[e._v("Om de volledige code te zien kun je naar de code files gaan.")])])}),[],!1,null,null,null);t.default=s.exports}}]);
import re
import json

with open('details.txt', 'rb') as f:
    text = f.read().decode('utf-8')
    text = text.replace('\r', '')

# find cards
cardsRegex = re.compile(r"""
    Card:\s?(.*) # card name
    \s*
    Past:\s?(.*) # past
    \s*
    Present:\s?(.*) # present
    \s*
    Future:\s?(.*) # future
    \s*
    Context:\s?(.*) # context
    \s*
    Focus:\s?(.*) # focus
    \s*
    Outcome:\s?(.*) # outcome
    \s*
    Situation:\s?(.*) # situation
    \s*
    Obstacle:\s?(.*) # obstacle
    \s*
    Advice:\s?(.*) # advice
""", re.VERBOSE | re.IGNORECASE)
cards = re.findall(cardsRegex, text)

cardsData = []
cardsName = []
for card in cards:
    cardData = {}
    cardData['card'] = card[0]
    cardData['past'] = card[1]
    cardData['present'] = card[2]
    cardData['future'] = card[3]
    cardData['context'] = card[4]
    cardData['focus'] = card[5]
    cardData['outcome'] = card[6]
    cardData['situation'] = card[7]
    cardData['obstacle'] = card[8]
    cardData['advice'] = card[9]
    cardData['image'] = f'{card[0]}.jpg'
    cardsName.append(card[0])
    cardsData.append(cardData)

print(len(cardsName))
json.dump(cardsData, open('infographics/cards.json', 'w'), indent=2)

    
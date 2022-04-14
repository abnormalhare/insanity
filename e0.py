import json
import git
from time import sleep
from os import name, system

try:
    with open("ElementalZero\elems.json") as f:
        elemList = json.load(f)
except:
    git.Git("D:\Storage\Documents\Games\MyGames\Python\e0").clone("https://github.com/abnormalhare/ElementalZero.git")
    with open("ElementalZero\elems.json") as f:
        elemList = json.load(f)
def clear():
    if name == "nt":
        _ = system('cls')
    else:
        _ = system('clear')

def game():
    clear()
    if elemList == {"air": [""], "earth": [""], "fire": [""], "water": [""]}:
        print("Welcome to Elemental Zero: Python Edition!")
        print("You begin with: Air, Earth, Fire, Water")
    else:
        p = ", ".join([str(item) for item in elemList])
        print("List of elements:", p)
    count = 0
    elemAmnt = []
    elem = ""
    while count < 100:
        elem = input("Type element here (type /help for info): ")
        if elem == "/help":
            clear()
            print("/end - end the combination\n/recipe - show recipes for all elements\n")
        elif elem == "/recipe":
            clear()
            x = ""
            xl = []
            for i in elemList:
                print(i + ": ", *elemList[i])
        elif elem != "/end":
            elemAmnt.append(elem)
        else:
            break
    for i in elemList:
        if elemList[i] == elemAmnt:
            print("You made", i)
            input("Press Enter to Continue")
            count = 101
    if count <= 100:
        clear()
        elem = input("This isn't an element! Would you like to suggest (y/n)? ")
        if elem.lower() == "y":
            elem = input("What would you like to call it? ")
            elemList[elem] = elemAmnt
    with open("elems.json", "w") as(f):
        json.dump(elemList, f)
while True:
    game()
let state = 'name';
let characterName = '';

const output = document.getElementById('game-output');
const input = document.getElementById('game-input');

function print(text) {
    output.innerHTML += `<p>${text}</p>`;
    output.scrollTop = output.scrollHeight;
}

function submitInput() {
    const value = input.value.trim().toLowerCase();
    input.value = '';

    if (!value) return;

    handleInput(value);
}

function handleInput(choice) {

    switch (state) {

        case 'name':
            characterName = choice.charAt(0).toUpperCase() + choice.slice(1);
            print(`Welcome ${characterName}!`);
            print('You step out of a building. As you leave you can hear the quiet sound of light rainfall. You click on your flashlight. Nothing. "Stupid flashlight." You mutter. You look to the LEFT and you can see a faint light down the road. Up ahead you see the flickering neon sign of a convenient STORE. "Well, that is convenient." Which way do you want to go? (LEFT or STORE)');
            state = 'firstDecision';
            break;

        case 'firstDecision':
            if (choice === 'left') {
                print('You head down the road a little and hear someone call out to you "Hey stranger! Me and my wife are very hungry and need some food? Do you have anything you can share?" (SHARE or IGNORE)');
                state = 'shareFood';
            } else if (choice === 'store') {
                print('You head into the store and hear a bright chime as you walk in. Ding! You explore the isles but no luck finding batteries. "Maybe there is some in the back?" As you walk through the doors in the back of the store you are attacked from the side by a zombie. You manage to fight him off and run out the back door to the outside. ');
                print('You need to get away from the zombie quick. You can see two paths through the forest. One is going RIGHT, and the other STRAIGHT. What would you like to do? (RIGHT or STRAIGHT)');
                state = 'escape';
            } else {
                print('Options are LEFT or STORE.');
            }
            break;

        case 'shareFood':
            if (choice === 'share') {
                print('You hand them some food. All you had to give them was some moldy bread. "Oooo, that looks delicious!" The strangers gobble it up quickly. "Yummy in my tummy!" the man says');
                print('Because you shared your food with me, I would like to tell you about some rumors I have heard in the area. I heard that there is a functional plane at some MUSEUM nearby that they salvaged right before all this chaos in the world went down. I think I read that it belonged to some woman, Amelia lungheart, ughh... earlung maybe... Oh wait! I remember now. It was Amelia Earhart. Not sure who that is, but hey, a plane is a plane. I also heard that there is an abandoned base at the SCRAP YARD. If the rumors are right they should also have a functioning car there." Which way would you like to go? (SCRAP YARD OR MUSUEM)')
                state = 'rumor';
            } else if (choice === 'ignore') {
                print('You try your best not to make eye contact. The world is a harsh place and you got to survive too. "Fine! Ignore us. I am not going to share my secrets with you then." You watch as they walk away and enter a BUILDING. Moments later you hear screams and see flashes in the window. Gunshots maybe? "Not my problem." You whisper. "I got to keep moving FORWARD." Which way would you like to go? (BUILDING or FORWARD)');
                state = 'regrets';
            } else {
                print('Type SHARE or IGNORE.');
            }
            break;

        case 'rumor':
            if (choice === 'museum') {
                print('You go to the museum. There you find a plane that just needs a little touching up. "Well, I did not believe it was gonna be real!" Would you like to FIX the plane or would you like to EXPLORE the museum? (FIX or EXPLORE)');
                state = 'museum';
            } else if (choice === 'scrap yard') {
                print('You go to the scrap yard. When you get there it is overrun by zombies. Should you SNEAK inside or should you FIGHT? (SNEAK or FIGHT)');
                state = 'scrap';
            } else {
                print('Type MUSEUM or SCRAP YARD.');
            }
            break;

        case 'museum':
            if (choice === 'fix') {
                print('You fix up the plane easily using parts from the museum. You fly the plane to a tropical island away from all the chaos of the world.');
                print('\nAloha! Welcome to paradise. 🌴')
                state = 'end';
            } else if (choice === 'explore') {
                print('You walk around the museum and it starts getting late. Suddenly all the exhibits come to life! You try to escape but a monkey has stolen the keys and locked you inside!');
                print('You are now part of the exhibits.')
                state = 'end';
            } else {
                print('Type FIX or EXPLORE.');
            }
            break;

        case 'scrap':
            if (choice === 'sneak') {
                print('You sneak in, fix up a car, and take off. Now it is just you, the highway, some rocking tunes, and also a quarter tank of gas... You run out of gas and are trapped in the middle of nowwhere. Sadly all the cars you check around you have been siphoned.');
                print('You died of boredom!');
                state = 'end';
            } else if (choice === 'fight') {
                print('You start fighting all the zombies. They quickly swarm you and you become surrounded. As they easily take you down you think to yourself "why did I think this was a good idea."');
                state = 'end';
            } else {
                print('Type SNEAK or FIGHT.');
            }
            break;

        case 'regrets':
            if (choice === 'building') {
                print('"I should have helped them. But now it is too late and they might be dead!" You sprint to the building and burst inside. As you enter, you see a zombie dog munching on the man and wife. It is too late for them. The dog turns towards you and growls. On the ground next to you is a SHOTGUN. Leaning on the wall is a wooden BOARD that could be used for hitting. What should you grab? (SHOTGUN or BOARD)');
                state = 'dog';
            } else if (choice === 'forward') {
                print('You decide it is not your problem as you snack on the twinkie you could have given them. As you are walking you notice a sign displayed above a restaurant written in neat and bold handwriting. "FREE FOOD" it reads. "Huh, I could go for some more food." Further down the road you see a sign that says "Stay out! If you TRESPASS, you die! What would you like to do? (FREE FOOD or TRESPASS)');
                state = 'selfish';
            } else {
                print('Type BUILDING or FORWARD.');
            }
            break;

        case 'dog':
            if (choice === 'shotgun') {
                print('You quickly pick up the shotgun and point it towards the dog. "I am sorry Old Yeller, but you are not being a good boy." The dog leaps at you as you fire. Click. The magazine is empty.');
                print('You Died!');
            } else if (choice === 'board') {
                print('You grab the board leaning against the wall ready to smash it over the dog. But just as you lift it over your head ready to deliver a killing blow you notice something peculiar. The dog is sitting, fixated on the board in your hand. "You want this?" The dog barks. You throw the board outside and he fetches it and then brings it back to you. You take it from the dog and pat his head. "Who is a good boy?"');
                print('You gained a new companion!');
            }
            state = 'end';
            break;

        case 'selfish':
            if (choice === 'free food') {
                print('You step inside the restaurant. "Where is the food at? I am starv-" Right before you can finish your sentence you are smacked over the head with a bat. As you are fading out you can hear some people talking. "Looks like we got ourselves some more free food. Help me get him over to the grill."');
                print('You Died!');
            } else if (choice === 'trespass') {
                print('You enter in the building making sure to check all the corners. As you turn one of the corners and peek into a room you see a family sitting at a dinner table. "Who are you mister?" "My name is {character_name}. I am just looking for some food? I did not mean to scare you all." "You are welcome to join us for dinner. We found this place abandoned with some food." You join them.');
                print('You enjoy a wonderful meal of lobster, steak, and mashed potatoes!')
            }
            state = 'end';
            break;

        case 'escape':
            if (choice === 'right') {
                print('You follow the right trail for a while and stumble upon a cabin in the woods. "This looks like a perfect place to stay." You head inside and start setting up your bed for the night. Suddenly you hear something outside. You listen closely. It almost sounds like a child singing a lullaby. "What are children doing out here?" You wonder if you should INVESTIGATE or just go to SLEEP. What would you like to do? (INVESTIGATE OR SLEEP)');
                state = 'cabin';
            } else if (choice === 'straight') {
                print('You continue down the straight and narrow path, holding fast to the iron handrail so you do not slip into the river next to you. You can see a building off in the distance with lights on and what looks to be people having a party. The building looks as though it is floating in the sky with all the fog surrounding the area. "I should probably avoid it. Could be dangerous." You press forward with steadfastness until you come upon a church with an apple tree out front. You take a bite of one of the apples. "Wow, this is the most amazing thing that I have ever had!" You are desirous that your family should eat some. If only you still had family. Should you enter the CHURCH or follow the BEATEN PATH? (CHURCH or BEATEN PATH)');
                state = 'churchPath';
            } else {
                print('Type RIGHT or STRAIGHT.');
            }
            break;

        case 'cabin':
            if (choice === 'investigate') {
                print('You step outside to investigate. As you look around you think you can see something from inside the PORTA POTTY. As you move closer to it, you hear noises coming from the CELLAR. Where would you like to look? (PORTA POTTY OR CELLAR)');
                state = 'scary';
            } else if (choice === 'sleep') {
                print('You decide to ignore the sounds and get some rest. You close your eyes and slowly drift off to sleep. While sleeping you start dreaming. In your dream you are a teacher grading assignments. You are looking at a really cool adventure game that one of the students made. Should you give them full points? (YES or NO)');
                state = 'teacher';
            }
            break;

        case 'scary':
            if (choice === 'cellar') {
                print('You go down into the cellar and pull the string for the overhead light. A bright light fills the damp cellar. Suddenly you hear a scream and the lightbulb shatters. You feel something grab your ankle and pull you into the darkness. You claw at the wooden floorboards trying to stop from being pulled backwards but you are not able to find something to grip on to. You become pulled into the black void.');
                print('You died?')
            } else if (choice === 'porta potty') {
                print('You look in the porta potty. "Huh, nothing. Well, I have been holding it in for a while." You close the door, but when you do you slip and fall into the toilet. You become trapped in the worst thing you have ever smelt.');
                print('\nYou Die! Eventually...');
            }
            state = 'end';
            break;

        case 'teacher':
            if (choice === 'yes') {
                print('The student is super stoked that you liked his game!');
            } else if (choice === 'no') {
                print('The student understands and will continue to learn and improve.');
            }
            state = 'end';
            break;

        case 'churchPath':
            if (choice === 'church') {
                print('You enter the church and look around. "Seems to be abandoned." You notice a book on the ground that you have never seen before. In shiny gold script on the cover it reads The Book of Mormom. "I am too busy for reading." With how empty the space is, you think about how you could stay here and maybe even open up a shop for people that pass by. You were always a good salesman, able to take every penny that someone has got. You also notice a collection jar with some cash in it. "Might be worth stealing." You think. Should you open a SHOP, STEAL, or READ? (SHOP, STEAL, or READ)');
                state = 'church';
            } else if (choice === 'beaten path') {
                print('You continue on your way, taking some of the apples for the road. As you follow the trail there is a man laying on the ground on the side of the path. He looks badly hurt. "I am in a hurry and I am sure someone else will come along to help him." Should you HELP or KEEP MOVING? (HELP or KEEP MOVING)');
                state = 'samaritan';
            }
            break;

        case 'church':
            if (choice === 'shop') {
                print('You start setting up tables for your shop after you set your things down. Just as you get the last table set up a man comes bursting through the door yelling at you. "Get out of here! This is a sacred building and I will have none of this going on here! Have you no shame!" He starts flipping your tables and proceeds to hit you with a whip made out of worn belts. You quickly grab your stuff and sprint out the front door.');
                print('You eventually die a physical death but not a spiritual one because of the Atonement of Jesus Christ.');
            } else if (choice === 'steal') {
                print('You decide to steal the money and leave before anyone notices. On your way out you grab some apples from the tree for the road. You use the money you took to buy yourself some new clothes and some other things. "Life is good." You say to yourself.');
                print('You will not be saved. But hey, at least you are living a good life now I guess.');
            } else if (choice === 'read') {
                print('You sit down and start reading. At first you were confused and did not understand what you were reading. But, as you read more it all seemed to just make sense. Suddenly all the chaos in the world did not seem to matter anymore. For the first time in forever you felt a sense of peace. You decided to give up on your old ways, and change for the better.');
                print('Congratulations! You will become exalted as long as you endure to the end!')
            }
            state = 'end';
            break;

        case 'samaritan':
            if (choice === 'help') {
                print('You go over to help the man and check his pulse. "He is barely breathing." You pick him up and carry him. Eventually after about ten minutes of labourously carrying him you find a little cottage in the woods. You knock on the door. "Who is it?" A spritely woman chirps. "My name is {character_name}. My friend here is badly injured and needs some help. Would you be able to help him?" The woman has you lay the man down in a bed. Over the next couple of days, the man slowly recovers. He tells you about all his adventures and is forever grateful for your kindness. You both become really good friends. A week later he has fully recovered, but a deep sadness is upon him because he has no where to go. He lost his family and home a while back. The lady of the cottage offers him a room if he is willing to help around with chores, to which he gladly agrees. You bid them both farewell and head on your way. After about a year has passed, you decide to stop in and visit the man and the woman of the cottage. To your surprise, you find out that they have married. "I have not been this happy since my wife left me and since my daughters passing." He tells you. "Thank you again for helping me and bringing me here."');
                print('\nYour friend lives happily ever after. And so do you!');
            } else if (choice === 'keep moving') {
                print('You keep moving forward. "Someone else will come along." You tell yourself again. As you continue on the path it starts getting dark. "I cannot see anything in this darkness." Right after you say that your foot slips on some mud and you fall into the river next to you. As you are swept down the current you spot some people. "Help me, Please!" But it is no use. Your screams for help are silenced by the sounds of rushing water.');
                print('You Drowned!');
            }
            state = 'end';
            break;

        case 'end':
            print('Thank you for playing! Refresh page to play again.');
            break;
    }
}

// Start game
print("What is your character's name?");
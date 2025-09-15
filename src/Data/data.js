// Character Info

export const characterInformation = {
  name: "Astos San Kheeb'ler",
  characterLevel: 12,
  characterGender: "Male",
  characterRace: "Half-Elf",
  characterBackground: "Charlatan",
};

export const characterClass = { 
  class0: { class: "Rogue", subclass: "Swashbuckler", hitDice: 8, classLevel: 5 }, 
  class1: { class: "Ranger", subclass: "Swarmkeeper", hitDice: 8, classLevel: 7 },
};

export const swashbuckler = Object.values(characterClass).some(
  cls => cls.subclass.toLowerCase() === "swashbuckler"
);

export const darkVision = (characterInformation.characterRace.toLowerCase() === "dwarf" ||
characterInformation.characterRace.toLowerCase() === "half-elf" ||
characterInformation.characterRace.toLowerCase() === "elf" ||
characterInformation.characterRace.toLowerCase() === "gnome" ||
characterInformation.characterRace.toLowerCase() === "half-orc" ||
characterInformation.characterRace.toLowerCase() === "tiefling"
);

export const darkVisionRange = darkVision ? 60 : 0;

// Weapon Types
export const weaponTypes = {
  battleaxe: {
    label: "Battleaxe",
    finesse: false,
    versatile: false,
    damageType: { piercing: false, slashing: true, bludgeoning: false },
    range: 5,
    martial: true,
    damageDie: {
      oneHand: { die: 8, number: 1 },
      twoHand: { die: 8, number: 1 }
    }
  },
  crossbow_hand: {
    label: "Crossbow (Hand)",
    finesse: true,
    versatile: false,
    damageType: { piercing: true, slashing: false, bludgeoning: false },
    range: 60,
    martial: true,
    damageDie: {
      oneHand: { die: 6, number: 1 },
      twoHand: { die: 6, number: 1 }
    }
  },
  crossbow_heavy: {
    label: "Crossbow (Heavy)",
    finesse: true,
    versatile: false,
    damageType: { piercing: true, slashing: false, bludgeoning: false },
    range: 60,
    martial: true,
    damageDie: {
      oneHand: { die: 10, number: 1 },
      twoHand: { die: 10, number: 1 }
    }
  },
  crossbow_light: {
    label: "Crossbow (Light)",
    finesse: true,
    versatile: false,
    damageType: { piercing: true, slashing: false, bludgeoning: false },
    range: 60,
    martial: true,
    damageDie: {
      oneHand: { die: 8, number: 1 },
      twoHand: { die: 8, number: 1 }
    }
  },
  dagger: {
    label: "Dagger",
    finesse: true,
    versatile: false,
    damageType: { piercing: true, slashing: true, bludgeoning: false },
    range: 5,
    martial: false,
    damageDie: {
      oneHand: { die: 4, number: 1 },
      twoHand: { die: 4, number: 1 }
    }
  },
  dart: {
    label: "Dart",
    finesse: true,
    versatile: false,
    damageType: { piercing: true, slashing: false, bludgeoning: false },
    range: 5,
    martial: false,
    damageDie: {
      oneHand: { die: 4, number: 1 },
      twoHand: { die: 4, number: 1 }
    }
  },
  flail: {
    label: "Flail",
    finesse: false,
    versatile: false,
    damageType: { piercing: false, slashing: false, bludgeoning: true },
    range: 5,
    martial: true,
    damageDie: {
      oneHand: { die: 8, number: 1 },
      twoHand: { die: 8, number: 1 }
    }
  },
  longSword: {
    label: "Long Sword",
    finesse: false,
    versatile: true,
    damageType: { piercing: false, slashing: false, bludgeoning: true },
    range: 5,
    martial: true,
    damageDie: {
      oneHand: { die: 8, number: 1 },
      twoHand: { die: 10, number: 1 }
    }
  }
};

// Proficiencies
export const profs = { 
  armor: { lightArmor: true, mediumArmor: false, heavyArmor: false },
  weapons: { simple: false, martial: false },
};

// Utility Functions
export const getBonus = score => Math.floor((score - 10) / 2);

// Stats
export const strScore = 8;
export const dexScore = 18;
export const conScore = 16;
export const intScore = 10;
export const wisScore = 10;
export const chaScore = 14;

const initiativeValue = getBonus(dexScore) + (swashbuckler ? getBonus(chaScore) : 0);
const moveSpeed = 30;
export const profScore = 1 + Math.ceil(characterInformation.characterLevel / 4);

export const statBlock = {
  str: { name: "Strength", stat: strScore, bonus: getBonus(strScore) },
  dex: { name: "Dexterity", stat: dexScore, bonus: getBonus(dexScore) },
  con: { name: "Constitution", stat: conScore, bonus: getBonus(conScore) },
  int: { name: "Intelligence", stat: intScore, bonus: getBonus(intScore) },
  wis: { name: "Wisdom", stat: wisScore, bonus: getBonus(wisScore) },
  cha: { name: "Charisma", stat: chaScore, bonus: getBonus(chaScore) },
  ini: { name: "Initiative", stat: null, bonus: initiativeValue },
  mov: { name: "Movement", stat: null, bonus: moveSpeed },
};

// Initiative
export const initiative = statBlock.dex.bonus + (swashbuckler ? statBlock.cha.bonus : 0);
export const hitPoints = (characterClass.class0.classLevel * characterClass.class0.hitDice) + 
(characterClass.class1.classLevel * characterClass.class1.hitDice) +
getBonus(statBlock.con.stat) * characterInformation.characterLevel;

export const makeSkill = (name, stat, proficient = false, expert = false) => ({
  name,
  stat,
  proficient,
  expert,
});

// Skills
export const skills = {
  Acrobatics:     makeSkill("Acrobatics", statBlock.dex.bonus),
  AnimalHandling: makeSkill("Animal Handling", statBlock.wis.bonus),
  Arcana:         makeSkill("Arcana", statBlock.int.bonus),
  Athletics:      makeSkill("Athletics", statBlock.str.bonus, true),
  Deception:      makeSkill("Deception", statBlock.cha.bonus),
  History:        makeSkill("History", statBlock.int.bonus),
  Insight:        makeSkill("Insight", statBlock.wis.bonus),
  Intimidation:   makeSkill("Intimidation", statBlock.cha.bonus, true, true),
  Investigation:  makeSkill("Investigation", statBlock.int.bonus),
  Medicine:       makeSkill("Medicine", statBlock.wis.bonus),
  Nature:         makeSkill("Nature", statBlock.int.bonus),
  Perception:     makeSkill("Perception", statBlock.wis.bonus),
  Performance:    makeSkill("Performance", statBlock.cha.bonus),
  Persuasion:     makeSkill("Persuasion", statBlock.cha.bonus),
  Religion:       makeSkill("Religion", statBlock.int.bonus),
  SleightOfHand:  makeSkill("Sleight of Hand", statBlock.dex.bonus),
  Stealth:        makeSkill("Stealth", statBlock.dex.bonus),
  Survival:       makeSkill("Survival", statBlock.wis.bonus),
};

export const passiveSenses = {
  perception: {name: "Passive Perception", value: 10 + skills.Perception.stat + (skills.Perception.proficient ? profScore : 0) + (skills.Perception.expert ? profScore : 0)},
  investigation: {name: "Passive Investigation", value: 10 + skills.Investigation.stat + (skills.Investigation.proficient ? profScore : 0) + (skills.Investigation.expert ? profScore : 0)},
  insight: {name: "Passive Insight", value: 10 + skills.Insight.stat + (skills.Insight.proficient ? profScore : 0) + (skills.Insight.expert ? profScore : 0)},
}

// Equipment
export const equipment = {
  weapon_0: weaponTypes.dagger,
  weapon_1: weaponTypes.longSword,
  weapon_2: weaponTypes.crossbow_hand,
};

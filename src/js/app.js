const icons = {
  Bowman: 0x1F620,
  Swordsman: 0x1F621,
  Magician: 0x1F9D0,
  Daemon: 0x1F47F,
  Undead: 0x1F480,
  Zombie: 0x1F9DF,
};

export default function heroesToString(hero) {
  const symb = String.fromCodePoint(icons[hero.type]);
  const symbAttack = String.fromCodePoint(0x2694);
  const symbDef = String.fromCodePoint(0x1F6E1);
  const symbHealth = String.fromCodePoint(0x2764);
  const result = `${symb} ${hero.name[0]}(${hero.level}) ${symbAttack} ${hero.attack} ${symbDef} ${hero.defence} ${symbHealth} ${hero.health}`;
  return result;
}

-Write a function called damage, which calculates the damage an attack causes one Pokémon to another. The damage is calculated with the formula:
damage = 50 * (attack / defense) * effectiveness
-The effectiveness can be:
Super effective: 2x damage
Neutral: 1x damage
Not as effective: 0.5x damage
-And you must stick to these rules:
fire> grass
fire <water
fire = electric
water <grass
water <electric
grass = electric
-Also: an attack against Pokemon of the same type is not very effective and the rules given above are symmetrical (grass <fire).
The function accepts 2 Pokemon objects as parameters. The first is the one that attacks. The result of the function must be rounded.
The Pokemon object is defined as:
{
"Name": "NOMBRE_POKEMON",
"Type": "TIPO_POKEMON",
"Attack": "ATTACK",
"Defense": "DEFENSE"
}
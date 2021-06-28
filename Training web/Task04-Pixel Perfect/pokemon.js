var effects = {
    fire : {
      fire : 0.5,
      grass : 2,
      water : 0.5,
      electric : 1
    },
    grass : {
      fire : 0.5,
      grass : 0.5,
      water : 2,
      electric : 1
    },
    water : {
      fire : 2,
      grass : 0.5,
      water : 0.5,
      electric : 0.5
    },
    electric : {
      fire : 1,
      grass : 1,
      water : 2,
      electric : 0.5
    }
  };
var yourself = {
    'name': "Pokemon1",
    'type': 'fire',
    'attack': 1,
    'defense': 1
};

var opponent = {
    'name': "Pokemon2",
    'type': 'grass',
    'attack': 1,
    'defense': 1
};


  //Function that calculates my damage
function calculateDamage(yourself, opponent) {
    return Math.ceil(50 * (yourself.attack / opponent.defense) *
      effects[yourself.type][opponent.type])
  }
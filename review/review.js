function publicRooms(){
  const {
    sockets: {
      adapter: ( sids, rooms ),
    },
  } = wsServer;
  const publicRooms = [];
  rooms.forEach((_, key) => {
    if(sids.get(key) === undefined){
      publicRooms.push(key);
    }
  });
  return publicRooms;
};
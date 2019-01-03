function mapToID(array) {
  return array.map(function(val) {
    return val.id;
  });
}

module.exports = {
  mapToID
}
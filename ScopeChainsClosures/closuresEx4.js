function foo() {
  var bar;

  quux = 42;

  function zip() {
    var quux;

    bar = true;
  }

  return zip;
}

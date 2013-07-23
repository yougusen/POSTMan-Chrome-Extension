describe("Postman utility functions", function() {

  beforeEach(function() {
  });

  describe("getUrlVars", function() {
    it("should split URL with no arguments", function() {    
      var url = "http://localhost/?";
      var vars = getUrlVars(url);
      expect(vars.length).toBe(0);
    });

    it("should split URL with ?=", function() {    
      var url = "http://localhost/?=";
      var vars = getUrlVars(url);
      expect(vars.length).toBe(1);
    });

    it("should split URL with 1 argument", function() {    
      var url = "http://localhost/?foo=bar";
      var vars = getUrlVars(url);
      expect(vars.length).toBe(1);
    });

    it("should split URL with multiple arguments into key/val pairs", function() {    
      var url = "http://localhost/?foo=bar&test=blah";
      var vars = getUrlVars(url);
      expect(vars.length).toBe(2);
    });    

    // #130: Key and value modified if value contains ?xxxx=
    // https://github.com/a85/POSTMan-Chrome-Extension/issues/130
    it("should not split values with ?", function() {    
      var url = 'http://localhost/?foo=bar&test=<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
      var vars = getUrlVars(url);
      expect(vars.length).toBe(2);
    });     

    // #174: Semicolon not working in URL
    // https://github.com/a85/POSTMan-Chrome-Extension/issues/174?source=cc
    it("should not split values with ;", function() {    
     var url = 'http://www.example.com/path;jsessionid=abc';
     var vars = getUrlVars(url);
     expect(vars.length).toBe(0);
    });
  });

  describe("ensureProperUrl", function() {
    it("should ensure proper URL with HTTP", function() {
      var url = ensureProperUrl("http://www.google.com");
      expect(url).toBe("http://www.google.com");

      url = ensureProperUrl("http://www.google.com");
      expect(url).toBe("http://www.google.com");
    });

    it("should ensure proper URL with HTTPS", function() {
      var url = ensureProperUrl("https://www.google.com");
      expect(url).toBe("https://www.google.com");

      url = ensureProperUrl("http://www.google.com");
      expect(url).toBe("http://www.google.com");
    });

    it("should ensure proper URL with no HTTP/HTTPS", function() {
      var url = ensureProperUrl("www.google.com");
      expect(url).toBe("http://www.google.com");

      url = ensureProperUrl("http://www.google.com");
      expect(url).toBe("http://www.google.com");
    });
  });

  describe("sortAlphabetical", function() {
    it("should sort an array of objects with names alphabetically", function() {
      var a = [
        { name: "blah" }, { name: "cow" }, { name: "alice" }
      ];

      var sorted = a.sort(sortAlphabetical);
      expect(sorted[0].name).toBe("alice");
      expect(sorted[1].name).toBe("blah");
      expect(sorted[2].name).toBe("cow");
    });
  });
  
  describe("getBodyVars", function() {
    it("should return body with single variable", function() {
      var body = "foo=bar";
      var vars = getBodyVars(body);
      expect(vars.length).toBe(1);
    });

    it("should split body with multiple variables", function() {
      var body = "foo=bar&test=blah";
      var vars = getBodyVars(body);
      expect(vars.length).toBe(2);
    });

    it("should split body with nothing", function() {
      var body = "foo";
      var vars = getBodyVars(body);
      expect(vars.length).toBe(0);

      body = "";
      vars = getBodyVars(body);
      expect(vars.length).toBe(0);
    });
  });

  describe("getHeaderVars", function() {
    it("should break up headers", function() {      
    });
  });

  describe("arrayObjectIndexOf", function() {
    it("should return index of object in an array according to property", function() {

    });
  });
});

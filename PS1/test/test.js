let assert = require('assert');
var expect = require('chai').expect
let p1 = require('../PS1.P1');
let p2 = require('../PS1.P2');
let p3 = require('../PS1.P3');

describe('PS1.P1', function() {

  describe('#sortString()', function() {
    it('supercalifragilisticexpialidocious should return aaacccdeefgiiiiiiillloopprrssstuux', function() {
      assert.equal(p1.sortString('supercalifragilisticexpialidocious'), 'aaacccdeefgiiiiiiillloopprrssstuux');
    });
    it('stringswithnumbers1244567 should return beghiimnnrrsssttuw', function() {
        assert.equal(p1.sortString('stringswithnumbers1244567'), 'beghiimnnrrsssttuw');
      });
    it('d1^e?3@72312343245gni should return degin', function() {
        assert.equal(p1.sortString('d1^e?3@72312343245gni)'), 'degin');
    });
  });
});

describe('PS1.P2', function() {

    describe('#operator()', function() {
      it('4+2 should return 6', function() {
        assert.equal(p2.operator('4+2'), '6');
      });
      it('5*7 should return 35', function() {
        assert.equal(p2.operator('5*7'), '35');
      });
      it('6-1 should return 5', function() {
        assert.equal(p2.operator('6-1'), '5');
      });
      it('9/2 should return 4.5', function() {
        assert.equal(p2.operator('9/2'), '4.5');
      });
      it('8%3 should return 2', function() {
        assert.equal(p2.operator('8%3'), '2');
      });
    });
  });

  describe('PS1.P3', function() {

    describe('#bigFunc() returnFrag()', function() {
        it('bigFunc(returnFrag,`supercalifragilisticexpialidocious`) should return [super,califragilisti,cexpialido,cious]', function() {
            let result = p3.bigFunc(p3.returnFrag,'supercalifragilisticexpialidocious')
            expect(result).to.eql(result, ['super','califragilisti','cexpialido','cious']);
        });
        it('bigFunc(returnFrag,`canicallyouincalifornia`) should return [cani, callyouin, california]', function() {
            let result = p3.bigFunc(p3.returnFrag,'canicallyouincalifornia')
            expect(result).to.eql(result, ['cani', 'callyouin', 'california']);
        });
        it('bigFunc(returnFrag,`cancanc`) should return [can, can, c]', function() {
            let result = p3.bigFunc(p3.returnFrag,'cancanc')
            expect(result).to.eql(result, ['can', 'can', 'c']);
        });

    describe('#bigFunc() repalceA()', function() {
        it('bigFunc(replaceA,`supercalifragilisticexpialidocious`)', function() {
          let result = p3.bigFunc(p3.replaceA,'supercalifragilisticexpialidocious')
          let obj = {
            originalString: 'supercalifragilisticexpialidocious',
            modifiedString: 'supercAlifrAgilisticexpiAlidocious',
            numberReplaced: 3,
            length: 34 }
          expect(result).to.eql(result, obj);
        });
        it('bigFunc(replaceA,`aaronplaysfootball`)', function() {
            let result = p3.bigFunc(p3.replaceA,'aaronplaysfootball')
            let obj = {
              originalString: 'aaronplaysfootball',
              modifiedString: 'AAronplAysfootbAll',
              numberReplaced: 4,
              length:  18}
            expect(result).to.eql(result, obj);
          });
          it('bigFunc(replaceA,`noA`)', function() {
            let result = p3.bigFunc(p3.replaceA,'noA')
            let obj = {
              originalString: 'noA',
              modifiedString: 'noA',
              numberReplaced: 0,
              length: 3}
            expect(result).to.eql(result, obj);
          });
    
    });
  });
  
});

## Jest
### Descripción
- Framework de testing para JavaScript mantenido por Facebook. Ofrece configuración cero, pruebas rápidas, snapshot testing y una API amigable.

### Cuándo usarlo / Cuándo evitarlo
- Ideal para aplicaciones frontend en React, pruebas rápidas, proyectos pequeños a medianos.
- No es la mejor opción si se requiere configuración avanzada o pruebas específicas en backend puro.

### Ejemplo
```javascript
function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

---

## Mocha
### Descripción
- Framework flexible que corre en Node.js y navegadores. No tiene aserciones integradas, lo que permite personalización con bibliotecas como Chai y Sinon.

### Cuándo usarlo / Cuándo evitarlo
- Ideal para proyectos backend en Node.js que necesitan configuración avanzada y control total.
- No es ideal para proyectos pequeños o cuando se busca configuración mínima y rápida.

### Ejemplo
```javascript
var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
```

---

## Jasmine
### Descripción
- Framework BDD para JavaScript. Todo incluido, sin dependencias externas. Popular en entornos Angular y soportado por Karma.

### Cuándo usarlo / Cuándo evitarlo
- Ideal para aplicaciones Angular o para quienes buscan un framework de pruebas todo-en-uno sin dependencias externas.
- No es recomendable si ya se usa Jest (que mejora a Jasmine) o si se busca mayor flexibilidad como con Mocha.

### Ejemplo
```javascript
describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = true;
    expect(a).toBe(true);
  });
});
```

---

**Fuente:**  
Trinh, H. (2020). *A Practical Approach to JavaScript Testing*.

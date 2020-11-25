
<p align="center">
  <img src="https://user-images.githubusercontent.com/36384130/99895780-c6e43e80-2c68-11eb-80f1-b1717a97c75a.png" width="300">
</p>

<h3 align="center">
   A Forma mais Fácil e Simples de Receber Pagamentos 💵
</h3>

Biblioteca em JavaScript para gerar transações utilizando o sistema PIX do BACEN.

## Demonstração
[https://enssureit.github.io/faz-um-pix/example](https://enssureit.github.io/faz-um-pix/example)

## Instalação
`npm install faz-um-pix --save`
<br />ou<br />
`yarn add faz-um-pix`

## Uso
Typescript
```typescript
import { Pix } from "faz-um-pix"

const code = Pix("123456789", "SILVA SILVA", "RIO DE JANEIRO", "0.10", "Pedido #123456");
// return "00020126490014br.gov.bcb.pix01091234567890214Pedid…1SILVA SILVA6014RIO DE JANEIRO62070503***6304E92D"


Or if you want it to return a qrcode
const code = Pix("123456789", "SILVA SILVA", "RIO DE JANEIRO", "0.10", "Pedido #123456", true);
// return "data:image/gif;base64,R0lGODdhkAGQAYAAAAAAAP///ywAAAAAkAGQAQAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s4z..."
```
Vanilla JS
```js
var _pix = require('faz-um-pix');

var code = _pix.Pix("123456789", "SILVA SILVA", "RIO DE JANEIRO", "0.10", "Pedido #123456");
// return "00020126490014br.gov.bcb.pix01091234567890214Pedid…1SILVA SILVA6014RIO DE JANEIRO62070503***6304E92D"


Or if you want it to return a qrcode
const code = _pix.Pix("123456789", "SILVA SILVA", "RIO DE JANEIRO", "0.10", "Pedido #123456", true);
// return "data:image/gif;base64,R0lGODdhkAGQAYAAAAAAAP///ywAAAAAkAGQAQAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s4z..."
```

Browser
```html
<script  src="lib/faz-um-pix.js"></script>

var code = _pix.Pix("123456789", "SILVA SILVA", "RIO DE JANEIRO", "0.10", "Pedido #123456");
// return "00020126490014br.gov.bcb.pix01091234567890214Pedid…1SILVA SILVA6014RIO DE JANEIRO62070503***6304E92D"

Or if you want it to return a qrcode
const code = _pix.Pix("123456789", "SILVA SILVA", "RIO DE JANEIRO", "0.10", "Pedido #123456", true);
// return "data:image/gif;base64,R0lGODdhkAGQAYAAAAAAAP///ywAAAAAkAGQAQAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s4z..."
```

## Screenshot
![Faz um Pix](https://github.com/EnssureIT/faz-um-pix/blob/master/example/print.jpg)


## Como contribuir
- Faça um Fork desse repositório,
- Faça um clone do respositório criado a partir do fork: `git clone https://github.com/<seu username>/faz-um-pix.git`
- Crie uma branch com a sua feature: `git checkout -b feat/minha-feature-de-examplo`
- Commit suas mudanças: `git commit -m "feat: Minha nova feature"` (**Ver regras para commits**)
- Faça o push da sua branch: `git push origin feat/minha-feature-de-examplo`
- Ir em pull requests do projeto original e crie uma pull request com o seu commit.

### Regras para commits
- Para cada commit siga a padronização do [commitlint](https://github.com/conventional-changelog/commitlint/#what-is-commitlint)
- evite commits acima de 70 caracteres


## Contribuidores
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/sl4ureano">
        <img src="https://avatars0.githubusercontent.com/u/36384130?s=460&u=0517714a415420b28e629cafb664d132945513ae&v=4" width="120px;" alt=""/>
        <br />
        <sub>
          <b>Adriano Laureano</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/ceelsoin">
        <img src="https://avatars2.githubusercontent.com/u/4915296?s=460&u=704524aba7f9120a17d1833f83b14a9a934814c9&v=4" width="120px;" alt=""/>
        <br />
        <sub>
          <b>Celso Inácio</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## License

MIT © <a href="https://github.com/EnssureIT">Enssure Softwares</a>

---
title: '🍀 Bonoloto | Probabilidades y premios de la Bonoloto'
metas: 
  description: 'Información sobre las categorías de premios de la Bonoloto. ☑️ Se incluyen los cálculos de las probabilidades de acertar.'
  keywords: 'bonoloto, probabilidades, cálculos, categorías, premios'
  canonical_url: 'https://www.pronostigol.es/bonoloto'
  og_title: '🍀 Bonoloto | Probabilidades y premios de la Bonoloto'
  og_type: 'website'
  og_image: 'https://www.pronostigol.es/images/logo-bonoloto.png'
  og_url: 'https://www.pronostigol.es/bonoloto'
  og_description: 'Información sobre las categorías de premios de la Bonoloto. ☑️ Se incluyen los cálculos de las probabilidades de acertar.'
  og_site_name: 'Bonoloto'
  twitter_site: '@pronostigolesp'
  twitter_card: 'summary_large_image'
  twitter_image: 'https://www.pronostigol.es/images/logo-bonoloto.png'
  twitter_title: '🍀 Bonoloto | Probabilidades y premios de la Bonoloto'
  twitter_description: 'Información sobre las categorías de premios de la Bonoloto. ☑️ Se incluyen los cálculos de las probabilidades de acertar.'
published: true
---

<advertisement></advertisement>

## 🚀 Introduccion

En esta sección encontrarás multitud de <nuxt-link to="/bonoloto/estadisticas" title="Estadísticas">estadísticas</nuxt-link> asociadas al sorteo de la <b>Bonoloto</b> de España. Podrás conocer los resultados más repetidos, el histórico de <nuxt-link to="/bonoloto/sorteos" title="Sorteos">sorteos</nuxt-link>, los reintegros que aparecen con más frecuencia y una amplia gama de consultas a realizar. De este modo te será mucho más sencillo realizar tus apuestas.

## 🎲 Probabilidades

En la <b>Bonoloto</b> se extraen 6 bolas de entre 49, numeradas del 1 al 49. Hay varias categorías de premios en función del número de aciertos, las cuales pasan desde 3 aciertos a los 6. De forma adicional se extrae una séptima bola, la cual se denomina <b>complementario</b> y se utiliza para añadir una categoría extra para aquellos que aciertan 5 bolas pero falla una, de modo que se les da una oportunidad para acertar la séptima: no obtendrían el máximo premio posible pero sí un premio mayor a la categoría de 5 aciertos.

También hay que destacar la existencia del <b>reintegro</b>. En cada sorteo, tras extraerse la bola que se corresponde con el complementario, se extrae una bola de un bombo totalmente distinto. En dicho bombo hay 10 bolas, numeradas del 0 al 9. El reintegro de cada apuesta es generado de forma aleatoria, por lo que no se puede escoger el número asociado. Si se acierta dicho número en una apuesta obtendremos premio con el mismo valor que el importe de la apuesta, recuperando así nuestra inversión.

Para saber la probabilidad de acierto de cada bola usaremos la <b>Regla de Laplace</b>, que dice lo siguiente:

<div class="text-center my-5">
  <span>
    <b>
      Probabilidad
    </b>
  </span>
  <span class="equal">
    <b>=</b>
  </span>
  <div class="fraction">
    <span class="fup">
      <b>Casos favorables</b>
    </span>
    <span class="fdn">
      <b>Casos posibles</b>
    </span>
  </div>
</div>

En la <b>Bonoloto</b> se obtiene premio cuando se aciertan, al menos, 3 de los 6 números resultantes en un sorteo, o bien cuando se acierta el reintegro. Para más info consultar el <b>Título V. Capítulo Segundo. Reparto de Premios</b> en el siguiente <a href="https://www.loteriasyapuestas.es/f/loterias/documentos/normativa/normativa%20SELAE/BONOLOTO%20modif%2028%205%2015-3.pdf" target="_blank" title="Normas de Bonoloto" rel="nofollow">enlace</a>.

Para saber cuántas combinaciones posibles hay tiraremos de combinatoria. La fórmula para saber cuántas combinaciones de <b>m</b> elementos tomados de <b>n</b> en <b>n</b> elementos es:

<div class="text-center my-5">
  <div class="combination">
    <b>C</b>
    <span class="combination-indexes">
      <sup><b>n</b></sup>
      <sub><b>m</b></sub>
    </span>
  </div>
  <span class="equal">
    <b>=</b>
  </span>
  <div class="fraction">
    <span class="fup"><b>m!</b></span>
    <span class="fdn"><b>n! × (m - n)!</b></span>
  </div>
</div>

En este caso, queremos saber cuántas combinaciones de 6 números hay sobre 49 posibles. El cálculo sería el siguiente:

<div class="text-center my-5">
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>6</sup>
      <sub>49</sub>
    </span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">49!</span>
    <span class="fdn">6! × (49 - 6)!</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">49!</span>
    <span class="fdn">6! × 43!</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">49 × 48 × 47 × 46 × 45 × 44 × <del>43!</del></span>
    <span class="fdn">6 × 5 × 4 × 3 × 2 × <del>43!</del></span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">10068347520</span>
    <span class="fdn">720</span>
  </div>
</div>

Con estos cálculos podemos saber que hay casi <b>14 millones</b> de combinaciones posibles de 49 números tomados en grupos de 6. Ahora ya podemos calcular las probabilidades de tener acierto en las distintas categorías de la <b>Bonoloto</b>.

### 🔸 Probabilidad de acertar 3 numeros en la Bonoloto

Para saber la probabilidad exacta de obtener 3 aciertos calcularemos por separado la probabilidad de acertar un número, multiplicándola por la probabilidad del siguiente acierto, lo cual implica restar un acierto posible y una bola del total, y nuevamente por la probabilidad del tercer acierto. Por tanto, los cálculos serían los siguientes:

<div class="text-center my-5">
  <span>Probabilidad (3 ó más aciertos)</span>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">6</span>
    <span class="fdn">49</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">5</span>
    <span class="fdn">48</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">4</span>
    <span class="fdn">47</span>
  </div>
</div>

Pero claro, estamos incluyendo las probabilidades de obtener más aciertos de los que buscamos, que son 3. Por tanto, si queremos precisar tenemos que añadir la restricción de fallar las 3 bolas restantes. De este modo tenemos:

<div class="text-center my-5">
  <span>Probabilidad (3 aciertos)</span>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">6</span>
    <span class="fdn">49</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">5</span>
    <span class="fdn">48</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">4</span>
    <span class="fdn">47</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">43</span>
    <span class="fdn">46</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">42</span>
    <span class="fdn">45</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">41</span>
    <span class="fdn">44</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">8885520</span>
    <span class="fdn">10068347520</span>
  </div>
</div>

Sin embargo hemos pasado por alto un detalle importante, y es que no hay una sola combinación que nos sirva, ya que de 6 bolas que tiene nuestra apuesta nos valen todas aquellas combinaciones que tengan 3 de esas 6. Por tanto, para determinar la probabilidad real habrá que multiplicar el resultado anterior por la combinación de las 6 bolas que significan un acierto tomadas de 3 en 3, es decir:

<div class="text-center my-5">
  <span>Probabilidad (3 aciertos)</span>
  <span class="equal">=</span>
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>3</sup>
      <sub>6</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">8885520</span>
    <span class="fdn">10068347520</span>
  </div>
  <span class="equal">=</span>
  <span>20</span>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">8885520</span>
    <span class="fdn">10068347520</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">177710400</span>
    <span class="fdn">10068347520</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">246820</span>
    <span class="fdn">13983816</span>
  </div>
</div>

### 🔸 Probabilidad de acertar 4 numeros en la Bonoloto

En el caso de la probabilidad exacta de obtener 4 aciertos podemos extender el cálculo anterior, imponiendo las restricciones de acertar 4 bolas pero fallando las 2 últimas. Así pues, los cálculos serían los que siguen:

<div class="text-center my-5">
  <span>Probabilidad (4 aciertos)</span>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">6</span>
    <span class="fdn">49</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">5</span>
    <span class="fdn">48</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">4</span>
    <span class="fdn">47</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">3</span>
    <span class="fdn">46</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">43</span>
    <span class="fdn">45</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">42</span>
    <span class="fdn">44</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">650160</span>
    <span class="fdn">10068347520</span>
  </div>
</div>

Tal y como se comentó en el apartado anterior, debemos incluir aquellas combinaciones en las que las bolas acertadas varíen,ya que no nos importa qué combinación de las posibles sea la resultante. En este caso los cálculos serían los siguientes:

<div class="text-center my-5">
  <span>Probabilidad (4 aciertos)</span>
  <span class="equal">=</span>
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>4</sup>
      <sub>6</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">650160</span>
    <span class="fdn">10068347520</span>
  </div>
  <span class="equal">=</span>
  <span>15</span>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">650160</span>
    <span class="fdn">10068347520</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">9752400</span>
    <span class="fdn">10068347520</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">13545</span>
    <span class="fdn">13983816</span>
  </div>
</div>

### 🔸 Probabilidad de acertar 5 numeros en la Bonoloto

Este caso es un poco peculiar en comparación con el resto. Siguiendo con el razonamiento previo uno puede pensar que el inicio de los cálculos sería el siguiente:

<div class="text-center my-5">
  <span>Probabilidad (5 aciertos)</span>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">6</span>
    <span class="fdn">49</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">5</span>
    <span class="fdn">48</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">4</span>
    <span class="fdn">47</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">3</span>
    <span class="fdn">46</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">2</span>
    <span class="fdn">45</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">43</span>
    <span class="fdn">44</span>
  </div>
</div>

No obstante, tenemos que ser conscientes de que hay una categoría de premios entre 5 aciertos y 6, en la cual interviene el complementario. En las categorías previas nos daba igual incluirlo, puesto que no tenía relevancia de cara a los premios. Pero en esta ocasión no es lo mismo acertarlo que fallarlo. Por tanto, tenemos que imponer la condición de fallar el complementario para centrarnos en los 5 aciertos exactos. Dicho esto, tendríamos que realizar el siguiente ajuste:

<div class="text-center my-5">
  <span>Probabilidad (5 aciertos)</span>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">6</span>
    <span class="fdn">49</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">5</span>
    <span class="fdn">48</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">4</span>
    <span class="fdn">47</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">3</span>
    <span class="fdn">46</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">2</span>
    <span class="fdn">45</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup"><del>43</del></span>
    <span class="fdn">44</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">42</span>
    <span class="fdn"><del>43</del></span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">30240</span>
    <span class="fdn">10068347520</span>
  </div>
</div>

Realizado este ajuste, ahora sí podemos aplicar la lógica anterior de las combinaciones de los números, puesto que nos da igual cuál sea la bola no acertada:

<div class="text-center my-5">
  <span>Probabilidad (5 aciertos)</span>
  <span class="equal">=</span>
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>5</sup>
      <sub>6</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">30240</span>
    <span class="fdn">10068347520</span>
  </div>
  <span class="equal">=</span>
  <span>6</span>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">30240</span>
    <span class="fdn">10068347520</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">181440</span>
    <span class="fdn">10068347520</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">252</span>
    <span class="fdn">13983816</span>
  </div>
</div>

### 🔸 Probabilidad de acertar 5 numeros y el complementario en la Bonoloto

Los cálculos para determinar la probabilidad de acertar 5 números y el complementario son similares al caso anterior, con la diferencia de que en éste sí tenemos que acertar el complementario: no nos vale fallar la séptima bola.

<div class="text-center my-5">
  <span>Probabilidad (5 aciertos y el complementario)</span>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">6</span>
    <span class="fdn">49</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">5</span>
    <span class="fdn">48</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">4</span>
    <span class="fdn">47</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">3</span>
    <span class="fdn">46</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">2</span>
    <span class="fdn">45</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup"><del>43</del></span>
    <span class="fdn">44</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">1</span>
    <span class="fdn"><del>43</del></span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">720</span>
    <span class="fdn">10068347520</span>
  </div>
</div>

Como es ya habitual, no nos importa cuál de las 6 bolas sea la no acertada. El resto de los cálculos coinciden con el caso anterior tal y como se puede comprobar:

<div class="text-center my-5">
  <span>Probabilidad (5 aciertos y el complementario)</span>
  <span class="equal">=</span>
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>5</sup>
      <sub>6</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">720</span>
    <span class="fdn">10068347520</span>
  </div>
  <span class="equal">=</span>
  <span>6</span>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">720</span>
    <span class="fdn">10068347520</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">6</span>
    <span class="fdn">13983816</span>
  </div>
</div>

### 🔸 Probabilidad de acertar la Bonoloto

Este caso es el más sencillo de calcular de todos, puesto que para acertar la <b>Bonoloto</b> es necesario que acertemos todas y cada una de las 6 bolas resultantes, sin oportunidad de fallo. Así pues, no hay que tener en cuenta ningún tipo de casuística de distinto orden de números, ni complementario, etc.

<div class="text-center my-5">
  <span>Probabilidad (6 aciertos)</span>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">6</span>
    <span class="fdn">49</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">5</span>
    <span class="fdn">48</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">4</span>
    <span class="fdn">47</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">3</span>
    <span class="fdn">46</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">2</span>
    <span class="fdn">45</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">1</span>
    <span class="fdn">44</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">720</span>
    <span class="fdn">10068347520</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">1</span>
    <span class="fdn">13983816</span>
  </div>
</div>

### 🔸 Probabilidad de acertar el reintegro de la Bonoloto

Como se ha comentado anteriormente, en el reintegro hay 10 bolas numeradas del 0 al 9. Como sólo nos vale acertar una de ellas, la probabilidad de acertar el reintegro es:

<div class="text-center my-5">
  <span>Probabilidad (reintegro)</span>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">1</span>
    <span class="fdn">10</span>
  </div>
  <span class="equal">=</span>
  <span class="result"><b>0.1</b></span>
</div>

### 🔸 Resumen de probabilidades de la Bonoloto por categoria

Una vez que se han realizado todos los cálculos, podemos finalizar esta sección con un resumen en el que figuren todas y cada una de las categorías de premios de la <b>Bonoloto</b> junto con sus probabilidades.

<div class="static-table">
  <table>
    <thead>
      <tr>
        <th class="text-center">
          Categoría
        </th>
        <th class="text-center">
          Aciertos
        </th>
        <th class="text-center">
          Probabilidad
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-center">
          1ª Categoría
        </td>
        <td class="text-center">
          6
        </td>
        <td class="text-center py-1">
          <div class="fraction">
            <span class="fup"><b>1</b></span>
            <span class="fdn"><b>13983816</b></span>
          </div>
          <span class="equal"><b>≈</b></span>
          <span class="result"><b>0.00000007</b></span>
        </td>
      </tr>
      <tr>
        <td class="text-center">
          2ª Categoría
        </td>
        <td class="text-center">
          5 + complementario
        </td>
        <td class="text-center py-1">
          <div class="fraction">
            <span class="fup"><b>6</b></span>
            <span class="fdn"><b>13983816</b></span>
          </div>
          <span class="equal"><b>≈</b></span>
          <span class="result"><b>0.000000429</b></span>
        </td>
      </tr>
      <tr>
        <td class="text-center">
          3ª Categoría
        </td>
        <td class="text-center">
          5
        </td>
        <td class="text-center py-1">
          <div class="fraction">
            <span class="fup"><b>252</b></span>
            <span class="fdn"><b>13983816</b></span>
          </div>
          <span class="equal"><b>≈</b></span>
          <span class="result"><b>0.000018</b></span>
        </td>
      </tr>
      <tr>
        <td class="text-center">
          4ª Categoría
        </td>
        <td class="text-center">
          4
        </td>
        <td class="text-center py-1">
          <div class="fraction">
            <span class="fup"><b>13545</b></span>
            <span class="fdn"><b>13983816</b></span>
          </div>
          <span class="equal"><b>≈</b></span>
          <span class="result"><b>0.000969</b></span>
        </td>
      </tr>
      <tr>
        <td class="text-center">
          5ª Categoría
        </td>
        <td class="text-center">
          3
        </td>
        <td class="text-center py-1">
          <div class="fraction">
            <span class="fup"><b>246820</b></span>
            <span class="fdn"><b>13983816</b></span>
          </div>
          <span class="equal"><b>≈</b></span>
          <span class="result"><b>0.017</b></span>
        </td>
      </tr>
      <tr>
        <td class="text-center">
          6ª Categoría
        </td>
        <td class="text-center">
          Reintegro
        </td>
        <td class="text-center py-1">
          <div class="fraction">
            <span class="fup"><b>1</b></span>
            <span class="fdn"><b>10</b></span>
          </div>
          <span class="equal"><b>=</b></span>
          <span class="result"><b>0.1</b></span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

## 📚 Fuentes

Para la redacción de esta página hemos utilizado información y datos de otras webs que nos han sido de gran utilidad. Por orden de influencia destacamos:

<div class="static-table">
  <table>
    <thead>
      <tr>
        <th class="text-center">
          Enlace
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <a 
            href="http://www.estadisticaparatodos.es/taller/loterias/primitivas.html" 
            target="_blank" 
            title="Estadística para todos" 
            rel="nofollow"
          >
            http://www.estadisticaparatodos.es/taller/loterias/primitivas.html
          </a>
        </td>
      </tr>
      <tr>
        <td>
          <a 
            href="https://www.combinacionganadora.com/primitiva/probabilidades/" 
            target="_blank" 
            title="Combinación ganadora" 
            rel="nofollow"
          >
            https://www.combinacionganadora.com/primitiva/probabilidades
          </a>
        </td>
      </tr>
      <tr>
        <td>
          <a 
            href="https://www.periodni.com/es/ecuaciones_matematicas_y_quimicas_en_la_web.html" 
            target="_blank" 
            title="www.periodni.com"
            rel="nofollow"
          >
            https://www.periodni.com/es/ecuaciones_matematicas_y_quimicas_en_la_web.html
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<advertisement></advertisement>

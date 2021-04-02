---
title: '🤑 Primitiva | Probabilidades y premios de la Primitiva'
metas: 
  description: 'Información sobre las categorías de premios de la Primitiva. ☑️ Se incluyen los cálculos de las probabilidades de acertar.'
  keywords: 'primitiva, probabilidades, cálculos, categorías, premios'
  canonical_url: 'https://www.pronostigol.es/primitiva'
  og_title: '🤑 Primitiva | Probabilidades y premios de la Primitiva'
  og_type: 'website'
  og_image: 'https://www.pronostigol.es/img/logo-primitiva.png'
  og_url: 'https://www.pronostigol.es/primitiva'
  og_description: 'Información sobre las categorías de premios de la Primitiva. ☑️ Se incluyen los cálculos de las probabilidades de acertar.'
  og_site_name: 'Primitiva'
  twitter_site: '@pronostigolesp'
  twitter_card: 'summary_large_image'
  twitter_image: 'https://www.pronostigol.es/img/logo-primitiva.png'
  twitter_title: '🤑 Primitiva | Probabilidades y premios de la Primitiva'
  twitter_description: 'Información sobre las categorías de premios de la Primitiva. ☑️ Se incluyen los cálculos de las probabilidades de acertar.'
published: true
---

<v-card elevation="2" :class="{ 'my-5': true }">
  <v-card-title id="introduction" :class="{ 'green--text text--darken-2': true }">🚀 Introducción</v-card-title>
  <v-card-text>
    <p class="text-justify">
      En esta sección encontrarás multitud de <nuxt-link to="/primitiva/estadisticas" title="Estadísticas">estadísticas</nuxt-link> asociadas al sorteo de la <b>Primitiva</b> de España. Podrás conocer los resultados más repetidos, el histórico de <nuxt-link to="/primitiva/sorteos" title="Sorteos">sorteos</nuxt-link>, los reintegros que aparecen con más frecuencia y una amplia gama de consultas a realizar. De este modo te será mucho más sencillo realizar tus apuestas.
    </p>
  </v-card-text>
  <v-card-title id="probabilities" :class="{ 'green--text text--darken-2': true }">
    🎲 Probabilidades
  </v-card-title>
  <v-card-text>
    <p class="text-justify">
      Dado que el formato de la <b>Primitiva</b> es idéntico al de la <nuxt-link to="/bonoloto" title="Bonoloto">Bonoloto</nuxt-link>, a excepción de las categorías de los premios y el coste de las apuestas, veremos que las probabilidades son las mismas.
    </p>
    <p class="text-justify">
      En el caso de la <b>Primitiva</b> hay que destacar la existencia de una categoría especial, cuyo premio se obtiene acertando los 6 números del sorteo y, además, el reintegro.
    </p>
    <p class="text-justify">
      Al igual que en la sección de la <nuxt-link to="/bonoloto" title="Bonoloto">Bonoloto</nuxt-link> nos vamos a apoyar en la <b>Regla de Laplace</b> para determinar la probabilidad de cada una de las categorías:
    </p>
    <div class="text-center my-5">
      <span><b>Probabilidad</b></span>
      <span class="equal"><b>=</b></span>
      <div class="fraction">
        <span class="fup"><b>Casos favorables</b></span>
        <span class="fdn"><b>Casos posibles</b></span>
      </div>
    </div>
    <p class="text-justify">
      Se puede consultar el detalle de las categorías de premios de la <b>Primitiva</b> en el siguiente <a href="https://www.loteriasyapuestas.es/es/la-primitiva/como-se-juega/como-jugar-a-la-primitiva" target="_blank" title="Normas de Primitiva" rel="nofollow">enlace</a>.
    </p>
    <p class="text-justify">
      También haremos uso de la combinatoria. La fórmula para saber cuántas combinaciones de <b>m</b> elementos tomados de <b>n</b> en <b>n</b> elementos es:
    </p>
    <div class="text-center my-5">
      <div class="combination">
        <b>C</b>
        <span class="combination-indexes">
          <sup><b>n</b></sup>
          <sub><b>m</b></sub>
        </span>
      </div>
      <span class="equal"><b>=</b></span>
      <div class="fraction">
        <span class="fup"><b>m!</b></span>
        <span class="fdn"><b>n! × (m - n)!</b></span>
      </div>
    </div>
    <p class="text-justify">
      Dado que hay 49 números y el resultado estará conformado por 6, el cálculo sería el siguiente:
    </p>
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
    <p class="text-justify">
      Al igual que en la <nuxt-link to="/bonoloto" title="Bonoloto">Bonoloto</nuxt-link> hay casi <b>14 millones</b> de combinaciones posibles de 49 números tomados en grupos de 6.
    </p>
  </v-card-text>
  <v-card-title id="probability-three-numbers" :class="{ 'green--text text--darken-2': true }">
    🔸 Probabilidad de acertar 3 números en la Primitiva
  </v-card-title>
  <v-card-text>
    <p class="text-justify">
      Como se explica en la sección de la <nuxt-link to="/bonoloto" title="Bonoloto">Bonoloto</nuxt-link>, para conocer la probabilidad de obtener 3 aciertos hay que calcular por separado la probabilidad de acertar un número, multiplicándola por la probabilidad del siguiente acierto, lo cual implica restar un acierto posible y una bola del total. Seguidamente, hacemos lo propio con el tercer acierto. Matemáticamente, sería como se indica a continuación:
    </p>
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
    <p class="text-justify">
      Debemos saber que estamos incluyendo las probabilidades de obtener más aciertos de los que buscamos, que son 3. Por tanto, si queremos precisar tenemos que añadir la restricción de fallar las 3 bolas restantes. Dicho esto, los cálculos quedarían del siguiente modo:
    </p>
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
    <p class="text-justify">
      Sin embargo, hay que tener presente que no sólo nos vale una combinación, sino que nos vale cualquiera que contenga una de las combinaciones que tengan 3 de esos 6 números. Por tanto, para obtener la probabilidad real habrá que multiplicar el resultado anterior por la combinación de las 6 bolas que significan un acierto tomadas de 3 en 3:
    </p>
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
        <span class="fup"><b>246820</b></span>
        <span class="fdn"><b>13983816</b></span>
      </div>
    </div>
  </v-card-text>
  <v-card-title id="probability-four-numbers" :class="{ 'green--text text--darken-2': true }">
    🔸 Probabilidad de acertar 4 números en la Primitiva
  </v-card-title>
  <v-card-text>
    <p class="text-justify">
      El caso de la probabilidad exacta de obtener 4 aciertos es igual que el anterior, sólo que elevando en una unidad el número de aciertos y reduciéndolo en una el de los fallos. Los cálculos serían:
    </p>
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
    <p class="text-justify">
      Como se ha comentado anteriormente, debemos incluir aquellas combinaciones en las que las bolas acertadas varíen, ya que no nos importa qué combinación de las posibles sea la resultante. En este caso los cálculos serían los siguientes:
    </p>
    <div class="text-center v-margin">
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
        <span class="fup"><b>13545</b></span>
        <span class="fdn"><b>13983816</b></span>
      </div>
    </div>
  </v-card-text>
  <v-card-title id="probability-five-numbers" :class="{ 'green--text text--darken-2': true }">
    🔸 Probabilidad de acertar 5 números en la Primitiva
  </v-card-title>
  <v-card-text>
    <p class="text-justify">
      Este caso se complica si lo comparamos con el resto. Siguiendo con el razonamiento previo uno puede pensar que los cálculos serían:
    </p>
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
    <p class="text-justify">
      Pero tenemos que ser conscientes de que hay una categoría de premios entre 5 aciertos y 6, en la cual entra en escena el complementario. En las categorías previas nos daba igual incluirlo, puesto que era una bola indiferente a efectos de premio. Sin embargo, en esta ocasión no es lo mismo acertarlo que fallarlo. Por tanto, tenemos que añadir la condición de fallar el complementario para centrarnos en los 5 aciertos exactos. Si lo trasladamos a los cálculos tendríamos que:
    </p>
    <div class="text-center v-margin">
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
    <p class="text-justify">
      Hecho este ajuste, ahora sí podemos aplicar la lógica anterior de las combinaciones de los números, puesto que no es relevante la bola no acertada:
    </p>
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
        <span class="fup"><b>252</b></span>
        <span class="fdn"><b>13983816</b></span>
      </div>
    </div>
  </v-card-text>
  <v-card-title id="probability-five-numbers-and-complementary" :class="{ 'green--text text--darken-2': true }">
    🔸 Probabilidad de acertar 5 números y el complementario en la Primitiva
  </v-card-title>
  <v-card-text>
    <p class="text-justify">
      Los cálculos para determinar la probabilidad de acertar 5 números y el complementario son similares al caso anterior, con la diferencia de que en éste sí tenemos que acertar el complementario: no nos vale fallar la séptima bola.
    </p>
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
    <p class="text-justify">
      Una vez más no nos importa cuál de las 6 bolas sea la no acertada. El resto de los cálculos coinciden con el caso anterior tal y como se puede comprobar:
    </p>
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
        <span class="fup"><b>6</b></span>
        <span class="fdn"><b>13983816</b></span>
      </div>
    </div>
  </v-card-text>
  <v-card-title id="probability-six-numbers" :class="{ 'green--text text--darken-2': true }">
    🔸 Probabilidad de acertar la Primitiva
  </v-card-title>
  <v-card-text>
    <p class="text-justify">
      Este caso es el más sencillo de calcular de todos, puesto que para acertar la <b>Primitiva</b> es necesario que acertemos todas y cada una de las 6 bolas resultantes, sin fallos que valgan. Por tanto, no hay que contemplar ningún tipo de casuística de distinto orden de números, ni complementario, etc.
    </p>
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
        <span class="fup"><b>1</b></span>
        <span class="fdn"><b>13983816</b></span>
      </div>
    </div>
  </v-card-text>
  <v-card-title id="probability-reimbursement" :class="{ 'green--text text--darken-2': true }">
    🔸 Probabilidad de acertar el reintegro de la Primitiva
  </v-card-title>
  <v-card-text>
    <p class="text-justify">
      Recordemos que en el reintegro hay 10 bolas numeradas del 0 al 9. Como sólo nos vale acertar una de las 10 bolas, la probabilidad de acertar el reintegro es:
    </p>
    <div class="text-center my-5">
      <span>Probabilidad (reintegro)</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">10</span>
      </div>
    </div>
  </v-card-text>
  <v-card-title id="probability-summary" :class="{ 'green--text text--darken-2': true }">
    🔸 Resumen de probabilidades de la Primitiva por categoría
  </v-card-title>
  <v-card-text>
    <p class="text-justify">
      Como hemos realizado todos los cálculos, podemos finalizar esta sección con un resumen en el que consten todas y cada una de las categorías de premios de la <b>Primitiva</b> junto con sus probabilidades.
    </p>
    <v-simple-table :class="{ bordered: true }">
      <template v-slot:default>
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
              Categoría especial
            </td>
            <td class="text-center">
              6 + Reintegro
            </td>
            <td class="text-center py-1">
              <div class="fraction">
                <span class="fup"><b>1</b></span>
                <span class="fdn"><b>139838160</b></span>
              </div>
              <span class="equal"><b>≈</b></span>
              <span class="result"><b>0.000000007</b></span>
            </td>
          </tr>
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
      </template>
    </v-simple-table>
  </v-card-text>
  <v-card-title id="sources" :class="{ 'green--text text--darken-2': true }">
    📚 Fuentes
  </v-card-title>
  <v-card-text>
    <p class="text-justify">
      Para la redacción de esta página hemos utilizado información y datos de otras webs que nos han sido de gran utilidad. Por orden de influencia destacamos:
    </p>
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="primary">
          mdi-link-variant
        </v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>
          <a 
            href="http://www.estadisticaparatodos.es/taller/loterias/primitivas.html" 
            target="_blank" 
            title="Estadística para todos" 
            rel="nofollow"
          >
            http://www.estadisticaparatodos.es/taller/loterias/primitivas.html
          </a>
        </v-list-item-title>
        <v-list-item-subtitle>Estadística para todos</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="primary">
          mdi-link-variant
        </v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>
          <a 
            href="https://www.combinacionganadora.com/primitiva/probabilidades/" 
            target="_blank" 
            title="Combinación ganadora" 
            rel="nofollow"
          >
            https://www.combinacionganadora.com/primitiva/probabilidades
          </a>
        </v-list-item-title>
        <v-list-item-subtitle>Combinación ganadora</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="primary">
          mdi-link-variant
        </v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>
          <a 
            href="https://www.laprimitiva.info/bases-del-juego/probabilidades-la-primitiva.html" 
            target="_blank" 
            title="LaPrimitiva.info"
            rel="nofollow"
          >
            https://www.laprimitiva.info/bases-del-juego/probabilidades-la-primitiva.html
          </a>
        </v-list-item-title>
        <v-list-item-subtitle>LaPrimitiva.info</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card-text>
</v-card>

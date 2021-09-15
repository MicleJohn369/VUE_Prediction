---
title: '💰 El Gordo de la Primitiva | Probabilidades y premios de El Gordo de la Primitiva'
metas: 
  description: 'Información sobre las categorías de premios de El Gordo de la Primitiva. ☑️ Se incluyen los cálculos de las probabilidades de acertar.'
  keywords: 'gordo, primitiva, probabilidades, cálculos, categorías, premios'
  canonical_url: 'https://www.pronostigol.es/gordo'
  og_title: '💰 El Gordo de la Primitiva | Probabilidades y premios de El Gordo de la Primitiva'
  og_type: 'website'
  og_image: 'https://www.pronostigol.es/images/logo-gordo.png'
  og_url: 'https://www.pronostigol.es/gordo'
  og_description: 'Información sobre las categorías de premios de El Gordo de la Primitiva. ☑️ Se incluyen los cálculos de las probabilidades de acertar.'
  og_site_name: 'Primitiva'
  twitter_site: '@pronostigolesp'
  twitter_card: 'summary_large_image'
  twitter_image: 'https://www.pronostigol.es/images/logo-gordo.png'
  twitter_title: '💰 El Gordo de la Primitiva | Probabilidades y premios de El Gordo de la Primitiva'
  twitter_description: 'Información sobre las categorías de premios de El Gordo de la Primitiva. ☑️ Se incluyen los cálculos de las probabilidades de acertar.'
published: true
---

<advertisement></advertisement>

<v-card elevation="2" :class="{ 'my-5': true }">
  <v-card-title id="introduction" :class="{ 'red--text text--darken-2': true }">🚀 Introducción</v-card-title>
  <v-card-text>
    <p class="text-justify">
      En esta sección encontrarás multitud de <nuxt-link to="/gordo/estadisticas" title="Estadísticas">estadísticas</nuxt-link> asociadas al sorteo de <b>El Gordo de la Primitiva</b> de España. Podrás conocer los resultados más repetidos, el histórico de <nuxt-link to="/gordo/sorteos" title="Sorteos">sorteos</nuxt-link>, los reintegros que aparecen con más frecuencia y una amplia gama de consultas a realizar. De este modo te será mucho más sencillo realizar tus apuestas.
    </p>
  </v-card-text>
  <v-card-title id="probabilities" :class="{ 'red--text text--darken-2': true }">
    🎲 Probabilidades
  </v-card-title>
  <v-card-text>
    <p class="text-justify">
      El formato de <b>El Gordo de la Primitiva</b> es muy diferente al de la <nuxt-link to="/bonoloto" title="Bonoloto">Bonoloto</nuxt-link> y la <nuxt-link to="/primitiva" title="Primitiva">Primitiva</nuxt-link>, desde los números que entran en juego hasta las categorías de premios.
    </p>
    <p class="text-justify">
      En el caso de <b>El Gordo de la Primitiva</b> destaca la existencia de un reintegro especial, el cual se denomina número clave, que otorga el reembolso de cada apuesta pero también genera categorías de premios adicionales habiendo acertado, al menos, 2 números.
    </p>
    <p class="text-justify">
      A diferencia de la <nuxt-link to="/bonoloto" title="Bonoloto">Bonoloto</nuxt-link> y la <nuxt-link to="/primitiva" title="Primitiva">Primitiva</nuxt-link>, en este sorteo los números posibles van del 1 al 54, y en lugar de extraerse 6 bolas se extraen 5.
    </p>
    <p class="text-justify">
      Una vez más haremos uso de la <b>Regla de Laplace</b> para determinar la probabilidad de cada una de las categorías:
    </p>
    <div class="text-center my-5">
      <span><b>Probabilidad</b></span>
      <span class="equal"><b>=</b></span>
      <div class="fraction">
        <span class="fup"><b>Casos favorables</b></span>
        <span class="fdn"><b>Casos posibles</b></span>
      </div>
    </div>
    <p>
      Es posible consultar el detalle de las categorías de premios de <b>El Gordo de la Primitiva</b> en el siguiente <a href="https://www.loteriasyapuestas.es/es/gordo-primitiva/como-se-juega/como-jugar-a-el-gordo-de-la-primitiva" target="_blank" title="Normas de El Gordo" rel="nofollow">enlace</a>.
    </p>
    <p class="text-justify">
      Nuevamente haremos uso de la combinatoria. Como ya es sabido, la fórmula para saber cuántas combinaciones de <b>m</b> elementos tomados de <b>n</b> en <b>n</b> elementos es:
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
      Dado que hay 54 números y el resultado estará conformado por 5 y por el número clave, el cálculo sería el siguiente:
    </p>
    <div class="text-center my-5">
      <div class="combination">
        C
        <span class="combination-indexes">
          <sup>5</sup>
          <sub>54</sub>
        </span>
      </div>
      <span class="multiplication">×</span>
      <div class="combination">
        C
        <span class="combination-indexes">
          <sup>1</sup>
          <sub>10</sub>
        </span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">54!</span>
        <span class="fdn">5! × (54 - 5)!</span>
      </div>
      <span class="multiplication">×</span>
      <span>10</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">54!</span>
        <span class="fdn">5! × 49!</span>
      </div>
      <span class="multiplication">×</span>
      <span>10</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">54 × 53 × 52 × 51 × 50 × <del>49!</del></span>
        <span class="fdn">5 × 4 × 3 × 2 × <del>49!</del></span>
      </div>
      <span class="multiplication">×</span>
      <span>10</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">3795012000</span>
        <span class="fdn">120</span>
      </div>
    </div>
    <p class="text-justify">
      En <b>El Gordo de la Primitiva</b> hay algo más de <b>31 millones</b> de combinaciones posibles de 54 números tomados en grupos de 5 y de 10 números clave escogidos individualmente.
    </p>
  </v-card-text>
  <v-card-title id="probability-two-numbers" :class="{ 'red--text text--darken-2': true }">
    🔸 Probabilidad de acertar 2 números en El Gordo de la Primitiva
  </v-card-title>
  <v-card-text>
    <p class="text-justify">
      Éste es el caso base para calcular el resto de probabilidades de <b>El Gordo de la Primitiva</b>. Al igual que se ha hecho en apartados anteriores, para conocer la probabilidad de obtener 2 aciertos hay que calcular por separado la probabilidad de acertar un número, multiplicándola por la probabilidad del siguiente acierto, lo cual implica restar un acierto posible y una bola del total. Como siempre decimos, con un ejemplo se entiende mejor:
    </p>
    <div class="text-center my-5">
      <span>Probabilidad (2 ó más aciertos)</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">5</span>
        <span class="fdn">54</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">4</span>
        <span class="fdn">53</span>
      </div>
    </div>
    <p class="text-justify">
      Como se ha indicado en ocasiones anteriores, estamos incluyendo las probabilidades de obtener más aciertos de los que buscamos, que son 2. Dicho esto, si queremos precisar tenemos que añadir la restricción de fallar las 3 bolas restantes.
    </p>
    <p class="text-justify">
      En este juego en particular, al tener un papel tan importante el número clave de cara a la determinación de los premios, también debemos incluir la restricción de fallar el número clave, puesto que estaríamos incluyendo también combinaciones de la categoría superior. De este modo, cálculos exactos serían:
    </p>
    <div class="text-center my-5">
      <span>Probabilidad (2 aciertos)</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">5</span>
        <span class="fdn">54</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">4</span>
        <span class="fdn">53</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">49</span>
        <span class="fdn">52</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">48</span>
        <span class="fdn">51</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">47</span>
        <span class="fdn">50</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">9</span>
        <span class="fdn">10</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">19897920</span>
        <span class="fdn">3795012000</span>
      </div>
    </div>
    <p class="text-justify">
      Como era de esperar, al igual que en los juegos anteriores hay que tener presente que no sólo nos vale una combinación, sino que nos vale cualquiera que contenga una de las combinaciones que tengan 2 de esos 5 números. Por tanto, para obtener la probabilidad real habrá que multiplicar el resultado anterior por la combinación de las 5 bolas que significan un acierto tomadas de 2 en 2:
    </p>
    <div class="text-center v-margin">
      <span>Probabilidad (2 aciertos)</span>
      <span class="equal">=</span>
      <div class="combination">
        C
        <span class="combination-indexes">
          <sup>2</sup>
          <sub>5</sub>
        </span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">19897920</span>
        <span class="fdn">3795012000</span>
      </div>
      <span class="equal">=</span>
      <span>10</span>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">19897920</span>
        <span class="fdn">3795012000</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">198979200</span>
        <span class="fdn">3795012000</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup"><b>1658160</b></span>
        <span class="fdn"><b>31625100</b></span>
      </div>
    </div>
  </v-card-text>
  <v-card-title id="probability-two-numbers-and-special-number" :class="{ 'red--text text--darken-2': true }">
    🔸 Probabilidad de acertar 2 números y el número clave en El Gordo de la Primitiva
  </v-card-title>
  <v-card-text>
    <p class="text-justify">
      Este caso es idéntico al anterior, con la diferencia de que tenemos que acertar el número clave. Para ello sólo tenemos que modificar la última restricción. Por tanto, para saber la probabilidad de acertar 2 números y el número clave tenemos:
    </p>
    <div class="text-center my-5">
      <span>Probabilidad (2 aciertos y número clave)</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">5</span>
        <span class="fdn">54</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">4</span>
        <span class="fdn">53</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">49</span>
        <span class="fdn">52</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">48</span>
        <span class="fdn">51</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">47</span>
        <span class="fdn">50</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">10</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">2210880</span>
        <span class="fdn">3795012000</span>
      </div>
    </div>
    <p class="text-justify">
      Nuevamente, puesto que no nos importa qué números sean los acertados dentro de nuestra apuesta, tenemos que contemplar todas las posibles combinaciones de nuestros números.
    </p>
    <div class="text-center my-5">
      <span>Probabilidad (2 aciertos y número clave)</span>
      <span class="equal">=</span>
      <div class="combination">
        C
        <span class="combination-indexes">
          <sup>2</sup>
          <sub>5</sub>
        </span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">2210880</span>
        <span class="fdn">3795012000</span>
      </div>
      <span class="equal">=</span>
      <span>10</span>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">2210880</span>
        <span class="fdn">3795012000</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">22108800</span>
        <span class="fdn">3795012000</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup"><b>184240</b></span>
        <span class="fdn"><b>31625100</b></span>
      </div>
    </div>
  </v-card-text>
  <v-card-title id="probability-three-numbers" :class="{ 'red--text text--darken-2': true }">
    🔸 Probabilidad de acertar 3 números en El Gordo de la Primitiva
  </v-card-title>
  <v-card-text>
    <p class="text-justify">
      Volvemos a tomar como ejemplo el caso inical. El único cambio que tenemos que realizar es el acierto de la tercera bola, eliminando uno de los 3 fallos. Realizando los ajustes comentados nos queda lo siguiente:
    </p>
    <div class="text-center my-5">
      <span>Probabilidad (3 aciertos)</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">5</span>
        <span class="fdn">54</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">4</span>
        <span class="fdn">53</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">3</span>
        <span class="fdn">52</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">49</span>
        <span class="fdn">51</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">48</span>
        <span class="fdn">50</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">9</span>
        <span class="fdn">10</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">1270080</span>
        <span class="fdn">3795012000</span>
      </div>
    </div>
    <p class="text-justify">
      A continuación debemos multiplicar las combinaciones de números válidos entre los que apostamos escogiendo sólo 3, los cuales implicarán obtener premio en esta categoría. Casualmente, la combinación de 5 elementos tomados de 3 en 3 coincide con el número que obtenemos al combinar esos mismos 5 números de 2 en 2.
    </p>
    <div class="text-center v-margin">
      <span>Probabilidad (3 aciertos)</span>
      <span class="equal">=</span>
      <div class="combination">
        C
        <span class="combination-indexes">
          <sup>3</sup>
          <sub>5</sub>
        </span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">1270080</span>
        <span class="fdn">3795012000</span>
      </div>
      <span class="equal">=</span>
      <span>10</span>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">1270080</span>
        <span class="fdn">3795012000</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">12700800</span>
        <span class="fdn">3795012000</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup"><b>105840</b></span>
        <span class="fdn"><b>31625100</b></span>
      </div>
    </div>
  </v-card-text>
  <v-card-title id="probability-three-numbers-and-special-number" :class="{ 'red--text text--darken-2': true }">
    🔸 Probabilidad de acertar 3 números y el número clave en El Gordo de la Primitiva
  </v-card-title>
  <v-card-text>
    <p class="text-justify">
      Como ya nos podemos imaginar, para determinar la probabilidad de obtener 3 aciertos y el número clave sólo tendremos que tomar como referencia el caso anterior y modificar la restricción del número clave, de modo que impongamos que sea acertado en lugar de permitir los 9 resultados posibles que implican fallarlo.
    </p>
    <div class="text-center my-5">
      <span>Probabilidad (3 aciertos y número clave)</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">5</span>
        <span class="fdn">54</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">4</span>
        <span class="fdn">53</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">3</span>
        <span class="fdn">52</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">49</span>
        <span class="fdn">51</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">48</span>
        <span class="fdn">50</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">10</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">141120</span>
        <span class="fdn">3795012000</span>
      </div>
    </div>
    <p class="text-justify">
      Al igual que en el apartado anterior, debemos multiplicar las combinaciones de números válidos entre los que apostamos escogiendo sólo 3.
    </p>
    <div class="text-center my-5">
      <span>Probabilidad (3 aciertos y número clave)</span>
      <span class="equal">=</span>
      <div class="combination">
        C
        <span class="combination-indexes">
          <sup>3</sup>
          <sub>5</sub>
        </span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">141120</span>
        <span class="fdn">3795012000</span>
      </div>
      <span class="equal">=</span>
      <span>10</span>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">141120</span>
        <span class="fdn">3795012000</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">1411200</span>
        <span class="fdn">3795012000</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup"><b>11760</b></span>
        <span class="fdn"><b>31625100</b></span>
      </div>
    </div>
  </v-card-text>
  <v-card-title id="probability-four-numbers" :class="{ 'red--text text--darken-2': true }">
    🔸 Probabilidad de acertar 4 números en El Gordo de la Primitiva
  </v-card-title>
  <v-card-text>
    <p class="text-justify">
      Para calcular la probabilidad de acertar 4 números en <b>El Gordo de la Primitiva</b> sólo tenemos que extender los planteamientos anteriores, con la particularidad de que sólo se puede fallar uno de los 5 números.
    </p>
    <div class="text-center my-5">
      <span>Probabilidad (4 aciertos)</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">5</span>
        <span class="fdn">54</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">4</span>
        <span class="fdn">53</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">3</span>
        <span class="fdn">52</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">2</span>
        <span class="fdn">51</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">49</span>
        <span class="fdn">50</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">9</span>
        <span class="fdn">10</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">52920</span>
        <span class="fdn">3795012000</span>
      </div>
    </div>
    <p class="text-justify">
      Como se ha hecho en apartados anteriores, debemos multiplicar la combinación de los 5 posibles números que suponen un acierto tomados de 4 en 4.
    </p>
    <div class="text-center my-5">
      <span>Probabilidad (4 aciertos)</span>
      <span class="equal">=</span>
      <div class="combination">
        C
        <span class="combination-indexes">
          <sup>4</sup>
          <sub>5</sub>
        </span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">52920</span>
        <span class="fdn">3795012000</span>
      </div>
      <span class="equal">=</span>
      <span>5</span>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">52920</span>
        <span class="fdn">3795012000</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">264600</span>
        <span class="fdn">3795012000</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup"><b>2205</b></span>
        <span class="fdn"><b>31625100</b></span>
      </div>
    </div>
  </v-card-text>
  <v-card-title id="probability-four-numbers-and-special-number" :class="{ 'red--text text--darken-2': true }">
    🔸 Probabilidad de acertar 4 números y el número clave en El Gordo de la Primitiva
  </v-card-title>
  <v-card-text>
    <p class="text-justify">
      Una vez más, sólo tenemos que tomar como referencia el caso anterior y modificar la restricción asociada al número clave, de modo que en lugar de contemplar los 9 posibles números fallido añadamos el número que hemos apostado y que, por tanto, supone acertar el número clave.
    </p>
    <div class="text-center my-5">
      <span>Probabilidad (4 aciertos y número clave)</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">5</span>
        <span class="fdn">54</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">4</span>
        <span class="fdn">53</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">3</span>
        <span class="fdn">52</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">2</span>
        <span class="fdn">51</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">49</span>
        <span class="fdn">50</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">10</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">5880</span>
        <span class="fdn">3795012000</span>
      </div>
    </div>
    <p class="text-justify">
      Al igual que hemos hecho en el apartado anterior, debemos contemplar las combinaciones de los 5 posibles números que suponen un acierto tomados de 4 en 4.
    </p>
    <div class="text-center my-5">
      <span>Probabilidad (4 aciertos y número clave)</span>
      <span class="equal">=</span>
      <div class="combination">
        C
        <span class="combination-indexes">
          <sup>4</sup>
          <sub>5</sub>
        </span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">5880</span>
        <span class="fdn">3795012000</span>
      </div>
      <span class="equal">=</span>
      <span>5</span>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">5880</span>
        <span class="fdn">3795012000</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">29400</span>
        <span class="fdn">3795012000</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup"><b>245</b></span>
        <span class="fdn"><b>31625100</b></span>
      </div>
    </div>
  </v-card-text>
  <v-card-title id="probability-five-numbers" :class="{ 'red--text text--darken-2': true }">
    🔸 Probabilidad de acertar 5 números en El Gordo de la Primitiva
  </v-card-title>
  <v-card-text>
    <p class="text-justify">
      Nos vamos acercando a la máxima categoría de este juego. Para calcular esta probabilidad tenemos que imponer el acierto de los 5 números apostados pero fallando el número clave. Expresado de forma matemática tenemos:
    </p>
    <div class="text-center my-5">
      <span>Probabilidad (5 aciertos)</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">5</span>
        <span class="fdn">54</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">4</span>
        <span class="fdn">53</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">3</span>
        <span class="fdn">52</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">2</span>
        <span class="fdn">51</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">50</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">9</span>
        <span class="fdn">10</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">1080</span>
        <span class="fdn">3795012000</span>
      </div>
    </div>
    <p class="text-justify">
      Como en ocasiones anteriores, debemos contemplar las combinaciones de los 5 posibles números que suponen un acierto tomados de 5 en 5. Como es evidente, sólo nos valdrá una posible combinación de los números, que será la ganadora.
    </p>
    <div class="text-center my-5">
      <span>Probabilidad (5 aciertos)</span>
      <span class="equal">=</span>
      <div class="combination">
        C
        <span class="combination-indexes">
          <sup>5</sup>
          <sub>5</sub>
        </span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">1080</span>
        <span class="fdn">3795012000</span>
      </div>
      <span class="equal">=</span>
      <span>1</span>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">1080</span>
        <span class="fdn">3795012000</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">1080</span>
        <span class="fdn">3795012000</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup"><b>9</b></span>
        <span class="fdn"><b>31625100</b></span>
      </div>
    </div>
  </v-card-text>
  <v-card-title id="probability-five-numbers-and-special-result" :class="{ 'red--text text--darken-2': true }">
    🔸 Probabilidad de acertar El Gordo de la Primitiva
  </v-card-title>
  <v-card-text>
    <p class="text-justify">
      Ahora sí hemos llegado a lo que realmente nos interesa, y es saber la probabilidad de acertar <b>El Gordo de la Primitiva</b>. Para calcularlo sólo tenemos que partir del cálculo del apartado anterior, y modificar la probabilidad del número clave de modo que, en esta ocasión, sí lo acertemos.
    </p>
    <div class="text-center my-5">
      <span>Probabilidad (5 aciertos y número clave)</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">5</span>
        <span class="fdn">54</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">4</span>
        <span class="fdn">53</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">3</span>
        <span class="fdn">52</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">2</span>
        <span class="fdn">51</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">50</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">10</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">120</span>
        <span class="fdn">3795012000</span>
      </div>
    </div>
    <p class="text-justify">
      Al igual que en el apartado anterior debemos contemplar las combinaciones de los 5 posibles números que suponen un acierto tomados de 5 en 5. Como se ha explicado anteriormente, sabemos que el cálculo será 1 puesto que sólo la combinación de los 5 números ganadores será la que nos valga para acertar El Gordo de la Primitiva.
    </p>
    <div class="text-center my-5">
      <span>Probabilidad (5 aciertos y número clave)</span>
      <span class="equal">=</span>
      <div class="combination">
        C
        <span class="combination-indexes">
          <sup>5</sup>
          <sub>5</sub>
        </span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">120</span>
        <span class="fdn">3795012000</span>
      </div>
      <span class="equal">=</span>
      <span>1</span>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">120</span>
        <span class="fdn">3795012000</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">120</span>
        <span class="fdn">3795012000</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup"><b>1</b></span>
        <span class="fdn"><b>31625100</b></span>
      </div>
    </div>
  </v-card-text>
  <v-card-title id="probability-special-number" :class="{ 'red--text text--darken-2': true }">
    🔸 Probabilidad de acertar el número clave de El Gordo de la Primitiva
  </v-card-title>
  <v-card-text>
    <p class="text-justify">
      También es interesante saber qué probabilidad tenemos de acertar el número clave en <b>El Gordo de la Primitiva</b>, aunque el cálculo es muy sencillo.
    </p>
    <div class="text-center my-5">
      <span>Probabilidad (número clave)</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup"><b>1</b></span>
        <span class="fdn"><b>10</b></span>
      </div>
    </div>
  </v-card-text>
  <v-card-title id="probability-summary" :class="{ 'red--text text--darken-2': true }">
    🔸 Resumen de probabilidades de El Gordo de la Primitiva por categoría
  </v-card-title>
  <v-card-text>
    <p class="text-justify">
      Al igual que hemos hecho en otras secciones, una vez hechos todos los cálculos vamos a resumir los cálculos agrupados por categoría de premio de <b>El Gordo de la Primitiva</b>.
    </p>
    <v-simple-table :class="{ bordered: true }">
      <template #default>
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
              5 + Número Clave
            </td>
            <td class="text-center py-1">
              <div class="fraction">
                <span class="fup"><b>1</b></span>
                <span class="fdn"><b>31625100</b></span>
              </div>
              <span class="equal"><b>≈</b></span>
              <span class="result"><b>0.0000000316</b></span>
            </td>
          </tr>
          <tr>
            <td class="text-center">
              2ª Categoría
            </td>
            <td class="text-center">
              5
            </td>
            <td class="text-center py-1">
              <div class="fraction">
                <span class="fup"><b>9</b></span>
                <span class="fdn"><b>31625100</b></span>
              </div>
              <span class="equal"><b>≈</b></span>
              <span class="result"><b>0.000000285</b></span>
            </td>
          </tr>
          <tr>
            <td class="text-center">
              3ª Categoría
            </td>
            <td class="text-center">
              4 + Número Clave
            </td>
            <td class="text-center py-1">
              <div class="fraction">
                <span class="fup"><b>245</b></span>
                <span class="fdn"><b>31625100</b></span>
              </div>
              <span class="equal"><b>≈</b></span>
              <span class="result"><b>0.00000775</b></span>
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
                <span class="fup"><b>2205</b></span>
                <span class="fdn"><b>31625100</b></span>
              </div>
              <span class="equal"><b>≈</b></span>
              <span class="result"><b>0.0000697</b></span>
            </td>
          </tr>
          <tr>
            <td class="text-center">
              5ª Categoría
            </td>
            <td class="text-center">
              3 + Número Clave
            </td>
            <td class="text-center py-1">
              <div class="fraction">
                <span class="fup"><b>11760</b></span>
                <span class="fdn"><b>31625100</b></span>
              </div>
              <span class="equal"><b>≈</b></span>
              <span class="result"><b>0.000372</b></span>
            </td>
          </tr>
          <tr>
            <td class="text-center">
              6ª Categoría
            </td>
            <td class="text-center">
              3
            </td>
            <td class="text-center py-1">
              <div class="fraction">
                <span class="fup"><b>105840</b></span>
                <span class="fdn"><b>31625100</b></span>
              </div>
              <span class="equal"><b>≈</b></span>
              <span class="result"><b>0.0033</b></span>
            </td>
          </tr>
          <tr>
            <td class="text-center">
              7ª Categoría
            </td>
            <td class="text-center">
              2 + Número Clave
            </td>
            <td class="text-center py-1">
              <div class="fraction">
                <span class="fup"><b>184240</b></span>
                <span class="fdn"><b>31625100</b></span>
              </div>
              <span class="equal"><b>≈</b></span>
              <span class="result"><b>0.0058</b></span>
            </td>
          </tr>
          <tr>
            <td class="text-center">
              8ª Categoría
            </td>
            <td class="text-center">
              2
            </td>
            <td class="text-center py-1">
              <div class="fraction">
                <span class="fup"><b>1658160</b></span>
                <span class="fdn"><b>31625100</b></span>
              </div>
              <span class="equal"><b>≈</b></span>
              <span class="result"><b>0.052</b></span>
            </td>
          </tr>
          <tr>
            <td class="text-center">
              Reintegro
            </td>
            <td class="text-center">
              Número Clave
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
  <v-card-title id="sources" :class="{ 'red--text text--darken-2': true }">
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
            href="http://www.estadisticaparatodos.es/taller/loterias/gordo.html" 
            target="_blank" 
            title="Estadística para todos" 
            rel="nofollow"
          >
            http://www.estadisticaparatodos.es/taller/loterias/gordo.html
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
            href="https://www.combinacionganadora.com/elgordo/probabilidades" 
            target="_blank" 
            title="Combinación ganadora" 
            rel="nofollow"
          >
            https://www.combinacionganadora.com/elgordo/probabilidades
          </a>
        </v-list-item-title>
        <v-list-item-subtitle>Combinación ganadora</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card-text>
</v-card>

<advertisement></advertisement>

---
title: '⚽ Quiniela | Probabilidades y premios de la quiniela'
metas: 
  description: 'Información sobre las categorías de premios de la quiniela. ☑️ Se incluyen los cálculos de las probabilidades de acertar.'
  keywords: 'quiniela, probabilidades, cálculos, categorías, premios'
  canonical_url: 'https://www.pronostigol.es/quiniela'
  og_title: '⚽ Quiniela | Probabilidades y premios de la quiniela'
  og_type: 'website'
  og_image: 'https://www.pronostigol.es/images/logo-quiniela.png'
  og_url: 'https://www.pronostigol.es/quiniela'
  og_description: 'Información sobre las categorías de premios de la quiniela. ☑️ Se incluyen los cálculos de las probabilidades de acertar.'
  og_site_name: 'Pronostigol'
  twitter_site: '@pronostigolesp'
  twitter_card: 'summary_large_image'
  twitter_image: 'https://www.pronostigol.es/images/logo-quiniela.png'
  twitter_title: '⚽ Quiniela | Probabilidades y premios de la quiniela'
  twitter_description: 'Información sobre las categorías de premios de la quiniela. ☑️ Se incluyen los cálculos de las probabilidades de acertar.'
published: true
---

<advertisement></advertisement>

<v-card elevation="2" :class="{ 'my-5': true }">
  <v-card-title id="introduction" :class="{ 'blue--text': true }">🚀 Introducción</v-card-title>
  <v-card-text>
    En esta sección encontrarás multitud de <nuxt-link to="/quiniela/estadisticas" title="Estadísticas">estadísticas</nuxt-link> asociadas a la <b>Quiniela</b> de España. Podrás conocer los resultados más repetidos, el histórico de <nuxt-link to="/quiniela/sorteos" title="Sorteos">sorteos</nuxt-link>, los equipos de fútbol que ganan con más frecuencia y una amplia gama de consultas a realizar. De este modo te será mucho más sencillo realizar tus quinielas.
  </v-card-text>
  <v-card-title id="probabilities" :class="{ 'blue--text': true }">
    🎲 Probabilidades
  </v-card-title>
  <v-card-text>
    <p>
      Por todos es sabido que la <b>Quiniela</b> consiste en acertar los 15 resultados de los partidos de fútbol propuestos. Para las 14 primeras filas hay que acertar el ganador del partido con los siguientes símbolos: <b>1</b> si el ganador es el equipo local, <b>X</b> si se produce un empate y <b>2</b> si la victoria es del equipo visitante.
    </p>
    <p>
      Para saber la probabilidad de acierto de cada partido usaremos la <b>Regla de Laplace</b>, que dice lo siguiente:
    </p>
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
    <p>
      Generalmente, en la <b>Quiniela</b> se obtiene premio cuando se aciertan, al menos, 10 resultados de los 15 pronosticables. Para más info consultar el <b>Capítulo Cuarto. DISTRIBUCIÓN DE FONDOS PARA PREMIOS</b> en el siguiente <a href="https://www.loteriasyapuestas.es/f/loterias/documentos/normativa/normativa%20SELAE/NORMAS_DE_LA_QUINIELA%20_A%C3%91O_2017.pdf" target="_blank" title="Normas de Quiniela" rel="nofollow">enlace</a>.
    </p>
  </v-card-text>
  <v-card-title id="probability-ten-results" :class="{ 'blue--text': true }">
    🔸 Probabilidad de acertar 10 partidos en la Quiniela
  </v-card-title>
  <v-card-text>
    <p>
      En esta primera categoría tenemos que acertar 10 partidos y fallar los otros 4. De momento no nos importa el pleno al 15, puesto que éste sólo interviene cuando se aciertan los 14.
    </p>
    <p>
      Dado que en cualquiera de las 14 primeras filas hay 3 posibles resultados pero sólo 1 será el correcto, la probabilidad de cada fila será <b>1/3</b>, mientras que la probabilidad de fallar una fila será <b>2/3</b>. Si aplicamos este criterio para calcular la probabilidad de obtener 10 aciertos tenemos que:
    </p>
    <div class="text-center my-5">
      <span>Probabilidad (10 aciertos)</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">3</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">3</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">3</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">3</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">3</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">3</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">3</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">3</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">3</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">3</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">2</span>
        <span class="fdn">3</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">2</span>
        <span class="fdn">3</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">2</span>
        <span class="fdn">3</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">2</span>
        <span class="fdn">3</span>
      </div>
    </div>
    <div class="text-center my-5">
      <span>Probabilidad (10 aciertos)</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">3 <sup>10</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">2 <sup>4</sup></span>
        <span class="fdn">3 <sup>4</sup></span>
      </div>
    </div>
    <p>
      Sin embargo, con este planteamiento estamos suponiendo que sólo nos vale 1 apuesta concreta, ya que el orden de los resultados importa. Pero si no nos importa en qué orden obtengamos los N aciertos podemos ampliar el resultado contemplando las combinaciones de dichos aciertos en el resultado:
    </p>
    <div class="text-center my-5">
      <span>Probabilidad (10 aciertos)</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">3 <sup>10</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">2 <sup>4</sup></span>
        <span class="fdn">3 <sup>4</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="combination">C
        <span class="combination-indexes"><sup>10</sup><sub>14</sub></span>
      </div>
    </div>
    <p>
      Podemos generalizar estos cálculos de modo que nos valgan para todas las categorías del siguiente modo:
    </p>
    <div class="text-center my-5">
      <span>Probabilidad (N aciertos)</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">3 <sup>N</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">2 <sup>14 - N</sup></span>
        <span class="fdn">3 <sup>14 - N</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="combination">C<span class="combination-indexes"><sup>N</sup><sub>14</sub></span></div>
    </div>
    <p>
      Llegados a este punto podemos calcular la probabilidad de obtener 10 aciertos en la <b>Quiniela</b> sustituyendo en la fórmula anterior la variable N por 10:
    </p>
    <div class="text-center my-5">
      <span>Probabilidad (10 aciertos)</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">3 <sup>10</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">2 <sup>14 - 10</sup></span>
        <span class="fdn">3 <sup>14 - 10</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="combination">C<span class="combination-indexes"><sup>10</sup><sub>14</sub></span></div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">3 <sup>10</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">2 <sup>4</sup></span>
        <span class="fdn">3 <sup>4</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">14!</span>
        <span class="fdn">10! × 4!</span>
      </div>
    </div>
    <div class="text-center my-5">
      <span>Probabilidad (10 aciertos)</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">2 <sup>4</sup></span>
        <span class="fdn">3 <sup>14</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">14 × 13 × <del>12</del> × 11 × <del>10!</del></span>
        <span class="fdn"><del>10!</del> × <del>4</del> × <del>3</del> × 2</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">2 <sup>4</sup></span>
        <span class="fdn">3 <sup>14</sup></span>
      </div>
      <span class="multiplication">×</span>
      <span>7 × 13 × 11</span>
    </div>
    <div class="text-center my-5">
      <span>
        <b>Probabilidad (10 aciertos)</b>
      </span>
      <span class="equal">
        <b>=</b>
      </span>
      <div class="fraction">
        <span class="fup">
          <b>2 <sup>4</sup></b>
        </span>
        <span class="fdn">
          <b>3 <sup>14</sup></b>
        </span>
      </div>
      <span class="multiplication">×</span>
      <span>
        <b>1001</b>
      </span>
    </div>
  </v-card-text>
  <v-card-title id="probability-eleven-results" :class="{ 'blue--text': true }">
    🔸 Probabilidad de acertar 11 partidos en la Quiniela
  </v-card-title>
  <v-card-text>
    <p>
      Para calcular la probabilidad de acertar 11 resultados en la <b>Quiniela</b> tenemos que sustituir la variable N de la fórmula con el valor 11. Hecho esto tenemos:
    </p>
    <div class="text-center my-5">
      <span>Probabilidad (11 aciertos)</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">3 <sup>11</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">2 <sup>14 - 11</sup></span>
        <span class="fdn">3 <sup>14 - 11</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="combination">C<span class="combination-indexes"><sup>11</sup><sub>14</sub></span></div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">3 <sup>11</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">2 <sup>3</sup></span>
        <span class="fdn">3 <sup>3</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">14!</span>
        <span class="fdn">11! × 3!</span>
      </div>
    </div>
    <div class="text-center my-5">
      <span>Probabilidad (11 aciertos)</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">2 <sup>3</sup></span>
        <span class="fdn">3 <sup>14</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">14 × 13 × 12 × <del>11!</del></span>
        <span class="fdn"><del>11!</del> × 3 × 2</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">2 <sup>3</sup></span>
        <span class="fdn">3 <sup>14</sup></span>
      </div>
      <span class="multiplication">×</span>
      <span>14 × 13 × 2</span>
    </div>
    <div class="text-center my-5">
      <span>
        <b>Probabilidad (11 aciertos)</b>
      </span>
      <span class="equal">
        <b>=</b>
      </span>
      <div class="fraction">
        <span class="fup">
          <b>2 <sup>3</sup></b>
        </span>
        <span class="fdn">
          <b>3 <sup>14</sup></b>
        </span>
      </div>
      <span class="multiplication">×</span>
      <span>
        <b>364</b>
      </span>
    </div>
  </v-card-text>
  <v-card-title id="probability-twelve-results" :class="{ 'blue--text': true }">
    🔸 Probabilidad de acertar 12 partidos en la Quiniela
  </v-card-title>
  <v-card-text>
    <p>
      Si queremos calcular la probabilidad de acertar 12 resultados en la <b>Quiniela</b> tenemos que sustituir la variable N de la fórmula con el valor 12. Hecho esto tenemos:
    </p>
    <div class="text-center my-5">
      <span>Probabilidad (12 aciertos)</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">3 <sup>12</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">2 <sup>14 - 12</sup></span>
        <span class="fdn">3 <sup>14 - 12</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="combination">C<span class="combination-indexes"><sup>12</sup><sub>14</sub></span></div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">3 <sup>12</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">2 <sup>2</sup></span>
        <span class="fdn">3 <sup>2</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">14!</span>
        <span class="fdn">12! × 2!</span>
      </div>
    </div>
    <div class="text-center my-5">
      <span>Probabilidad (12 aciertos)</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">2 <sup>2</sup></span>
        <span class="fdn">3 <sup>14</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">14 × 13 × <del>12!</del></span>
        <span class="fdn"><del>12!</del> × 2</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">2 <sup>2</sup></span>
        <span class="fdn">3 <sup>14</sup></span>
      </div>
      <span class="multiplication">×</span>
      <span>7 × 13</span>
    </div>
    <div class="text-center my-5">
      <span>
        <b>Probabilidad (12 aciertos)</b>
      </span>
      <span class="equal">
        <b>=</b>
      </span>
      <div class="fraction">
        <span class="fup">
          <b>2 <sup>2</sup></b>
        </span>
        <span class="fdn">
          <b>3 <sup>14</sup></b>
        </span>
      </div>
      <span class="multiplication">×</span>
      <span>
        <b>91</b>
      </span>
    </div>
  </v-card-text>
  <v-card-title id="probability-thirteen-results" :class="{ 'blue--text': true }">
    🔸 Probabilidad de acertar 13 partidos en la Quiniela
  </v-card-title>
  <v-card-text>
    <p>
      A continuación vamos a calcular la probabilidad de acertar 13 resultados en la <b>Quiniela</b>. Para ello tenemos que sustituir la variable N de la fórmula con el valor 13:
    </p>
    <div class="text-center my-5">
      <span>Probabilidad (13 aciertos)</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">3 <sup>13</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">2 <sup>14 - 13</sup></span>
        <span class="fdn">3 <sup>14 - 13</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="combination">C<span class="combination-indexes"><sup>13</sup><sub>14</sub></span></div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">3 <sup>13</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">2</span>
        <span class="fdn">3</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">14!</span>
        <span class="fdn">13! × 1</span>
      </div>
    </div>
    <div class="text-center my-5">
      <span>Probabilidad (13 aciertos)</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">2</span>
        <span class="fdn">3 <sup>14</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">14 × <del>13!</del></span>
        <span class="fdn"><del>13!</del></span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">2</span>
        <span class="fdn">3 <sup>14</sup></span>
      </div>
      <span class="multiplication">×</span>
      <span>14</span>
    </div>
    <div class="text-center my-5">
      <span>
        <b>Probabilidad (13 aciertos)</b>
      </span>
      <span class="equal">
        <b>=</b>
      </span>
      <div class="fraction">
        <span class="fup">
          <b>2</b>
        </span>
        <span class="fdn">
          <b>3 <sup>14</sup></b>
        </span>
      </div>
      <span class="multiplication">×</span>
      <span>
        <b>14</b>
      </span>
    </div>
  </v-card-text>
  <v-card-title id="probability-fourteen-results" :class="{ 'blue--text': true }">
    🔸 Probabilidad de acertar 14 partidos en la Quiniela
  </v-card-title>
  <v-card-text>
    <p>
      Para cerrar este círculo vamos a calcular la probabilidad de acertar 14 resultados en la <b>Quiniela</b>. Una vez más, sólo tenemos que reemplazar la variable N de la fórmula con el valor 14. Cuando la hagamos tendremos que:
    </p>
    <div class="text-center my-5">
      <span>Probabilidad (14 aciertos)</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">3 <sup>14</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">2 <sup>14 - 14</sup></span>
        <span class="fdn">3 <sup>14 - 14</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="combination">C<span class="combination-indexes"><sup>14</sup><sub>14</sub></span></div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">3 <sup>14</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">2 <sup>0</sup></span>
        <span class="fdn">3 <sup>0</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup"><del>14!</del></span>
        <span class="fdn"><del>14!</del></span>
      </div>
    </div>
    <div class="text-center my-5">
      <span>Probabilidad (14 aciertos)</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">3 <sup>14</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">1</span>
      </div>
      <span class="multiplication">×</span>
      <span>1</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">3 <sup>14</sup></span>
      </div>
    </div>
    <div class="text-center my-5">
      <span>
        <b>Probabilidad (14 aciertos)</b>
      </span>
      <span class="equal">
        <b>=</b>
      </span>
      <div class="fraction">
        <span class="fup">
          <b>1</b>
        </span>
        <span class="fdn">
          <b>3 <sup>14</sup></b>
        </span>
      </div>
    </div>
  </v-card-text>
  <v-card-title id="probability-special-result" :class="{ 'blue--text': true }">
    🔸 Probabilidad de acertar el pleno al quince de la Quiniela
  </v-card-title>
  <v-card-text>
    <p>
      Desde la temporada 2013-2014, el pleno al 15 vio modificado su formato adoptando el mismo que el del <a href="https://www.loteriasyapuestas.es/es/el-quinigol" target="_blank" title="Quinigol" rel="nofollow">Quinigol</a>. En este formato hay que acertar los goles de cada equipo, de modo que en el caso de 3 ó más goles sólo es necesario indicar el signo <b>M</b>. Por ejemplo, si el resultado del partido situado en el pleno al 15 es 4-2, el resultado de dicha fila sería <b>M-2</b>.
    </p>
    <p>
      Los posibles signos para los 2 partidos del pleno son: <b>0</b>, <b>1</b>, <b>2</b> y <b>M</b>. Por tanto, la probabilidad de acertar el pleno es:
    </p>
    <div class="text-center my-5">
      <span>
        <b>Probabilidad (Pleno al 15) =</b>
      </span>
      <div class="fraction">
        <span class="fup"><b>1</b></span>
        <span class="fdn"><b>4 (resultados posibles)<sup>2(partidos)</sup></b></span>
      </div>
      <span>
        <b>=</b>
      </span>
      <div class="fraction">
        <span class="fup"><b>1</b></span>
        <span class="fdn"><b>16</b></span>
      </div>
      <span>
        <b>= 0.0625</b>
      </span>
    </div>
  </v-card-text>
  <v-card-title id="probability-fourteen-results-and-special-result" :class="{ 'blue--text': true }">
    🔸 Probabilidad de acertar la Quiniela
  </v-card-title>
  <v-card-text>
    <p>
      Para calcular la probabilidad de acertar la <b>Quiniela</b> tenemos que, ahora sí, contemplar el resultado del pleno al quince. Tenemos que partir de la fórmula inicial y multiplicar las probabilidades de acertar por separado los 2 signos del pleno.
    </p>
    <div class="text-center my-5">
      <span>Probabilidad (15 aciertos)</span>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">3 <sup>14</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">4</span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">4</span>
      </div>
      <span class="equal">=</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">3 <sup>14</sup></span>
      </div>
      <span class="multiplication">×</span>
      <div class="fraction">
        <span class="fup">1</span>
        <span class="fdn">4 <sup>2</sup></span>
      </div>
    </div>
    <div class="text-center my-5">
      <span>
        <b>Probabilidad (15 aciertos)</b>
      </span>
      <span class="equal">
        <b>=</b>
      </span>
      <div class="fraction">
        <span class="fup">
          <b>1</b>
        </span>
        <span class="fdn">
          <b>3 <sup>14</sup></b>
        </span>
      </div>
      <span class="multiplication">
        <b>×</b>
      </span>
      <div class="fraction">
        <span class="fup">
          <b>1</b>
        </span>
        <span class="fdn">
          <b>16</b>
        </span>
      </div>
    </div>
  </v-card-text>
  <v-card-title id="probability-summary" :class="{ 'blue--text': true }">
    🔸 Resumen de probabilidades de la Quiniela por categoría
  </v-card-title>
  <v-card-text>
    <p>
      Una vez que hemos realizado todos los planteamientos tan sólo tenemos que resolver de forma exacta las fracciones para determinar la probabilidad de cada categoría:
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
              Especial
            </td>
            <td class="text-center">
              14 + Pleno al 15
            </td>
            <td class="text-center py-1">
              <div class="fraction">
                <span class="fup"><b>1</b></span>
                <span class="fdn"><b>3 <sup>14</sup></b></span>
              </div>
              <span class="multiplication"><b>×</b></span>
              <div class="fraction">
                <span class="fup"><b>1</b></span>
                <span class="fdn"><b>4<sup>2</sup></b></span>
              </div>
              <span class="equal"><b>=</b></span>
              <div class="fraction">
                <span class="fup"><b>1</b></span>
                <span class="fdn"><b>4782969</b></span>
              </div>
              <span class="multiplication"><b>×</b></span>
              <div class="fraction">
                <span class="fup"><b>1</b></span>
                <span class="fdn"><b>16</b></span>
              </div>
              <span class="equal"><b>=</b></span>
              <div class="fraction">
                <span class="fup"><b>1</b></span>
                <span class="fdn"><b>76527504</b></span>
              </div>
              <span class="equal"><b>≈</b></span>
              <span><b>0.000000013</b></span>
            </td>
          </tr>
          <tr>
            <td class="text-center">
              1ª Categoría
            </td>
            <td class="text-center">
              14
            </td>
            <td class="text-center py-1">
              <div class="fraction">
                <span class="fup"><b>1</b></span>
                <span class="fdn"><b>3 <sup>14</sup></b></span>
              </div>
              <span class="equal"><b>=</b></span>
              <div class="fraction">
                <span class="fup"><b>1</b></span>
                <span class="fdn"><b>4782969</b></span>
              </div>
              <span class="equal"><b>≈</b></span>
              <span><b>0.0000002</b></span>
            </td>
          </tr>
          <tr>
            <td class="text-center">
              2ª Categoría
            </td>
            <td class="text-center">
              13
            </td>
            <td class="text-center py-1">
              <div class="fraction">
                <span class="fup"><b>2</b></span>
                <span class="fdn"><b>3 <sup>14</sup></b></span>
              </div>
              <span class="multiplication"><b>×</b></span>
              <span><b>14</b></span>
              <span class="equal"><b>=</b></span>
              <div class="fraction">
                <span class="fup"><b>2</b></span>
                <span class="fdn"><b>4782969</b></span>
              </div>
              <span class="multiplication"><b>×</b></span>
              <span><b>14</b></span>
              <span class="equal"><b>≈</b></span>
              <span><b>0.0000059</b></span>
            </td>
          </tr>
          <tr>
            <td class="text-center">
              3ª Categoría
            </td>
            <td class="text-center">
              12
            </td>
            <td class="text-center py-1">
              <div class="fraction">
                <span class="fup"><b>2 <sup>2</sup></b></span>
                <span class="fdn"><b>3 <sup>14</sup></b></span>
              </div>
              <span class="multiplication"><b>×</b></span>
              <span><b>91</b></span>
              <span class="equal"><b>=</b></span>
              <div class="fraction">
                <span class="fup"><b>4</b></span>
                <span class="fdn"><b>4782969</b></span>
              </div>
              <span class="multiplication"><b>×</b></span>
              <span><b>91</b></span>
              <span class="equal"><b>≈</b></span>
              <span><b>0.000076</b></span>
            </td>
          </tr>
          <tr>
            <td class="text-center">
              4ª Categoría
            </td>
            <td class="text-center">
              11
            </td>
            <td class="text-center py-1">
              <div class="fraction">
                <span class="fup"><b>2 <sup>3</sup></b></span>
                <span class="fdn"><b>3 <sup>14</sup></b></span>
              </div>
              <span class="multiplication"><b>×</b></span>
              <span><b>364</b></span>
              <span class="equal"><b>=</b></span>
              <div class="fraction">
                <span class="fup"><b>8</b></span>
                <span class="fdn"><b>4782969</b></span>
              </div>
              <span class="multiplication"><b>×</b></span>
              <span><b>364</b></span>
              <span class="equal"><b>≈</b></span>
              <span><b>0.00061</b></span>
            </td>
          </tr>
          <tr>
            <td class="text-center">
              5ª Categoría
            </td>
            <td class="text-center">
              10
            </td>
            <td class="text-center py-1">
              <div class="fraction">
                <span class="fup"><b>2 <sup>4</sup></b></span>
                <span class="fdn"><b>3 <sup>14</sup></b></span>
              </div>
              <span class="multiplication"><b>×</b></span>
              <span><b>1001</b></span>
              <span class="equal"><b>=</b></span>
              <div class="fraction">
                <span class="fup"><b>16</b></span>
                <span class="fdn"><b>4782969</b></span>
              </div>
              <span class="multiplication"><b>×</b></span>
              <span><b>1001</b></span>
              <span class="equal"><b>≈</b></span>
              <span><b>0.0033</b></span>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card-text>
  <v-card-title id="sources" :class="{ 'blue--text': true }">
    📚 Fuentes
  </v-card-title>
  <v-card-text>
    <p>
      Para la redacción de esta página nos hemos apoyado en la información publicada en otras webs interesantes. Entre ellas destacamos las siguientes:
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
            href="https://www.pdcahome.com/5116/es-rentable-jugar-a-la-quiniela-probabilidades-de-ganar" 
            target="_blank" 
            title="PCDA Home"
            rel="nofollow"
          >
            https://www.pdcahome.com/5116/es-rentable-jugar-a-la-quiniela-probabilidades-de-ganar
          </a>
        </v-list-item-title>
        <v-list-item-subtitle>PCDA Home</v-list-item-subtitle>
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
            href="http://www.estadisticaparatodos.es/taller/loterias/quinielas14.html" 
            target="_blank" 
            title="Estadísticas para todos"
            rel="nofollow"
          >
            http://www.estadisticaparatodos.es/taller/loterias/quinielas14.html
          </a>
        </v-list-item-title>
        <v-list-item-subtitle>Estadísticas para todos</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <p class="mt-3">
      También hay que destacar la fuente de la que hemos tomado la implementación de las fracciones matemáticas en HTML. Se trata de la siguiente página:
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
            href="https://www.periodni.com/es/ecuaciones_matematicas_y_quimicas_en_la_web.html" 
            target="_blank" 
            title="www.periodni.com"
            rel="nofollow"
          >
            https://www.periodni.com/es/ecuaciones_matematicas_y_quimicas_en_la_web.html
          </a>
        </v-list-item-title>
        <v-list-item-subtitle>www.periodni.com</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card-text>
</v-card>

<advertisement></advertisement>

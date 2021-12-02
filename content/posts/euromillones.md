---
title: '🌟 Euromillones | Probabilidades y premios de Euromillones'
metas: 
  description: 'Información sobre las categorías de premios de Euromillones. ☑️ Se incluyen los cálculos de las probabilidades de acertar.'
  keywords: 'euromillones, probabilidades, cálculos, categorías, premios'
  canonical_url: 'https://www.pronostigol.es/euromillones'
  og_title: '🌟 Euromillones | Probabilidades y premios de Euromillones'
  og_type: 'website'
  og_image: 'https://www.pronostigol.es/images/logo-euromillones.png'
  og_url: 'https://www.pronostigol.es/euromillones'
  og_description: 'Información sobre las categorías de premios de Euromillones. ☑️ Se incluyen los cálculos de las probabilidades de acertar.'
  og_site_name: 'Primitiva'
  twitter_site: '@pronostigolesp'
  twitter_card: 'summary_large_image'
  twitter_image: 'https://www.pronostigol.es/images/logo-euromillones.png'
  twitter_title: '🌟 Euromillones | Probabilidades y premios de Euromillones'
  twitter_description: 'Información sobre las categorías de premios de Euromillones. ☑️ Se incluyen los cálculos de las probabilidades de acertar.'
published: true
---

<advertisement></advertisement>

## 🚀 Introduccion

En esta sección encontrarás multitud de <nuxt-link to="/euromillones/estadisticas" title="Estadísticas">estadísticas</nuxt-link> asociadas al sorteo de <b>Euromillones</b>. Podrás conocer los resultados más repetidos, el histórico de <nuxt-link to="/euromillones/sorteos" title="Sorteos">sorteos</nuxt-link>, las estrellas que aparecen con más frecuencia y una amplia gama de consultas a realizar. De este modo te será mucho más sencillo realizar tus apuestas.

## 🎲 Probabilidades

El formato de <b>Euromillones</b> es algo similar al de <nuxt-link to="/gordo" title="El Gordo de la Primitiva">El Gordo de la Primitiva</nuxt-link>, con la diferencia de que no existe número clave.

En el caso de <b>Euromillones</b> destaca la existencia de las estrellas, de las cuales aparecen 2 en cada resultado, añadiendo por tanto muchas más categorías de premios. Sin embargo, acertar las estrellas no implica ningún reintegro de las apuestas realizadas.

Al igual que en el resto de sorteos haremos uso de la <b>Regla de Laplace</b> para determinar la probabilidad de cada una de las categorías:

<div class="text-center my-5">
  <span><b>Probabilidad</b></span>
  <span class="equal"><b>=</b></span>
  <div class="fraction">
    <span class="fup"><b>Casos favorables</b></span>
    <span class="fdn"><b>Casos posibles</b></span>
  </div>
</div>

Es posible consultar el detalle de las categorías de premios de <b>Euromillones</b> en el siguiente <a href="https://www.loteriasyapuestas.es/es/euromillones/como-se-juega/como-jugar-a-euromillones" target="_blank" title="Normas de Euromillones" rel="nofollow">enlace</a>.

Recurriremos nuevamente a la combinatoria. Como se explica en las páginas principales de cada sección de esta web, la fórmula para saber cuántas combinaciones de <b>m</b> elementos tomados de <b>n</b> en <b>n</b> elementos es:

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

Dado que en <b>Euromillones</b> hay 50 números y 12 estrellas posibles aunque el resultado estará conformado por 5 números y 2 estrellas, el cálculo sería el siguiente:

<div class="text-center my-5">
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>5</sup>
      <sub>50</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>2</sup>
      <sub>12</sub>
    </span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">50!</span>
    <span class="fdn">5! × (50 - 5)!</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">12!</span>
    <span class="fdn">2! × (12 - 2)!</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">50!</span>
    <span class="fdn">5! × 45!</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">12!</span>
    <span class="fdn">2! × 10!</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">50 × 49 × 48 × 47 × 46 × <del>45!</del></span>
    <span class="fdn">5 × 4 × 3 × 2 × <del>45!</del></span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">12 × 11 × <del>10!</del></span>
    <span class="fdn">2 × <del>10!</del></span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">33561158400</span>
    <span class="fdn">240</span>
  </div>
</div>

En <b>Euromillones</b> hay casi <b>140 millones</b> de combinaciones posibles de 50 números tomados en grupos de 5 y 12 estrellas tomadas de 2 en 2.

### 🔸 Probabilidad de acertar 1 numero y las 2 estrellas en Euromillones

Del mismo modo que hemos hecho en el resto de secciones, realizaremos un planteamiento inicial teniendo en cuenta las restricciones vinculadas a este caso y, posteriormente, lo iremos modificando para calcular cada probabilidad. Para este caso inicial, debemos imponer que sólo acertemos un número de los 5 que se extraerán, y que sólo acertemos 1 de las 2 estrellas.

<div class="text-center my-5">
  <span>Probabilidad (1 acierto y las 2 estrellas)</span>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">5</span>
    <span class="fdn">50</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">45</span>
    <span class="fdn">49</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">44</span>
    <span class="fdn">48</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">43</span>
    <span class="fdn">47</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">42</span>
    <span class="fdn">46</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">2</span>
    <span class="fdn">12</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">1</span>
    <span class="fdn">11</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">35758800</span>
    <span class="fdn">33561158400</span>
  </div>
</div>

Como en el resto de juegos, hay que tener en mente que no sólo nos vale una combinación, sino que nos vale cualquiera que contenga una de las combinaciones que tenga 1 de los 5 números. Y del mismo modo esto aplica también a las estrellas, aunque en este caso sólo nos valga acertar las 2. Así pues, para obtener la probabilidad real habrá que multiplicar el resultado anterior por la combinación de las 5 bolas que significan un acierto tomadas de 1 en 1, pero también hay que multiplicarlo por la combinación de 2 estrellas tomadas de 2 en 2:

<div class="text-center my-5">
  <span>Probabilidad (1 acierto y las 2 estrellas)</span>
  <span class="equal">=</span>
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>1</sup>
      <sub>5</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>2</sup>
      <sub>2</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">35758800</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <span>5</span>
  <span class="multiplication">×</span>
  <span>1</span>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">35758800</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">178794000</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup"><b>744975</b></span>
    <span class="fdn"><b>139838160</b></span>
  </div>
</div>

### 🔸 Probabilidad de acertar 2 numeros en Euromillones

En este caso tenemos que imponer que sean 2 los aciertos de entre los 5 números, pero no debemos acertar ninguna de las 2 estrellas.

<div class="text-center v-margin">
  <span>Probabilidad (2 aciertos)</span>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">5</span>
    <span class="fdn">50</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">4</span>
    <span class="fdn">49</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">45</span>
    <span class="fdn">48</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">44</span>
    <span class="fdn">47</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">43</span>
    <span class="fdn">46</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">10</span>
    <span class="fdn">12</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">9</span>
    <span class="fdn">11</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">153252000</span>
    <span class="fdn">33561158400</span>
  </div>
</div>

Nuevamente, puesto que no nos importa qué números sean los acertados dentro de nuestra apuesta, tenemos que contemplar todas las posibles combinaciones de nuestros números. Lo mismo sucede con las estrellas, pero como no debemos acertar ninguna veremos que el orden no afecta al resultado.

<div class="text-center my-5">
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
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>0</sup>
      <sub>2</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">153252000</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <span>10</span>
  <span class="multiplication">×</span>
  <span>1</span>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">153252000</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">1532520000</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup"><b>6385500</b></span>
    <span class="fdn"><b>139838160</b></span>
  </div>
</div>

### 🔸 Probabilidad de acertar 2 numeros y 1 estrella en Euromillones

Para calcular la probabilidad de acertar 2 números y una estrella sólo tenemos que tomar como referencia el caso anterior e imponer el acierto de una de las 2 estrellas. Así pues los cálculos serían los que siguen:

<div class="text-center my-5">
  <span>Probabilidad (2 aciertos y 1 estrella)</span>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">5</span>
    <span class="fdn">50</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">4</span>
    <span class="fdn">49</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">45</span>
    <span class="fdn">48</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">44</span>
    <span class="fdn">47</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">43</span>
    <span class="fdn">46</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">2</span>
    <span class="fdn">12</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">10</span>
    <span class="fdn">11</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">34056000</span>
    <span class="fdn">33561158400</span>
  </div>
</div>

Como ya nos podemos imaginar, no nos importa el orden en el que acertemos los números. Por tanto, deberemos multiplicar las respectivas combinaciones de números y estrellas:

<div class="text-center my-5">
  <span>Probabilidad (2 aciertos y 1 estrella)</span>
  <span class="equal">=</span>
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>2</sup>
      <sub>5</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>1</sup>
      <sub>2</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">34056000</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <span>10</span>
  <span class="multiplication">×</span>
  <span>2</span>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">34056000</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">681120000</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup"><b>2838000</b></span>
    <span class="fdn"><b>139838160</b></span>
  </div>
</div>

### 🔸 Probabilidad de acertar 2 numeros y las 2 estrellas en Euromillones

Para calcular la probabilidad de acertar 2 números y una estrella sólo tenemos que tomar como referencia el caso anterior e imponer el acierto de una de las 2 estrellas. Así pues los cálculos serían los que siguen:

<div class="text-center my-5">
  <span>Probabilidad (2 aciertos y las 2 estrellas)</span>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">5</span>
    <span class="fdn">50</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">4</span>
    <span class="fdn">49</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">45</span>
    <span class="fdn">48</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">44</span>
    <span class="fdn">47</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">43</span>
    <span class="fdn">46</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">2</span>
    <span class="fdn">12</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">1</span>
    <span class="fdn">11</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">3405600</span>
    <span class="fdn">33561158400</span>
  </div>
</div>

Nuevamente tenemos que multiplicar las respectivas combinaciones de números y estrellas, aunque en este caso debamos acertar las 2 estrellas y sólo habrá una combinación posible de aciertos:

<div class="text-center my-5">
  <span>Probabilidad (2 aciertos y las 2 estrellas)</span>
  <span class="equal">=</span>
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>2</sup>
      <sub>5</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>2</sup>
      <sub>2</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">3405600</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <span>10</span>
  <span class="multiplication">×</span>
  <span>1</span>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">3405600</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">34056000</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup"><b>141900</b></span>
    <span class="fdn"><b>139838160</b></span>
  </div>
</div>

### 🔸 Probabilidad de acertar 3 numeros en Euromillones

Una vez más retrocedemos a un planteamiento anterior en el que no debamos acertar ninguna estrella, pero en esta ocasión tendremos que acertar un número más.

<div class="text-center my-5">
  <span>Probabilidad (3 aciertos)</span>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">5</span>
    <span class="fdn">50</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">4</span>
    <span class="fdn">49</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">3</span>
    <span class="fdn">48</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">45</span>
    <span class="fdn">47</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">44</span>
    <span class="fdn">46</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">10</span>
    <span class="fdn">12</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">9</span>
    <span class="fdn">11</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">10692000</span>
    <span class="fdn">33561158400</span>
  </div>
</div>

Como debemos contemplar cualquier combinación en la que varíe el orden de los aciertos, tenemos que multiplicar las respectivas combinaciones de números y estrellas:

<div class="text-center my-5">
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
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>0</sup>
      <sub>2</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">10692000</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <span>10</span>
  <span class="multiplication">×</span>
  <span>1</span>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">10692000</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">106920000</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup"><b>445500</b></span>
    <span class="fdn"><b>139838160</b></span>
  </div>
</div>

### 🔸 Probabilidad de acertar 3 numeros y 1 estrella en Euromillones

Partiendo del caso anterior, tan sólo tenemos que modificar las restricciones de las estrellas, de modo que sea sólo 1 de las 2 la que acertemos:

<div class="text-center my-5">
  <span>Probabilidad (3 aciertos y 1 estrella)</span>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">5</span>
    <span class="fdn">50</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">4</span>
    <span class="fdn">49</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">3</span>
    <span class="fdn">48</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">45</span>
    <span class="fdn">47</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">44</span>
    <span class="fdn">46</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">2</span>
    <span class="fdn">12</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">10</span>
    <span class="fdn">11</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">2376000</span>
    <span class="fdn">33561158400</span>
  </div>
</div>

Como ya nos será familiar, tenemos que multiplicar las respectivas combinaciones de números y estrellas, puesto que no nos importa en qué orden acertemos los números:

<div class="text-center my-5">
  <span>Probabilidad (3 aciertos y 1 estrella)</span>
  <span class="equal">=</span>
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>3</sup>
      <sub>5</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>1</sup>
      <sub>2</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">2376000</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <span>10</span>
  <span class="multiplication">×</span>
  <span>2</span>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">2376000</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">47520000</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup"><b>198000</b></span>
    <span class="fdn"><b>139838160</b></span>
  </div>
</div>

### 🔸 Probabilidad de acertar 3 numeros y las 2 estrellas en Euromillones

Extendiendo el caso anterior, veremos cómo se van reduciendo cada vez más nuestras posibilidades. Si calculamos la probabilidad de acertar 3 números y las 2 estrellas tenemos que:

<div class="text-center my-5">
  <span>Probabilidad (3 aciertos y las 2 estrellas)</span>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">5</span>
    <span class="fdn">50</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">4</span>
    <span class="fdn">49</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">3</span>
    <span class="fdn">48</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">45</span>
    <span class="fdn">47</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">44</span>
    <span class="fdn">46</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">2</span>
    <span class="fdn">12</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">1</span>
    <span class="fdn">11</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">237600</span>
    <span class="fdn">33561158400</span>
  </div>
</div>

Nuevamente procedemos a multiplicar las respectivas combinaciones de números y estrellas para contemplar todas las combinaciones posibles que implicarán un premio en esta categoría:

<div class="text-center my-5">
  <span>Probabilidad (3 aciertos y las 2 estrellas)</span>
  <span class="equal">=</span>
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>3</sup>
      <sub>5</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>2</sup>
      <sub>2</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">237600</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <span>10</span>
  <span class="multiplication">×</span>
  <span>1</span>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">237600</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">2376000</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup"><b>9900</b></span>
    <span class="fdn"><b>139838160</b></span>
  </div>
</div>

### 🔸 Probabilidad de acertar 4 numeros en Euromillones

Seguimos avanzando en las categorías de <b>Euromillones</b>. Vamos a calcular la probabilidad de acertar 4 números de los 5 pero sin acertar ninguna de las 2 estrellas:

<div class="text-center my-5">
  <span>Probabilidad (4 aciertos)</span>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">5</span>
    <span class="fdn">50</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">4</span>
    <span class="fdn">49</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">3</span>
    <span class="fdn">48</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">2</span>
    <span class="fdn">47</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">45</span>
    <span class="fdn">46</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">10</span>
    <span class="fdn">12</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">9</span>
    <span class="fdn">11</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">486000</span>
    <span class="fdn">33561158400</span>
  </div>
</div>

Recordemos que tenemos que multiplicar las combinaciones de los posibles aciertos entre los resultados para, así, contemplar todas las combinaciones al no importarnos el orden en que aparezcan:

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
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>0</sup>
      <sub>2</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">486000</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <span>5</span>
  <span class="multiplication">×</span>
  <span>1</span>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">486000</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">2430000</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup"><b>10125</b></span>
    <span class="fdn"><b>139838160</b></span>
  </div>
</div>

### 🔸 Probabilidad de acertar 4 numeros y 1 estrella en Euromillones

Como era de esperar, para determinar la probabilidad de esta categoría tan sólo tenemos que partir de la anterior y modificar las restricciones de las estrellas:

<div class="text-center my-5">
  <span>Probabilidad (4 aciertos y 1 estrella)</span>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">5</span>
    <span class="fdn">50</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">4</span>
    <span class="fdn">49</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">3</span>
    <span class="fdn">48</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">2</span>
    <span class="fdn">47</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">45</span>
    <span class="fdn">46</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">2</span>
    <span class="fdn">12</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">10</span>
    <span class="fdn">11</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">108000</span>
    <span class="fdn">33561158400</span>
  </div>
</div>

Como es ya habitual tenemos que multiplicar las combinaciones de los posibles aciertos entre los resultados para contemplar todas las combinaciones:

<div class="text-center my-5">
  <span>Probabilidad (4 aciertos y 1 estrella)</span>
  <span class="equal">=</span>
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>4</sup>
      <sub>5</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>1</sup>
      <sub>2</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">108000</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <span>5</span>
  <span class="multiplication">×</span>
  <span>2</span>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">108000</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">1080000</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup"><b>4500</b></span>
    <span class="fdn"><b>139838160</b></span>
  </div>
</div>

### 🔸 Probabilidad de acertar 4 numeros y las 2 estrellas en Euromillones

Para cerrar el grupo de categorías de 4 aciertos entre los números tenemos que calcular la probabilidad de acertar 4 números y, además, las 2 estrellas. Si partimos del caso anterior tan sólo tenemos que modificar la última condición:

<div class="text-center my-5">
  <span>Probabilidad (4 aciertos y las 2 estrellas)</span>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">5</span>
    <span class="fdn">50</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">4</span>
    <span class="fdn">49</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">3</span>
    <span class="fdn">48</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">2</span>
    <span class="fdn">47</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">45</span>
    <span class="fdn">46</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">2</span>
    <span class="fdn">12</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">1</span>
    <span class="fdn">11</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">10800</span>
    <span class="fdn">33561158400</span>
  </div>
</div>

Pero no nos podemos olvidar de multiplicar las combinaciones posibles de aciertos entre los números que forman parte del resultado:

<div class="text-center my-5">
  <span>Probabilidad (4 aciertos y las 2 estrellas)</span>
  <span class="equal">=</span>
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>4</sup>
      <sub>5</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>2</sup>
      <sub>2</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">10800</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <span>5</span>
  <span class="multiplication">×</span>
  <span>1</span>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">10800</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">54000</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup"><b>225</b></span>
    <span class="fdn"><b>139838160</b></span>
  </div>
</div>

### 🔸 Probabilidad de acertar 5 numeros en Euromillones

Nos vamos acercando a la máxima categoría de aciertos en Euromillones. Entramos en el grupo de 5 aciertos, empezando por la categoría en la que no debemos acertar ninguna estrella:

<div class="text-center my-5">
  <span>Probabilidad (5 aciertos)</span>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">5</span>
    <span class="fdn">50</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">4</span>
    <span class="fdn">49</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">3</span>
    <span class="fdn">48</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">2</span>
    <span class="fdn">47</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">1</span>
    <span class="fdn">46</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">10</span>
    <span class="fdn">12</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">9</span>
    <span class="fdn">11</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">10800</span>
    <span class="fdn">33561158400</span>
  </div>
</div>

Como en todos los casos anteriores, debemos contemplar la combinación de aciertos entre los resultados posibles con los números resultantes:

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
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>0</sup>
      <sub>2</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">10800</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <span>1</span>
  <span class="multiplication">×</span>
  <span>1</span>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">10800</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">10800</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup"><b>45</b></span>
    <span class="fdn"><b>139838160</b></span>
  </div>
</div>

### 🔸 Probabilidad de acertar 5 numeros y 1 estrella en Euromillones

Ya casi estamos. Modificando las restricciones de acierto de las estrella tendremos el cálculo de la probabilidad de acertar 5 números y 1 estrella:

<div class="text-center my-5">
  <span>Probabilidad (5 aciertos y 1 estrella)</span>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">5</span>
    <span class="fdn">50</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">4</span>
    <span class="fdn">49</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">3</span>
    <span class="fdn">48</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">2</span>
    <span class="fdn">47</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">1</span>
    <span class="fdn">46</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">2</span>
    <span class="fdn">12</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">10</span>
    <span class="fdn">11</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">2400</span>
    <span class="fdn">33561158400</span>
  </div>
</div>

<div class="text-center my-5">
  <span>Probabilidad (5 aciertos y 1 estrella)</span>
  <span class="equal">=</span>
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>5</sup>
      <sub>5</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>1</sup>
      <sub>2</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">2400</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <span>1</span>
  <span class="multiplication">×</span>
  <span>2</span>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">2400</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">4800</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup"><b>20</b></span>
    <span class="fdn"><b>139838160</b></span>
  </div>
</div>

### 🔸 Probabilidad de acertar en Euromillones

Por fin llegamos al ansiado cálculo de la probabilidad de acertar en <b>Euromillones</b>. Como en el resto de sorteos, en este caso no cabe posibilidad de fallo alguno, ni en los números ni en las estrellas. Veamos qué probabilidad obtenemos:

<div class="text-center my-5">
  <span>Probabilidad (5 aciertos y las 2 estrellas)</span>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">5</span>
    <span class="fdn">50</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">4</span>
    <span class="fdn">49</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">3</span>
    <span class="fdn">48</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">2</span>
    <span class="fdn">47</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">1</span>
    <span class="fdn">46</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">2</span>
    <span class="fdn">12</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">1</span>
    <span class="fdn">11</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">240</span>
    <span class="fdn">33561158400</span>
  </div>
</div>

Para finalizar los cálculos, debemos contemplar nuevamente las combinaciones posibles de aciertos dentro de los resultados obtenidos. Pero como es obvio, al no haber posibilidad de fallos sólo nos valdrá una combinación posible.

<div class="text-center my-5">
  <span>Probabilidad (5 aciertos y las 2 estrellas)</span>
  <span class="equal">=</span>
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>5</sup>
      <sub>5</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>2</sup>
      <sub>2</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">240</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <span>1</span>
  <span class="multiplication">×</span>
  <span>1</span>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">240</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">240</span>
    <span class="fdn">33561158400</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup"><b>1</b></span>
    <span class="fdn"><b>139838160</b></span>
  </div>
</div>

### 🔸 Probabilidad de acertar 1 estrella en Euromillones

De forma adicional vamos a calcular la probabilidad de acertar las estrellas, por separado y conjuntamente. En el caso de que queramos acertar sólo 1 de las 2 estrellas tenemos:

<div class="text-center my-5">
  <span>Probabilidad (1 estrella)</span>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">2</span>
    <span class="fdn">12</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">10</span>
    <span class="fdn">11</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">20</span>
    <span class="fdn">132</span>
  </div>
</div>

Pero una vez más no nos importa el orden en que acertemos alguna estrella. Por tanto, para contemplar todas las posibilidades debemos multiplicar la combinación de estrellas que suponen un acierto.

<div class="text-center my-5">
  <span>Probabilidad (1 estrella)</span>
  <span class="equal">=</span>
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>1</sup>
      <sub>2</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">20</span>
    <span class="fdn">132</span>
  </div>
  <span class="equal">=</span>
  <span>2</span>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">20</span>
    <span class="fdn">132</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">40</span>
    <span class="fdn">132</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup"><b>10</b></span>
    <span class="fdn"><b>33</b></span>
  </div>
</div>

### 🔸 Probabilidad de acertar las 2 estrellas en Euromillones

A continuación calcularemos la probabilidad de acertar las 2 estrellas en un resultado de <b>Euromillones</b>:

<div class="text-center my-5">
  <span>Probabilidad (2 estrellas)</span>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">2</span>
    <span class="fdn">12</span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">1</span>
    <span class="fdn">11</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">2</span>
    <span class="fdn">132</span>
  </div>
</div>

Para cerrar estos cálculos tenemos que multiplicar nuevamente la combinación de estrellas que suponen un acierto tomadas de 2 en 2. Al sólo valernos acertar ambas estrellas, el cálculo realizado hasta ahora no sufrirá variación alguna.

<div class="text-center my-5">
  <span>Probabilidad (2 estrellas)</span>
  <span class="equal">=</span>
  <div class="combination">
    C
    <span class="combination-indexes">
      <sup>2</sup>
      <sub>2</sub>
    </span>
  </div>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">2</span>
    <span class="fdn">132</span>
  </div>
  <span class="equal">=</span>
  <span>1</span>
  <span class="multiplication">×</span>
  <div class="fraction">
    <span class="fup">2</span>
    <span class="fdn">132</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup">2</span>
    <span class="fdn">132</span>
  </div>
  <span class="equal">=</span>
  <div class="fraction">
    <span class="fup"><b>1</b></span>
    <span class="fdn"><b>66</b></span>
  </div>
</div>

<advertisement></advertisement>

### 🔸 Resumen de probabilidades de Euromillones por categoria

Una vez planteados todos los cálculos, ya podemos precisar con más detalle para conocer las probabilidades exactas de cada categoría de premios de <b>Euromillones</b>. Uno puede pensar inicialmente que las categorías están ordenadas de menor a mayor dificultad en el índice de este apartado: nada más lejos de la realidad. Como veremos a continuación, es más probable acertar 4 números que acertar 3 y las 2 estrellas.

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
          5 números y las 2 estrellas
        </td>
        <td class="text-center py-1">
          <div class="fraction">
            <span class="fup"><b>1</b></span>
            <span class="fdn"><b>139838160</b></span>
          </div>
          <span class="equal"><b>≈</b></span>
          <span class="result"><b>0.00000000715</b></span>
        </td>
      </tr>
      <tr>
        <td class="text-center">
          2ª Categoría
        </td>
        <td class="text-center">
          5 números y 1 estrella
        </td>
        <td class="text-center py-1">
          <div class="fraction">
            <span class="fup"><b>20</b></span>
            <span class="fdn"><b>139838160</b></span>
          </div>
          <span class="equal"><b>≈</b></span>
          <span class="result"><b>0.000000143</b></span>
        </td>
      </tr>
      <tr>
        <td class="text-center">
          3ª Categoría
        </td>
        <td class="text-center">
          5 números
        </td>
        <td class="text-center py-1">
          <div class="fraction">
            <span class="fup"><b>45</b></span>
            <span class="fdn"><b>139838160</b></span>
          </div>
          <span class="equal"><b>≈</b></span>
          <span class="result"><b>0.000000322</b></span>
        </td>
      </tr>
      <tr>
        <td class="text-center">
          4ª Categoría
        </td>
        <td class="text-center">
          4 números y las 2 estrellas
        </td>
        <td class="text-center py-1">
          <div class="fraction">
            <span class="fup"><b>225</b></span>
            <span class="fdn"><b>139838160</b></span>
          </div>
          <span class="equal"><b>≈</b></span>
          <span class="result"><b>0.00000161</b></span>
        </td>
      </tr>
      <tr>
        <td class="text-center">
          5ª Categoría
        </td>
        <td class="text-center">
          4 números y 1 estrella
        </td>
        <td class="text-center py-1">
          <div class="fraction">
            <span class="fup"><b>4500</b></span>
            <span class="fdn"><b>139838160</b></span>
          </div>
          <span class="equal"><b>≈</b></span>
          <span class="result"><b>0.0000322</b></span>
        </td>
      </tr>
      <tr>
        <td class="text-center">
          6ª Categoría
        </td>
        <td class="text-center">
          3 números y las 2 estrellas
        </td>
        <td class="text-center py-1">
          <div class="fraction">
            <span class="fup"><b>9900‬</b></span>
            <span class="fdn"><b>139838160</b></span>
          </div>
          <span class="equal"><b>≈</b></span>
          <span class="result"><b>0.0000708</b></span>
        </td>
      </tr>
      <tr>
        <td class="text-center">
          7ª Categoría
        </td>
        <td class="text-center">
          4 números
        </td>
        <td class="text-center py-1">
          <div class="fraction">
            <span class="fup"><b>10125</b></span>
            <span class="fdn"><b>139838160</b></span>
          </div>
          <span class="equal"><b>≈</b></span>
          <span class="result"><b>0.0000724</b></span>
        </td>
      </tr>
      <tr>
        <td class="text-center">
          8ª Categoría
        </td>
        <td class="text-center">
          2 números y las 2 estrellas
        </td>
        <td class="text-center py-1">
          <div class="fraction">
            <span class="fup"><b>141900</b></span>
            <span class="fdn"><b>139838160</b></span>
          </div>
          <span class="equal"><b>≈</b></span>
          <span class="result"><b>0.001</b></span>
        </td>
      </tr>
      <tr>
        <td class="text-center">
          9ª Categoría
        </td>
        <td class="text-center">
          3 números y 1 estrella
        </td>
        <td class="text-center py-1">
          <div class="fraction">
            <span class="fup"><b>198000</b></span>
            <span class="fdn"><b>139838160</b></span>
          </div>
          <span class="equal"><b>≈</b></span>
          <span class="result"><b>0.0014</b></span>
        </td>
      </tr>
      <tr>
        <td class="text-center">
          10ª Categoría
        </td>
        <td class="text-center">
          3 números
        </td>
        <td class="text-center py-1">
          <div class="fraction">
            <span class="fup"><b>445500</b></span>
            <span class="fdn"><b>139838160</b></span>
          </div>
          <span class="equal"><b>≈</b></span>
          <span class="result"><b>0.0032</b></span>
        </td>
      </tr>
      <tr>
        <td class="text-center">
          11ª Categoría
        </td>
        <td class="text-center">
          1 número y las 2 estrellas
        </td>
        <td class="text-center py-1">
          <div class="fraction">
            <span class="fup"><b>744975</b></span>
            <span class="fdn"><b>139838160</b></span>
          </div>
          <span class="equal"><b>≈</b></span>
          <span class="result"><b>0.0053</b></span>
        </td>
      </tr>
      <tr>
        <td class="text-center">
          12ª Categoría
        </td>
        <td class="text-center">
          2 números y 1 estrella
        </td>
        <td class="text-center py-1">
          <div class="fraction">
            <span class="fup"><b>2838000</b></span>
            <span class="fdn"><b>139838160</b></span>
          </div>
          <span class="equal"><b>≈</b></span>
          <span class="result"><b>0.02</b></span>
        </td>
      </tr>
      <tr>
        <td class="text-center">
          13ª Categoría
        </td>
        <td class="text-center">
          2 números
        </td>
        <td class="text-center py-1">
          <div class="fraction">
            <span class="fup"><b>6385500</b></span>
            <span class="fdn"><b>139838160</b></span>
          </div>
          <span class="equal"><b>≈</b></span>
          <span class="result"><b>0.046</b></span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

## 📚 Fuentes

Para la redacción de esta página hemos utilizado información y datos de otras webs que nos han sido de gran utilidad. Por orden de influencia destacamos:

<v-list-item>
  <v-list-item-icon>
    <v-icon color="primary">
      mdi-link-variant
    </v-icon>
  </v-list-item-icon>
  <v-list-item-content>
    <v-list-item-title>
      <a 
        href="http://www.estadisticaparatodos.es/taller/loterias/euromillon.html" 
        target="_blank" 
        title="Estadística para todos" 
        rel="nofollow"
      >
        http://www.estadisticaparatodos.es/taller/loterias/euromillon.html
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
        href="https://www.euromillones.com.es/probabilidades.html" 
        target="_blank" 
        title="Euromillones.com.es" 
        rel="nofollow"
      >
        https://www.euromillones.com.es/probabilidades.html
      </a>
    </v-list-item-title>
    <v-list-item-subtitle>Euromillones.com.es</v-list-item-subtitle>
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
        href="https://www.combinacionganadora.com/euromillones/probabilidades" 
        target="_blank" 
        title="Combinación ganadora" 
        rel="nofollow"
      >
        https://www.combinacionganadora.com/euromillones/probabilidades
      </a>
    </v-list-item-title>
    <v-list-item-subtitle>Combinación ganadora</v-list-item-subtitle>
  </v-list-item-content>
</v-list-item>

También hay que destacar la fuente de la que hemos tomado la implementación de las fracciones matemáticas en HTML. Se trata de la siguiente página:

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

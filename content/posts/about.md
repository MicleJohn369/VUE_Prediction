---
title: 'Acerca de'
metas: 
  description: 'Información sobre el origen y la motivación que llevó a Juan Manuel López Pazos a desarrollar Pronostigol.'
  keywords: 'pronostigol, acerca de, motivacion, origen'
  canonical_url: 'https://www.pronostigol.es/acerca-de'
  og_title: 'Acerca de | PRONOSTIGOL'
  og_type: 'website'
  og_image: 'https://www.pronostigol.es/img/logo-pronostigol.png'
  og_url: 'https://www.pronostigol.es/acerca-de'
  og_description: 'Información sobre el origen y la motivación que llevó a Juan Manuel López Pazos a desarrollar Pronostigol.'
  og_site_name: 'Pronostigol'
  twitter_site: '@pronostigolesp'
  twitter_card: 'summary_large_image'
  twitter_image: 'https://www.pronostigol.es/img/logo-pronostigol.png'
  twitter_title: 'Acerca de | PRONOSTIGOL'
  twitter_description: 'Información sobre el origen y la motivación que llevó a Juan Manuel López Pazos a desarrollar Pronostigol.'
published: true
---

<v-card elevation="2" :class="{ 'my-5': true }">
  <v-card-title id="purpose" :class="{ 'black--text': true }">
    <div class="text-h4">Finalidad</div>
  </v-card-title>
  <v-card-text>
    <p class="text-justify">
      Pronostigol es una aplicación web de acceso libre desarrollada por <a href="http://www.juanmanuellopezpazos.es" title="Web personal de Juan Manuel López Pazos" target="_blank" rel="nofollow">Juan Manuel López Pazos</a>, cuyo único fin es poner en manos de sus visitantes una amplia gama de herramientas para consultar estadísticas, relacionadas con distintos juegos de Loterías y Apuestas del Estado. En la actualidad, los juegos contemplados son: <nuxt-link to="/quiniela" class="blue--text">Quiniela</nuxt-link>, <nuxt-link to="/bonoloto" class="black--text">Bonoloto</nuxt-link>, <nuxt-link to="/primitiva" class="green--text text--darken-2">Primitiva</nuxt-link>, <nuxt-link to="/gordo" class="red--text text--darken-2">Gordo de la Primitiva</nuxt-link> y <nuxt-link to="/euromillones" class="purple--text text--darken-4">Euromillones</nuxt-link>.
    </p>
  </v-card-text>
  <v-card-title id="motivation" :class="{ 'black--text': true }">
    <div class="text-h4">Motivación</div>
  </v-card-title>
  <v-card-text>
    <p class="text-justify">
      <v-icon>mdi-format-quote-open</v-icon><cite>Dada mi pasión por el fútbol y alto interés en la Quiniela, decidí desarrollar una aplicación web que permitiera realizar todo tipo de consultas en base a equipos, competiciones y temporadas, facilitando así la realización de apuestas con un criterio más objetivo. Las tecnologías iniciales de la aplicación web fueron Java y Spring Framework para el Servidor, JSP y Bootstrap para las vistas y MySQL como Base de Datos.</cite><v-icon>mdi-format-quote-close</v-icon>
    </p>
    <v-card :class="{ 'pa-3 my-7': true }">
      <v-img
        src="/images/pronostigol-versionInicial.png"
      ></v-img>
    </v-card>
    <p class="text-justify">
      <v-icon>mdi-format-quote-open</v-icon><cite>Sin embargo aprendí un nuevo stack tecnológico durante mi último curso del Grado de Ingeniería Informática - Ingeniería del Software, el cual se caracterizaba por un enfoque mucho más actual. Dado que el desarrollo que llevaba realizado era escaso decidí reiniciar el proyecto con este nuevo stack tecnológico, el cual estaba formado por MongoDB como Base de Datos, NodeJS para el Servidor y AngularJS para el Front, el cual se conoce hoy en día como Stack <a href="http://mean.io" title="Web oficial del Stack MEAN" target="_blank" rel="nofollow">MEAN</a>.</cite><v-icon>mdi-format-quote-close</v-icon>
    </p>
    <v-card :class="{ 'my-7 white--text': true }" color="primary">
      <v-img
        src="/images/pronostigol-versionQuiniela.png"
      ></v-img>
      <v-card-title>
        Versión de la Quiniela
      </v-card-title>
    </v-card>
    <p class="text-justify">
      <v-icon>mdi-format-quote-open</v-icon><cite>Una vez echó a rodar Pronostigol, fueron muchas las peticiones para que diera soporte a otros juegos de <a href="https://www.loteriasyapuestas.es" title="Web oficial de Loterías y Apuestas del Estado" target="_blank" rel="nofollow">Loterías y Apuestas</a> como la <nuxt-link to="/primitiva" class="green--text text--darken-2">Primitiva</nuxt-link> o <nuxt-link to="/euromillones" class="purple--text text--darken-4">Euromillones</nuxt-link>. Dicho y hecho: en apenas unos meses diseñé y desarrollé el resto de módulos dándoles cabida dentro de Pronostigol.</cite><v-icon>mdi-format-quote-close</v-icon>
    </p>
    <v-card :class="{ 'my-7 white--text': true }" color="primary">
      <v-img
        src="/images/pronostigol-versionCompleta.png"
      ></v-img>
      <v-card-title>
        Versión completa de Pronostigol
      </v-card-title>
    </v-card>
    <p class="text-justify">
      <v-icon>mdi-format-quote-open</v-icon><cite>Pero aún faltaba algo que le diera a Pronostigol su sello particular, algo que lo hiciera marcar la diferencia. Me fijé en que <a href="https://www.loteriasyapuestas.es" title="Web oficial de Loterías y Apuestas del Estado" target="_blank">Loterías y Apuestas</a> sólo proporciona 2 formas para obtener los resultados: mediante el buscador o mediante la exportación de datos a Excel. Pensé que lo ideal sería poder consultar una API REST de resultados, y como no encontré ninguna oficial ni de terceros decidí desarrollar y documentar la mía propia para abrirla al público: ya es una realidad y se puede consultar <nuxt-link to="/docs">aquí</nuxt-link>.</cite><v-icon>mdi-format-quote-close</v-icon>
    </p>
    <p class="text-justify">
      <v-icon>mdi-format-quote-open</v-icon><cite>Llegados a este punto ya tenía una web decente y con una funcionalidad interesante. Sin embargo, mi próximo objetivo era posicionar Pronostigol lo mejor posible en la red, y dado que la mayor parte del código se ejecuta en cliente esto hace incompatible un buen posicionamiento para la web. A su vez, con el paso de los años la web se fue quedando obsoleta, tanto a nivel tecnológico (AngularJS es del año 2010) como a nivel de diseño. Por tanto, decidí buscar una nueva tecnología que permitiera mejorar ambas cosas: el posicionamiento a través del renderizado en servidor para buscadores y el diseño de la web con un aspecto más actual. ¿Cuál fue mi elección? Nuxt, framework que permite la renderización en servidor sólo para la pantalla inicial que se consulte, que es lo que hacen los buscadores, y un diseño más actual con Vuetify, un framework de componentes de interfaz de usuario que sigue la guía de estilos de material. Y éste es el resultado obtenido:</cite><v-icon>mdi-format-quote-close</v-icon>
    </p>
    <v-card :class="{ 'my-7 white--text': true }" color="primary">
      <v-img
        src="/images/pronostigol-version2.png"
      ></v-img>
      <v-card-title>
        Versión 2 de Pronostigol
      </v-card-title>
    </v-card>
    <div class="text-right font-italic">Juan Manuel López Pazos</div>
  </v-card-text>
  <v-card-title id="behaviour" :class="{ 'black--text': true }">
    <div class="text-h4">Funcionamiento</div>
  </v-card-title>
  <v-card-text>
    <p class="text-justify">
      Las estadísticas que se muestran en esta web son calculadas de forma instantánea a partir de la información almacenada en la Base de Datos propia de Pronostigol: en ningún momento se hace uso de datos de terceros, ya que los datos de los distintos sorteos son insertados en nuestra propia Base de Datos.
    </p>
  </v-card-text>
  <v-card-title id="responsibility" :class="{ 'black--text': true }">
    <div class="text-h4">Responsabilidad</div>
  </v-card-title>
  <v-card-text>
    <p class="text-justify">
      Pronostigol nació como un proyecto académico, por lo que carece de cualquier tipo de oficialidad. Así pues, no nos hacemos responsables de cualquier dato erróneo que se pueda visualizar en esta aplicación, ya sea por error propio o por error de algún tercero como pueda ser la web oficial de <a href="https://www.loteriasyapuestas.es" title="Web oficial de Loterías y Apuestas del Estado" target="_blank">Loterías y Apuestas</a>.
    </p>
  </v-card-text>
  <v-card-title id="financing" :class="{ 'black--text': true }">
    <div class="text-h4">Financiación</div>
  </v-card-title>
  <v-card-text>
    <p class="text-justify">
      Dado que Pronostigol es una aplicación web totalmente gratuita, pero conlleva una serie de costes como el hosting y el dominio, hacemos uso de Google AdSense, herramienta con la que obtenemos una pequeña cantidad de ingresos relacionada con la publicidad mostrada en diversas páginas de la web. Es por ello por lo que no admitimos el uso de ningún tipo de plugin o herramienta que bloquee dichos anuncios: en ese caso la web no estará operativa.
    </p>
  </v-card-text>
</v-card>

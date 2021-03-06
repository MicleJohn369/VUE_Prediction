export default {
  MENU: {
    HOME: {
      TEXT: 'Inicio',
    },
    QUINIELA: {
      TEXT: 'Quiniela',
      PROBABILITIES: {
        TEXT: 'Probabilidades',
      },
      TICKETS: {
        TEXT: 'Sorteos',
      },
      STATS: {
        TEXT: 'Estadísticas',
      },
    },
    BONOLOTO: {
      TEXT: 'Bonoloto',
      TICKETS: {
        TEXT: 'Sorteos',
      },
    },
    PRIMITIVA: {
      TEXT: 'Primitiva',
    },
    GORDO: {
      TEXT: 'El Gordo',
    },
    EUROMILLONES: {
      TEXT: 'Euromillones',
    },
  },
  FOOTER: {
    PRIVACY: {
      TEXT: 'Privacidad y cookies',
    },
    FAQ: {
      TEXT: 'Preguntas frecuentes',
    },
    ABOUT: {
      TEXT: 'Acerca de',
    },
    API_DOC: {
      TEXT: 'Documentación de API Rest',
    },
    QUINIELA: {
      TEXT: 'Quiniela',
    },
    BONOLOTO: {
      TEXT: 'Bonoloto',
    },
    PRIMITIVA: {
      TEXT: 'Primitiva',
    },
    GORDO: {
      TEXT: 'El Gordo',
    },
    EUROMILLONES: {
      TEXT: 'Euromillones',
    },
  },
  BREADCRUMBS: {
    HOME: {
      TEXT: 'Inicio',
    },
    QUINIELA: {
      TEXT: 'Quiniela',
      PROBABILITIES: {
        TEXT: 'Probabilidades',
      },
      TICKETS: {
        TEXT: 'Sorteos',
        TICKET: {
          TEXT: '{season} - J{day}',
        },
      },
      STATS: {
        TEXT: 'Estadísticas',
      },
    },
  },
  VIEWS: {
    HOME: {
      TITLE: 'Inicio',
      WELCOME: {
        TEXT: '<p>En esta aplicación web encontrarás multitud de estadísticas asociadas a diferentes loterías de España. Actualmente damos soporte a La Quiniela, Bonoloto, Primitiva, El Gordo de la Primitiva y Euromillones. Podrás consultar todo tipo de estadísticas que te facilitarán la tarea de hacer tus apuestas y con mayores garantías de éxito.</p>',
      },
      GAMES: {
        QUINIELA: {
          TEXT: 'Quiniela',
        },
        BONOLOTO: {
          TEXT: 'Bonoloto',
        },
        PRIMITIVA: {
          TEXT: 'Primitiva',
        },
        GORDO: {
          TEXT: 'El Gordo',
        },
        EUROMILLONES: {
          TEXT: 'Euromillones',
        },
      },
      RECOMMENDED_WEBS: {
        TITLE: 'Páginas web recomendadas',
        TEXT: 'A continuación indicamos algunas webs que, desde Pronostigol, consideramos interesantes y relacionadas con la temática que aquí se trata: las estadísticas de sorteos de SELAE.',
      },
      APP_INFO: {
        LAST_UPDATE: {
          TEXT: 'Última actualización',
        },
        CURRENT_VERSION: {
          TEXT: 'Versión actual',
        },
      },
    },
    QUINIELA: {
      TITLE: 'Quiniela',
      TOC: {
        TITLE: {
          TEXT: 'Índice de contenidos',
        },
        INTRODUCTION: {
          TEXT: 'Introducción',
        },
        PROBABILITIES: {
          TEXT: 'Probabilidades',
          TEN_RESULTS: {
            TEXT: 'Probabilidad de acertar 10 partidos en la Quiniela',
          },
          ELEVEN_RESULTS: {
            TEXT: 'Probabilidad de acertar 11 partidos en la Quiniela',
          },
          TWELVE_RESULTS: {
            TEXT: 'Probabilidad de acertar 12 partidos en la Quiniela',
          },
          THIRTEEN_RESULTS: {
            TEXT: 'Probabilidad de acertar 13 partidos en la Quiniela',
          },
          FOURTEEN_RESULTS: {
            TEXT: 'Probabilidad de acertar 14 partidos en la Quiniela',
          },
          SPECIAL_RESULT: {
            TEXT: 'Probabilidad de acertar el pleno al quince de la Quiniela',
          },
          FOURTEEN_RESULTS_AND_SPECIAL_RESULT: {
            TEXT: 'Probabilidad de acertar la Quiniela',
          },
          SUMMARY: {
            TEXT: 'Resumen de probabilidades de la Quiniela por categoría',
          },
        },
        SOURCES: {
          TEXT: 'Fuentes',
        },
      },
      TICKETS: {
        TITLE: 'Histórico de sorteos de la Quiniela',
        INTRO_TEXT: 'Aquí encontrarás un amplio histórico en el que poder buscar los sorteos históricos de la Quiniela. Si lo necesitas tienes la posibilidad de filtrar por una temporada en concreto, así como de paginar los resultados.',
        FILTERS: {
          SEASON: {
            LABEL: 'Temporada',
            ERRORS: {
              REQUIRED: 'La temporada es obligatoria',
            },
          },
          SEARCH: {
            TEXT: 'Buscar',
          },
        },
        TABLE: {
          DAY: {
            LABEL: 'Jornada',
          },
          MODALITY: {
            LABEL: 'Modalidad',
          },
          DATE: {
            LABEL: 'Fecha',
          },
          ACTIONS: {
            LABEL: 'Acciones',
            SEE: {
              TOOLTIP: 'Ver detalle de ticket',
            },
          },
        },
        TICKET: {
          TITLE: 'Detalle de sorteo',
          INFO: {
            SEASON: 'Temporada',
            DATE: 'Fecha',
            DAY: 'Jornada',
          },
          TABLE: {
            ROW: {
              LABEL: 'Fila',
            },
            COMPETITION: {
              LABEL: 'Competición',
            },
            DAY: {
              LABEL: 'Jornada',
            },
            FOOTBALL_MATCH: {
              LABEL: 'Partido',
            },
            RESULT: {
              LABEL: 'Resultado',
            },
          },
        },
      },
      STATS: {
        TITLE: 'Estadísticas de la Quiniela',
        INTRO_TEXT: 'Ésta es, casi con total seguridad, la funcionalidad más importante de nuestra sección de la Quiniela. Aquí podrás consultar una gran variedad de estadísticas para saber cuáles son las combinaciones más repetidas, los datos de un equipo como local o visitante, los resultados más repetidos según la fila y otras muchas cosas.',
        TABS: {
          CUSTOM: 'Personalizadas',
          STANDARD: 'Estándar',
        },
        CUSTOM_STATS_FORM: {
          FILTERS: {
            SEASON: {
              LABEL: 'Temporada',
            },
            COMPETITION: {
              LABEL: 'Competición',
            },
            SEARCH_BY: {
              LABEL: 'Buscar por:',
              OPTIONS: {
                GENERAL: {
                  LABEL: 'General',
                },
                TEAM: {
                  LABEL: 'Equipo',
                },
                FOOTBALL_MATCH: {
                  LABEL: 'Partido',
                },
              },
            },
            TEAM: {
              LABEL: 'Equipo',
            },
            LOCAL_TEAM: {
              LABEL: 'Equipo local',
            },
            VISITOR_TEAM: {
              LABEL: 'Equipo visitante',
            },
            SEARCH: {
              TEXT: 'Buscar',
            },
          },
        },
      },
    },
  },
};

<template>
  <div>
    <div
      v-if="loading"
      class="text-center"
    >
      <v-progress-circular
        indeterminate
        color="primary"
      />
    </div>
    <div
      v-if="!loading"
    >
      <v-simple-table>
        <template
          v-slot:default
        >
          <thead>
            <tr>
              <th class="text-center" v-text="rowLabel" />
              <th class="text-center" v-text="localWinsLabel" />
              <th class="text-center" v-text="drawsLabel" />
              <th class="text-center" v-text="visitorWinsLabel" />
              <th class="text-center" v-text="footballMatchesCountLabel" />
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in stats.filas"
              :key="row.fila"
            >
              <td class="text-center" v-text="row.fila" />
              <td class="text-center">
                <v-chip
                  :color="getCellColor(
                    row.victoriasLocales,
                    [
                      row.empates,
                      row.victoriasVisitantes,
                    ]
                  )"
                >
                  {{ row.victoriasLocales }}
                </v-chip>
              </td>
              <td class="text-center">
                <v-chip
                  :color="getCellColor(
                    row.empates,
                    [
                      row.victoriasLocales,
                      row.victoriasVisitantes,
                    ]
                  )"
                >
                  {{ row.empates }}
                </v-chip>
              </td>
              <td class="text-center">
                <v-chip
                  :color="getCellColor(
                    row.victoriasVisitantes,
                    [
                      row.victoriasLocales,
                      row.empates,
                    ]
                  )"
                >
                  {{ row.victoriasVisitantes }}
                </v-chip>
              </td>
              <td class="text-center" v-text="getRowFootballMatchesCount(row)" />
            </tr>
            <tr>
              <td class="text-center" v-text="totalLabel" />
              <td class="text-center">
                <v-chip
                  :color="getCellColor(
                    localWinsCount,
                    [
                      drawsCount,
                      visitorWinsCount,
                    ]
                  )"
                >
                  {{ localWinsCount }}
                </v-chip>
              </td>
              <td class="text-center">
                <v-chip
                  :color="getCellColor(
                    drawsCount,
                    [
                      localWinsCount,
                      visitorWinsCount,
                    ]
                  )"
                >
                  {{ drawsCount }}
                </v-chip>
              </td>
              <td class="text-center">
                <v-chip
                  :color="getCellColor(
                    visitorWinsCount,
                    [
                      localWinsCount,
                      drawsCount,
                    ]
                  )"
                >
                  {{ visitorWinsCount }}
                </v-chip>
              </td>
              <td class="text-center" v-text="footbalMatchesCount" />
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-alert
        border="left"
        colored-border
        type="info"
        elevation="3"
        class="mt-5"
      >
        {{ specialResultsInfoMessage }}
      </v-alert>
      <v-simple-table
        class="special-results-table"
      >
        <template
          v-slot:default
        >
          <thead>
            <tr>
              <th class="text-center" v-text="rowLabel" />
              <th
                v-for="specialResult in specialResults"
                :key="specialResult"
                class="text-center"
              >
                {{ specialResult }}
              </th>
              <th class="text-center" v-text="footballMatchesCountLabel" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                v-text="15"
              />
              <td
                v-for="(specialResult, index) in specialResults"
                :key="index"
                class="text-center"
              >
                <v-chip
                  :color="getSpecialResultCellColor({
                    result: specialResult,
                    occurrences: stats.plenosRenovados[specialResult]
                  }, stats.plenosRenovados)"
                >
                  {{ stats.plenosRenovados[specialResult] }}
                </v-chip>
              </td>
              <td class="text-center" v-text="specialResultsFootballMatchesCount" />
            </tr>
            <tr>
              <td
                class="text-center"
                :colspan="specialResults.length + 1"
                v-text="totalLabel"
              />
              <td
                class="text-center"
                v-text="footbalMatchesCount + specialResultsFootballMatchesCount"
              />
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import utils from '@/utils';

export default {
  name: 'CustomStatsTable',
  mixins: [],
  props: {
    stats: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      rowLabel: this.$t('VIEWS.QUINIELA.STATS.GENERAL_STATS.TABLE.ROW.LABEL'),
      localWinsLabel: this.$t('VIEWS.QUINIELA.STATS.GENERAL_STATS.TABLE.LOCAL_WINS.LABEL'),
      drawsLabel: this.$t('VIEWS.QUINIELA.STATS.GENERAL_STATS.TABLE.DRAWS.LABEL'),
      visitorWinsLabel: this.$t('VIEWS.QUINIELA.STATS.GENERAL_STATS.TABLE.VISITOR_WINS.LABEL'),
      footballMatchesCountLabel: this.$t('VIEWS.QUINIELA.STATS.GENERAL_STATS.TABLE.FOOTBALL_MATCHES_COUNT.LABEL'),
      totalLabel: this.$t('COMMON.TOTAL'),
      specialResultsInfoMessage: this.$t('VIEWS.QUINIELA.STATS.GENERAL_STATS.SPECIAL_RESULTS_TABLE.INFO_MESSAGE'),
    };
  },
  computed: {
    ...mapState('quiniela', {
      loading: 'loading',
      specialResults: 'specialResults',
    }),
    localWinsCount() {
      return this.stats.filas.reduce((a, b) => a + b.victoriasLocales, 0);
    },
    drawsCount() {
      return this.stats.filas.reduce((a, b) => a + b.empates, 0);
    },
    visitorWinsCount() {
      return this.stats.filas.reduce((a, b) => a + b.victoriasVisitantes, 0);
    },
    footbalMatchesCount() {
      return this.localWinsCount + this.drawsCount + this.visitorWinsCount;
    },
    specialResultsFootballMatchesCount() {
      let res = 0;

      Object.keys(this.stats.plenosRenovados).forEach((item) => {
        if (this.specialResults.includes(item)) {
          res += this.stats.plenosRenovados[item];
        }
      });

      return res;
    },
  },
  methods: {
    getRowFootballMatchesCount(row) {
      return row.victoriasLocales + row.empates + row.victoriasVisitantes;
    },
    getCellColor(cellOccurrences, otherOccurrences) {
      if (cellOccurrences === 0) {
        return '';
      }

      const isHigherUnique = otherOccurrences
        .every((value) => cellOccurrences > value);

      if (isHigherUnique) {
        return 'success';
      }

      const isHigherShared = otherOccurrences
        .every((value) => cellOccurrences >= value);

      if (isHigherShared) {
        return 'warning';
      }

      return 'error';
    },
    getSpecialResultCellColor(cell, allCells) {
      const { result } = cell;
      const { occurrences } = cell;

      if (occurrences === 0) {
        return '';
      }

      const plenosRenovados = utils.cloneObject(allCells);
      delete plenosRenovados[result];

      const values = Object.values(plenosRenovados);

      const isHigherUnique = values
        .every((value) => occurrences > value);

      if (isHigherUnique) {
        return 'success';
      }

      const isHigherShared = values
        .every((value) => occurrences >= value);

      if (isHigherShared) {
        return 'warning';
      }

      return 'error';
    },
  },
};
</script>

<style lang="scss" scoped>
.special-results-table{
  thead{
    tr{
      th{
        white-space: nowrap;
      }
    }
  }
}
</style>

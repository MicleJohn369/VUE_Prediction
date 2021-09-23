<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-breadcrumbs :items="items">
        <template #item="{ item }">
          <v-breadcrumbs-item
            :to="item.to"
            :disabled="item.disabled"
            nuxt
          >
            {{ item.text.toUpperCase() }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
      <div class="text-center text-h3 my-3 pb-4 purple--text text--darken-4">
        Euromillones
      </div>
      <ScrollButton />
      <v-card
        id="main-card"
        elevation="2"
      >
        <v-card-text>
          <v-row>
            <v-col
              sm="8"
              cols="12"
              offset-sm="2"
            >
              <v-card
                id="toc-container"
              >
                <v-card-title>
                  <p id="toc-title">
                    {{ tocTitleText }}
                  </p>
                </v-card-title>
                <v-card-text>
                  <ul id="toc-list">
                    <li
                      v-for="link of doc.toc"
                      :key="link.id"
                      :class="{
                        'toc2': link.depth === 2,
                        'toc3': link.depth === 3,
                        'toc4': link.depth === 4,
                      }"
                    >
                      <NuxtLink :to="`#${link.id}`">
                        {{ link.text }}
                      </NuxtLink>
                    </li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <nuxt-content :document="doc" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';

import utils from '@/utils';

import ScrollButton from '@/components/ScrollButton.vue';
import Advertisement from '@/components/Advertisement.vue';

export default {
  name: 'Euromillones',
  components: {
    ScrollButton,
    // eslint-disable-next-line vue/no-unused-components
    Advertisement,
  },
  nuxtI18n: {
    paths: {
      es: '/euromillones',
    },
  },
  data() {
    return {
      items: [
        {
          text: this.$t('BREADCRUMBS.HOME.TEXT'),
          disabled: false,
          to: this.localePath({
            name: 'index',
          }),
        },
        {
          text: this.$t('BREADCRUMBS.EUROMILLONES.TEXT'),
          disabled: true,
        }, {
          text: this.$t('BREADCRUMBS.EUROMILLONES.PROBABILITIES.TEXT'),
          disabled: true,
        },
      ],
      tocTitleText: this.$t('VIEWS.EUROMILLONES.TOC.TITLE.TEXT'),
    };
  },
  async fetch() {
    return Promise.all([
      this.$store.dispatch('posts/getBySlug', {
        slug: 'euromillones',
      }),
    ]);
  },
  head() {
    return utils.getCommonMetas(this.doc);
  },
  computed: {
    ...mapState('posts', {
      doc: 'current',
    }),
  },
  destroyed() {
    this.$store.dispatch('posts/destroyCurrent');
  },
};
</script>

<style lang="scss" scoped>
#main-card{
  padding: $content-padding-mobile;

  @include for-tablet-up{
    padding: $content-padding-tablet;
  }

  #toc-container{
    background: #F8F8F8;

    @include for-tablet-up{
      padding: 0 30px 0;
    }

    #toc-title{
      text-align: center;
      font-weight: 700;
    }

    #toc-list{
      padding: 0;

      .toc2, .toc3, .toc4{
        list-style: none;
        line-height: 1.8em;

        a{
          &:hover{
            text-decoration: none;
            color: $color-text-orange;
          }
        }
      }

      .toc3{
        padding-left: 15px;

        @include for-tablet-up{
          padding-left: 30px;
        }
      }

      .toc4{
        padding-left: 30px;

        @include for-tablet-up{
          padding-left: 60px;
        }
      }
    }
  }

  ::v-deep .nuxt-content{
    h2, h3{
      color: $color-text-purple !important;
    }

    h2{
      padding: 16px 0 16px;
    }

    h3{
      padding: 8px 0 8px;
    }

    p{
      line-height: 1.6;
      text-align: justify;

      & + h3{
        margin-top: 2em;
      }
    }

    h2, h3, h4{
      &>a:before{
        content: "#";
        --text-opacity: 1;
        color: $color-text-purple;
        font-weight: 400;
        margin-left: -1.25rem;
        padding-right: .25rem;
        position: absolute;
        opacity: 1;
      }

      &:not(:first-of-type){
        margin-top: 50px;
      }
    }

    ol, ul {
      li{
        margin: 0 0 3px 0;
      }
    }

    .post-image-container{
      text-align: center;
      margin: 50px 0;

      .post-image-caption {
        color: $color-text-gray;
        text-align: justify;
      }
    }

    q{
      font-style: italic;
      color: $color-text-gray;
    }

    .static-table {
      display: block;
      width: 100%;
      overflow-x: auto;

      table{
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;

        td, th {
          border: 1px solid #ddd;
          padding: 10px;
        }

        tr:nth-child(even){
          background-color: #f2f2f2;
        }

        tr:hover {
          background-color: #ddd;
        }

        th {
          padding-top: 12px;
          padding-bottom: 12px;
          background-color: $color-text-purple;
          color: white;
          min-width: 200px;
        }
      }
    }
  }
}
</style>

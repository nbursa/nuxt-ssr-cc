import { Component, Vue } from 'vue-property-decorator'
import translations from '../lang'

@Component
export default class TranslateMixin extends Vue {
  private lang: string = this.$store.state.language.lang
  private languages: [] = this.$store.state.language.languages
  private translations: object[] = translations

  $translate(str: string) {
    const [module, translation] = str.split('.')
    const index = this.languages.indexOf(this.lang)
    const t = this.translations[index]
    return t[module][translation]
  }
}

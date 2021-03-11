import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'language',
  stateFactory: true,
  namespaced: true,
})
export default class Language extends VuexModule {
  lang = 'en'
  languages = ['sr', 'en']

  @Mutation
  setLanguage(lang: string) {
    this.lang = lang
  }

  get languageValue() {
    return this.lang
  }
}
